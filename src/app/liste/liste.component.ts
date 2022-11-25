import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  users: User[] = [];

  constructor(private servUser: UserService, private router: Router) {}

  ngOnInit(): void {
    this.users = this.servUser.getAllUser();
  }

  onModifier(id: number) {
    this.router.navigate(['/modifier', id]);
  }

  onSupprimer(id: number) {
    if (confirm("Voulez-vous vraiment supprimer l'utilisateur avec ID = " + id))
      this.servUser.supprimerById(id);
  }
}
