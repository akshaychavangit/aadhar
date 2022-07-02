import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userDetails$:BehaviorSubject<any> = new BehaviorSubject(null)

  constructor(private http:HttpClient,private router:Router,private toastr:ToastrService) { }
  login(data:any){
    return this.http.post(`${environment.backendUrl}/common/login`, { data })
  }

  register(data:any) {
    return this.http.post(`${environment.backendUrl}/common/register`, { data })
  }

  createAadhar(data:any) {
    return this.http.post(`${environment.backendUrl}/common/createAadhar`, { data })
  }


  loginFlow(token,role){
    
    localStorage.setItem('token',token);
    this.checkRoutes(role)


  }

  refreshExistingToken(){
    this.http.get(`${environment.backendUrl}/common/refreshToken`,{}).subscribe((res:any)=>{
      if(res.success && res.data){
       this.loginFlow(res.data.jwtToken,res.data.userData.role);
       this.userDetails$.next(res.data.userData)
      }else{
        this.logoutUser()
      }
    },error =>{
      this.toastr.error('Something went wrong')
      this.logoutUser()
    })
 }

 checkRoutes(role){
  const currentUrl = this.router.url;
  if(role == 1){
      this.router.navigate(['/main/create-aadhar'])
    }else{
      if(localStorage.getItem('token')){
        this.router.navigate(['/main/view-aadhar'])
      }
    }
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/main/login'])
  }
}
