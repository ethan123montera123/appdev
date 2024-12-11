import { Component } from '@angular/core';
import { LoginRequest } from '../../models/login-request';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IntegrationService } from '../../services/integration';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  constructor(private integration: IntegrationService){}

  userForm : FormGroup = new FormGroup({
      username: new FormControl (''),
      password: new FormControl ('')
  });

  request: LoginRequest = new LoginRequest;

  login(){
      const formvalue = this.userForm.value;

      if(formvalue.username == '' || formvalue.password == ''){
          alert('Wrong Credentials');
          return;
      }

      this.request.username = formvalue.username;
      this.request.password = formvalue.password;

      this.integration.login(this.request).subscribe({
          next:(res) => {
              console.log ("Received Response: "+res.token);
          }, error: (err) => {
            console.log("Error Received Respose: "+err);
          }
      });
  }
}