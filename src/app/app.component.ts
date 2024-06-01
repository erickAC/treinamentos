import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoginService } from './service/login.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    RouterModule
  ],
  template: `
    <style>
      .container {
        height: 100vh;
      }
      .profile {
        display: flex;
        column-gap: 10px;
        align-items: center;
        background-color: #fff;
        padding: 10px;
        color: #3b539a;
        border-radius: 5px;
      }
      mat-toolbar {
        background-color: #3b539a;
        color: white;
      }
      mat-list-item button {
        width: 100%;  
      }
    </style>
      @if (!isLogadoValue()) {
        <mat-drawer-container>
        <mat-drawer #drawer mode="side">
          <mat-list>
            <mat-list-item>
              <button mat-flat-button [routerLink]="['']">
                <span>Home</span>
              </button>
            </mat-list-item>
            <mat-list-item>
              <button mat-flat-button>
                <span>Cursos</span>
              </button>
            </mat-list-item>
            <mat-list-item>
              <button mat-flat-button>
                <span>Avaliações</span>
              </button>
            </mat-list-item>
            <mat-list-item>
              <button mat-flat-button (click)="logout()">
                <span>Logout</span>
              </button>
            </mat-list-item>
          </mat-list>
        </mat-drawer>  
        <mat-toolbar >
          <button mat-icon-button (click)="drawer.toggle()">
            <mat-icon style="color: white;">menu</mat-icon>
          </button>
          Treinamento
          <span style="flex: 1 1 auto"></span>
          <div class="profile">
            <mat-icon>account_circle</mat-icon>
            <span>Olá, Erick</span>
          </div>
        </mat-toolbar>
        <ng-container class="container">
          <router-outlet />
        </ng-container>
      </mat-drawer-container>
      } @else {
        <ng-container class="container">
          <router-outlet />
        </ng-container>
      }
  `,
})
export class AppComponent{
  title = 'treinamentos';
  private loginService = inject(LoginService);
  private router = inject(Router);
  private isLogado = this.loginService.isLogado.asObservable();
  public isLogadoValue = signal<boolean>(false);

  constructor() {
    this.isLogado.subscribe(value => this.isLogadoValue.set(value));
  }

  logout() {
    this.loginService.setLogin(false);
    this.router.navigate(['/login']);
  }

}
