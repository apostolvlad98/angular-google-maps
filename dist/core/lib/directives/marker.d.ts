import { AfterContentInit, EventEmitter, OnChanges, OnDestroy, QueryList, SimpleChange } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { MouseEvent } from '../map-types';
import { FitBoundsAccessor, FitBoundsDetails } from '../services/fit-bounds';
import * as mapTypes from '../services/google-maps-types';
import { MarkerManager } from '../services/managers/marker-manager';
import { AgmInfoWindow } from './info-window';
import * as i0 from "@angular/core";
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
export declare class AgmMarker implements OnDestroy, OnChanges, AfterContentInit, FitBoundsAccessor {
    private _markerManager;
    /**
     * The latitude position of the marker.
     */
    latitude: number;
    /**
     * The longitude position of the marker.
     */
    longitude: number;
    /**
     * The title of the marker.
     */
    title: string;
    /**
     * The label (a single uppercase character) for the marker.
     */
    label: string | mapTypes.MarkerLabel;
    /**
     * If true, the marker can be dragged. Default value is false.
     */
    draggable: boolean;
    /**
     * Icon (the URL of the image) for the foreground.
     */
    iconUrl: string | mapTypes.MarkerIcon | mapTypes.GoogleSymbol;
    /**
     * If true, the marker is visible
     */
    visible: boolean;
    /**
     * Whether to automatically open the child info window when the marker is clicked.
     */
    openInfoWindow: boolean;
    /**
     * The marker's opacity between 0.0 and 1.0.
     */
    opacity: number;
    /**
     * All markers are displayed on the map in order of their zIndex, with higher values displaying in
     * front of markers with lower values. By default, markers are displayed according to their
     * vertical position on screen, with lower markers appearing in front of markers further up the
     * screen.
     */
    zIndex: number;
    /**
     * If true, the marker can be clicked. Default value is true.
     */
    clickable: boolean;
    /**
     * Which animation to play when marker is added to a map.
     * This can be 'BOUNCE' or 'DROP'
     */
    animation: Animation;
    /**
     * This event is fired when the marker's animation property changes.
     *
     * @memberof AgmMarker
     */
    animationChange: EventEmitter<Animation>;
    /**
     * This event emitter gets emitted when the user clicks on the marker.
     */
    markerClick: EventEmitter<AgmMarker>;
    /**
     * This event emitter gets emitted when the user clicks twice on the marker.
     */
    markerDblClick: EventEmitter<AgmMarker>;
    /**
     * This event is fired when the user rightclicks on the marker.
     */
    markerRightClick: EventEmitter<void>;
    /**
     * This event is fired when the user starts dragging the marker.
     */
    dragStart: EventEmitter<MouseEvent>;
    /**
     * This event is repeatedly fired while the user drags the marker.
     */
    drag: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user stops dragging the marker.
     */
    dragEnd: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user mouses over the marker.
     */
    mouseOver: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user mouses outside the marker.
     */
    mouseOut: EventEmitter<MouseEvent>;
    /** @internal */
    infoWindow: QueryList<AgmInfoWindow>;
    private _markerAddedToManger;
    private _id;
    private _observableSubscriptions;
    protected readonly _fitBoundsDetails$: ReplaySubject<FitBoundsDetails>;
    constructor(_markerManager: MarkerManager);
    ngAfterContentInit(): void;
    private handleInfoWindowUpdate;
    /** @internal */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    /** @internal */
    getFitBoundsDetails$(): Observable<FitBoundsDetails>;
    protected _updateFitBoundsDetails(): void;
    private _addEventListeners;
    /** @internal */
    id(): string;
    /** @internal */
    toString(): string;
    /** @internal */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgmMarker, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AgmMarker, "agm-marker", never, { "latitude": { "alias": "latitude"; "required": false; }; "longitude": { "alias": "longitude"; "required": false; }; "title": { "alias": "title"; "required": false; }; "label": { "alias": "label"; "required": false; }; "draggable": { "alias": "markerDraggable"; "required": false; }; "iconUrl": { "alias": "iconUrl"; "required": false; }; "openInfoWindow": { "alias": "openInfoWindow"; "required": false; }; "opacity": { "alias": "opacity"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; "animation": { "alias": "animation"; "required": false; }; "clickable": { "alias": "markerClickable"; "required": false; }; }, { "markerClick": "markerClick"; "dragStart": "dragStart"; "drag": "drag"; "dragEnd": "dragEnd"; "mouseOver": "mouseOver"; "mouseOut": "mouseOut"; "animationChange": "animationChange"; "markerDblClick": "markerDblClick"; "markerRightClick": "markerRightClick"; }, ["infoWindow"], never, false, never>;
}
export type Animation = 'BOUNCE' | 'DROP' | null;
//# sourceMappingURL=marker.d.ts.map