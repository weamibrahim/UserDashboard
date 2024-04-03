// header.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Servises/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';
  users: any[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers(1)
      .subscribe((response: any) => {
        this.users = response.data;
      });
  }

  searchUsers(): void {
    if (this.searchTerm.trim() !== '') {

      this.users = this.users.filter((user: any) => user.id.toString().includes(this.searchTerm.trim()));
    } else {

      this.loadUsers();
    }
  }

  goToUserDetails(id: number): void {
    this.users = [];
    this.router.navigate(['/user', id]);
  }
}
