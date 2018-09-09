import { Component, OnInit } from '@angular/core';
import { VotesService } from '../../core/services/votes.service';
import { Vote } from '../../core/models/vote';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.scss']
})
export class VoteListComponent implements OnInit {

  voteList: Vote[];
  votesQuantity: number;
  displayedColumns = ['dni', 'candidate', 'created'];

  constructor(private votes: VotesService) {
    this.votes.find().subscribe( voteList => {
      this.showVotes(voteList);
    })
  }

  showVotes(voteList: Vote[]){
    this.votesQuantity = voteList.length;
    this.voteList = voteList;
  }

  ngOnInit() {
  }

}
