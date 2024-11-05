import { Observable } from 'rxjs';
import { Geocoder, GeocoderRequest, GeocoderResult } from './google-maps-types';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
import * as i0 from "@angular/core";
export declare class AgmGeocoder {
    protected readonly geocoder$: Observable<Geocoder>;
    constructor(loader: MapsAPILoader);
    geocode(request: GeocoderRequest): Observable<GeocoderResult[]>;
    private _getGoogleResults;
    private _createGeocoder;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgmGeocoder, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AgmGeocoder>;
}
//# sourceMappingURL=geocoder-service.d.ts.map