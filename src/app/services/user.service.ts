import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    { id: 1, nom: 'Tounsi', prenom: 'med', email: 'med@gmail.com' },
    { id: 2, nom: 'Tounsi', prenom: 'med', email: 'med@gmail.com' },
    { id: 3, nom: 'Tounsi', prenom: 'med', email: 'med@gmail.com' },
  ];

  ajouter(u: User): void {
    u.id = this.users.length + 1;
    this.users.push(u);
  }

  supprimerByPos(pos: number): void {
    let i;
    for (i = pos; i < this.users.length - 1; i++)
      this.users[i] = this.users[i + 1];

    this.users.pop();
  }

  supprimerById(id: number): void {
    let i, pos: number;

    pos = this.users.findIndex((u) => u.id === id);

    if (pos !== -1) {
      for (i = pos; i < this.users.length - 1; i++)
        this.users[i] = this.users[i + 1];
      this.users.pop();
    }
  }

  getAllUser(): User[] {
    return this.users;
  }

  modifier(u: User) {
    let pos = this.users.findIndex((val) => val.id == u.id);
    this.users[pos] = u;
  }

  getUser(id: number) {
    return this.users.find((val) => val.id == id);
  }
}
