import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { shareReplay, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  siteSettings: any;
  siteSettings$: Observable<any>;
  refreshsiteSettings$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor( private http:HttpClient) {
    this.siteSettings$ = this.refreshsiteSettings$
    .pipe(
      switchMap(() => this.http.get(`${environment.backendUrl}/common/domain-settings`)),
      shareReplay(1)
    )
   }
  load(): Promise<any> {
    return new Promise((resolve) => {
      this.siteSettings$
        .subscribe((res) => {
          this.siteSettings = res.data;
          resolve(res.data);
        });
    });
  }
}
