import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
	selector: 'app-news-details',
	templateUrl: './news-details.page.html',
	styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {
	news: any;
	constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
	ngOnInit() {
		let id = this.activatedRoute.snapshot.paramMap.get('id');
		this.http.get(`https://swapi.dev/api/news/${id}`).subscribe(res => {
			this.news = res;
		});
}
}

