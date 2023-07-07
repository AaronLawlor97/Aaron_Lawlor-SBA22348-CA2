import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {
  sports: Observable<any> | undefined;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.sports = this.http.get('https://newsdata.io/api/1/news?apikey=pub_258703486df028e6aec57582928e2e6eee643&language=en&category=sports');
  }

  showSports(sports: any) {
    this.router.navigateByUrl(`/tabs/sports/${encodeURIComponent(sports.link)}`, { state: sports });
  }
}



