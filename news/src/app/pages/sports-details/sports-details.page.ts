import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sports-details',
  templateUrl: './sports-details.page.html',
  styleUrls: ['./sports-details.page.scss'],
})
export class SportsDetailsPage implements OnInit {
  sports: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sports = history.state;
  }
}



