import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppConfigService } from 'src/app/core/services/app-config.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { atleastOneLowerCase } from 'src/app/shared/validators/atleast-one-lowecase-validator';
import { atleastOneNumber } from 'src/app/shared/validators/atleast-one-number-validator';
import { atleastOneSpecialChar } from 'src/app/shared/validators/atleast-one-special-char-validator';
import { atleastOneUpperCase } from 'src/app/shared/validators/atleast-one-uppercase-validator';
import { noWhiteSpace } from 'src/app/shared/validators/no-whitespace-validator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  signUpForm:any;
  submitted  = false;
  isLoading = false;

  constructor(private appConfigService:AppConfigService,
              private authService:AuthService,
              private toastrService:ToastrService,
              private router:Router ) { }
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.signUpForm = new FormGroup({
      // firstName:new FormControl('',[Validators.required,Validators.pattern(environment.onlyAlpahbets),Validators.maxLength(15)]),
      // lastName:new FormControl('',[Validators.required,Validators.pattern(environment.onlyAlpahbets),Validators.maxLength(15)]),
      // address1:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
      // address2:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      // city:new FormControl('',[Validators.required]),
      // pincode:new FormControl('',[Validators.required]),
      // phone:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,atleastOneLowerCase,atleastOneUpperCase,atleastOneNumber,atleastOneSpecialChar,noWhiteSpace]),
      cpassword:new FormControl('',[Validators.required]),
    })

  }


  submit(){
    this.submitted = true;
    if(this.signUpForm.valid){
      this.isLoading = true;
      // delete this.signUpForm.value.cpassword
      let signUpData = {
        ...this.signUpForm.value
      }
      this.authService.register(signUpData).subscribe((res:any)=>{
        if(res.success){
          this.toastrService.success(res.data)
          this.router.navigate(['/main/login']);
          this.isLoading = false;
        }
      },error =>{
        this.toastrService.error(error.error.message);
        this.isLoading = false;
      })
    }
  }

  
}
