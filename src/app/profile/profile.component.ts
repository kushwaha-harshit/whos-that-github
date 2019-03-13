import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { FollowersService } from '../services/followers.service';
import { NotFoundError } from '../Errors/not-found.error';
import { NullValueError } from '../Errors/null-value.error';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  userProfile: any;

  constructor(private route: ActivatedRoute, private service: FollowersService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(response => {
      this.username = response.get('username')
      this.service.fetchUserProfile(this.username)
      .subscribe((response) => {
        this.userProfile = response
      },
      error => {
        if (error instanceof NotFoundError){
          alert('"'+this.username+'" is not a valid username!\nPlease enter a valid username')
          this.router.navigate(['/'])
        }
      })
    })
  }

}
