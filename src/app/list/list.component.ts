import { Component, OnInit, Input, Output } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { NotFoundError } from '../Errors/not-found.error';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listOfFollowers: any;
  isLoaded: boolean = false
  
  constructor(private followerService: FollowersService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.isLoaded = false
    let username = this.route.snapshot.paramMap.get('username')
    
    this.followerService.fetchAllFollowers(username)
    .subscribe(followers => {
      this.listOfFollowers = followers;
      this.isLoaded = true
    },
    (error: Response)=>{
      if (error instanceof NotFoundError){
        this.listOfFollowers = null
        alert(username+ ' is not a valid username!')
        this.isLoaded = true
      }
    })
  }

}
