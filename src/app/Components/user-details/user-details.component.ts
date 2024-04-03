import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../Servises/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    const userIdString = this.route.snapshot.paramMap.get('id');

    if (userIdString !== null) {
      const userId = +userIdString;
      this.userService.getUserById(userId)
        .subscribe(user => {
          this.user = user.data;
        });
    }
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }


}
