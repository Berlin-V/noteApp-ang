import { Component, OnInit,Input } from '@angular/core';
import {  HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-saved-notes',
  templateUrl: './saved-notes.component.html',
  styleUrls: ['./saved-notes.component.scss']
})
export class SavedNotesComponent implements OnInit {

	run:any
        title:any
     notes:any;  
	constructor() { }

  ngOnInit(): void {
 
	  this.run =localStorage.getItem('noteArr') 
this.notes=JSON.parse(this.run);
this.title=this.notes.map((e:any)=>e.title)
console.log(this.title)
  }

}
