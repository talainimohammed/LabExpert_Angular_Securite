import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";
import {LoggedUser} from "../../models/loggedUser.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit ,OnDestroy{

  userSub!:Subscription;
  isAuthenticated=false;
  isAdmin=false;
  isTechnicien=false;
  isPreleveur=false;
  name:string|undefined;
  constructor(private authService:AuthService) { }

  ngOnDestroy(): void {
        this.userSub.unsubscribe();
  }

  ngOnInit(): void {
    this.userSub=this.authService.user.subscribe(loggedUser=>{
      this.isAuthenticated=!!loggedUser;
      if(!this.isAuthenticated){
        this.initializeState();
      }
      else if(!!loggedUser){
        this.setRole(loggedUser);
        this.name=loggedUser?.username
      }
    });
  }

  setRole(loggedUser:LoggedUser|null){
    if(loggedUser?.roles.includes("Responsable"))
      this.isAdmin=true;
    else if(!!loggedUser?.roles.includes("Technicien")){
      this.isTechnicien=true;
    }
    else if(!!loggedUser?.roles.includes("Preleveur")){
      this.isPreleveur=true;
    }
  }
  initializeState(){
    this.isPreleveur=false;
    this.isTechnicien=false;
    this.isAdmin=false;
  }
  logout() {
    this.authService.logout();
  }
}
