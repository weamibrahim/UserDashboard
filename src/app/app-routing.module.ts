import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';

const routes: Routes = [
{path:'',component:UserListComponent},
  {path:'users',component:UserListComponent},
  {path:'user/:id',component:UserDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
