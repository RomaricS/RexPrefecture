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
  data;
  deptList;
  b;
  prefDept;
  searchResult;
  choice=0;

  constructor(
    public router: Router,
    private rex: RexService
  ) {
    // Get dept List
    this.rex.getDept().subscribe(res => {
      if (res) {
        this.deptList = res;
        this.deptList.sort(function (a, b) {
          const c = a.idDept;
          const d = b.idDept;
          if (c < d)
            return -1;
          if (c > d)
            return 1;
          return 0;
        });
      }
    });

    // prefs and Dept
    this.b = this.rex.getPrefDept();
    this.b.subscribe(res => {
      if (res) {
        this.prefDept = res[0];
      //console.log(this.prefDept);
      }
    });

    // Get pref list
    this.rex.getPref().subscribe(res => {
      if (res) {
        this.data = res[0];
        this.prefList = this.data.sort(function (a, b) {
          const c = a.id;
          const d = b.id;
          if (c < d)
            return -1;
          if (c > d)
            return 1;
          return 0;
        });
        this.searchResult = this.prefList;
      }
    });
  }

  searchPref(){
    if (this.choice == 0){
      this.searchResult = this.prefList;
    }else{
      this.searchResult = this.prefDept.filter(res => res.idDept == this.choice)[0].prefList; 
    }
  }

  filterPref(id) {
    if (id === 0) {
      // Show all pref
      this.prefList = this.data;
    } else {
      // Filter based on dept id
      this.prefList = this.data.filter(list => list.idDept === id);
    }
  }

  viewDetail(id) {
    console.log(id);
    if (id) {
      this.router.navigate(['/detail', id]);
    }
  }

}
