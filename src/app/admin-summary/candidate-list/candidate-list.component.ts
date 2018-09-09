import { Component, OnInit } from '@angular/core';
import { Summary } from '../../core/models/summary';
import { SummaryService } from '../../core/services/summary.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

  summaryList: Summary[];
  votesQuantity = 0;

  constructor(private summary: SummaryService) {
    this.summary.find().subscribe( summaryList => {
      this.showSummary(summaryList);
    })
  }

  showSummary(summaryList: Summary[]){    
    this.votesQuantity = summaryList.map( sum => sum.quantity ).reduce( (prev, next) => prev + next, 0 );
    this.summaryList = summaryList;
  }

  ngOnInit() {
  }

  trackSummaryByFn(index: number, summary: Summary){
    return summary.id;
  }

}
