import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { FitBoundsAccessor, FitBoundsDetails } from '../services/fit-bounds';
import { LatLngLiteral } from '../services/google-maps-types';
import * as i0 from "@angular/core";
/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * AgmPolyline}
 */
export declare class AgmPolylinePoint implements OnChanges, FitBoundsAccessor {
    /**
     * The latitude position of the point.
     */
    latitude: number;
    /**
     * The longitude position of the point;
     */
    longitude: number;
    /**
     * This event emitter gets emitted when the position of the point changed.
     */
    positionChanged: EventEmitter<LatLngLiteral>;
    constructor();
    ngOnChanges(changes: SimpleChanges): any;
    /** @internal */
    getFitBoundsDetails$(): Observable<FitBoundsDetails>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgmPolylinePoint, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AgmPolylinePoint, "agm-polyline-point", never, { "latitude": { "alias": "latitude"; "required": false; }; "longitude": { "alias": "longitude"; "required": false; }; }, { "positionChanged": "positionChanged"; }, never, never, false, never>;
}
