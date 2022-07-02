import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcherDirective } from './directives/error-state-matcher.directive';
import { LoaderComponent } from './loader/loader.component';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomValidatorComponent } from './components/custom-validator/custom-validator.component';
import { OnlyNumberAndDecimalDirective } from './directives/only-number-and-decimal.directive';
import { OnlyAlphabetAndSpaceDirective } from './directives/only-alphabet-and-space.directive';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { ToastrModule } from 'ngx-toastr';
import { AadharNumberPipe } from './pipes/aadhar-number.pipe';




@NgModule({
  declarations: [
    CustomValidatorComponent,
    ErrorStateMatcherDirective,
    LoaderComponent,
    PageNotFoundComponent,
    OnlyNumberAndDecimalDirective,
    OnlyAlphabetAndSpaceDirective,
    OnlyNumberDirective,
    AadharNumberPipe
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    CustomValidatorComponent,
    ErrorStateMatcherDirective,
    LoaderComponent,
    OnlyNumberAndDecimalDirective,
    OnlyAlphabetAndSpaceDirective,
    OnlyNumberDirective,
    ToastrModule,
    AadharNumberPipe
  ]
})
export class SharedModule { }
