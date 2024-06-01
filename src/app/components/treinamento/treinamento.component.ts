import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-treinamento',
  standalone: true,
  imports: [
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <style>
      .video {
        display: flex;
      }
      .video-youtube iframe {
        width: 100%;
        height: 500px;
      }
      .video-youtube  {
        flex-basis: 70%;
      }
      .conteudo {
        padding: 25px;
        flex-basis: 30%;
      }
      .botoes {
        display: flex;
      }
    </style>
    <div>
      <mat-tab-group mat-align-tabs="start">
        <mat-tab style="padding: 30px;" label="Vídeos">
          <mat-accordion>
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>
                  <span>
                  AULA 01 - CONFIGURAÇÕES GERAIS | TREINAMENTO - ANALISTA DE SUPORTE | CODE SOFTWARE
                  </span>
                </mat-panel-title>
              </mat-expansion-panel-header>
              <div class="video">
                <div class="video-youtube">
                <iframe src="https://www.youtube.com/embed/KD3AWfmU5GM?si=9ia9589D7Bvl1hWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                  <div class="botoes">
                    <button mat-flat-button>
                      <mat-icon>check</mat-icon>
                      Finalizar aula
                    </button>
                  </div>
                </div>
                <div class="conteudo">
                  <p><b>Sobre:</b> teste</p>
                </div>
              </div>
            </mat-expansion-panel>
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>
                  Teste
                </mat-panel-title>
              </mat-expansion-panel-header>
              <div class="video">
                <div class="video-youtube">
                <iframe src="https://www.youtube.com/embed/KD3AWfmU5GM?si=9ia9589D7Bvl1hWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                  <div class="botoes">
                    <button mat-flat-button>
                      <mat-icon>check</mat-icon>
                      Finalizar aula
                    </button>
                  </div>
                </div>
                <div class="conteudo">
                  <p><b>Sobre:</b> teste</p>
                </div>
              </div>
            </mat-expansion-panel>
          </mat-accordion>
        </mat-tab>
        <mat-tab label="Sobre o treinamento">Sobre o treinamento</mat-tab>
        <mat-tab label="Avaliação">avaliação</mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: ``,
})
export class TreinamentoComponent {

}
