import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;
  hide2: boolean = true;
  formularioRegistro: FormGroup;

  constructor(private fb: FormBuilder ) {}

  ngOnInit(): void {

    this.formularioRegistro = this.fb.group({
      nombre: ['', Validators.required] ,
      apellido: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmacionPassword: ['', Validators.required]
    })
  }

  registro() {
    if(this.formularioRegistro.invalid) {
      return;
    }

    console.log(this.formularioRegistro.value)
  }
  
}
