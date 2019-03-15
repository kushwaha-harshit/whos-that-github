import { Component } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github';

  constructor(protected router: Router){
    
  }

  isVisible(): boolean{
    if (this.router.url == '/') return false; return true
  }

  loading: boolean=true;

  ngOnInit(){
    
  }
}
