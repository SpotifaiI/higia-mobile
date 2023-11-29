import axios, { AxiosInstance } from 'axios';

import { BASE_URL } from '../global/constants/api';

export class Http {
  private client: AxiosInstance;

  constructor(resource: string) {
    this.client = axios.create({
      baseURL: `${BASE_URL}/${resource}`
    });
  }
}