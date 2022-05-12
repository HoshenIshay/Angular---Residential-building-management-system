import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpublicMessages } from '../Interfaces/publicMessages';
import { IUser } from '../Interfaces/user.interface';
import { Iproblem } from '../Interfaces/problem';
import { Iexpenses } from '../Interfaces/expenses';
import { Iwallet } from '../Interfaces/wallet';
import { Ibuilding } from '../Interfaces/building';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userElement : any ;
  currentUser : any ;
  constructor(private http : HttpClient) { }

  addUser( user :IUser){
    this.http.post<IUser>('http://localhost:3000/users' , user ).subscribe()
  }
  updateUser( user :IUser , id : number ){
    this.http.put<IUser>('http://localhost:3000/users/'+id , user ).subscribe()
  }
  getAllUsers(){
    return this.http.get<IUser[]>('http://localhost:3000/users')
}
  setUserElement(data : any){
    this.userElement= data ;
    console.log(this.userElement)
  }
  getUserElement(){
    return this.userElement
  }
  setCurrentUser(data : IUser){
    this.currentUser= data ;
  }
  getCurrentUser(){
    return this.currentUser;
  }
  postPublicMessage( message :IpublicMessages){
    this.http.post<IpublicMessages>('http://localhost:3000/publicMessages' , message ).subscribe()
  }
  getPublicMessages(){
    return this.http.get<IpublicMessages[]>('http://localhost:3000/publicMessages')
}
postProblem( problem :Iproblem){
  this.http.post<Iproblem>('http://localhost:3000/problems' , problem ).subscribe()
}
getAllProblem(){
  return this.http.get<Iproblem[]>('http://localhost:3000/problems')
}
postBuilding( building :Ibuilding){
  this.http.post<Ibuilding>('http://localhost:3000/building' , building ).subscribe()
}
getAllBuilding(){
  return this.http.get<Ibuilding[]>('http://localhost:3000/building')
}
getAllexpenses(){
  return this.http.get<Iexpenses[]>('http://localhost:3000/expenses')
}
postexpense( expense :Iexpenses){
  this.http.post<Iexpenses>('http://localhost:3000/expenses' , expense ).subscribe()
}
getWallet(){
  return this.http.get<Iwallet>('http://localhost:3000/wallet')
}
updateWallet( wallet :Iwallet){
  this.http.put<Iwallet>('http://localhost:3000/wallet' , wallet ).subscribe()
}

}
