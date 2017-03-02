import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class CookieService {
  cookies: Object;
  keys: Array<string>;
  cName: string;
  cValue: string;
  rName: string;

  update() {
    this.cookies = Cookie.getAll();
    this.keys = Object.keys(this.cookies);
  }
  addCookie(cName: string, cValue: string) {

    Cookie.set(cName, cValue);
    this.update();
  }
  removeCookie(rName: string) {

    Cookie.delete(rName);
    this.update();
  }
  removeAll() {

    Cookie.deleteAll();
    this.update();
  }
  checkCookie(checkName) {
    return({
        'name': checkName,
        'value': Cookie.check(checkName)
});
  }
}
