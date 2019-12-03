import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/user.class'
import { AuthService } from 'src/app/service/auth.service';
 


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:User = new User();

  constructor(private router: Router, private fauth: AuthService) { }

  ngOnInit() {
  }


  goToSignup(){
    this.router.navigate(['/register'])
  }

  async onLogin(){
    const user = await this.fauth.onLogin(this.user);
    if(user){
      console.log('Succesfully logged in!')
      this.router.navigate(['/home'])
    }
  }
}
