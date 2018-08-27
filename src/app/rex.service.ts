import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RexService {

  rexList: AngularFireList<any>;
  selectedRex;

  pathREX = "/rex";
  pathPref = "/pref1";
  pathPrefDept = "/prefDept";
  fakerex = {};

  private rexDetail = new BehaviorSubject(this.fakerex);
  currentRex = this.rexDetail.asObservable();

  constructor(private firebase: AngularFireDatabase) { }

  // Sharing an object between independent components
  changeRex(rex) {
    this.rexDetail.next(rex);
    console.log(rex);
  }

  // Get All REX
  getData() {
    return this.firebase.list('/rex').valueChanges();
  }

    // Get REX by Id
    getRexbyPrefId(id) {
      return this.firebase.list('/rex', ref => ref.orderByChild('prefecture').equalTo(id)).valueChanges();
    }

  // Get All Pref
  getPref() {
    return this.firebase.list('/pref1').valueChanges();
  }
  
  // Get All Dept
  getDept() {
    return this.firebase.list('/deptList').valueChanges();
  }

  // Get All Pref
  getCdsType() {
    return this.firebase.list('/cdsType').valueChanges();
  }

  // Get All PrefDept
  getPrefDept() {
    return this.firebase.list('/prefDept').valueChanges();
  }

  // Add a new rex
  addRex(d) {
    const obj = this.firebase.database.ref(this.pathREX);
    obj.push(d);
  }
  addDp(d) {
    const obj = this.firebase.database.ref(this.pathPrefDept);
    obj.push(d);
  }
}
