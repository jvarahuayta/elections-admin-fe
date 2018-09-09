import { Candidate } from "./candidate";
import { Base } from "./base/base.model";

export class Summary extends Base<Summary>{
    candidate: Candidate;
    quantity: number;

    quantityPercentage(total: number){
        return (this.quantity || 0)/total * 100;
    }
}