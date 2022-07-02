import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-view-aadhar',
  templateUrl: './view-aadhar.component.html',
  styleUrls: ['./view-aadhar.component.css']
})
export class ViewAadharComponent implements OnInit {

  userData;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.userDetails$
    .pipe(
      filter((x)=>x)
    ).subscribe((res)=>{
      this.userData = res
    })
  }

  logout(){
    this.authService.logoutUser()
  }

}
