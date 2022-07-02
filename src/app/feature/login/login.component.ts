import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AppConfigService } from 'src/app/core/services/app-config.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name;
  loginForm: FormGroup;
  submitted = false;
  isMailVerified = false;
  isLoading  = false;
  showlogin = false;
  subscriptions: Subscription[] = [];
  constructor(private appConfigService: AppConfigService,
              private authService: AuthService,
              private toastr: ToastrService,
              private router: Router) {
      // if (localStorage.getItem('token') == null){
      //   this.showlogin = true;
      // }else{
      //   const token = localStorage.getItem('token');
      //   if (token) {
      //     this.router.navigate(['/main']);
      //   }
      // }
    }

  ngOnInit(): void {
    this.createForm();

  }


  createForm(){
    this.loginForm = new FormGroup({
      email : new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required])
    });
  }




  onSubmit(){
    this.submitted = true;
    if (this.loginForm.valid){
      this.isLoading = true;
      this.subscriptions.push(


        this.authService.login(this.loginForm.value).subscribe((apiResponse: any) => {
          this.isLoading = false;
          if (apiResponse.success){
            if (apiResponse.data.jwtToken){
              localStorage.setItem('token',apiResponse.data.jwtToken);
              this.authService.userDetails$.next(apiResponse.data.userData)
              if(apiResponse.data.userData.role == 1){
                this.router.navigate(['/main/create-aadhar']);
              }else{
                this.router.navigate(['/main/view-aadhar']);
              }
              
              this.toastr.success('Logged in successfully');
            }

            // original login code


          }else{
            this.toastr.error('Invalid username or password');
          }

        }, (error) => {
            this.toastr.error('Something went wrong');
            this.isLoading = false;
          })
      );

    }

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
