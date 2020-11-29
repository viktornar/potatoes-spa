import { Role } from './role.enum';

export class User {
    username: string;
    role?: Role;
    token?: string;
}
