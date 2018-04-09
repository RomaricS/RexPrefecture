import { Injectable } from '@angular/core';
import { Rex } from './model/rex';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class RexService {

  rexList: AngularFireList<any>;
  selectedRex;

  public basePath = '/rex';


  constructor(private firebase: AngularFireDatabase) { }

  getRex() {
    return this.firebase.list('/rex').valueChanges();
  }

  // getRexByPref(pref) : Rex[] {
  //   return this.firebase.list('/rex',
  //     res => res.orderByChild('prefecture').equalTo(pref));
  // }

  insertRex(data: Rex) {
    const obj = this.firebase.database.ref(this.basePath);
    obj.push(data);
    console.log("Succes");
  }

  // updateEmployee(employee : Employee){
  //   this.rexList.update(employee.$key,
  //     {
  //       name: employee.name,
  //       position: employee.position,
  //       office: employee.office,
  //       salary: employee.salary
  //     });
  // }

  // deleteEmployee($key : string){
  //   this.rexList.remove($key);
  // }
}
