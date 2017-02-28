import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { Shirt } from './shirt';

@Injectable()
export class ShirtService {
  public allshirtsurl = 'api/allShirts';
  constructor(private http: Http) {}

  newShirt(shirtForm: JSON): Observable<Shirt> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    return this.http.post('api/newShirt', {shirtForm}, options)
                    .map(this.processShirt)
                    .catch(this.handleError);
  }
  allShirts(): Observable<Shirt[]> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this.allshirtsurl, options)
                       .map(this.allShirtsExtractor)
                       .catch(this.handleError);
  }
  deleteShirt (id: number): Observable<Shirt>  {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    console.log(id);
    return this.http.post('api/removeShirt', {id}, options)
                    .map(this.processShirt)
                    .catch(this.handleError);
  }
  private processShirt(res: Response) {
      const body = res.json();
      return body.Shirt || {};
  }
  private allShirtsExtractor(res: Response) {
      console.log(res);
      const body = res.json();
      console.log(body);
      console.log(body.shirts);
      return body.shirts || {};
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
