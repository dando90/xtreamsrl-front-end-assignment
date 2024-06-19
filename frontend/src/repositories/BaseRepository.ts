import { AxiosInstance } from "axios";
import axiosClient from "../axiosClient";

export interface ApiResponse<TData> {
  data: TData;
  status: number;
  message: string;
}

export interface SearchParams {
  cuisineId: string;
  dietId: string;
  difficultyId: string;
  q: string;
}

export interface IBaseRepository<TData, TStore> {
  index(
    page: number,
    toExpand?: string[],
    toEmbed?: string[],
    params?: SearchParams
  ): Promise<ApiResponse<TData[]>>;
  show(
    id: string,
    toExpand?: string[],
    toEmbed?: string[]
  ): Promise<ApiResponse<TData>>;
  store(item: TStore): Promise<ApiResponse<TData>>;
  destroy(id: string): Promise<ApiResponse<TData>>;
}

export abstract class BaseRepository<TData, TStore>
  implements IBaseRepository<TData, TStore>
{
  //TODO add try/catch to handle errors
  protected collection: string | undefined;
  protected axiosClient: AxiosInstance = axiosClient;
  protected forPage: number | undefined;

  public async index(
    page?: number,
    toExpand?: string[],
    toEmbed?: string[],
    params?: SearchParams
  ): Promise<ApiResponse<TData[]>> {
    const filteredParams = params
      ? Object.fromEntries(
          Object.entries(params).filter(([_, value]) => value !== "")
        )
      : {};
    const response = await this.axiosClient.get(`${this.collection}/`, {
      params: {
        _page: page,
        _limit: this.forPage || null,
        _expand: toExpand,
        _embed: toEmbed,
        ...filteredParams,
      },
    });
    return {
      data: response.data,
      status: response.status,
      message: `${this.collectionPluralName()} retrieved successfully`,
    };
  }

  public async show(
    id: string,
    toExpand?: string[],
    toEmbed?: string[]
  ): Promise<ApiResponse<TData>> {
    const response = await this.axiosClient.get(`${this.collection}/${id}`, {
      params: {
        _expand: toExpand,
        _embed: toEmbed,
      },
    });

    return {
      data: response.data,
      status: response.status,
      message: `${this.collectionSingularName()} retrieved successfully`,
    };
  }

  public async store(item: TStore): Promise<ApiResponse<TData>> {
    const response = await this.axiosClient.post(`${this.collection}/`, item);
    return {
      data: response.data,
      status: response.status,
      message: `${this.collectionSingularName()} created successfully`,
    };
  }

  public async destroy(id: string): Promise<ApiResponse<TData>> {
    const response = await this.axiosClient.delete(`${this.collection}/${id}`);
    return {
      data: response.data,
      status: response.status,
      message: `${this.collectionSingularName()} #${id} deleted successfully`,
    };
  }

  protected collectionPluralName(): string {
    const collectionName = this.collection;
    return (
      `${
        (collectionName?.charAt(0).toUpperCase() || "") +
        collectionName?.slice(1)
      }` || ""
    );
  }

  protected collectionSingularName(): string {
    return `${this.collectionPluralName().slice(0, -1)}`;
  }
}
