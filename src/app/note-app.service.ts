import { Injectable } from '@angular/core';
import axios from 'axios';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root',
})
export class NoteAppService {
	 jwt:any={};
	 constructor() {}
 async data(body: any) {
    const res = await axios.post('http://localhost:3000/log-in', body)
    const jwt = res.data.authorization;  
   this.jwt.authorization=jwt.toString()
    console.log('FROM_SERVICE',res);
  console.log('jwt',this.jwt)
return res;
 }

async create(body:any){
const res = await axios.post('http://localhost:3000/newNotes', {...body.notes},{ headers:{
'authorization':this.jwt.authorization
}
})
console.log('Resoponse_from_service',res)
return res;
}

async saved (){
	console.log('check_jwt',this.jwt.authorization)
const save = await axios.post('http://localhost:3000/get-note','',{ headers:{
 'authorization':this.jwt.authorization
  }
 })
 console.log('saved_notes',save);
return save
} 

async delete(body:any){
	console.log('delete',body)
const del = await axios.post('http://localhost:3000/delete-note1',{task:body})
console.log(del)
this.saved()
return del

}
}
