export type DbCollaborator = {
  id: string;
  name: string;
  email: string;
  birthday: string;
  phoneNumber: string;
  password: string;
}

export class Collaborator {
  public id: string;
  public name: string;
  public email: string;
  public birthday: Date;
  public phoneNumber: string;
  public password: string;

  constructor({
    id,
    email,
    birthday,
    name,
    phoneNumber,
    password
  }: DbCollaborator) {
    this.id = id;
    this.email = email;
    this.birthday = new Date(birthday.replaceAll('/', '-'));
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.password = password;
  }
}