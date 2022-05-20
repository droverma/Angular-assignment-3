import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent {
  errMessage: string;
  note:Note=new Note();
  notes:Array<Note>=[];
  constructor(private notesService:NotesService)
  {
    this.errMessage="";
  }

  ngOnInit() {
    
  }
  addNote()
  {
   
    if(this.note.title==""||this.note.text=="") 
    {
      this.errMessage="Title and Text both are required fields";
      return;
    }
    this.notesService.addNote(this.note).subscribe(
      res=>{
       
        this.notes.push(res);
      },
      err=>{
        this.errMessage=err.message;
      }
      
    )
    this.note=new Note();
  }

}
