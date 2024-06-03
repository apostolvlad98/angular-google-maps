import { isPlatformServer } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { FitBoundsService } from '../services/fit-bounds';
import { GoogleMapsAPIWrapper } from '../services/google-maps-api-wrapper';
import { CircleManager } from '../services/managers/circle-manager';
import { InfoWindowManager } from '../services/managers/info-window-manager';
import { LayerManager } from '../services/managers/layer-manager';
import { MarkerManager } from '../services/managers/marker-manager';
import { PolygonManager } from '../services/managers/polygon-manager';
import { PolylineManager } from '../services/managers/polyline-manager';
import { RectangleManager } from '../services/managers/rectangle-manager';
import { DataLayerManager } from './../services/managers/data-layer-manager';
import { KmlLayerManager } from './../services/managers/kml-layer-manager';
import * as i0 from "@angular/core";
import * as i1 from "../services/google-maps-api-wrapper";
import * as i2 from "../services/fit-bounds";
/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
export class AgmMap {
    /**
     * Map option attributes that can change over time
     */
    static { this._mapOptionsAttributes = [
        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
        'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
        'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
        'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
        'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
        'mapTypeId', 'clickableIcons', 'gestureHandling', 'tilt', 'restriction',
    ]; }
    constructor(_elem, _mapsWrapper, _platformId, _fitBoundsService, _zone) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._platformId = _platformId;
        this._fitBoundsService = _fitBoundsService;
        this._zone = _zone;
        /**
         * The longitude that defines the center of the map.
         */
        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */
        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */
        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */
        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */
        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */
        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */
        this.keyboardShortcuts = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */
        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */
        this.usePanning = false;
        /**
         * Sets the viewport to contain the given bounds.
         * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
         */
        this.fitBounds = false;
        /**
         * The initial enabled/disabled state of the Scale control. This is disabled by default.
         */
        this.scaleControl = false;
        /**
         * The initial enabled/disabled state of the Map type control.
         */
        this.mapTypeControl = false;
        /**
         * The initial enabled/disabled state of the Pan control.
         */
        this.panControl = false;
        /**
         * The initial enabled/disabled state of the Rotate control.
         */
        this.rotateControl = false;
        /**
         * The initial enabled/disabled state of the Fullscreen control.
         */
        this.fullscreenControl = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */
        this.mapTypeId = 'roadmap';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */
        this.clickableIcons = true;
        /**
         * A map icon represents a point of interest, also known as a POI.
         * When map icons are clickable by default, an info window is displayed.
         * When this property is set to false, the info window will not be shown but the click event
         * will still fire
         */
        this.showDefaultInfoWindow = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */
        this.gestureHandling = 'auto';
        /**
         * Controls the automatic switching behavior for the angle of incidence of
         * the map. The only allowed values are 0 and 45. The value 0 causes the map
         * to always use a 0° overhead view regardless of the zoom level and
         * viewport. The value 45 causes the tilt angle to automatically switch to
         * 45 whenever 45° imagery is available for the current zoom level and
         * viewport, and switch back to 0 whenever 45° imagery is not available
         * (this is the default behavior). 45° imagery is only available for
         * satellite and hybrid map types, within some locations, and at some zoom
         * levels. Note: getTilt returns the current tilt angle, not the value
         * specified by this option. Because getTilt and this option refer to
         * different things, do not bind() the tilt property; doing so may yield
         * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
         */
        this.tilt = 0;
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        this.mapClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapRightClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapDblClick = new EventEmitter();
        /**
         * This event emitter is fired when the map center changes.
         */
        this.centerChange = new EventEmitter();
        /**
         * This event is fired when the viewport bounds have changed.
         */
        this.boundsChange = new EventEmitter();
        /**
         * This event is fired when the mapTypeId property changes.
         */
        this.mapTypeIdChange = new EventEmitter();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */
        this.idle = new EventEmitter();
        /**
         * This event is fired when the zoom level has changed.
         */
        this.zoomChange = new EventEmitter();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */
        this.mapReady = new EventEmitter();
        /**
         * This event is fired when the visible tiles have finished loading.
         */
        this.tilesLoaded = new EventEmitter();
    }
    /** @internal */
    ngOnInit() {
        if (isPlatformServer(this._platformId)) {
            // The code is running on the server, do nothing
            return;
        }
        // todo: this should be solved with a new component and a viewChild decorator
        const container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    }
    _initMapInstance(el) {
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            controlSize: this.controlSize,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling,
            tilt: this.tilt,
            restriction: this.restriction,
        })
            .then(() => this._mapsWrapper.getNativeMap())
            .then(map => this.mapReady.emit(map));
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleTilesLoadedEvent();
        this._handleIdleEvent();
    }
    /** @internal */
    ngOnDestroy() {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach((s) => s.unsubscribe());
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    }
    /* @internal */
    ngOnChanges(changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    }
    _updateMapOptionsChanges(changes) {
        let options = {};
        let optionKeys = Object.keys(changes).filter(k => AgmMap._mapOptionsAttributes.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    }
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    triggerResize(recenter = true) {
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise((resolve) => {
            setTimeout(() => {
                return this._mapsWrapper.triggerMapEvent('resize').then(() => {
                    if (recenter) {
                        this.fitBounds != null ? this._fitBounds() : this._setCenter();
                    }
                    resolve();
                });
            });
        });
    }
    _updatePosition(changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    }
    _setCenter() {
        let newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    }
    _fitBounds() {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                this._updateBounds(this.fitBounds, this.fitBoundsPadding);
        }
    }
    _subscribeToFitBoundsUpdates() {
        this._zone.runOutsideAngular(() => {
            this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(b => {
                this._zone.run(() => this._updateBounds(b, this.fitBoundsPadding));
            });
        });
    }
    _updateBounds(bounds, padding) {
        if (!bounds) {
            return;
        }
        if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
            const newBounds = new google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds, padding);
            return;
        }
        this._mapsWrapper.fitBounds(bounds, padding);
    }
    _isLatLngBoundsLiteral(bounds) {
        return bounds != null && bounds.extend === undefined;
    }
    _handleMapCenterChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(() => {
            this._mapsWrapper.getCenter().then((center) => {
                this.latitude = center.lat();
                this.longitude = center.lng();
                this.centerChange.emit({ lat: this.latitude, lng: this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    }
    _handleBoundsChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(() => {
            this._mapsWrapper.getBounds().then((bounds) => { this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    }
    _handleMapTypeIdChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(() => {
            this._mapsWrapper.getMapTypeId().then((mapTypeId) => { this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    }
    _handleMapZoomChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(() => {
            this._mapsWrapper.getZoom().then((z) => {
                this.zoom = z;
                this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    }
    _handleIdleEvent() {
        const s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(() => { this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    }
    _handleTilesLoadedEvent() {
        const s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(() => this.tilesLoaded.emit(void 0));
        this._observableSubscriptions.push(s);
    }
    _handleMapMouseEvents() {
        const events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach((e) => {
            const s = this._mapsWrapper.subscribeToMapEvent(e.name).subscribe((event) => {
                let value = {
                    coords: {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng(),
                    },
                    placeId: event.placeId,
                };
                // the placeId will be undefined in case the event was not an IconMouseEvent (google types)
                if (value.placeId && !this.showDefaultInfoWindow) {
                    event.stop();
                }
                e.emitter.emit(value);
            });
            this._observableSubscriptions.push(s);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmMap, deps: [{ token: i0.ElementRef }, { token: i1.GoogleMapsAPIWrapper }, { token: PLATFORM_ID }, { token: i2.FitBoundsService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: AgmMap, selector: "agm-map", inputs: { longitude: "longitude", latitude: "latitude", zoom: "zoom", minZoom: "minZoom", maxZoom: "maxZoom", controlSize: "controlSize", draggable: ["mapDraggable", "draggable"], disableDoubleClickZoom: "disableDoubleClickZoom", disableDefaultUI: "disableDefaultUI", scrollwheel: "scrollwheel", backgroundColor: "backgroundColor", draggableCursor: "draggableCursor", draggingCursor: "draggingCursor", keyboardShortcuts: "keyboardShortcuts", zoomControl: "zoomControl", zoomControlOptions: "zoomControlOptions", styles: "styles", usePanning: "usePanning", streetViewControl: "streetViewControl", streetViewControlOptions: "streetViewControlOptions", fitBounds: "fitBounds", fitBoundsPadding: "fitBoundsPadding", scaleControl: "scaleControl", scaleControlOptions: "scaleControlOptions", mapTypeControl: "mapTypeControl", mapTypeControlOptions: "mapTypeControlOptions", panControl: "panControl", panControlOptions: "panControlOptions", rotateControl: "rotateControl", rotateControlOptions: "rotateControlOptions", fullscreenControl: "fullscreenControl", fullscreenControlOptions: "fullscreenControlOptions", mapTypeId: "mapTypeId", clickableIcons: "clickableIcons", showDefaultInfoWindow: "showDefaultInfoWindow", gestureHandling: "gestureHandling", tilt: "tilt", restriction: "restriction" }, outputs: { mapClick: "mapClick", mapRightClick: "mapRightClick", mapDblClick: "mapDblClick", centerChange: "centerChange", boundsChange: "boundsChange", mapTypeIdChange: "mapTypeIdChange", idle: "idle", zoomChange: "zoomChange", mapReady: "mapReady", tilesLoaded: "tilesLoaded" }, host: { properties: { "class.sebm-google-map-container": "true" } }, providers: [
            CircleManager,
            DataLayerManager,
            DataLayerManager,
            FitBoundsService,
            GoogleMapsAPIWrapper,
            InfoWindowManager,
            KmlLayerManager,
            LayerManager,
            MarkerManager,
            PolygonManager,
            PolylineManager,
            RectangleManager,
        ], usesOnChanges: true, ngImport: i0, template: `
              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>
              <div class='agm-map-content'>
                <ng-content></ng-content>
              </div>
  `, isInline: true, styles: [".agm-map-container-inner{width:inherit;height:inherit}.agm-map-content{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmMap, decorators: [{
            type: Component,
            args: [{ selector: 'agm-map', providers: [
                        CircleManager,
                        DataLayerManager,
                        DataLayerManager,
                        FitBoundsService,
                        GoogleMapsAPIWrapper,
                        InfoWindowManager,
                        KmlLayerManager,
                        LayerManager,
                        MarkerManager,
                        PolygonManager,
                        PolylineManager,
                        RectangleManager,
                    ], host: {
                        // todo: deprecated - we will remove it with the next version
                        '[class.sebm-google-map-container]': 'true',
                    }, template: `
              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>
              <div class='agm-map-content'>
                <ng-content></ng-content>
              </div>
  `, styles: [".agm-map-container-inner{width:inherit;height:inherit}.agm-map-content{display:none}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.GoogleMapsAPIWrapper }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i2.FitBoundsService }, { type: i0.NgZone }], propDecorators: { longitude: [{
                type: Input
            }], latitude: [{
                type: Input
            }], zoom: [{
                type: Input
            }], minZoom: [{
                type: Input
            }], maxZoom: [{
                type: Input
            }], controlSize: [{
                type: Input
            }], draggable: [{
                type: Input,
                args: ['mapDraggable']
            }], disableDoubleClickZoom: [{
                type: Input
            }], disableDefaultUI: [{
                type: Input
            }], scrollwheel: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], draggableCursor: [{
                type: Input
            }], draggingCursor: [{
                type: Input
            }], keyboardShortcuts: [{
                type: Input
            }], zoomControl: [{
                type: Input
            }], zoomControlOptions: [{
                type: Input
            }], styles: [{
                type: Input
            }], usePanning: [{
                type: Input
            }], streetViewControl: [{
                type: Input
            }], streetViewControlOptions: [{
                type: Input
            }], fitBounds: [{
                type: Input
            }], fitBoundsPadding: [{
                type: Input
            }], scaleControl: [{
                type: Input
            }], scaleControlOptions: [{
                type: Input
            }], mapTypeControl: [{
                type: Input
            }], mapTypeControlOptions: [{
                type: Input
            }], panControl: [{
                type: Input
            }], panControlOptions: [{
                type: Input
            }], rotateControl: [{
                type: Input
            }], rotateControlOptions: [{
                type: Input
            }], fullscreenControl: [{
                type: Input
            }], fullscreenControlOptions: [{
                type: Input
            }], mapTypeId: [{
                type: Input
            }], clickableIcons: [{
                type: Input
            }], showDefaultInfoWindow: [{
                type: Input
            }], gestureHandling: [{
                type: Input
            }], tilt: [{
                type: Input
            }], restriction: [{
                type: Input
            }], mapClick: [{
                type: Output
            }], mapRightClick: [{
                type: Output
            }], mapDblClick: [{
                type: Output
            }], centerChange: [{
                type: Output
            }], boundsChange: [{
                type: Output
            }], mapTypeIdChange: [{
                type: Output
            }], idle: [{
                type: Output
            }], zoomChange: [{
                type: Output
            }], mapReady: [{
                type: Output
            }], tilesLoaded: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXdDLE1BQU0sRUFBRSxXQUFXLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBSTdKLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBTTNFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7O0FBSTNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JHO0FBcUNILE1BQU0sT0FBTyxNQUFNO0lBcU9qQjs7T0FFRzthQUNZLDBCQUFxQixHQUFhO1FBQy9DLHdCQUF3QixFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCO1FBQ3pGLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CO1FBQ3ZGLDBCQUEwQixFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBRSxTQUFTO1FBQ3hGLFNBQVMsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLHNCQUFzQjtRQUNyRixtQkFBbUIsRUFBRSwwQkFBMEIsRUFBRSxjQUFjLEVBQUUscUJBQXFCO1FBQ3RGLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsYUFBYTtLQUN4RSxBQVBtQyxDQU9sQztJQTJERixZQUNVLEtBQWlCLEVBQ2pCLFlBQWtDLEVBQ2IsV0FBbUIsRUFDdEMsaUJBQW1DLEVBQ3JDLEtBQWE7UUFKYixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUNiLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ3RDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDckMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQTlTdkI7O1dBRUc7UUFDTSxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRXZCOztXQUVHO1FBQ00sYUFBUSxHQUFHLENBQUMsQ0FBQztRQUV0Qjs7V0FFRztRQUNNLFNBQUksR0FBRyxDQUFDLENBQUM7UUFtQmxCOztXQUVHO1FBQ0gsMkNBQTJDO1FBQ3BCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFeEM7O1dBRUc7UUFDTSwyQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFFeEM7OztXQUdHO1FBQ00scUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWxDOztXQUVHO1FBQ00sZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUF3QjVCOzs7V0FHRztRQUNNLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQVlsQzs7O1dBR0c7UUFDTSxXQUFNLEdBQW1CLEVBQUUsQ0FBQztRQUVyQzs7OztXQUlHO1FBQ00sZUFBVSxHQUFHLEtBQUssQ0FBQztRQWM1Qjs7O1dBR0c7UUFDTSxjQUFTLEdBQWlELEtBQUssQ0FBQztRQU96RTs7V0FFRztRQUNNLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBTzlCOztXQUVHO1FBQ00sbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFPaEM7O1dBRUc7UUFDTSxlQUFVLEdBQUksS0FBSyxDQUFDO1FBTzdCOztXQUVHO1FBQ00sa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFPL0I7O1dBRUc7UUFDTSxzQkFBaUIsR0FBSSxLQUFLLENBQUM7UUFPcEM7O1dBRUc7UUFDTSxjQUFTLEdBQTRELFNBQVMsQ0FBQztRQUV4Rjs7O1dBR0c7UUFDTSxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUUvQjs7Ozs7V0FLRztRQUNNLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQUV0Qzs7Ozs7OztXQU9HO1FBQ00sb0JBQWUsR0FBK0MsTUFBTSxDQUFDO1FBRTVFOzs7Ozs7Ozs7Ozs7O1dBYUc7UUFDSSxTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBbUJWLDZCQUF3QixHQUFtQixFQUFFLENBQUM7UUFHdEQ7OztXQUdHO1FBQ08sYUFBUSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBRTlFOzs7V0FHRztRQUNPLGtCQUFhLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7UUFFbkY7OztXQUdHO1FBQ08sZ0JBQVcsR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUVqRjs7V0FFRztRQUNPLGlCQUFZLEdBQWdDLElBQUksWUFBWSxFQUFpQixDQUFDO1FBRXhGOztXQUVHO1FBQ08saUJBQVksR0FBK0IsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFFdEY7O1dBRUc7UUFDTyxvQkFBZSxHQUE0QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBRW5GOztXQUVHO1FBQ08sU0FBSSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTlEOztXQUVHO1FBQ08sZUFBVSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXhFOzs7V0FHRztRQUNPLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVoRTs7V0FFRztRQUNPLGdCQUFXLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7SUFRbEUsQ0FBQztJQUVKLGdCQUFnQjtJQUNoQixRQUFRO1FBQ04sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUN2QyxnREFBZ0Q7WUFDaEQsT0FBTztRQUNULENBQUM7UUFDRCw2RUFBNkU7UUFDN0UsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxFQUFlO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUM5QixNQUFNLEVBQUUsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFDO1lBQzNELElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjtZQUNuRCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7WUFDekMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7WUFDekMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLHdCQUF3QjtZQUN2RCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUM3QyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtZQUNqRCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUN6QyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtZQUMvQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3pDLHdCQUF3QixFQUFFLElBQUksQ0FBQyx3QkFBd0I7WUFDdkQsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQzlCLENBQUM7YUFDQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXhDLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLFdBQVc7UUFDVCxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFOUQsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxDQUFDO0lBQ0gsQ0FBQztJQUVELGVBQWU7SUFDZixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLHdCQUF3QixDQUFDLE9BQXNCO1FBQ3JELElBQUksT0FBTyxHQUE4QixFQUFFLENBQUM7UUFDNUMsSUFBSSxVQUFVLEdBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGFBQWEsQ0FBQyxXQUFvQixJQUFJO1FBQ3BDLDZGQUE2RjtRQUM3Riw4RUFBOEU7UUFDOUUsZ0VBQWdFO1FBQ2hFLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDM0QsSUFBSSxRQUFRLEVBQUUsQ0FBQzt3QkFDYixJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2pFLENBQUM7b0JBQ0QsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGVBQWUsQ0FBQyxPQUFzQjtRQUM1QyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUk7WUFDM0QsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUMxQiw0QkFBNEI7WUFDNUIsT0FBTztRQUNULENBQUM7UUFFRCxpQ0FBaUM7UUFDakMsSUFBSSxXQUFXLElBQUksT0FBTyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUM1RSxPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sVUFBVTtRQUNoQixJQUFJLFNBQVMsR0FBRztZQUNkLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNsQixHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDcEIsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNILENBQUM7SUFFTyxVQUFVO1FBQ2hCLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssSUFBSTtnQkFDUCxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztnQkFDcEMsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO29CQUNoQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzVDLENBQUM7Z0JBQ0QsTUFBTTtZQUNSO2dCQUNFLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDNUMsQ0FBQztnQkFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUQsQ0FBQztJQUNILENBQUM7SUFFTyw0QkFBNEI7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDckUsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFUyxhQUFhLENBQUMsTUFBMEMsRUFBRSxPQUEwQjtRQUM1RixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDWixPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzlILE1BQU0sU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNqRCxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDckIsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMvQyxPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU8sc0JBQXNCLENBQUMsTUFBMEM7UUFDdkUsT0FBTyxNQUFNLElBQUksSUFBSSxJQUFLLE1BQWMsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO0lBQ2hFLENBQUM7SUFFTyxzQkFBc0I7UUFDNUIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBTyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDckYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFrQixDQUFDLENBQUM7WUFDckYsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFPLGdCQUFnQixDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNyRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDaEMsQ0FBQyxNQUFvQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8sc0JBQXNCO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQU8sbUJBQW1CLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3hGLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNuQyxDQUFDLFNBQW9CLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBTyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ25GLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBTyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQ3JFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTyx1QkFBdUI7UUFDN0IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBTyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQzVFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ3BDLENBQUM7UUFDRixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTyxxQkFBcUI7UUFPM0IsTUFBTSxNQUFNLEdBQVk7WUFDdEIsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ3ZDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBQztZQUNqRCxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUM7U0FDOUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFRLEVBQUUsRUFBRTtZQUMxQixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUNqRixDQUFDLEtBQXVCLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxLQUFLLEdBQWU7b0JBQ3RCLE1BQU0sRUFBRTt3QkFDTixHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7d0JBQ3ZCLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFHLEtBQTJDLENBQUMsT0FBTztpQkFDOUQsQ0FBQztnQkFDRiwyRkFBMkY7Z0JBQzNGLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUNoRCxLQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7WUFDTCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0EzakJVLE1BQU0sZ0ZBNlNQLFdBQVc7a0dBN1NWLE1BQU0sNG9EQWxDTjtZQUNULGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixvQkFBb0I7WUFDcEIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixZQUFZO1lBQ1osYUFBYTtZQUNiLGNBQWM7WUFDZCxlQUFlO1lBQ2YsZ0JBQWdCO1NBQ2pCLCtDQWNTOzs7OztHQUtUOzsyRkFFVSxNQUFNO2tCQXBDbEIsU0FBUzsrQkFDRSxTQUFTLGFBQ1I7d0JBQ1QsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGdCQUFnQjtxQkFDakIsUUFDSzt3QkFDSiw2REFBNkQ7d0JBQzdELG1DQUFtQyxFQUFFLE1BQU07cUJBQzVDLFlBVVM7Ozs7O0dBS1Q7OzBCQStTRSxNQUFNOzJCQUFDLFdBQVc7NkZBelNaLFNBQVM7c0JBQWpCLEtBQUs7Z0JBS0csUUFBUTtzQkFBaEIsS0FBSztnQkFLRyxJQUFJO3NCQUFaLEtBQUs7Z0JBTUcsT0FBTztzQkFBZixLQUFLO2dCQU1HLE9BQU87c0JBQWYsS0FBSztnQkFLRyxXQUFXO3NCQUFuQixLQUFLO2dCQU1pQixTQUFTO3NCQUEvQixLQUFLO3VCQUFDLGNBQWM7Z0JBS1osc0JBQXNCO3NCQUE5QixLQUFLO2dCQU1HLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFLRyxXQUFXO3NCQUFuQixLQUFLO2dCQU1HLGVBQWU7c0JBQXZCLEtBQUs7Z0JBUUcsZUFBZTtzQkFBdkIsS0FBSztnQkFRRyxjQUFjO3NCQUF0QixLQUFLO2dCQU1HLGlCQUFpQjtzQkFBekIsS0FBSztnQkFLRyxXQUFXO3NCQUFuQixLQUFLO2dCQUtHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFNRyxNQUFNO3NCQUFkLEtBQUs7Z0JBT0csVUFBVTtzQkFBbEIsS0FBSztnQkFPRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBS0csd0JBQXdCO3NCQUFoQyxLQUFLO2dCQU1HLFNBQVM7c0JBQWpCLEtBQUs7Z0JBS0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUtHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBS0csbUJBQW1CO3NCQUEzQixLQUFLO2dCQUtHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBS0cscUJBQXFCO3NCQUE3QixLQUFLO2dCQUtHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBS0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUtHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBS0csb0JBQW9CO3NCQUE1QixLQUFLO2dCQUtHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFLRyx3QkFBd0I7c0JBQWhDLEtBQUs7Z0JBS0csU0FBUztzQkFBakIsS0FBSztnQkFNRyxjQUFjO3NCQUF0QixLQUFLO2dCQVFHLHFCQUFxQjtzQkFBN0IsS0FBSztnQkFVRyxlQUFlO3NCQUF2QixLQUFLO2dCQWdCRyxJQUFJO3NCQUFaLEtBQUs7Z0JBTUcsV0FBVztzQkFBbkIsS0FBSztnQkFvQkksUUFBUTtzQkFBakIsTUFBTTtnQkFNRyxhQUFhO3NCQUF0QixNQUFNO2dCQU1HLFdBQVc7c0JBQXBCLE1BQU07Z0JBS0csWUFBWTtzQkFBckIsTUFBTTtnQkFLRyxZQUFZO3NCQUFyQixNQUFNO2dCQUtHLGVBQWU7c0JBQXhCLE1BQU07Z0JBS0csSUFBSTtzQkFBYixNQUFNO2dCQUtHLFVBQVU7c0JBQW5CLE1BQU07Z0JBTUcsUUFBUTtzQkFBakIsTUFBTTtnQkFLRyxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUExBVEZPUk1fSUQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBNb3VzZUV2ZW50IH0gZnJvbSAnLi4vbWFwLXR5cGVzJztcclxuaW1wb3J0IHsgRml0Qm91bmRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZpdC1ib3VuZHMnO1xyXG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcclxuaW1wb3J0IHtcclxuICBGdWxsc2NyZWVuQ29udHJvbE9wdGlvbnMsIExhdExuZywgTGF0TG5nQm91bmRzLCBMYXRMbmdCb3VuZHNMaXRlcmFsLCBMYXRMbmdMaXRlcmFsLFxyXG4gIE1hcFJlc3RyaWN0aW9uLCBNYXBUeXBlQ29udHJvbE9wdGlvbnMsIE1hcFR5cGVJZCwgTWFwVHlwZVN0eWxlLCBQYWRkaW5nLCBQYW5Db250cm9sT3B0aW9ucyxcclxuICBSb3RhdGVDb250cm9sT3B0aW9ucywgU2NhbGVDb250cm9sT3B0aW9ucywgU3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zLCBab29tQ29udHJvbE9wdGlvbnMsXHJcbn0gZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLW1hcHMtdHlwZXMnO1xyXG5pbXBvcnQgeyBDaXJjbGVNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvY2lyY2xlLW1hbmFnZXInO1xyXG5pbXBvcnQgeyBJbmZvV2luZG93TWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL2luZm8td2luZG93LW1hbmFnZXInO1xyXG5pbXBvcnQgeyBMYXllck1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9sYXllci1tYW5hZ2VyJztcclxuaW1wb3J0IHsgTWFya2VyTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL21hcmtlci1tYW5hZ2VyJztcclxuaW1wb3J0IHsgUG9seWdvbk1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5Z29uLW1hbmFnZXInO1xyXG5pbXBvcnQgeyBQb2x5bGluZU1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5bGluZS1tYW5hZ2VyJztcclxuaW1wb3J0IHsgUmVjdGFuZ2xlTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL3JlY3RhbmdsZS1tYW5hZ2VyJztcclxuaW1wb3J0IHsgRGF0YUxheWVyTWFuYWdlciB9IGZyb20gJy4vLi4vc2VydmljZXMvbWFuYWdlcnMvZGF0YS1sYXllci1tYW5hZ2VyJztcclxuaW1wb3J0IHsgS21sTGF5ZXJNYW5hZ2VyIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9tYW5hZ2Vycy9rbWwtbGF5ZXItbWFuYWdlcic7XHJcblxyXG5kZWNsYXJlIHZhciBnb29nbGU6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBBZ21NYXAgcmVuZGVycyBhIEdvb2dsZSBNYXAuXHJcbiAqICoqSW1wb3J0YW50IG5vdGUqKjogVG8gYmUgYWJsZSBzZWUgYSBtYXAgaW4gdGhlIGJyb3dzZXIsIHlvdSBoYXZlIHRvIGRlZmluZSBhIGhlaWdodCBmb3IgdGhlXHJcbiAqIGVsZW1lbnQgYGFnbS1tYXBgLlxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gKlxyXG4gKiBAQ29tcG9uZW50KHtcclxuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXHJcbiAqICBzdHlsZXM6IFtgXHJcbiAqICAgIGFnbS1tYXAge1xyXG4gKiAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAqICAgIH1cclxuICogYF0sXHJcbiAqICB0ZW1wbGF0ZTogYFxyXG4gKiAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbem9vbV09XCJ6b29tXCI+XHJcbiAqICAgIDwvYWdtLW1hcD5cclxuICogIGBcclxuICogfSlcclxuICogYGBgXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FnbS1tYXAnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ2lyY2xlTWFuYWdlcixcclxuICAgIERhdGFMYXllck1hbmFnZXIsXHJcbiAgICBEYXRhTGF5ZXJNYW5hZ2VyLFxyXG4gICAgRml0Qm91bmRzU2VydmljZSxcclxuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLFxyXG4gICAgSW5mb1dpbmRvd01hbmFnZXIsXHJcbiAgICBLbWxMYXllck1hbmFnZXIsXHJcbiAgICBMYXllck1hbmFnZXIsXHJcbiAgICBNYXJrZXJNYW5hZ2VyLFxyXG4gICAgUG9seWdvbk1hbmFnZXIsXHJcbiAgICBQb2x5bGluZU1hbmFnZXIsXHJcbiAgICBSZWN0YW5nbGVNYW5hZ2VyLFxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgLy8gdG9kbzogZGVwcmVjYXRlZCAtIHdlIHdpbGwgcmVtb3ZlIGl0IHdpdGggdGhlIG5leHQgdmVyc2lvblxyXG4gICAgJ1tjbGFzcy5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyXSc6ICd0cnVlJyxcclxuICB9LFxyXG4gIHN0eWxlczogW2BcclxuICAgIC5hZ20tbWFwLWNvbnRhaW5lci1pbm5lciB7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgICAuYWdtLW1hcC1jb250ZW50IHtcclxuICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gIGBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYWdtLW1hcC1jb250YWluZXItaW5uZXIgc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lci1pbm5lcic+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYWdtLW1hcC1jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWdtTWFwIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxvbmdpdHVkZSB0aGF0IGRlZmluZXMgdGhlIGNlbnRlciBvZiB0aGUgbWFwLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGxvbmdpdHVkZSA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBsYXRpdHVkZSB0aGF0IGRlZmluZXMgdGhlIGNlbnRlciBvZiB0aGUgbWFwLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGxhdGl0dWRlID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHpvb20gbGV2ZWwgb2YgdGhlIG1hcC4gVGhlIGRlZmF1bHQgem9vbSBsZXZlbCBpcyA4LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHpvb20gPSA4O1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbWluaW1hbCB6b29tIGxldmVsIG9mIHRoZSBtYXAgYWxsb3dlZC4gV2hlbiBub3QgcHJvdmlkZWQsIG5vIHJlc3RyaWN0aW9ucyB0byB0aGUgem9vbSBsZXZlbFxyXG4gICAqIGFyZSBlbmZvcmNlZC5cclxuICAgKi9cclxuICBASW5wdXQoKSBtaW5ab29tOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBtYXhpbWFsIHpvb20gbGV2ZWwgb2YgdGhlIG1hcCBhbGxvd2VkLiBXaGVuIG5vdCBwcm92aWRlZCwgbm8gcmVzdHJpY3Rpb25zIHRvIHRoZSB6b29tIGxldmVsXHJcbiAgICogYXJlIGVuZm9yY2VkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG1heFpvb206IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRyb2wgc2l6ZSBmb3IgdGhlIGRlZmF1bHQgbWFwIGNvbnRyb2xzLiBPbmx5IGdvdmVybnMgdGhlIGNvbnRyb2xzIG1hZGUgYnkgdGhlIE1hcHMgQVBJIGl0c2VsZlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNvbnRyb2xTaXplOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuYWJsZXMvZGlzYWJsZXMgaWYgbWFwIGlzIGRyYWdnYWJsZS5cclxuICAgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCdtYXBEcmFnZ2FibGUnKSBkcmFnZ2FibGUgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBFbmFibGVzL2Rpc2FibGVzIHpvb20gYW5kIGNlbnRlciBvbiBkb3VibGUgY2xpY2suIEVuYWJsZWQgYnkgZGVmYXVsdC5cclxuICAgKi9cclxuICBASW5wdXQoKSBkaXNhYmxlRG91YmxlQ2xpY2tab29tID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuYWJsZXMvZGlzYWJsZXMgYWxsIGRlZmF1bHQgVUkgb2YgdGhlIEdvb2dsZSBtYXAuIFBsZWFzZSBub3RlOiBXaGVuIHRoZSBtYXAgaXMgY3JlYXRlZCwgdGhpc1xyXG4gICAqIHZhbHVlIGNhbm5vdCBnZXQgdXBkYXRlZC5cclxuICAgKi9cclxuICBASW5wdXQoKSBkaXNhYmxlRGVmYXVsdFVJID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIGZhbHNlLCBkaXNhYmxlcyBzY3JvbGx3aGVlbCB6b29taW5nIG9uIHRoZSBtYXAuIFRoZSBzY3JvbGx3aGVlbCBpcyBlbmFibGVkIGJ5IGRlZmF1bHQuXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2Nyb2xsd2hlZWwgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBDb2xvciB1c2VkIGZvciB0aGUgYmFja2dyb3VuZCBvZiB0aGUgTWFwIGRpdi4gVGhpcyBjb2xvciB3aWxsIGJlIHZpc2libGUgd2hlbiB0aWxlcyBoYXZlIG5vdFxyXG4gICAqIHlldCBsb2FkZWQgYXMgdGhlIHVzZXIgcGFucy4gVGhpcyBvcHRpb24gY2FuIG9ubHkgYmUgc2V0IHdoZW4gdGhlIG1hcCBpcyBpbml0aWFsaXplZC5cclxuICAgKi9cclxuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb3IgdXJsIG9mIHRoZSBjdXJzb3IgdG8gZGlzcGxheSB3aGVuIG1vdXNpbmcgb3ZlciBhIGRyYWdnYWJsZSBtYXAuIFRoaXMgcHJvcGVydHkgdXNlc1xyXG4gICAqIHRoZSBjc3MgICogY3Vyc29yIGF0dHJpYnV0ZSB0byBjaGFuZ2UgdGhlIGljb24uIEFzIHdpdGggdGhlIGNzcyBwcm9wZXJ0eSwgeW91IG11c3Qgc3BlY2lmeSBhdFxyXG4gICAqIGxlYXN0IG9uZSBmYWxsYmFjayBjdXJzb3IgdGhhdCBpcyBub3QgYSBVUkwuIEZvciBleGFtcGxlOlxyXG4gICAqIFtkcmFnZ2FibGVDdXJzb3JdPVwiJ3VybChodHRwOi8vd3d3LmV4YW1wbGUuY29tL2ljb24ucG5nKSwgYXV0bzsnXCJcclxuICAgKi9cclxuICBASW5wdXQoKSBkcmFnZ2FibGVDdXJzb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb3IgdXJsIG9mIHRoZSBjdXJzb3IgdG8gZGlzcGxheSB3aGVuIHRoZSBtYXAgaXMgYmVpbmcgZHJhZ2dlZC4gVGhpcyBwcm9wZXJ0eSB1c2VzIHRoZVxyXG4gICAqIGNzcyBjdXJzb3IgYXR0cmlidXRlIHRvIGNoYW5nZSB0aGUgaWNvbi4gQXMgd2l0aCB0aGUgY3NzIHByb3BlcnR5LCB5b3UgbXVzdCBzcGVjaWZ5IGF0IGxlYXN0XHJcbiAgICogb25lIGZhbGxiYWNrIGN1cnNvciB0aGF0IGlzIG5vdCBhIFVSTC4gRm9yIGV4YW1wbGU6XHJcbiAgICogW2RyYWdnaW5nQ3Vyc29yXT1cIid1cmwoaHR0cDovL3d3dy5leGFtcGxlLmNvbS9pY29uLnBuZyksIGF1dG87J1wiXHJcbiAgICovXHJcbiAgQElucHV0KCkgZHJhZ2dpbmdDdXJzb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgZmFsc2UsIHByZXZlbnRzIHRoZSBtYXAgZnJvbSBiZWluZyBjb250cm9sbGVkIGJ5IHRoZSBrZXlib2FyZC4gS2V5Ym9hcmQgc2hvcnRjdXRzIGFyZVxyXG4gICAqIGVuYWJsZWQgYnkgZGVmYXVsdC5cclxuICAgKi9cclxuICBASW5wdXQoKSBrZXlib2FyZFNob3J0Y3V0cyA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBab29tIGNvbnRyb2wuXHJcbiAgICovXHJcbiAgQElucHV0KCkgem9vbUNvbnRyb2w6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wdGlvbnMgZm9yIHRoZSBab29tIGNvbnRyb2wuXHJcbiAgICovXHJcbiAgQElucHV0KCkgem9vbUNvbnRyb2xPcHRpb25zOiBab29tQ29udHJvbE9wdGlvbnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0eWxlcyB0byBhcHBseSB0byBlYWNoIG9mIHRoZSBkZWZhdWx0IG1hcCB0eXBlcy4gTm90ZSB0aGF0IGZvciBTYXRlbGxpdGUvSHlicmlkIGFuZCBUZXJyYWluXHJcbiAgICogbW9kZXMsIHRoZXNlIHN0eWxlcyB3aWxsIG9ubHkgYXBwbHkgdG8gbGFiZWxzIGFuZCBnZW9tZXRyeS5cclxuICAgKi9cclxuICBASW5wdXQoKSBzdHlsZXM6IE1hcFR5cGVTdHlsZVtdID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZW4gdHJ1ZSBhbmQgdGhlIGxhdGl0dWRlIGFuZC9vciBsb25naXR1ZGUgdmFsdWVzIGNoYW5nZXMsIHRoZSBHb29nbGUgTWFwcyBwYW5UbyBtZXRob2QgaXNcclxuICAgKiB1c2VkIHRvXHJcbiAgICogY2VudGVyIHRoZSBtYXAuIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI01hcFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHVzZVBhbm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGluaXRpYWwgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZSBvZiB0aGUgU3RyZWV0IFZpZXcgUGVnbWFuIGNvbnRyb2wuXHJcbiAgICogVGhpcyBjb250cm9sIGlzIHBhcnQgb2YgdGhlIGRlZmF1bHQgVUksIGFuZCBzaG91bGQgYmUgc2V0IHRvIGZhbHNlIHdoZW4gZGlzcGxheWluZyBhIG1hcCB0eXBlXHJcbiAgICogb24gd2hpY2ggdGhlIFN0cmVldCBWaWV3IHJvYWQgb3ZlcmxheSBzaG91bGQgbm90IGFwcGVhciAoZS5nLiBhIG5vbi1FYXJ0aCBtYXAgdHlwZSkuXHJcbiAgICovXHJcbiAgQElucHV0KCkgc3RyZWV0Vmlld0NvbnRyb2w6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wdGlvbnMgZm9yIHRoZSBTdHJlZXQgVmlldyBjb250cm9sLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHN0cmVldFZpZXdDb250cm9sT3B0aW9uczogU3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zO1xyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSB2aWV3cG9ydCB0byBjb250YWluIHRoZSBnaXZlbiBib3VuZHMuXHJcbiAgICogSWYgdGhpcyBvcHRpb24gdG8gYHRydWVgLCB0aGUgYm91bmRzIGdldCBhdXRvbWF0aWNhbGx5IGNvbXB1dGVkIGZyb20gYWxsIGVsZW1lbnRzIHRoYXQgdXNlIHRoZSB7QGxpbmsgQWdtRml0Qm91bmRzfSBkaXJlY3RpdmUuXHJcbiAgICovXHJcbiAgQElucHV0KCkgZml0Qm91bmRzOiBMYXRMbmdCb3VuZHNMaXRlcmFsIHwgTGF0TG5nQm91bmRzIHwgYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBQYWRkaW5nIGFtb3VudCBmb3IgdGhlIGJvdW5kcy5cclxuICAgKi9cclxuICBASW5wdXQoKSBmaXRCb3VuZHNQYWRkaW5nOiBudW1iZXIgfCBQYWRkaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgaW5pdGlhbCBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBTY2FsZSBjb250cm9sLiBUaGlzIGlzIGRpc2FibGVkIGJ5IGRlZmF1bHQuXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2NhbGVDb250cm9sID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wdGlvbnMgZm9yIHRoZSBzY2FsZSBjb250cm9sLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNjYWxlQ29udHJvbE9wdGlvbnM6IFNjYWxlQ29udHJvbE9wdGlvbnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIE1hcCB0eXBlIGNvbnRyb2wuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbWFwVHlwZUNvbnRyb2wgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogT3B0aW9ucyBmb3IgdGhlIE1hcCB0eXBlIGNvbnRyb2wuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbWFwVHlwZUNvbnRyb2xPcHRpb25zOiBNYXBUeXBlQ29udHJvbE9wdGlvbnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIFBhbiBjb250cm9sLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHBhbkNvbnRyb2wgID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wdGlvbnMgZm9yIHRoZSBQYW4gY29udHJvbC5cclxuICAgKi9cclxuICBASW5wdXQoKSBwYW5Db250cm9sT3B0aW9uczogUGFuQ29udHJvbE9wdGlvbnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIFJvdGF0ZSBjb250cm9sLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHJvdGF0ZUNvbnRyb2wgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogT3B0aW9ucyBmb3IgdGhlIFJvdGF0ZSBjb250cm9sLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHJvdGF0ZUNvbnRyb2xPcHRpb25zOiBSb3RhdGVDb250cm9sT3B0aW9ucztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGluaXRpYWwgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZSBvZiB0aGUgRnVsbHNjcmVlbiBjb250cm9sLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW5Db250cm9sICA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBPcHRpb25zIGZvciB0aGUgRnVsbHNjcmVlbiBjb250cm9sLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW5Db250cm9sT3B0aW9uczogRnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbWFwIG1hcFR5cGVJZC4gRGVmYXVsdHMgdG8gJ3JvYWRtYXAnLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG1hcFR5cGVJZDogJ3JvYWRtYXAnIHwgJ2h5YnJpZCcgfCAnc2F0ZWxsaXRlJyB8ICd0ZXJyYWluJyB8IHN0cmluZyA9ICdyb2FkbWFwJztcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiBmYWxzZSwgbWFwIGljb25zIGFyZSBub3QgY2xpY2thYmxlLiBBIG1hcCBpY29uIHJlcHJlc2VudHMgYSBwb2ludCBvZiBpbnRlcmVzdCxcclxuICAgKiBhbHNvIGtub3duIGFzIGEgUE9JLiBCeSBkZWZhdWx0IG1hcCBpY29ucyBhcmUgY2xpY2thYmxlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNsaWNrYWJsZUljb25zID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBtYXAgaWNvbiByZXByZXNlbnRzIGEgcG9pbnQgb2YgaW50ZXJlc3QsIGFsc28ga25vd24gYXMgYSBQT0kuXHJcbiAgICogV2hlbiBtYXAgaWNvbnMgYXJlIGNsaWNrYWJsZSBieSBkZWZhdWx0LCBhbiBpbmZvIHdpbmRvdyBpcyBkaXNwbGF5ZWQuXHJcbiAgICogV2hlbiB0aGlzIHByb3BlcnR5IGlzIHNldCB0byBmYWxzZSwgdGhlIGluZm8gd2luZG93IHdpbGwgbm90IGJlIHNob3duIGJ1dCB0aGUgY2xpY2sgZXZlbnRcclxuICAgKiB3aWxsIHN0aWxsIGZpcmVcclxuICAgKi9cclxuICBASW5wdXQoKSBzaG93RGVmYXVsdEluZm9XaW5kb3cgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIHNldHRpbmcgY29udHJvbHMgaG93IGdlc3R1cmVzIG9uIHRoZSBtYXAgYXJlIGhhbmRsZWQuXHJcbiAgICogQWxsb3dlZCB2YWx1ZXM6XHJcbiAgICogLSAnY29vcGVyYXRpdmUnIChUd28tZmluZ2VyIHRvdWNoIGdlc3R1cmVzIHBhbiBhbmQgem9vbSB0aGUgbWFwLiBPbmUtZmluZ2VyIHRvdWNoIGdlc3R1cmVzIGFyZSBub3QgaGFuZGxlZCBieSB0aGUgbWFwLilcclxuICAgKiAtICdncmVlZHknICAgICAgKEFsbCB0b3VjaCBnZXN0dXJlcyBwYW4gb3Igem9vbSB0aGUgbWFwLilcclxuICAgKiAtICdub25lJyAgICAgICAgKFRoZSBtYXAgY2Fubm90IGJlIHBhbm5lZCBvciB6b29tZWQgYnkgdXNlciBnZXN0dXJlcy4pXHJcbiAgICogLSAnYXV0bycgICAgICAgIFtkZWZhdWx0XSAoR2VzdHVyZSBoYW5kbGluZyBpcyBlaXRoZXIgY29vcGVyYXRpdmUgb3IgZ3JlZWR5LCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgcGFnZSBpcyBzY3JvbGxhYmxlIG9yIG5vdC5cclxuICAgKi9cclxuICBASW5wdXQoKSBnZXN0dXJlSGFuZGxpbmc6ICdjb29wZXJhdGl2ZScgfCAnZ3JlZWR5JyB8ICdub25lJyB8ICdhdXRvJyA9ICdhdXRvJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnRyb2xzIHRoZSBhdXRvbWF0aWMgc3dpdGNoaW5nIGJlaGF2aW9yIGZvciB0aGUgYW5nbGUgb2YgaW5jaWRlbmNlIG9mXHJcbiAgICAgKiB0aGUgbWFwLiBUaGUgb25seSBhbGxvd2VkIHZhbHVlcyBhcmUgMCBhbmQgNDUuIFRoZSB2YWx1ZSAwIGNhdXNlcyB0aGUgbWFwXHJcbiAgICAgKiB0byBhbHdheXMgdXNlIGEgMMKwIG92ZXJoZWFkIHZpZXcgcmVnYXJkbGVzcyBvZiB0aGUgem9vbSBsZXZlbCBhbmRcclxuICAgICAqIHZpZXdwb3J0LiBUaGUgdmFsdWUgNDUgY2F1c2VzIHRoZSB0aWx0IGFuZ2xlIHRvIGF1dG9tYXRpY2FsbHkgc3dpdGNoIHRvXHJcbiAgICAgKiA0NSB3aGVuZXZlciA0NcKwIGltYWdlcnkgaXMgYXZhaWxhYmxlIGZvciB0aGUgY3VycmVudCB6b29tIGxldmVsIGFuZFxyXG4gICAgICogdmlld3BvcnQsIGFuZCBzd2l0Y2ggYmFjayB0byAwIHdoZW5ldmVyIDQ1wrAgaW1hZ2VyeSBpcyBub3QgYXZhaWxhYmxlXHJcbiAgICAgKiAodGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvcikuIDQ1wrAgaW1hZ2VyeSBpcyBvbmx5IGF2YWlsYWJsZSBmb3JcclxuICAgICAqIHNhdGVsbGl0ZSBhbmQgaHlicmlkIG1hcCB0eXBlcywgd2l0aGluIHNvbWUgbG9jYXRpb25zLCBhbmQgYXQgc29tZSB6b29tXHJcbiAgICAgKiBsZXZlbHMuIE5vdGU6IGdldFRpbHQgcmV0dXJucyB0aGUgY3VycmVudCB0aWx0IGFuZ2xlLCBub3QgdGhlIHZhbHVlXHJcbiAgICAgKiBzcGVjaWZpZWQgYnkgdGhpcyBvcHRpb24uIEJlY2F1c2UgZ2V0VGlsdCBhbmQgdGhpcyBvcHRpb24gcmVmZXIgdG9cclxuICAgICAqIGRpZmZlcmVudCB0aGluZ3MsIGRvIG5vdCBiaW5kKCkgdGhlIHRpbHQgcHJvcGVydHk7IGRvaW5nIHNvIG1heSB5aWVsZFxyXG4gICAgICogdW5wcmVkaWN0YWJsZSBlZmZlY3RzLiAoRGVmYXVsdCBvZiBBR00gaXMgMCAoZGlzYWJsZWQpLiBFbmFibGUgaXQgd2l0aCB2YWx1ZSA0NS4pXHJcbiAgICAgKi9cclxuICBASW5wdXQoKSB0aWx0ID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogT3B0aW9ucyBmb3IgcmVzdHJpY3RpbmcgdGhlIGJvdW5kcyBvZiB0aGUgbWFwLlxyXG4gICAqIFVzZXIgY2Fubm90IHBhbiBvciB6b29tIGF3YXkgZnJvbSByZXN0cmljdGVkIGFyZWEuXHJcbiAgICovXHJcbiAgQElucHV0KCkgcmVzdHJpY3Rpb246IE1hcFJlc3RyaWN0aW9uO1xyXG4gIC8qKlxyXG4gICAqIE1hcCBvcHRpb24gYXR0cmlidXRlcyB0aGF0IGNhbiBjaGFuZ2Ugb3ZlciB0aW1lXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgX21hcE9wdGlvbnNBdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFtcclxuICAgICdkaXNhYmxlRG91YmxlQ2xpY2tab29tJywgJ3Njcm9sbHdoZWVsJywgJ2RyYWdnYWJsZScsICdkcmFnZ2FibGVDdXJzb3InLCAnZHJhZ2dpbmdDdXJzb3InLFxyXG4gICAgJ2tleWJvYXJkU2hvcnRjdXRzJywgJ3pvb21Db250cm9sJywgJ3pvb21Db250cm9sT3B0aW9ucycsICdzdHlsZXMnLCAnc3RyZWV0Vmlld0NvbnRyb2wnLFxyXG4gICAgJ3N0cmVldFZpZXdDb250cm9sT3B0aW9ucycsICd6b29tJywgJ21hcFR5cGVDb250cm9sJywgJ21hcFR5cGVDb250cm9sT3B0aW9ucycsICdtaW5ab29tJyxcclxuICAgICdtYXhab29tJywgJ3BhbkNvbnRyb2wnLCAncGFuQ29udHJvbE9wdGlvbnMnLCAncm90YXRlQ29udHJvbCcsICdyb3RhdGVDb250cm9sT3B0aW9ucycsXHJcbiAgICAnZnVsbHNjcmVlbkNvbnRyb2wnLCAnZnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zJywgJ3NjYWxlQ29udHJvbCcsICdzY2FsZUNvbnRyb2xPcHRpb25zJyxcclxuICAgICdtYXBUeXBlSWQnLCAnY2xpY2thYmxlSWNvbnMnLCAnZ2VzdHVyZUhhbmRsaW5nJywgJ3RpbHQnLCAncmVzdHJpY3Rpb24nLFxyXG4gIF07XHJcblxyXG4gIHByaXZhdGUgX29ic2VydmFibGVTdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG4gIHByaXZhdGUgX2ZpdEJvdW5kc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrIG9uIGFcclxuICAgKiBtYXJrZXIgb3IgaW5mb1dpbmRvdykuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIG1hcENsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciByaWdodC1jbGlja3Mgb24gdGhlIG1hcCAoYnV0IG5vdCB3aGVuIHRoZXkgY2xpY2tcclxuICAgKiBvbiBhIG1hcmtlciBvciBpbmZvV2luZG93KS5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgbWFwUmlnaHRDbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgZG91YmxlLWNsaWNrcyBvbiB0aGUgbWFwIChidXQgbm90IHdoZW4gdGhleSBjbGlja1xyXG4gICAqIG9uIGEgbWFya2VyIG9yIGluZm9XaW5kb3cpLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBtYXBEYmxDbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgaXMgZmlyZWQgd2hlbiB0aGUgbWFwIGNlbnRlciBjaGFuZ2VzLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBjZW50ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxMYXRMbmdMaXRlcmFsPiA9IG5ldyBFdmVudEVtaXR0ZXI8TGF0TG5nTGl0ZXJhbD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB2aWV3cG9ydCBib3VuZHMgaGF2ZSBjaGFuZ2VkLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBib3VuZHNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxMYXRMbmdCb3VuZHM+ID0gbmV3IEV2ZW50RW1pdHRlcjxMYXRMbmdCb3VuZHM+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgbWFwVHlwZUlkIHByb3BlcnR5IGNoYW5nZXMuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIG1hcFR5cGVJZENoYW5nZTogRXZlbnRFbWl0dGVyPE1hcFR5cGVJZD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFR5cGVJZD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBtYXAgYmVjb21lcyBpZGxlIGFmdGVyIHBhbm5pbmcgb3Igem9vbWluZy5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgaWRsZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHpvb20gbGV2ZWwgaGFzIGNoYW5nZWQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHpvb21DaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgZ29vZ2xlIG1hcCBpcyBmdWxseSBpbml0aWFsaXplZC5cclxuICAgKiBZb3UgZ2V0IHRoZSBnb29nbGUubWFwcy5NYXAgaW5zdGFuY2UgYXMgYSByZXN1bHQgb2YgdGhpcyBFdmVudEVtaXR0ZXIuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIG1hcFJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHZpc2libGUgdGlsZXMgaGF2ZSBmaW5pc2hlZCBsb2FkaW5nLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSB0aWxlc0xvYWRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VsZW06IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIF9tYXBzV3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIF9wbGF0Zm9ybUlkOiBPYmplY3QsXHJcbiAgICBwcm90ZWN0ZWQgX2ZpdEJvdW5kc1NlcnZpY2U6IEZpdEJvdW5kc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmVcclxuICApIHt9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMuX3BsYXRmb3JtSWQpKSB7XHJcbiAgICAgIC8vIFRoZSBjb2RlIGlzIHJ1bm5pbmcgb24gdGhlIHNlcnZlciwgZG8gbm90aGluZ1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyB0b2RvOiB0aGlzIHNob3VsZCBiZSBzb2x2ZWQgd2l0aCBhIG5ldyBjb21wb25lbnQgYW5kIGEgdmlld0NoaWxkIGRlY29yYXRvclxyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZ20tbWFwLWNvbnRhaW5lci1pbm5lcicpO1xyXG4gICAgdGhpcy5faW5pdE1hcEluc3RhbmNlKGNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0TWFwSW5zdGFuY2UoZWw6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLl9tYXBzV3JhcHBlci5jcmVhdGVNYXAoZWwsIHtcclxuICAgICAgY2VudGVyOiB7bGF0OiB0aGlzLmxhdGl0dWRlIHx8IDAsIGxuZzogdGhpcy5sb25naXR1ZGUgfHwgMH0sXHJcbiAgICAgIHpvb206IHRoaXMuem9vbSxcclxuICAgICAgbWluWm9vbTogdGhpcy5taW5ab29tLFxyXG4gICAgICBtYXhab29tOiB0aGlzLm1heFpvb20sXHJcbiAgICAgIGNvbnRyb2xTaXplOiB0aGlzLmNvbnRyb2xTaXplLFxyXG4gICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0aGlzLmRpc2FibGVEZWZhdWx0VUksXHJcbiAgICAgIGRpc2FibGVEb3VibGVDbGlja1pvb206IHRoaXMuZGlzYWJsZURvdWJsZUNsaWNrWm9vbSxcclxuICAgICAgc2Nyb2xsd2hlZWw6IHRoaXMuc2Nyb2xsd2hlZWwsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGUsXHJcbiAgICAgIGRyYWdnYWJsZUN1cnNvcjogdGhpcy5kcmFnZ2FibGVDdXJzb3IsXHJcbiAgICAgIGRyYWdnaW5nQ3Vyc29yOiB0aGlzLmRyYWdnaW5nQ3Vyc29yLFxyXG4gICAgICBrZXlib2FyZFNob3J0Y3V0czogdGhpcy5rZXlib2FyZFNob3J0Y3V0cyxcclxuICAgICAgc3R5bGVzOiB0aGlzLnN0eWxlcyxcclxuICAgICAgem9vbUNvbnRyb2w6IHRoaXMuem9vbUNvbnRyb2wsXHJcbiAgICAgIHpvb21Db250cm9sT3B0aW9uczogdGhpcy56b29tQ29udHJvbE9wdGlvbnMsXHJcbiAgICAgIHN0cmVldFZpZXdDb250cm9sOiB0aGlzLnN0cmVldFZpZXdDb250cm9sLFxyXG4gICAgICBzdHJlZXRWaWV3Q29udHJvbE9wdGlvbnM6IHRoaXMuc3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zLFxyXG4gICAgICBzY2FsZUNvbnRyb2w6IHRoaXMuc2NhbGVDb250cm9sLFxyXG4gICAgICBzY2FsZUNvbnRyb2xPcHRpb25zOiB0aGlzLnNjYWxlQ29udHJvbE9wdGlvbnMsXHJcbiAgICAgIG1hcFR5cGVDb250cm9sOiB0aGlzLm1hcFR5cGVDb250cm9sLFxyXG4gICAgICBtYXBUeXBlQ29udHJvbE9wdGlvbnM6IHRoaXMubWFwVHlwZUNvbnRyb2xPcHRpb25zLFxyXG4gICAgICBwYW5Db250cm9sOiB0aGlzLnBhbkNvbnRyb2wsXHJcbiAgICAgIHBhbkNvbnRyb2xPcHRpb25zOiB0aGlzLnBhbkNvbnRyb2xPcHRpb25zLFxyXG4gICAgICByb3RhdGVDb250cm9sOiB0aGlzLnJvdGF0ZUNvbnRyb2wsXHJcbiAgICAgIHJvdGF0ZUNvbnRyb2xPcHRpb25zOiB0aGlzLnJvdGF0ZUNvbnRyb2xPcHRpb25zLFxyXG4gICAgICBmdWxsc2NyZWVuQ29udHJvbDogdGhpcy5mdWxsc2NyZWVuQ29udHJvbCxcclxuICAgICAgZnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zOiB0aGlzLmZ1bGxzY3JlZW5Db250cm9sT3B0aW9ucyxcclxuICAgICAgbWFwVHlwZUlkOiB0aGlzLm1hcFR5cGVJZCxcclxuICAgICAgY2xpY2thYmxlSWNvbnM6IHRoaXMuY2xpY2thYmxlSWNvbnMsXHJcbiAgICAgIGdlc3R1cmVIYW5kbGluZzogdGhpcy5nZXN0dXJlSGFuZGxpbmcsXHJcbiAgICAgIHRpbHQ6IHRoaXMudGlsdCxcclxuICAgICAgcmVzdHJpY3Rpb246IHRoaXMucmVzdHJpY3Rpb24sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLl9tYXBzV3JhcHBlci5nZXROYXRpdmVNYXAoKSlcclxuICAgICAgLnRoZW4obWFwID0+IHRoaXMubWFwUmVhZHkuZW1pdChtYXApKTtcclxuXHJcbiAgICAvLyByZWdpc3RlciBldmVudCBsaXN0ZW5lcnNcclxuICAgIHRoaXMuX2hhbmRsZU1hcENlbnRlckNoYW5nZSgpO1xyXG4gICAgdGhpcy5faGFuZGxlTWFwWm9vbUNoYW5nZSgpO1xyXG4gICAgdGhpcy5faGFuZGxlTWFwTW91c2VFdmVudHMoKTtcclxuICAgIHRoaXMuX2hhbmRsZUJvdW5kc0NoYW5nZSgpO1xyXG4gICAgdGhpcy5faGFuZGxlTWFwVHlwZUlkQ2hhbmdlKCk7XHJcbiAgICB0aGlzLl9oYW5kbGVUaWxlc0xvYWRlZEV2ZW50KCk7XHJcbiAgICB0aGlzLl9oYW5kbGVJZGxlRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIHVuc3Vic2NyaWJlIGFsbCByZWdpc3RlcmVkIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uc1xyXG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMuZm9yRWFjaCgocykgPT4gcy51bnN1YnNjcmliZSgpKTtcclxuXHJcbiAgICAvLyByZW1vdmUgYWxsIGxpc3RlbmVycyBmcm9tIHRoZSBtYXAgaW5zdGFuY2VcclxuICAgIHRoaXMuX21hcHNXcmFwcGVyLmNsZWFySW5zdGFuY2VMaXN0ZW5lcnMoKTtcclxuICAgIGlmICh0aGlzLl9maXRCb3VuZHNTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fZml0Qm91bmRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBAaW50ZXJuYWwgKi9cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICB0aGlzLl91cGRhdGVNYXBPcHRpb25zQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXBkYXRlTWFwT3B0aW9uc0NoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgbGV0IG9wdGlvbnM6IHtbcHJvcE5hbWU6IHN0cmluZ106IGFueX0gPSB7fTtcclxuICAgIGxldCBvcHRpb25LZXlzID1cclxuICAgICAgT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKGsgPT4gQWdtTWFwLl9tYXBPcHRpb25zQXR0cmlidXRlcy5pbmRleE9mKGspICE9PSAtMSk7XHJcbiAgICBvcHRpb25LZXlzLmZvckVhY2goKGspID0+IHsgb3B0aW9uc1trXSA9IGNoYW5nZXNba10uY3VycmVudFZhbHVlOyB9KTtcclxuICAgIHRoaXMuX21hcHNXcmFwcGVyLnNldE1hcE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VycyBhIHJlc2l6ZSBldmVudCBvbiB0aGUgZ29vZ2xlIG1hcCBpbnN0YW5jZS5cclxuICAgKiBXaGVuIHJlY2VudGVyIGlzIHRydWUsIHRoZSBvZiB0aGUgZ29vZ2xlIG1hcCBnZXRzIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IGxhdC9sbmcgdmFsdWVzIG9yIGZpdEJvdW5kcyB2YWx1ZSB0byByZWNlbnRlciB0aGUgbWFwLlxyXG4gICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgZ2V0cyByZXNvbHZlZCBhZnRlciB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZC5cclxuICAgKi9cclxuICB0cmlnZ2VyUmVzaXplKHJlY2VudGVyOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgLy8gTm90ZTogV2hlbiB3ZSB3b3VsZCB0cmlnZ2VyIHRoZSByZXNpemUgZXZlbnQgYW5kIHNob3cgdGhlIG1hcCBpbiB0aGUgc2FtZSB0dXJuICh3aGljaCBpcyBhXHJcbiAgICAvLyBjb21tb24gY2FzZSBmb3IgdHJpZ2dlcmluZyBhIHJlc2l6ZSBldmVudCksIHRoZW4gdGhlIHJlc2l6ZSBldmVudCB3b3VsZCBub3RcclxuICAgIC8vIHdvcmsgKHRvIHNob3cgdGhlIG1hcCksIHNvIHdlIHRyaWdnZXIgdGhlIGV2ZW50IGluIGEgdGltZW91dC5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFwc1dyYXBwZXIudHJpZ2dlck1hcEV2ZW50KCdyZXNpemUnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGlmIChyZWNlbnRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmZpdEJvdW5kcyAhPSBudWxsID8gdGhpcy5fZml0Qm91bmRzKCkgOiB0aGlzLl9zZXRDZW50ZXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZVBvc2l0aW9uKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzWydsYXRpdHVkZSddID09IG51bGwgJiYgY2hhbmdlc1snbG9uZ2l0dWRlJ10gPT0gbnVsbCAmJlxyXG4gICAgICAgICFjaGFuZ2VzWydmaXRCb3VuZHMnXSkge1xyXG4gICAgICAvLyBubyBwb3NpdGlvbiB1cGRhdGUgbmVlZGVkXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSBwcmVmZXIgZml0Qm91bmRzIGluIGNoYW5nZXNcclxuICAgIGlmICgnZml0Qm91bmRzJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMuX2ZpdEJvdW5kcygpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmxhdGl0dWRlICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgdGhpcy5sb25naXR1ZGUgIT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX3NldENlbnRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0Q2VudGVyKCkge1xyXG4gICAgbGV0IG5ld0NlbnRlciA9IHtcclxuICAgICAgbGF0OiB0aGlzLmxhdGl0dWRlLFxyXG4gICAgICBsbmc6IHRoaXMubG9uZ2l0dWRlLFxyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLnVzZVBhbm5pbmcpIHtcclxuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIucGFuVG8obmV3Q2VudGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX21hcHNXcmFwcGVyLnNldENlbnRlcihuZXdDZW50ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZml0Qm91bmRzKCkge1xyXG4gICAgc3dpdGNoICh0aGlzLmZpdEJvdW5kcykge1xyXG4gICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlVG9GaXRCb3VuZHNVcGRhdGVzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZpdEJvdW5kc1N1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5fZml0Qm91bmRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGlmICh0aGlzLl9maXRCb3VuZHNTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgIHRoaXMuX2ZpdEJvdW5kc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91cGRhdGVCb3VuZHModGhpcy5maXRCb3VuZHMsIHRoaXMuZml0Qm91bmRzUGFkZGluZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpYmVUb0ZpdEJvdW5kc1VwZGF0ZXMoKSB7XHJcbiAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgdGhpcy5fZml0Qm91bmRzU3Vic2NyaXB0aW9uID0gdGhpcy5fZml0Qm91bmRzU2VydmljZS5nZXRCb3VuZHMkKCkuc3Vic2NyaWJlKGIgPT4ge1xyXG4gICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHRoaXMuX3VwZGF0ZUJvdW5kcyhiLCB0aGlzLmZpdEJvdW5kc1BhZGRpbmcpKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfdXBkYXRlQm91bmRzKGJvdW5kczogTGF0TG5nQm91bmRzIHwgTGF0TG5nQm91bmRzTGl0ZXJhbCwgcGFkZGluZz86IG51bWJlciB8IFBhZGRpbmcpIHtcclxuICAgIGlmICghYm91bmRzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9pc0xhdExuZ0JvdW5kc0xpdGVyYWwoYm91bmRzKSAmJiB0eXBlb2YgZ29vZ2xlICE9PSAndW5kZWZpbmVkJyAmJiBnb29nbGUgJiYgZ29vZ2xlLm1hcHMgJiYgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKSB7XHJcbiAgICAgIGNvbnN0IG5ld0JvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcclxuICAgICAgbmV3Qm91bmRzLnVuaW9uKGJvdW5kcyk7XHJcbiAgICAgIGJvdW5kcyA9IG5ld0JvdW5kcztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnVzZVBhbm5pbmcpIHtcclxuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIucGFuVG9Cb3VuZHMoYm91bmRzLCBwYWRkaW5nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbWFwc1dyYXBwZXIuZml0Qm91bmRzKGJvdW5kcywgcGFkZGluZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pc0xhdExuZ0JvdW5kc0xpdGVyYWwoYm91bmRzOiBMYXRMbmdCb3VuZHMgfCBMYXRMbmdCb3VuZHNMaXRlcmFsKTogYm91bmRzIGlzIExhdExuZ0JvdW5kc0xpdGVyYWwge1xyXG4gICAgcmV0dXJuIGJvdW5kcyAhPSBudWxsICYmIChib3VuZHMgYXMgYW55KS5leHRlbmQgPT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hhbmRsZU1hcENlbnRlckNoYW5nZSgpIHtcclxuICAgIGNvbnN0IHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50PHZvaWQ+KCdjZW50ZXJfY2hhbmdlZCcpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX21hcHNXcmFwcGVyLmdldENlbnRlcigpLnRoZW4oKGNlbnRlcjogTGF0TG5nKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IGNlbnRlci5sYXQoKTtcclxuICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IGNlbnRlci5sbmcoKTtcclxuICAgICAgICB0aGlzLmNlbnRlckNoYW5nZS5lbWl0KHtsYXQ6IHRoaXMubGF0aXR1ZGUsIGxuZzogdGhpcy5sb25naXR1ZGV9IGFzIExhdExuZ0xpdGVyYWwpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hhbmRsZUJvdW5kc0NoYW5nZSgpIHtcclxuICAgIGNvbnN0IHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50PHZvaWQ+KCdib3VuZHNfY2hhbmdlZCcpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX21hcHNXcmFwcGVyLmdldEJvdW5kcygpLnRoZW4oXHJcbiAgICAgICAgKGJvdW5kczogTGF0TG5nQm91bmRzKSA9PiB7IHRoaXMuYm91bmRzQ2hhbmdlLmVtaXQoYm91bmRzKTsgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2gocyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oYW5kbGVNYXBUeXBlSWRDaGFuZ2UoKSB7XHJcbiAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudDx2b2lkPignbWFwdHlwZWlkX2NoYW5nZWQnKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5nZXRNYXBUeXBlSWQoKS50aGVuKFxyXG4gICAgICAgIChtYXBUeXBlSWQ6IE1hcFR5cGVJZCkgPT4geyB0aGlzLm1hcFR5cGVJZENoYW5nZS5lbWl0KG1hcFR5cGVJZCk7IH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGFuZGxlTWFwWm9vbUNoYW5nZSgpIHtcclxuICAgIGNvbnN0IHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50PHZvaWQ+KCd6b29tX2NoYW5nZWQnKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5nZXRab29tKCkudGhlbigoejogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy56b29tID0gejtcclxuICAgICAgICB0aGlzLnpvb21DaGFuZ2UuZW1pdCh6KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2gocyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oYW5kbGVJZGxlRXZlbnQoKSB7XHJcbiAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudDx2b2lkPignaWRsZScpLnN1YnNjcmliZShcclxuICAgICAgKCkgPT4geyB0aGlzLmlkbGUuZW1pdCh2b2lkIDApOyB9KTtcclxuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2gocyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oYW5kbGVUaWxlc0xvYWRlZEV2ZW50KCkge1xyXG4gICAgY29uc3QgcyA9IHRoaXMuX21hcHNXcmFwcGVyLnN1YnNjcmliZVRvTWFwRXZlbnQ8dm9pZD4oJ3RpbGVzbG9hZGVkJykuc3Vic2NyaWJlKFxyXG4gICAgICAoKSA9PiB0aGlzLnRpbGVzTG9hZGVkLmVtaXQodm9pZCAwKSxcclxuICAgICk7XHJcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGFuZGxlTWFwTW91c2VFdmVudHMoKSB7XHJcbiAgICBpbnRlcmZhY2UgRW1pdHRlciB7XHJcbiAgICAgIGVtaXQodmFsdWU6IGFueSk6IHZvaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdHlwZSBFdmVudCA9IHsgbmFtZTogc3RyaW5nLCBlbWl0dGVyOiBFbWl0dGVyIH07XHJcblxyXG4gICAgY29uc3QgZXZlbnRzOiBFdmVudFtdID0gW1xyXG4gICAgICB7bmFtZTogJ2NsaWNrJywgZW1pdHRlcjogdGhpcy5tYXBDbGlja30sXHJcbiAgICAgIHtuYW1lOiAncmlnaHRjbGljaycsIGVtaXR0ZXI6IHRoaXMubWFwUmlnaHRDbGlja30sXHJcbiAgICAgIHtuYW1lOiAnZGJsY2xpY2snLCBlbWl0dGVyOiB0aGlzLm1hcERibENsaWNrfSxcclxuICAgIF07XHJcblxyXG4gICAgZXZlbnRzLmZvckVhY2goKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50PHtsYXRMbmc6IExhdExuZ30+KGUubmFtZSkuc3Vic2NyaWJlKFxyXG4gICAgICAgIChldmVudDoge2xhdExuZzogTGF0TG5nfSkgPT4ge1xyXG4gICAgICAgICAgbGV0IHZhbHVlOiBNb3VzZUV2ZW50ID0ge1xyXG4gICAgICAgICAgICBjb29yZHM6IHtcclxuICAgICAgICAgICAgICBsYXQ6IGV2ZW50LmxhdExuZy5sYXQoKSxcclxuICAgICAgICAgICAgICBsbmc6IGV2ZW50LmxhdExuZy5sbmcoKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxhY2VJZDogKGV2ZW50IGFzIHtsYXRMbmc6IExhdExuZywgcGxhY2VJZDogc3RyaW5nfSkucGxhY2VJZCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICAvLyB0aGUgcGxhY2VJZCB3aWxsIGJlIHVuZGVmaW5lZCBpbiBjYXNlIHRoZSBldmVudCB3YXMgbm90IGFuIEljb25Nb3VzZUV2ZW50IChnb29nbGUgdHlwZXMpXHJcbiAgICAgICAgICBpZiAodmFsdWUucGxhY2VJZCAmJiAhdGhpcy5zaG93RGVmYXVsdEluZm9XaW5kb3cpIHtcclxuICAgICAgICAgICAgKGV2ZW50IGFzIGFueSkuc3RvcCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZS5lbWl0dGVyLmVtaXQodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==