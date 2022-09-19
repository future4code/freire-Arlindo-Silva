export class User {
  constructor(id: string, name: string, password: string, role: UserRole) {}
}

export enum UserRole {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}
