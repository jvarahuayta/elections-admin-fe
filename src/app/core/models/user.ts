import { Base } from "./base/base.model";

export class User extends Base<User>{

    name: string;
    email: string;
    dni: string;
    roles: string[];

}