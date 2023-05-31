import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }

  addUser(user: User){
    user.id = this.afs.createId();
    return this.afs.collection('/users').add(user);

  }

  getAllUser(){
    return this.afs.collection('/users').snapshotChanges;
  }

  deleteUser(user:User){
    return this.afs.doc('/users/'+user.id).delete();
  }

  updateUser(user: User){
    return this.afs.doc('/users/'+user.id).update;
  }
}
