import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RexService } from '../rex.service';
import { Observable } from '@firebase/util';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [RexService]
})
export class DetailComponent {

  rexList;
  noInfo = false;
  idPref;

  constructor(
    public router: Router,
    private rex: RexService,
    private route: ActivatedRoute) {

      // Get pref id from url
    this.route.params.subscribe(params => {
        this.idPref = +params['id']; // (+) converts string 'id' to a number
     });

    this.rex.getData().subscribe(res => {
      if (res) {
        this.rexList = res;
        this.rexList = this.rexList.sort(this.tri);
        // Filter to only have the rex for selected pref
        this.rexList = this.rexList.filter(rex => parseInt(rex.prefecture) === this.idPref);
        if (this.rexList.length === 0){
          this.noInfo = true;
        }else{
          this.noInfo = false;
        }
      } else {
        this.noInfo = true;
      }
    });
  }

  //Sort data before displaying them
  tri(a, b) {
    const c = a.typeCDS;
    const d = b.typeCDS;
    if (c<d)
       return -1;
    if (c>d)
       return 1;
    return 0;
  }

}
