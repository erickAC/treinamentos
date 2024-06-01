import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  template: `
    <style>
      .container {
        background-color: #3b539a;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      mat-card {
        margin: 10px;
        width: auto;
      }
      mat-card-actions {
        column-gap: 10px;
        display: flex;
        justify-content: end;
      }
      mat-form-field {
        width: 100%;
      }
    </style>
    <div class="container">
      <h3 style="color: white;"><b>Treinamentos</b></h3>
      <mat-card>
        <mat-card-content>
          <form action="">
            <mat-form-field>
              <mat-label>Email</mat-label>
              <input type="text" matInput>
            </mat-form-field>
            <mat-form-field>
              <mat-label>Senha</mat-label>
              <input type="password" matInput>
            </mat-form-field>
          </form>
        </mat-card-content>
        <mat-card-actions>
          <button mat-flat-button color="warn">
            Esqueceu a senha?
          </button>
          <button mat-flat-button (click)="login()">
            Entrar
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: ``
})
export class LoginComponent {
  private router = inject(Router);
  private service = inject(LoginService);

  login() {
    this.service.setLogin(true);
    this.router.navigate(['/']);
  }

}
