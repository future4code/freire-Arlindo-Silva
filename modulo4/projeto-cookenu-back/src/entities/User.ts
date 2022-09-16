export interface PublicDataUser {
  id: string;
  name: string;
  email: string;
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string
  ) {}
  static toUserModel(data: any): User | null {
    if (data) {
      return new User(data.id, data.name, data.email, data.password);
    } else {
      return null;
    }
  }
  public toPublicModel(): PublicDataUser {
    const user: PublicDataUser = {
      id: this.id,
      name: this.name,
      email: this.email,
    };
    return user;
  }
  public getId() {
    return this.id;
  }
  public getName() {
    return this.name;
  }
  public getEmail() {
    return this.email;
  }
  public getPassword() {
    return this.password;
  }
}
