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
		this.news = this.http.get('https://swapi.dev/api/films');
	  }
	  
	  showNews(news: { url: string; }){
		let split = news.url.split('/');
		let newsId = split[split.length-2];
		this.router.navigateByUrl(`/tabs/news/${newsId}`);
	  }
}