import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { Admin } from './admin';

@Injectable()
export class AdminService {

  constructor(private http: Http) {}

  adminLogin(hash: string): Observable<Admin[]> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    return this.http.post('api/adminLogin', {hash}, options)
                    .map(this.processData)
                    .catch(this.handleError);
  }
  private processData(res: Response) {
      const body = res.json();
      console.log(body);
      return body || {};
  }

checkAdmin(): Observable<JSON> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    return this.http.get('api/getAdmin')
                    .map(this.processData)
                    .catch(this.handleError);
  }

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
