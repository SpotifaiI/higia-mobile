import { Http, HttpInstance } from '../../helpers/http';
import { Collaborator } from './collaborators.model';
import { data } from './collaborators.store';

export class CollaboratorsAPI {
  private http: HttpInstance;

  constructor() {
    this.http = new Http('collaborators').create();
  }

  async getCollaborators(): Promise<Collaborator[]> {
    // const { data } = await this.http.get<DbCollaborator[]>('/');

    const collaborators = data.map(({
      id,
      name,
      email,
      birthday,
      phoneNumber,
      password
    }) => new Collaborator({
      id,
      birthday,
      email,
      name,
      phoneNumber,
      password
    }));

    return collaborators;
  }

  async collaboratorLogin(
    email: string, password: string
  ): Promise<Collaborator | null> {
    const collaborators = await this.getCollaborators();
    const filteredCollaborators = collaborators.filter(
      collaborator =>
        collaborator.email == email &&
        collaborator.password == password
    );

    let collaborator = null;

    if (filteredCollaborators.length > 0) {
      collaborator = filteredCollaborators[0];
    }

    return collaborator;
  }
}