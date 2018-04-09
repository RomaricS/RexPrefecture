import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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

  constructor(
    public router: Router
  ) {

  }

  viewDetail(id) {
    if (id) {
      this.router.navigate(['/detail', id]);
    }
  }

}
