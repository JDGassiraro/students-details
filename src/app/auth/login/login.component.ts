import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'students-details-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    public authService: AuthService,
    public router: Router
  ){}

  login(){
    this.authService.login().subscribe(
      ()=> {
        if (this.authService.isLoggedIn){
          //Usually, you would use the redirect URL from the auth service.
          //However, to keep the example simple, we will always redirect to '/admin'
          const redirectUrl = '/dashboard';
          
          //Set our navigation extras object
          //that passes on our global query params and fragment
          const NavigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };

          //Redirect the user
          this.router.navigate([redirectUrl], NavigationExtras);
        }
      }
    );
  }

  logout() {
    this.authService.logOut();
  }
}
