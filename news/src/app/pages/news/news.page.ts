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
    this.news = this.http.get('https://newsapi.org/v2/top-headlines?country=ie&apiKey=c55dc7fee88f4c21a87a37bba674415d');
    this.news.subscribe(data => {
      console.log('my data:', data);
    });
  }
}
