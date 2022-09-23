import { Injectable } from '@angular/core';
import axios from 'axios';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class NoteAppService {
	 
  constructor() { }
data(){
axios.post('http://localhost:3000/log-in')
  .then(function (response) {
	  console.log('Requesting...',response);
    console.log(response);
  })

.catch(function (error) {
    console.log(error);
  })
}

}
