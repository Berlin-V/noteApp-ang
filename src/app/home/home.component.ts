import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NoteAppService } from './../note-app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**@ViewChild('notes') input:any;
 @ViewChild('data')val:any;**/
  addNote: boolean = false;
  saveNote: boolean = true;

  profileForm: any;
  noteArr: any = [];
  dateTime: any = {};
  cat: any = {};

  constructor(private noteAppService: NoteAppService) {}

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm() {
    this.profileForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      // date:new Date().toLocaleDateString(),
      //time:new Date().toTimeString().slice(0,8),
    });
  }
  update(event: any) {
    var select = document.getElementById('language');
    const value = event.target.value;
    this.cat.categries = value;
  }

 async  saveData() {
    /** // localStorage.setItem("title", this.input.nativeElement.value);
   // localStorage.setItem("data", this.val.nativeElement.value);

     const transformDate = new Date().toLocaleDateString() 
    const timezone=new Date().toLocaleTimeString('IST', {hour: 'numeric', hour12: true, minute: 'numeric' });
this.dateTime.time=(transformDate+' '+timezone);

    const date={...this.profileForm.value,...this.dateTime,...this.cat}
  this.noteArr.push(date)
    console.log(this.noteArr);
   this.profileForm.reset();
   console.log(this.profileForm.value);
localStorage.setItem("noteArr", JSON.stringify(this.noteArr));**/

console.log(this.profileForm.value)
 const arr = {...this.profileForm.value,...this.cat};
 const notes= arr;
this.profileForm.reset();
 const save = await this.noteAppService.create({notes})
 console.log('notes_too_save',save)

  }

  newNote() {
    this.addNote = true;
    this.saveNote = false;
  }

  savedNote() {
    this.saveNote = true;
    this.addNote = false;
  }
}
