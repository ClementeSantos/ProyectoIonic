import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;

  constructor(public fauth:AngularFireAuth) {
    fauth.authState.subscribe(
      user=>(this.isLogged = user)
    );
   }

   async onLogin(user:User){
     try{
       return await this.fauth.auth.signInWithEmailAndPassword(user.email, user.password);
     }catch(error){
       console.log('Error en el login', error);
     }
   }

   async onRegister(user:User){
     try{
      return await this.fauth.auth.createUserWithEmailAndPassword(user.email, user.password);
     }catch(error){
       console.log("Error en el registro", error);
     }
   }
}
