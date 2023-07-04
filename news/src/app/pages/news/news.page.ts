import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: any; // Updated type to 'any'

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    const url = 'https://newsapi.org/v2/top-headlines?' +
      'country=ie&' +
      'apiKey=c55dc7fee88f4c21a87a37bba674415d';

    // Optional: Add headers if necessary
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.get(url, { headers }).subscribe(
      (data) => {
        this.news = data;
        console.log('my data:', this.news);
      },
      (error: HttpErrorResponse) => {
        console.error('An error occurred:', error);
      }
    );
  }

  shownews(news: { url: string; }) {
    let split = news.url.split('/');
    let newsId = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/news/${newsId}`);
  }
}
