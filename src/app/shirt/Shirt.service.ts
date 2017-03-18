import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { Shirt } from './shirt';

@Injectable()
export class ShirtService {
  public allshirtsurl = 'api/allShirts';
  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) {}

  newShirt(shirtForm: FormData): Observable<Shirt> {
    return this.http.post('api/newShirt', {shirtForm}, this.options)
                    .map(this.processShirt)
                    .catch(this.handleError);
  }
  imageUpload(file: File): Observable<String> {
    return this.http.post('api/shirtImage', file)
                    .map(this.processData)
                    .catch(this.handleError);
  }
  allShirts(): Observable<Shirt[]> {
      return this.http.post(this.allshirtsurl, this.options)
                       .map(this.allShirtsExtractor)
                       .catch(this.handleError);
  }

  deleteShirt (id: number): Observable<Shirt>  {
    return this.http.post('api/removeShirt', {id}, this.options)
                    .map(this.processShirt)
                    .catch(this.handleError);
  }

  oneShirt(id: number): Observable<Shirt> {
    return this.http.post('api/oneShirt', {id}, this.options)
                    .map(this.processData);
  }
  newOrder(token: JSON): Observable<JSON> {
    return this.http.post('api/newOrder', {token}, this.options)
                    .map(this.processData)
                    .catch(this.handleError);
  }

 private processData(res: Response) {
      const body = res.json();
      return body.data || {};
  }
  private processShirt(res: Response) {
      const body = res.json();
      return body.Shirt || {};
  }

  private allShirtsExtractor(res: Response) {
      const body = res.json();
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
    return Observable.throw(errMsg);
  }
}
