import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-p',
  templateUrl: './first-p.component.html',
  styleUrls: ['./first-p.component.scss']
})
export class FirstPComponent implements OnInit {
	user = new FormControl('');
        Password = new FormControl('');

	signIn(){
	console.log(this.user.value);
	console.log(this.Password.value);
	}
      
	constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
