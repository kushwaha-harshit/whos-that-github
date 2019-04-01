import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { FollowersService } from '../services/followers.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: FollowersService) { }

  username: string

  ngOnInit() {
    console.log('emitted')
    this.service.usernameEmitter.subscribe(username => {
      this.username = username
    })
  } 

  getUserProfile(){
    if (this.username == null || this.username==""){
      alert('Please enter a username!')
    }
    else {
      this.router.navigate(['user', this.username, 'profile'])
    }
  }

}
