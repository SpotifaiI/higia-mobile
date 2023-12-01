import axios, { AxiosInstance } from 'axios';

export type HttpInstance = AxiosInstance;

export class Http {
  public domain: string;
  public port: number;
  public baseUrl: string;

  constructor(resource?: string) {
    this.port = 5103;
    this.domain = 'http://192.168.0.1';

    this.baseUrl = `${this.domain}:${this.port}/api`;

    if (resource) {
      this.baseUrl = `${this.baseUrl}/${resource}`;
    }

    console.log(this.baseUrl);
  }

  create(): HttpInstance {
    return axios.create({
      baseURL: this.baseUrl
    });
  }
}