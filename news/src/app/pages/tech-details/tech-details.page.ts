import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tech-details',
  templateUrl: './tech-details.page.html',
  styleUrls: ['./tech-details.page.scss'],
})
export class TechDetailsPage implements OnInit {
  tech: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.tech = history.state;
  }
}


