import { Addmission } from './../models/addmission.model';
import { Taiyyari } from './../models/taiyyari.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogIn = false;
  constructor(private http: HttpClient, private afs: AngularFirestore, private firebaseAuth: AngularFireAuth) {}

  async logIn(email:string, password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(res=>{this.isLogIn=true; localStorage.setItem('user',JSON.stringify(res.user))})

  }

  async signUp(email:string, password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(res=>{this.isLogIn=true; localStorage.setItem('user',JSON.stringify(res.user))})

  }

  logout(){
    this.firebaseAuth.signOut
    localStorage.removeItem('user')
  }

  registerUser(taiyyari: any) {
    taiyyari.id = this.afs.createId();
    return this.afs
      .collection('user-collection')
      .add(taiyyari)
      .then((res) => {
        console.log(res);
      });
  }

  addResults(Results: any) {
    Results.id = this.afs.createId();
    return this.afs
      .collection('result-collection')
      .add(Results)
      .then((res) => {
        console.log(res);
      });
  }

  addaddmission(Addmission: any) {
    Addmission.id = this.afs.createId();
    return this.afs
      .collection('admission-collection')
      .add(Addmission)
      .then((res) => {
        console.log(res);
      });
  }

  addjob(taiyyari: any) {
    taiyyari.id = this.afs.createId();
    return this.afs
      .collection('job-collection')
      .add(taiyyari)
      .then((res) => {
        console.log(res);
      });
  }

  GetAllResults(){
    return this.afs.collection('/result-collection').snapshotChanges();
    }

    GetAllJobs(){
      return this.afs.collection('/job-collection').snapshotChanges();
      }

      GetAllAdmission(){
        return this.afs.collection('/admission-collection').snapshotChanges();
        }

GetAllUser(){
return this.afs.collection('/user-collection').snapshotChanges();
}

updateUser(){
  return this.afs.collection('/user-collection').stateChanges();
  }

getRole(){
  return this.afs.collection('role-collection').snapshotChanges();
}

GetByCode(){

}


  isLoggedIn() {
    return sessionStorage.getItem('email') != null;
  }

  GetUserRole() {
    return sessionStorage.getItem('userrole') != null
      ? sessionStorage.getItem('userrole')?.toString
      : '';
  }
}
