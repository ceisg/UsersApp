import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../User';
import {Router} from '@angular/router' ;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {



 user : User ={
  nom :"" ,
  prenom:"",
  email:"",

 } ;
activate : boolean =false ;


  constructor(private servUser : UserService ,private rr: Router) { }

  ngOnInit(): void {
  }

ajouter(){
  this.servUser.ajouter(this.user) ;
  this.rr .navigate(['/liste']) ;
}

onInput()
{
  this.activate = this.user.nom.trim()!=="" && this.user.prenom.trim()!=="" && this.user.email.trim()!=="" && this.user.email.includes("@")   ;
}


annuler()
{
  this.rr.navigateByUrl("liste")
}

}
