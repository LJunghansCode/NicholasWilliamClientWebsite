import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { Admin } from './admin';

@Injectable()
export class AdminService {
      private adminLoginUrl = 'api/adminLogin';

  constructor(private http: Http) {}

  adminLogin(hash: string): Observable<Admin[]> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.adminLoginUrl, {hash}, options)
                    .map(this.validateLogin)
                    .catch(this.handleError);
  }
  private validateLogin(res: Response) {
      const body = res.json();
      console.log(body);
      return body.admin || {};
  }
//   private processLogin(res: Response) {
//       const body = this.validateLogin(res);
//       console.log(body);
//       console.log('from process');
//       return body || {};
// }

private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
