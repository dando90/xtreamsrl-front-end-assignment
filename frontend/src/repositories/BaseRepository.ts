import { AxiosInstance } from "axios";
import axiosClient from "../axiosClient";

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface IBaseRepository<T> {
  index(page: number, toExpand?: string[]): Promise<ApiResponse<T[]>>;
  show(
    id: string,
    toExpand?: string[],
    toEmbed?: string[]
  ): Promise<ApiResponse<T>>;
  store(item: T): Promise<ApiResponse<T>>;
}

export abstract class BaseRepository<T> implements IBaseRepository<T> {
  //TODO add try/catch to handle errors
  protected collection: string | undefined;
  protected axiosClient: AxiosInstance = axiosClient;

  public async index(
    page: number,
    toExpand?: string[]
  ): Promise<ApiResponse<T[]>> {
    const response = await this.axiosClient.get(`${this.collection}/`, {
      params: {
        _page: page,
        _limit: 5,
        _expand: toExpand,
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
  ): Promise<ApiResponse<T>> {
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

  public async store(item: T): Promise<ApiResponse<T>> {
    const response = await this.axiosClient.post(`${this.collection}/`, item);
    return {
      data: response.data,
      status: response.status,
      message: `${this.collectionSingularName()} created successfully`,
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
