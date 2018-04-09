import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class RexService {

  rexList: AngularFireList<any>;
  selectedRex;

  pathREX = "/rex";
  pathPref = "/pref";

  constructor(private firebase: AngularFireDatabase) { }

  // Get All REX
  getData() {
    return this.firebase.list('/rex').valueChanges();
  }

  // Get All Pref
  getPref() {
    return this.firebase.list('/prefList').valueChanges();
  }
  
  // Get All Dept
  getDept() {
    return this.firebase.list('/deptList').valueChanges();
  }

  // Get All Pref
  getCdsType() {
    return this.firebase.list('/cdsType').valueChanges();
  }

  // Add a new rex
  addRex(d) {
    const obj = this.firebase.database.ref(this.pathREX);
    obj.push(d);
  }

}
