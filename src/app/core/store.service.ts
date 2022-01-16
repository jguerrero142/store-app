import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../shared/services/api.service';
import { User } from './class/user';
import { ApiUser } from './interface/api-user';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public user: User = new User;
  constructor(private auth: AuthService,
              private api: ApiService) {
                this.getAuth();
               }


              getAuth(){
                this.auth.userProfile$.subscribe((data: ApiUser) => {
                  const profile = data;
                  if(profile){
                    this.loginUser(profile.sub!, profile).subscribe((s)=>{
                      if( s != null){
                        this.user = s;
                        // console.log(this.user);
                      }
                    });
                  }
                });
              }

              loginUser(id: string | number, data: User): Observable <User> {
              return this.api.post(`user/login/${id}`,data)              
              .pipe(map( res => {
                return User.userJson(res)
              }))
              }
}
