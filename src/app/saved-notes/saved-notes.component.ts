import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { NgModule } from '@angular/core';
import { NoteAppService } from './../note-app.service';

@Component({
  selector: 'app-saved-notes',
  templateUrl: './saved-notes.component.html',
  styleUrls: ['./saved-notes.component.scss'],
})
export class SavedNotesComponent implements OnInit {
  run: any;
  title: any;
  notes: any;	
 searchTerm:any;

  constructor(private noteAppService: NoteAppService) {}

 async  ngOnInit() {
//    this.run = localStorage.getItem('noteArr');
   this.run = await this.noteAppService.saved()
  this.notes = this.run.data.filter((v:any)=>{
	  if(v.deleted === false){
		  return v}
  } )

   console.log(this.notes)
   // this.title = this.notes.map((e: any) => e.title);
   // console.log(this.title);
  }

  deleteNote(task: any) {
	  console.log(task)
    //const existingEntries = this.notes;
    const val=task;
    //localStorage.setItem('noteArr', JSON.stringify(existingEntries));
  this.noteAppService.delete(val)
  this.ngOnInit()
   console.log('val',val)
  }

  search(value: string): void {
    this.notes = this.run.filter((val:any) =>
      val.title.toLowerCase().includes(value)
    );
  }


  /**const search = toSearch => {
 let terms = toSearch.split(" ");
 return noteArr.filter(object =>
   terms.every(term =>
     noteArr.values(object).some(value =>
       value.includes(term)
     )
   )
  );
}**/
}
