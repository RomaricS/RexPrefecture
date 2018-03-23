import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RexService } from '../rex.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],
  providers: [RexService]
})
export class SubmitComponent implements OnInit {

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

  prefList = [
    {
      name: 'Nanterre',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      id: 1,
      img: 'assets/img/img.jpg'
    },
    {
      name: 'Antony',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      id: 2,
      img: 'assets/img/img.jpg'
    },
    {
      name: 'Bobigny',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      id: 3,
      img: 'assets/img/img.jpg'
    },
    {
      name: 'Paris',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      id: 4,
      img: 'assets/img/img.jpg'
    },
    {
      name: 'St Germain en Laye',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      id: 5,
      img: 'assets/img/img.jpg'
    },
    {
      name: 'Cergy',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      id: 6,
      img: 'assets/img/img.jpg'
    }
  ];

  cdsType = [
    {
      name: 'Etudiant vers Salarié normal (1 an)',
      id: 1
    },
    {
      name: 'Etudiant vers Salarié Passeport Talent (4 ans)',
      id: 2
    },
    {
      name: 'APS vers Salarié normal (1 an)',
      id: 3
    },
    {
      name: 'APS vers Salarié Passeport Talent (4 ans)',
      id: 4
    }
  ];

  constructor(public router: Router,
    private rex: RexService) { }

  ngOnInit() {
  }

  // Calculate full process duration
  calculateduration() {
    if (this.data.sentAt && this.data.takenAt) {
      let diff = (new Date(this.data.takenAt).getTime() - new Date(this.data.sentAt).getTime());
      let duree = diff / (1000 * 3600 * 24);
      console.log(duree);
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

  // Check all required field
  controleFields() {
    if (this.data.name === null || this.data.name === '' ||
      this.data.sentAt === null || this.data.fingerprintAt === null ||
      this.data.smsAt === null || this.data.takenAt === null ||
      this.data.prefecture === null || this.data.typeCDS === null) {
      console.log("Remplir tous les champs");
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

      // Redirection to home
      this.router.navigate(['/']);
    }



  }



}
