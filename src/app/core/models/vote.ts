import { Base } from "./base/base.model";
import { User } from "./user";
import { Candidate } from "./candidate";

export class Vote extends Base<Vote>{
 
    user: User;
    candidate: Candidate;
    
}