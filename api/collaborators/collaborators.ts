import { Http, HttpInstance } from '../../helpers/http';
import { Collaborator } from './collaborators.model';

export class CollaboratorsAPI {
  private http: HttpInstance;

  constructor() {
    this.http = new Http('collaborators').create();
  }

  async getCollaborators(): Promise<Collaborator[]> {
    // const { data } = await this.http.get<DbCollaborator[]>('/');

    const data = [
      {
        id: "07813c3f-e2b8-436a-be2e-bce50315390d",
        name: "colaborador dois",
        email: "colaborador.dois@example.com",
        birthday: "2002-02-02T00:00:00",
        phoneNumber: "1199999999"
      },
      {
        id: "2e168ac7-8fae-441d-bd63-9c37c0987e1d",
        name: "colaborador três",
        email: "colaborador.tres@example.com",
        birthday: "2003-03-03T00:00:00",
        phoneNumber: "1199999999"
      },
      {
        id: "38e17159-8641-4c08-8cab-8b73fe27b03c",
        name: "colaborador um",
        email: "colaborador.um@example.com",
        birthday: "2001-01-01T00:00:00",
        phoneNumber: "1199999999"
      }
    ];

    const collaborators = data.map(({
      id,
      name,
      email,
      birthday,
      phoneNumber
    }) => new Collaborator({
      id,
      birthday,
      email,
      name,
      phoneNumber
    }));

    return collaborators;
  }

  async collaboratorLogin(email: string): Promise<Collaborator | null> {
    const collaborators = await this.getCollaborators();
    const filteredCollaborators = collaborators.filter(
      collaborator => collaborator.email == email
    );

    console.log(filteredCollaborators);

    let collaborator = null;

    if (filteredCollaborators.length > 0) {
      collaborator = filteredCollaborators[0];
    }

    return collaborator;
  }
}