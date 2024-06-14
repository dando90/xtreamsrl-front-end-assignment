import { AxiosInstance } from "axios";
import axiosClient from "../axiosClient";

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface IBaseRepository<T> {
  index(toExpand?: string[]): Promise<ApiResponse<T[]>>;
  show(id: any): Promise<ApiResponse<T>>;
  store(item: T): Promise<ApiResponse<T>>;
}

export abstract class BaseRepository<T> implements IBaseRepository<T> {
  //TODO add try/catch to handle errors
  protected collection: string | undefined;
  protected axiosClient: AxiosInstance = axiosClient;

  public async index(toExpand?: string[]): Promise<ApiResponse<T[]>> {
    const response = await this.axiosClient.get(`${this.collection}/`, {
      params: {
        _expand: toExpand,
      },
    });
    return {
      data: response.data,
      status: response.status,
      message: "Users retrieved successfully",
    };
  }

  public async show(id: string): Promise<ApiResponse<T>> {
    const response = await this.axiosClient.get(`${this.collection}/${id}`);
    return {
      data: response.data,
      status: response.status,
      message: "User retrieved successfully",
    };
  }

  public async store(item: T): Promise<ApiResponse<T>> {
    const response = await this.axiosClient.post(`${this.collection}/`, item);
    return {
      data: response.data,
      status: response.status,
      message: "User created successfully",
    };
  }
}
