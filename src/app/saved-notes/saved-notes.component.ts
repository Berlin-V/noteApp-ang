import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { NgModule } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {
    this.run = localStorage.getItem('noteArr');
    this.notes = JSON.parse(this.run);
    this.title = this.notes.map((e: any) => e.title);
    console.log(this.title);
  }
  deleteNote(index: any) {
    const existingEntries = this.notes;
    existingEntries.splice(index, 1);
    localStorage.setItem('noteArr', JSON.stringify(existingEntries));
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
