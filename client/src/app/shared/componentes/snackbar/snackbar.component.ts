import { Component, OnInit, OnDestroy } from '@angular/core';
import { SnackbarService } from '@shared/componentes/services/snackbar.service';
import { Subscription } from 'rxjs';
import { snackbarState } from '@shared/componentes/animations/animation';

interface snackbarState {
  mostrar: boolean;
  mensaje: string;
  tipo?: string;
}

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [snackbarState],
})
export class SnackbarComponent implements OnInit, OnDestroy {
  mostrar: boolean = false;
  mensaje: string = 'Esto es un mensaje.';
  tipo: string = 'success';

  snackbarSubscription: Subscription;

  constructor(private snackbarService: SnackbarService) {}

  ngOnInit() {
    this.snackbarSubscription = this.snackbarService.snackbarState$.subscribe(
      (state: snackbarState) => {
        if (state.tipo) {
          this.tipo = state.tipo;
        } else {
          this.tipo = 'success';
        }
        this.mensaje = state.mensaje;
        this.mostrar = state.mostrar;

        setTimeout(() => {
          this.mostrar = false;
        }, 3000);
      }
    );
  }

  ngOnDestroy() {
    this.snackbarSubscription.unsubscribe();
  }
}
