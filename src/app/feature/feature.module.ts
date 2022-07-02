import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatureRoutingModule } from './feature-routing.module';
import { CreateAadharComponent } from './create-aadhar/create-aadhar.component';
import { ViewAadharComponent } from './view-aadhar/view-aadhar.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CreateAadharComponent,
    ViewAadharComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  
})
export class FeatureModule { }
