import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RexService } from '../rex.service';
import { Observable } from '@firebase/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RexService]
})
export class HomeComponent {

  prefList;

  constructor(
    public router: Router,
    private rex: RexService
  ) {
    this.rex.getPref().subscribe(res => {
      if (res) {
        console.log(res);
        this.prefList = res[0];
      }
    });
  }


  viewDetail(id) {
    if (id) {
      this.router.navigate(['/detail', id]);
    }
  }

}
