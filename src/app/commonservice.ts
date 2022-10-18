import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DialogData } from './dialog-overview-example-dialogpost/dialog-overview-example-dialogpost.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
 
  constructor(private _http:HttpClient) { }
  createUser(user:any){
return this._http.post("http://localhost:8083/api/v1.0/tweets/login",user);
  }
  forgotPassword(password:any){
    console.log(password)
    const user=password.username;
    console.log(user)
    return this._http.post("http://localhost:8083/api/v1.0/tweets/"+user+"/forgot",password);
      }

      getTweets() {
      return this._http.get("http://localhost:8083/api/v1.0/tweets/getAllTweets");

      }

      register(formObj: any) {
        return this._http.post("http://localhost:8083/api/v1.0/tweets/register",formObj);
      }

      getLikes(data:any,count:any) {
        const name=data.username;
        const id=data.id;
        data.likes=count
        return this._http.put("http://localhost:8083/api/v1.0/tweets/"+name+"/like/"+id,data);
      }
      
      postreply(value: any, data: any) {
        const name=data.username;
        const id=data.id;
        return this._http.post("http://localhost:8083/api/v1.0/tweets/"+name+"/reply/"+id,value);
      }
      getprofiledata(username:any) {
        return this._http.get("http://localhost:8083/api/v1.0/tweets/user/search/"+username);
      }
     
      delete(data: any) {
        const name=data.username;
        const id=data.id;
        return this._http.delete("http://localhost:8083/api/v1.0/tweets/"+name+"/delete/"+id);
      }
      addtweet(replyfinal: any, data: DialogData) {
        const name=data.name;
        return this._http.post("http://localhost:8083/api/v1.0/tweets/"+name+"/add",replyfinal);
      }
      getComments(user: any,id:any) {
      
        return this._http.get("http://localhost:8083/api/v1.0/tweets/comments/"+user+"/"+id);
      }
      
}