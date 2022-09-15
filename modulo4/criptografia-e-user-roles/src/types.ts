import { UserRole } from "./entities/User";

export type AuthenticationData = {
  id: string;
  role: UserRole;
};
