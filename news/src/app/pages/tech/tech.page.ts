import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.page.html',
  styleUrls: ['./tech.page.scss'],
})
export class TechPage implements OnInit {
  tech: Observable<any> | undefined;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.tech = this.http.get('https://newsdata.io/api/1/news?apikey=pub_258703486df028e6aec57582928e2e6eee643&language=en&category=technology');
  }

  showTech(tech: any) {
    this.router.navigateByUrl(`/tabs/tech/${encodeURIComponent(tech.link)}`, { state: tech });
  }
}


