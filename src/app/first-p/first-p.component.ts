import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-p',
  templateUrl: './first-p.component.html',
  styleUrls: ['./first-p.component.scss'],
})
export class FirstPComponent implements OnInit {
  loginForm: any;
users: any = [
	{ email: 'askin@surfboard.se', password: 'askin123' },
	{ email: 'berlin@surfboard.se', password: 'berlin123' },
]


  constructor(private formBuilder: FormBuilder,private router: Router) {}

  ngOnInit(): void {
    this.initialise();
  }

  initialise() {
    this.loginForm = this.formBuilder.group({
      email:new FormControl ('', [Validators.required]),
      password:new FormControl ('', [Validators.required]),
    });
  }
  signIn() {
	  const email = this.loginForm.value.email;
	  console.log('email' ,email)
	  console.log('dd')
	  const password = this.loginForm.value.password;
	  console.log('password',password)
	  const ifValid = this.users.find((data: any) => {
      return data.email === email;
     });
     console.log(ifValid);
      if (ifValid && ifValid.password === password) {
       this.router.navigate(['/home']);
     }else{
    console.log(this.loginForm.value);
     alert('incorrect email or password')
     }
     }
}
