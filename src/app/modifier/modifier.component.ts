import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  user! : User
  activate : boolean =true ;


  constructor(private srvUser : UserService ,private active : ActivatedRoute,private router :Router) { }




  ngOnInit(): void {
     this.user = this.srvUser.getUser(  this.active.snapshot.params['id'])!
     console.log(this.user);


  }


modifier(user : User) {

  this.srvUser.modifier(user) ;
  this.router.navigateByUrl('/liste')


}

cancel()
{
  this.router.navigateByUrl("/liste")
}


onInput()
{
  this.activate = this.user.nom.trim()!=="" && this.user.prenom.trim()!=="" && this.user.email.trim()!=="" && this.user.email.includes("@")   ;
}

}
