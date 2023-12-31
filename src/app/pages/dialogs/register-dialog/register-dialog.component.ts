import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent {

  @Input() visibleRegistro: boolean;
  @Output() visibleCambioRegistro = new EventEmitter<boolean>();

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      nombres: new FormControl<string | null>(null),
      apellidos: new FormControl<string | null>(null),
      correo: new FormControl<string | null>(null),
      celular: new FormControl<string | null>(null),
      clave: new FormControl<string | null>(null)
    });
}

onVisibleCambio(cerrar: boolean){
  this.visibleCambioRegistro.emit(cerrar);
}
}
