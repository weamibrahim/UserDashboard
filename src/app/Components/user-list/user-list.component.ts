import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Servises/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;

  isLoading: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.userService.getUsers(this.currentPage)
      .subscribe(response => {
        this.users = response.data;
        this.totalPages = response.total_pages;
        this.isLoading = false;
      });
  }

  goToUserDetails(id: number): void {
    this.router.navigate(['/user', id]);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadUsers();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }

}

