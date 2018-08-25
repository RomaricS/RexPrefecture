import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class RexService {

  rexList: AngularFireList<any>;
  selectedRex;

  pathREX = "/rex";
  pathPref = "/pref1";
  pathPrefDept = "/prefDept";

  constructor(private firebase: AngularFireDatabase) { }

  // Get All REX
  getData() {
    return this.firebase.list('/rex').valueChanges();
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
