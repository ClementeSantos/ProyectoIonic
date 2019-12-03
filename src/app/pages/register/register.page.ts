import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/user.class'
import { AuthService } from 'src/app/service/auth.service';
 

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user:User = new User();

  constructor(private router: Router, private fauth: AuthService) { }

  ngOnInit() {
  }

  async onRegister(){
    const user = await this.fauth.onRegister(this.user);
    if(user){
      console.log("Successfully created user!");
      this.router.navigate(['/home'])
    }
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }

}
