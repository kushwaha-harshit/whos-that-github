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

  constructor(private service: FollowersService, private route: ActivatedRoute) { }

  repositories: any;

  ngOnInit() {
    let username = this.route.snapshot.paramMap.get('username')
    this.service.fetchRepositories(username)
    .subscribe(
      repos => {
        this.repositories = repos
    },
      error => {
        if (error instanceof NotFoundError){
          alert('Page Not Found!')
        }
    })
  }

}
