import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public listUsers: string[] = [];

  constructor() {}

  public addUser(name: string): void {
    this.listUsers.push(name);
    this.users$.next(this.listUsers);
  }
}
