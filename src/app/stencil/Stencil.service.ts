import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Stencil } from './stencil';

@Injectable()
export class StencilService {
    public allStencilsRoute = 'api/allStencils';
    constructor(private http: Http) {}


    newStencil(stencilForm: FormData): Observable<Stencil> {
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({ headers: headers});
        return this.http.post('api/newStencil', {stencilForm}, options)
                    .map(this.processStencil)
                    .catch(this.handleError);
    }
    allStencils(): Observable<Stencil[]> {
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
            return this.http.post(this.allStencilsRoute, options)
                            .map(this.allStencilExtractor)
                            .catch(this.handleError);
    }
    private processStencil(res: Response) {
        const body = res.json();
        return body.data || {};
    }
    private allStencilExtractor(res: Response) {
        const body = res.json();
        return body.stencils || {};
    }
    private handleError(error: Response | any) {
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