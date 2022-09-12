import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 /**@ViewChild('notes') input:any;
 @ViewChild('data')val:any;**/
 
	addNote:boolean=true;
 saveNote:boolean=false;

  profileForm:any;
  noteArr:any=[];

 constructor() { }

  ngOnInit(): void {
	  this.initialiseForm();
  }

  initialiseForm(){
  this.profileForm=new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
     // date:new Date().toLocaleDateString(),
     //time:new Date().toTimeString().slice(0,8),
  });
  }
 saveData(){
/**  localStorage.setItem("title", this.input.nativeElement.value);
 localStorage.setItem("data", this.val.nativeElement.value);**/
	 
    this.noteArr.push(this.profileForm.value)
   console.log(this.noteArr);
   console.log(this.profileForm.value);
localStorage.setItem("noteArr", JSON.stringify(this.noteArr));	 
 }

newNote(){
this.addNote=true;
this.saveNote=false;

}

savedNote(){
this.saveNote=true;
this.addNote =false;
}
}
