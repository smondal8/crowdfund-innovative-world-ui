import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() userLoggedIn : boolean;
  @Output() logoutEmitter = new EventEmitter<any>();
  @Input() userName : String;
  constructor(
  private router: Router
  ){ }

  ngOnInit(): void {    
    if(sessionStorage.getItem("userId") != null){
        this.userLoggedIn = true;
        this.userName = sessionStorage.getItem('userId');
    }
  }

  signOut(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
    this.logoutEmitter.emit(false);
  }

}
