import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RexService } from '../rex.service';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [RexService]
})
export class DetailComponent {

  rexList;
  noInfo = false;
  idPref = 1;
  sub;
  // closeResult: string;

  constructor(
    public router: Router,
    private rex: RexService,
    private route: ActivatedRoute) {

    // Get pref id from url
    this.route.params.subscribe(params => {
        this.idPref = params['id']; // (+) converts string 'id' to a number
     });

    this.sub = this.rex.getRexbyPrefId(this.idPref).subscribe(res => {
    if (res) {
      console.log(res);
      this.rexList = res;
      this.rexList = this.rexList.sort(this.tri);
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

  // Open detail of a REX
  // Set actual REX to dispaly
  read(data){
    console.log(data);
    this.rex.changeRex(data);
    this.router.navigate(['/rex']);
  }

  
  newRex(data) {
    
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
