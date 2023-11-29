import axios, { AxiosInstance } from 'axios';

import { BASE_URL } from '../global/constants/api';

export type HttpInstance = AxiosInstance;

export class Http {
  public client: AxiosInstance;

  constructor(resource: string) {
    this.client = axios.create({
      baseURL: `${BASE_URL}/${resource}`
    });
  }

  public isError(payload: any) {
    return axios.isAxiosError(payload);
  }
}