import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  constructor(public firebaseAuth: AngularFireAuth,
  private http:HttpClient) { }

  signIn(email:string, password:string){
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  }
  getData() {
    return  this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
