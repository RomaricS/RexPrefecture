import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RexService } from '../rex.service';
import { Observable } from '@firebase/util';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})

export class SubmitComponent {

  correct;
  today = new Date();
  processInitType = "envoyé";

  data = {
    name: null,
    createdAt: this.today,
    typeCDS: null,
    sentAt: null,
    inLocal: false,
    fingerprintAt: null,
    smsAt: null,
    takenAt: null,
    processDuration: null,
    prefecture: null,
    comment: null
  };

  prefList;
  deptlist;
  finalPrefObj;

  cdsType;

  // Data for subscription
  b;
  a;
  deptList;
  fake = [];

  constructor(public router: Router,
    private rex: RexService) {
      // types de cds
    this.a = this.rex.getCdsType();
    this.a.subscribe(res => {
      if (res) {
        this.cdsType = res[0];
      }
    });

      // prefs
      this.b = this.rex.getPrefDept();
      this.b.subscribe(res => {
        if (res) {
          this.prefList = res[0];
        }
      });

  }

  /*
  transformObjet(data){
    data.prefList = [];
    let a = this.prefList.filter(res => res.idDept === data.idDept);
    for (let i=0;i<a.length;i++){
      //console.log(a[i]);
      let d = {
        idDept : a[i].idDept,
        id: a[i].id,
        pref: a[i].pref
      }
      data.prefList.push(d);
    }
    this.fake.push(data);
    return data;
  }*/

  // Calculate full process duration
  calculateduration() {
    if (this.data.sentAt && this.data.takenAt) {
      let diff = (new Date(this.data.takenAt).getTime() - new Date(this.data.sentAt).getTime());
      let duree = diff / (1000 * 3600 * 24);
      console.log("Durée du prociess ",duree, " jours");
      this.data.processDuration = duree;
    }
  }

  switchInitLabel(state) {
    if (state === false) {
      this.processInitType = 'déposé';
    } else {
      this.processInitType = 'envoyé';
    }
  }

    //Sort data before displaying them
    sortPref(a, b) {
      const c = a.idDept;
      const d = b.idDept;
      if (c<d)
         return -1;
      if (c>d)
         return 1;
      return 0;
    }

  // Check all required field
  controleFields() {
    if (this.data.name === null || this.data.name === '' ||
      this.data.sentAt === null || this.data.fingerprintAt === null ||
      this.data.smsAt === null || this.data.takenAt === null ||
      this.data.prefecture === null || this.data.typeCDS === null) {
      return false;
    } else {
      return true;
    }
  }

  // Submit the REX
  submitNewREX() {
    this.correct = this.controleFields();
    if (this.correct) {
      this.calculateduration();
      // Save to firebase
      this.rex.addRex(this.data);
      // Redirection to home
       this.router.navigate(['/']);
    }
  }
}
