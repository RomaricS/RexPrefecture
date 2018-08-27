import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RexService } from '../rex.service';

@Component({
  selector: 'app-rex-detail',
  templateUrl: './rex-detail.component.html',
  styleUrls: ['./rex-detail.component.css']
})
export class RexDetailComponent {

  RexToShow;

  constructor(
    public router: Router,
    private rex: RexService,
  ) {

    this.rex.currentRex.subscribe(rex => {
      this.RexToShow = rex;
      console.log(this.RexToShow);
      });
   }




}
