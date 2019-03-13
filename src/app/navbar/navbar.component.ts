import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private route: ActivatedRoute, public router: Router) {

  }

  username: any

  

  routeToFollowers() {
    this.router.navigate([this.router.url.substr(0, this.router.url.lastIndexOf('/')), 'followers'])
  }

  routeToProfile() {
    this.router.navigate([this.router.url.substr(0, this.router.url.lastIndexOf('/')), 'profile'])
  }

}
