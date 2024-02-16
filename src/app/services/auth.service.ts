import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest, LoginResponse} from "../models/login.model";
import {BehaviorSubject, Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {LoggedUser} from "../models/loggedUser.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelperService=new  JwtHelperService();
  user=new  BehaviorSubject<LoggedUser|null>(null);
  tokenExpirationTimer:any;
  constructor(private http: HttpClient,private router:Router,@Inject('url_login') private url: string) { }

  public login(user: LoginRequest):Observable<LoginResponse>{
    const formData=new FormData();
    formData.append('username',user.username);
    formData.append('password',user.password);
    return this.http.post<LoginResponse>(this.url,formData);
  }
  saveToken(jwtTokens:LoginResponse){
  const decodedAccessToken=this.jwtHelperService.decodeToken(jwtTokens.accessToken);
  const loggedUser = new LoggedUser(decodedAccessToken.sub,decodedAccessToken.roles,jwtTokens.accessToken,this.getExpirationDate(decodedAccessToken.exp));
    this.user.next(loggedUser);
    this.autologout(this.getExpirationDate(decodedAccessToken.exp).valueOf()-new Date().valueOf());
    localStorage.setItem("userData",JSON.stringify(loggedUser));

  this.redirectLoggedInUser(decodedAccessToken,jwtTokens.accessToken);
  console.log(loggedUser);
  }
  getExpirationDate(exp:number){
    const date=new Date(0);
    date.setUTCSeconds(exp);
    return date;
  }
  redirectLoggedInUser(decodedToken:any,accessToken:string){
    if(decodedToken.roles.includes("Responsable"))
      this.router.navigateByUrl("/");
    else if(decodedToken.roles.includes("Technicien"))
      this.router.navigateByUrl("/analyses")
    else if(decodedToken.roles.includes("Preleveur"))
      this.router.navigateByUrl("/echantillons")
  }
  autoLogin(){
    const userData:{
      username:string,
      roles:string[],
      _token:string,
      _expiration:Date
    } = JSON.parse(localStorage.getItem('userData'));
    if(!userData)return;
    const  loadedUser=new LoggedUser(userData.username,userData.roles,userData._token,new Date(userData._expiration));
    if(loadedUser.token){
      this.user.next(loadedUser);
      this.autologout(loadedUser._expiration.valueOf()- new Date().valueOf());
    }
  }
  logout(){
    localStorage.clear();
    this.user.next(null);
    this.router.navigate(['/auth'])
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer=null;
  }
  autologout(expirationDuration:number){
    this.tokenExpirationTimer= setTimeout(()=>{
      this.logout();
    },expirationDuration)
  }
}
