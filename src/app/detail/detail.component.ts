import { Component, OnInit } from '@angular/core';
import { RexService } from '../rex.service';
import { Rex } from '../model/rex';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  data: any;
  rexList;

  constructor(public router: Router,
    private rex: RexService) {

    // Recuperer l'id depuis l'url 
    const tab = this.router.url.split('/', 3);

    // Récuperer les données de la pref dont l'id est en parametre
    this.rexList = this.rex.getRex();
    this.rexList.subscribe(res => {
      this.data = res.filter(rex => rex.prefecture === tab[2]);
    });



  }

  ngOnInit() {
  }

}
