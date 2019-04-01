import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { NotFoundError } from '../Errors/not-found.error';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  
  repositories: any;
  isLoaded: boolean = false;
  constructor(private service: FollowersService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.isLoaded = false
    let username = this.route.snapshot.paramMap.get('username')
    this.service.fetchRepositories(username)
    .subscribe(
      repos => {
        this.repositories = repos
        this.isLoaded=true
    },
      error => {
        if (error instanceof NotFoundError){
          this.isLoaded = true
          alert('Page Not Found!')
        }
    })
  }

}
