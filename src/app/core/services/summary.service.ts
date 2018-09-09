import { Injectable } from "@angular/core";
import { RepositoryService } from "./contracts/repository.service";
import { Summary } from "../models/summary";
import { BaseSpecification } from "../specifications/base/base.specification";
import { Observable } from "rxjs/Observable";
import { AngularFirestore } from "angularfire2/firestore";
import { CandidatesService } from "./candidates.service";

@Injectable()
export class SummaryService implements RepositoryService<Summary>{

    constructor(private af: AngularFirestore, private candidates: CandidatesService) { }

    find(specification?: BaseSpecification): Observable<Summary[]> {
        return this.candidates.find()
        .flatMap( candidateList => {
            return this.af.collection('summary').snapshotChanges()
            .map( summaryResults => {
                return candidateList.map( candidate => {
                    var summaryForCandidate = summaryResults.find( summary => summary.payload.doc.id == candidate.id );
                    return new Summary({
                        id: candidate.id,
                        candidate,
                        quantity: summaryForCandidate ? summaryForCandidate.payload.doc.data().votes : 0
                    }
                )});
            })
        })
        .catch( err => {
            console.error(err);
            return []
        });
    }

    findOne(specification?: BaseSpecification): Observable<Summary> {
        throw new Error("Method not implemented.");
    }

    add(T: any): Observable<Summary> {
        throw new Error("Method not implemented.");
    }

    update(T: any): Observable<Summary> {
        throw new Error("Method not implemented.");
    }

    remove(T: any): Observable<Summary> {
        throw new Error("Method not implemented.");
    }
    
}