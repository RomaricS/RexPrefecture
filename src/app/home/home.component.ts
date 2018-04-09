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

  constructor(
    public router: Router,
    private rex: RexService
  ) {
    // Get dept List
     this.rex.getDept().subscribe(res => {
      if (res) {
        this.deptList = res.sort(this.sortDept);
      }
    });
      
    // Get pref list
    this.rex.getPref().subscribe(res => {
      if (res) {
        this.data = res;
        this.prefList = this.data.sort(this.sortPref);
      }
    });
  }
  
   filterPref(id) {
    if (id === 0){
      // Show all pref
        this.prefList = this.data;
    }else{
      // Filter based on dept id
      this.prefList = this.data.filter(list => list.idDept === id);
    }
     
    sortDept(){
    const c = a.idDept;
    const d = b.idDept;
    if (c<d)
       return -1;
    if (c>d)
       return 1;
    return 0;
    }
     
    sortPref(){
    const c = a.id;
    const d = b.id;
    if (c<d)
       return -1;
    if (c>d)
       return 1;
    return 0;
    }


  viewDetail(id) {
    if (id) {
      this.router.navigate(['/detail', id]);
    }
  }

}
