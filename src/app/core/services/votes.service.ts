import { Injectable } from '@angular/core';
import { RepositoryService } from './contracts/repository.service';
import { Vote } from '../models/vote';
import { BaseSpecification } from '../specifications/base/base.specification';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { CandidatesService } from './candidates.service';
import { UsersService } from './users.service';
import { User } from '../models/user';

@Injectable()
export class VotesService implements RepositoryService<Vote> {

  constructor(private af: AngularFirestore, private users: UsersService, private candidates: CandidatesService) { }

  find(specification?: BaseSpecification): Observable<Vote[]> {
    return this.candidates.find().first()
    .flatMap( candidateList => {
      return this.af.collection('votes', ref => ref.orderBy('created','desc')).snapshotChanges()
      .map( votesSnaps => {
        return votesSnaps.map( snap => {
          var voteData = snap.payload.doc.data();
          return new Vote({
            id: snap.payload.doc.id,
            user: new User({ dni: snap.payload.doc.id }),
            candidate: candidateList.find( c => c.id == voteData.candidateId ),
            created: Date.parseFull( voteData.created )
          })
        })
      })
    }).catch( err => {
      console.error(err);
      return [];
    })
  }

  findOne(specification?: BaseSpecification): Observable<Vote> {
    throw new Error("Method not implemented.");
  }

  add(T: any): Observable<Vote> {
    throw new Error("Method not implemented.");
  }

  update(T: any): Observable<Vote> {
    throw new Error("Method not implemented.");
  }

  remove(T: any): Observable<Vote> {
    throw new Error("Method not implemented.");
  }

}
