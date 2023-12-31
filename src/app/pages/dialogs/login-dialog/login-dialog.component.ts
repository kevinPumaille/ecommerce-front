import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  @Input() visibleLogin: boolean;
  @Output() visibleCambioLogin = new EventEmitter<boolean>();

  formGroup: FormGroup;

  constructor(
    
  ) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
        correo: new FormControl<string | null>(null),
        clave: new FormControl<string | null>(null)
    });
}

  onVisibleCambio(cerrar: boolean){
    this.visibleCambioLogin.emit(cerrar);
  }

}
