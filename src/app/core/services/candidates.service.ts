import { RepositoryService } from "./contracts/repository.service";
import { Candidate } from "../models/candidate";
import { BaseSpecification } from "../specifications/base/base.specification";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { Image } from "../models/helpers/image";

@Injectable()
export class CandidatesService implements RepositoryService<Candidate>{

    constructor( private af: AngularFirestore ){

    }

    find(specification?: BaseSpecification): Observable<Candidate[]> {
        return this.af.collection('candidates').snapshotChanges()
        .map( candidateResults => {
            return candidateResults.map( candidateDoc => {
                var candidateData = candidateDoc.payload.doc.data();
                return new Candidate({
                    id: candidateDoc.payload.doc.id,
                    name: candidateData.name,
                    image: new Image({ fileUrl: candidateData.image })
                })
            })
        }).catch( err => {
            console.error(err);
            return [];
        });
    }

    findOne(specification?: BaseSpecification): Observable<Candidate> {
        throw new Error("Method not implemented.");
    }

    add(T: any): Observable<Candidate> {
        throw new Error("Method not implemented.");
    }

    update(T: any): Observable<Candidate> {
        throw new Error("Method not implemented.");
    }
    
    remove(T: any): Observable<Candidate> {
        throw new Error("Method not implemented.");
    }
    
}