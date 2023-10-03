import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: '<app-registration-form></app-registration-form>',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  @Output() userRegistered = new EventEmitter<any>();

  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['null', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    console.log('Submit button clicked');
    if (this.registrationForm.valid) {
      console.log('Form is valid');
      const user = {
        id: uuidv4(),
        ...this.registrationForm.value
      };


      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));


      this.registrationForm.reset();
      this.userRegistered.emit(user);
      this.router.navigate(['/profile', user.id]);
    }}
}

