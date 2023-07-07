import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: Observable<any> | undefined;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.news = this.http.get('https://newsdata.io/api/1/news?apikey=pub_258703486df028e6aec57582928e2e6eee643&language=en&category=top');
  }

  showNews(news: any) {
    this.router.navigateByUrl(`/tabs/news/${encodeURIComponent(news.link)}`, { state: news });
  }
}


