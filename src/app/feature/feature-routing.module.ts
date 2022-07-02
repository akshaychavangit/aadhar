import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAadharComponent } from './create-aadhar/create-aadhar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewAadharComponent } from './view-aadhar/view-aadhar.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'register',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'create-aadhar',
    component:CreateAadharComponent
  },
  {
    path:'view-aadhar',
    component:ViewAadharComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
