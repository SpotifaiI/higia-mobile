import { Http, HttpInstance } from '../../services/http';

export class TasksAPI {
  private http: HttpInstance
  private xhr: Http;

  constructor() {
    this.xhr = new Http('tasks');
    this.http = this.xhr.client;
  }

  async getTasks() {
    try {
      const { data } = await this.http.get('/');
    } catch (error) {
      if (this.xhr.isError(error)) {

      }
    }
  }
}