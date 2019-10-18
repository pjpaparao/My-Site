import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MySrviceService {

  constructor(public route: Router) { }

  goToPage(url) {
    this.route.navigate([url]);
  }
  // public showSpinner() {
  //   this.spinner.show();
  // }

  // public hideSpinner() {
  //   this.spinner.hide();
  // }
}
