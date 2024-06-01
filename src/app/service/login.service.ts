import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLogado = new BehaviorSubject<boolean>(false);

  constructor() { }

  setLogin(value: boolean) {
    this.isLogado.next(value);
  }

}
