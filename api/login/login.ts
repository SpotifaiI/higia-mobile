import { Http, HttpInstance } from '../../services/http';

export class LoginAPI {
  private http: HttpInstance
  private xhr: Http;

  constructor() {
    this.xhr = new Http('collaborators');
    this.http = this.xhr.client;
  }

  async getLogin() {
    try {
      const { data } = await this.http.get('/');
    } catch (error) {
      if (this.xhr.isError(error)) {

      }
    }
  }
}