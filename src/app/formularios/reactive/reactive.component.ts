import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  // atributo formulario
  loginForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formbuilder: FormBuilder
  ) {
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = this.formbuilder.group(
      {
        username: ['', Validators.required],
        password: ['', [Validators.minLength(3), Validators.required] ]
      }
    );
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log(this.loginForm.valid);

    if (this.loginForm.invalid) {
      return;
    }

    // tomar datos : armar un obj -> servicio rest
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password');

    // dbservable
    this.loading = true;
    this.submitted = true;
    //
  }

  // convenience getter for easy access to form fields
  get f() {
     console.log('anda');
     return this.loginForm.controls;
  }
}
