import { Injectable } from '@angular/core';
 
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class RexService {

  rexList: AngularFireList<any>;
  selectedRex;

  constructor(private firebase : AngularFireDatabase) { }

  getData(){
    this.rexList = this.firebase.list('rex');
    return this.rexList;
  }
 
  // insertEmployee(employee : Employee)
  // {
  //   this.rexList.push({
  //     name: employee.name,
  //     position: employee.position,
  //     office: employee.office,
  //     salary: employee.salary
  //   });
  // }
 
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
