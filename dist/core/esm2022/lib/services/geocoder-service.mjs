import { Injectable } from '@angular/core';
import { bindCallback, Observable, of, ReplaySubject, throwError } from 'rxjs';
import { map, multicast, switchMap } from 'rxjs/operators';
import { GeocoderStatus } from './google-maps-types';
import * as i0 from "@angular/core";
import * as i1 from "./maps-api-loader/maps-api-loader";
export class AgmGeocoder {
    constructor(loader) {
        const connectableGeocoder$ = new Observable(subscriber => {
            loader.load().then(() => subscriber.next());
        })
            .pipe(map(() => this._createGeocoder()), multicast(new ReplaySubject(1)));
        connectableGeocoder$.connect(); // ignore the subscription
        // since we will remain subscribed till application exits
        this.geocoder$ = connectableGeocoder$;
    }
    geocode(request) {
        return this.geocoder$.pipe(switchMap((geocoder) => this._getGoogleResults(geocoder, request)));
    }
    _getGoogleResults(geocoder, request) {
        const geocodeObservable = bindCallback(geocoder.geocode);
        return geocodeObservable(request).pipe(switchMap(([results, status]) => {
            if (status === GeocoderStatus.OK) {
                return of(results);
            }
            return throwError(status);
        }));
    }
    _createGeocoder() {
        return new google.maps.Geocoder();
    }
    static { this.ɵfac = function AgmGeocoder_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AgmGeocoder)(i0.ɵɵinject(i1.MapsAPILoader)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AgmGeocoder, factory: AgmGeocoder.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AgmGeocoder, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.MapsAPILoader }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kZXItc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9nZW9jb2Rlci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBeUIsVUFBVSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBNkMsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQU1oRyxNQUFNLE9BQU8sV0FBVztJQUd0QixZQUFZLE1BQXFCO1FBQy9CLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkQsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUM7YUFDQyxJQUFJLENBQ0gsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUNqQyxTQUFTLENBQUMsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDRyxDQUFDO1FBRXZDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsMEJBQTBCO1FBQzFELHlEQUF5RDtRQUV6RCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDO0lBQ3hDLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBd0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDeEIsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQ25FLENBQUM7SUFDSixDQUFDO0lBRU8saUJBQWlCLENBQUMsUUFBa0IsRUFBRSxPQUF3QjtRQUNwRSxNQUFNLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsT0FBTyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3BDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxNQUFNLEtBQUssY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixDQUFDO1lBRUQsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTyxlQUFlO1FBQ3JCLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBYyxDQUFDO0lBQ2hELENBQUM7NEdBdkNVLFdBQVc7dUVBQVgsV0FBVyxXQUFYLFdBQVcsbUJBREUsTUFBTTs7aUZBQ25CLFdBQVc7Y0FEdkIsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJpbmRDYWxsYmFjaywgQ29ubmVjdGFibGVPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiwgUmVwbGF5U3ViamVjdCwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBtdWx0aWNhc3QsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEdlb2NvZGVyLCBHZW9jb2RlclJlcXVlc3QsIEdlb2NvZGVyUmVzdWx0LCBHZW9jb2RlclN0YXR1cyB9IGZyb20gJy4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuaW1wb3J0IHsgTWFwc0FQSUxvYWRlciB9IGZyb20gJy4vbWFwcy1hcGktbG9hZGVyL21hcHMtYXBpLWxvYWRlcic7XG5cbmRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFnbUdlb2NvZGVyIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGdlb2NvZGVyJDogT2JzZXJ2YWJsZTxHZW9jb2Rlcj47XG5cbiAgY29uc3RydWN0b3IobG9hZGVyOiBNYXBzQVBJTG9hZGVyKSB7XG4gICAgY29uc3QgY29ubmVjdGFibGVHZW9jb2RlciQgPSBuZXcgT2JzZXJ2YWJsZShzdWJzY3JpYmVyID0+IHtcbiAgICAgIGxvYWRlci5sb2FkKCkudGhlbigoKSA9PiBzdWJzY3JpYmVyLm5leHQoKSk7XG4gICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKCkgPT4gdGhpcy5fY3JlYXRlR2VvY29kZXIoKSksXG4gICAgICAgIG11bHRpY2FzdChuZXcgUmVwbGF5U3ViamVjdCgxKSksXG4gICAgICApIGFzIENvbm5lY3RhYmxlT2JzZXJ2YWJsZTxHZW9jb2Rlcj47XG5cbiAgICBjb25uZWN0YWJsZUdlb2NvZGVyJC5jb25uZWN0KCk7IC8vIGlnbm9yZSB0aGUgc3Vic2NyaXB0aW9uXG4gICAgLy8gc2luY2Ugd2Ugd2lsbCByZW1haW4gc3Vic2NyaWJlZCB0aWxsIGFwcGxpY2F0aW9uIGV4aXRzXG5cbiAgICB0aGlzLmdlb2NvZGVyJCA9IGNvbm5lY3RhYmxlR2VvY29kZXIkO1xuICB9XG5cbiAgZ2VvY29kZShyZXF1ZXN0OiBHZW9jb2RlclJlcXVlc3QpOiBPYnNlcnZhYmxlPEdlb2NvZGVyUmVzdWx0W10+IHtcbiAgICByZXR1cm4gdGhpcy5nZW9jb2RlciQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoZ2VvY29kZXIpID0+IHRoaXMuX2dldEdvb2dsZVJlc3VsdHMoZ2VvY29kZXIsIHJlcXVlc3QpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRHb29nbGVSZXN1bHRzKGdlb2NvZGVyOiBHZW9jb2RlciwgcmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0KTogT2JzZXJ2YWJsZTxHZW9jb2RlclJlc3VsdFtdPiB7XG4gICAgY29uc3QgZ2VvY29kZU9ic2VydmFibGUgPSBiaW5kQ2FsbGJhY2soZ2VvY29kZXIuZ2VvY29kZSk7XG4gICAgcmV0dXJuIGdlb2NvZGVPYnNlcnZhYmxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFtyZXN1bHRzLCBzdGF0dXNdKSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IEdlb2NvZGVyU3RhdHVzLk9LKSB7XG4gICAgICAgICAgcmV0dXJuIG9mKHJlc3VsdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3Ioc3RhdHVzKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUdlb2NvZGVyKCk6IEdlb2NvZGVyIHtcbiAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCkgYXMgR2VvY29kZXI7XG4gIH1cbn1cbiJdfQ==