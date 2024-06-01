import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
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
      .cursos {
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
        row-gap: 10px;
        column-gap: 10px;
        height: 100vh;
      }
      mat-card {
        width: 100px;
        flex: 1 1 auto;
        height: min-content;
      }
    </style>
    <div class="cursos">
          <mat-card>
            <img mat-card-image src="https://i.ytimg.com/vi/BAzsAW_Iwa4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCp1r1k_a4NROhw9KgITGmqGWKsMQ" alt="Photo of a Shiba Inu">
            <mat-card-header>
              <mat-card-title>Analista de suporte</mat-card-title>
            </mat-card-header>
            <mat-card-actions>
              <button mat-button routerLink="/treinamento">Acessar</button>
              <button mat-button>Detalhes</button>
            </mat-card-actions>
          </mat-card>
          <mat-card>
            <img mat-card-image src="https://i.ytimg.com/vi/BAzsAW_Iwa4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCp1r1k_a4NROhw9KgITGmqGWKsMQ" alt="Photo of a Shiba Inu">
            <mat-card-header>
              <mat-card-title>Analista de suporte</mat-card-title>
            </mat-card-header>
            <mat-card-actions>
              <button mat-button>Acessar</button>
              <button mat-button>Detalhes</button>
            </mat-card-actions>
          </mat-card>
          <mat-card>
            <img mat-card-image src="https://i.ytimg.com/vi/BAzsAW_Iwa4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCp1r1k_a4NROhw9KgITGmqGWKsMQ" alt="Photo of a Shiba Inu">
            <mat-card-header>
              <mat-card-title>Analista de suporte</mat-card-title>
            </mat-card-header>
            <mat-card-actions>
              <button mat-button>Acessar</button>
              <button mat-button>Detalhes</button>
            </mat-card-actions>
          </mat-card>
          <mat-card>
            <img mat-card-image src="https://i.ytimg.com/vi/BAzsAW_Iwa4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCp1r1k_a4NROhw9KgITGmqGWKsMQ" alt="Photo of a Shiba Inu">
            <mat-card-header>
              <mat-card-title>Analista de suporte</mat-card-title>
            </mat-card-header>
            <mat-card-actions>
              <button mat-button>Acessar</button>
              <button mat-button>Detalhes</button>
            </mat-card-actions>
          </mat-card>
      </div>
  `,
  styles: ``
})
export class HomeComponent {

}
