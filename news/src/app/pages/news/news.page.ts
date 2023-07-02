import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
selector: 'app-news',
templateUrl: './news.page.html',
styleUrls: ['./news.page.scss'],   
})
export class NewsPage implements OnInit {
constructor(private navController: NavController, private router: Router) { }
	ngOnInit() {  
	}
opennewsdetails()
{
// Both of these would work!
// But the standard Router is recommended.
// this.navController.navigateForward(`/tabs/News/42`);
this.router.navigateByUrl(`/tabs/news/42`);  
}
goToSports() {
this.navController.navigateRoot(`/tabs/sports`) 
	}
}

