import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './auth/authentication.guard';
import { Role } from './auth/role.enum';
import { LoginComponent } from './login/login.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'not-authorized', component: NotAuthorizedComponent },
  { 
    path: 'welcome', component: WelcomeComponent, 
    canActivate: [AuthenticationGuard],
    data: { roles: [ Role.Buyer, Role.Admin, Role.Merchant ]},
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
