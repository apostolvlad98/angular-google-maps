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
const _c0 = ["*"];
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
    static { this.ɵfac = function AgmMap_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AgmMap)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.GoogleMapsAPIWrapper), i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i2.FitBoundsService), i0.ɵɵdirectiveInject(i0.NgZone)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AgmMap, selectors: [["agm-map"]], hostVars: 2, hostBindings: function AgmMap_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("sebm-google-map-container", true);
        } }, inputs: { longitude: "longitude", latitude: "latitude", zoom: "zoom", minZoom: "minZoom", maxZoom: "maxZoom", controlSize: "controlSize", draggable: [0, "mapDraggable", "draggable"], disableDoubleClickZoom: "disableDoubleClickZoom", disableDefaultUI: "disableDefaultUI", scrollwheel: "scrollwheel", backgroundColor: "backgroundColor", draggableCursor: "draggableCursor", draggingCursor: "draggingCursor", keyboardShortcuts: "keyboardShortcuts", zoomControl: "zoomControl", zoomControlOptions: "zoomControlOptions", styles: "styles", usePanning: "usePanning", streetViewControl: "streetViewControl", streetViewControlOptions: "streetViewControlOptions", fitBounds: "fitBounds", fitBoundsPadding: "fitBoundsPadding", scaleControl: "scaleControl", scaleControlOptions: "scaleControlOptions", mapTypeControl: "mapTypeControl", mapTypeControlOptions: "mapTypeControlOptions", panControl: "panControl", panControlOptions: "panControlOptions", rotateControl: "rotateControl", rotateControlOptions: "rotateControlOptions", fullscreenControl: "fullscreenControl", fullscreenControlOptions: "fullscreenControlOptions", mapTypeId: "mapTypeId", clickableIcons: "clickableIcons", showDefaultInfoWindow: "showDefaultInfoWindow", gestureHandling: "gestureHandling", tilt: "tilt", restriction: "restriction" }, outputs: { mapClick: "mapClick", mapRightClick: "mapRightClick", mapDblClick: "mapDblClick", centerChange: "centerChange", boundsChange: "boundsChange", mapTypeIdChange: "mapTypeIdChange", idle: "idle", zoomChange: "zoomChange", mapReady: "mapReady", tilesLoaded: "tilesLoaded" }, features: [i0.ɵɵProvidersFeature([
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
            ]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "agm-map-container-inner", "sebm-google-map-container-inner"], [1, "agm-map-content"]], template: function AgmMap_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelement(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
        } }, styles: [".agm-map-container-inner[_ngcontent-%COMP%]{width:inherit;height:inherit}.agm-map-content[_ngcontent-%COMP%]{display:none}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AgmMap, [{
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
    }], () => [{ type: i0.ElementRef }, { type: i1.GoogleMapsAPIWrapper }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i2.FitBoundsService }, { type: i0.NgZone }], { longitude: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AgmMap, { className: "AgmMap" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXdDLE1BQU0sRUFBRSxXQUFXLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBSTdKLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBTTNFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7OztBQUkzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQXFDSCxNQUFNLE9BQU8sTUFBTTtJQXFPakI7O09BRUc7YUFDWSwwQkFBcUIsR0FBYTtRQUMvQyx3QkFBd0IsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGdCQUFn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LFdBQVc7a0JBQW5CLEtBQUs7WUFLRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFNRyxNQUFNO2tCQUFkLEtBQUs7WUFPRyxVQUFVO2tCQUFsQixLQUFLO1lBT0csaUJBQWlCO2tCQUF6QixLQUFLO1lBS0csd0JBQXdCO2tCQUFoQyxLQUFLO1lBTUcsU0FBUztrQkFBakIsS0FBSztZQUtHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUtHLFlBQVk7a0JBQXBCLEtBQUs7WUFLRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFLRyxjQUFjO2tCQUF0QixLQUFLO1lBS0cscUJBQXFCO2tCQUE3QixLQUFLO1lBS0csVUFBVTtrQkFBbEIsS0FBSztZQUtHLGlCQUFpQjtrQkFBekIsS0FBSztZQUtHLGFBQWE7a0JBQXJCLEtBQUs7WUFLRyxvQkFBb0I7a0JBQTVCLEtBQUs7WUFLRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFLRyx3QkFBd0I7a0JBQWhDLEtBQUs7WUFLRyxTQUFTO2tCQUFqQixLQUFLO1lBTUcsY0FBYztrQkFBdEIsS0FBSztZQVFHLHFCQUFxQjtrQkFBN0IsS0FBSztZQVVHLGVBQWU7a0JBQXZCLEtBQUs7WUFnQkcsSUFBSTtrQkFBWixLQUFLO1lBTUcsV0FBVztrQkFBbkIsS0FBSztZQW9CSSxRQUFRO2tCQUFqQixNQUFNO1lBTUcsYUFBYTtrQkFBdEIsTUFBTTtZQU1HLFdBQVc7a0JBQXBCLE1BQU07WUFLRyxZQUFZO2tCQUFyQixNQUFNO1lBS0csWUFBWTtrQkFBckIsTUFBTTtZQUtHLGVBQWU7a0JBQXhCLE1BQU07WUFLRyxJQUFJO2tCQUFiLE1BQU07WUFLRyxVQUFVO2tCQUFuQixNQUFNO1lBTUcsUUFBUTtrQkFBakIsTUFBTTtZQUtHLFdBQVc7a0JBQXBCLE1BQU07O2tGQXhTSSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgTmdab25lLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFBMQVRGT1JNX0lELCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW91c2VFdmVudCB9IGZyb20gJy4uL21hcC10eXBlcyc7XG5pbXBvcnQgeyBGaXRCb3VuZHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZml0LWJvdW5kcyc7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCB7XG4gIEZ1bGxzY3JlZW5Db250cm9sT3B0aW9ucywgTGF0TG5nLCBMYXRMbmdCb3VuZHMsIExhdExuZ0JvdW5kc0xpdGVyYWwsIExhdExuZ0xpdGVyYWwsXG4gIE1hcFJlc3RyaWN0aW9uLCBNYXBUeXBlQ29udHJvbE9wdGlvbnMsIE1hcFR5cGVJZCwgTWFwVHlwZVN0eWxlLCBQYWRkaW5nLCBQYW5Db250cm9sT3B0aW9ucyxcbiAgUm90YXRlQ29udHJvbE9wdGlvbnMsIFNjYWxlQ29udHJvbE9wdGlvbnMsIFN0cmVldFZpZXdDb250cm9sT3B0aW9ucywgWm9vbUNvbnRyb2xPcHRpb25zLFxufSBmcm9tICcuLi9zZXJ2aWNlcy9nb29nbGUtbWFwcy10eXBlcyc7XG5pbXBvcnQgeyBDaXJjbGVNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvY2lyY2xlLW1hbmFnZXInO1xuaW1wb3J0IHsgSW5mb1dpbmRvd01hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9pbmZvLXdpbmRvdy1tYW5hZ2VyJztcbmltcG9ydCB7IExheWVyTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL2xheWVyLW1hbmFnZXInO1xuaW1wb3J0IHsgTWFya2VyTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL21hcmtlci1tYW5hZ2VyJztcbmltcG9ydCB7IFBvbHlnb25NYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvcG9seWdvbi1tYW5hZ2VyJztcbmltcG9ydCB7IFBvbHlsaW5lTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL3BvbHlsaW5lLW1hbmFnZXInO1xuaW1wb3J0IHsgUmVjdGFuZ2xlTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL3JlY3RhbmdsZS1tYW5hZ2VyJztcbmltcG9ydCB7IERhdGFMYXllck1hbmFnZXIgfSBmcm9tICcuLy4uL3NlcnZpY2VzL21hbmFnZXJzL2RhdGEtbGF5ZXItbWFuYWdlcic7XG5pbXBvcnQgeyBLbWxMYXllck1hbmFnZXIgfSBmcm9tICcuLy4uL3NlcnZpY2VzL21hbmFnZXJzL2ttbC1sYXllci1tYW5hZ2VyJztcblxuZGVjbGFyZSB2YXIgZ29vZ2xlOiBhbnk7XG5cbi8qKlxuICogQWdtTWFwIHJlbmRlcnMgYSBHb29nbGUgTWFwLlxuICogKipJbXBvcnRhbnQgbm90ZSoqOiBUbyBiZSBhYmxlIHNlZSBhIG1hcCBpbiB0aGUgYnJvd3NlciwgeW91IGhhdmUgdG8gZGVmaW5lIGEgaGVpZ2h0IGZvciB0aGVcbiAqIGVsZW1lbnQgYGFnbS1tYXBgLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICBzZWxlY3RvcjogJ215LW1hcC1jbXAnLFxuICogIHN0eWxlczogW2BcbiAqICAgIGFnbS1tYXAge1xuICogICAgICBoZWlnaHQ6IDMwMHB4O1xuICogICAgfVxuICogYF0sXG4gKiAgdGVtcGxhdGU6IGBcbiAqICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqICAgIDwvYWdtLW1hcD5cbiAqICBgXG4gKiB9KVxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnbS1tYXAnLFxuICBwcm92aWRlcnM6IFtcbiAgICBDaXJjbGVNYW5hZ2VyLFxuICAgIERhdGFMYXllck1hbmFnZXIsXG4gICAgRGF0YUxheWVyTWFuYWdlcixcbiAgICBGaXRCb3VuZHNTZXJ2aWNlLFxuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLFxuICAgIEluZm9XaW5kb3dNYW5hZ2VyLFxuICAgIEttbExheWVyTWFuYWdlcixcbiAgICBMYXllck1hbmFnZXIsXG4gICAgTWFya2VyTWFuYWdlcixcbiAgICBQb2x5Z29uTWFuYWdlcixcbiAgICBQb2x5bGluZU1hbmFnZXIsXG4gICAgUmVjdGFuZ2xlTWFuYWdlcixcbiAgXSxcbiAgaG9zdDoge1xuICAgIC8vIHRvZG86IGRlcHJlY2F0ZWQgLSB3ZSB3aWxsIHJlbW92ZSBpdCB3aXRoIHRoZSBuZXh0IHZlcnNpb25cbiAgICAnW2NsYXNzLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXJdJzogJ3RydWUnLFxuICB9LFxuICBzdHlsZXM6IFtgXG4gICAgLmFnbS1tYXAtY29udGFpbmVyLWlubmVyIHtcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIH1cbiAgICAuYWdtLW1hcC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdhZ20tbWFwLWNvbnRhaW5lci1pbm5lciBzZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyLWlubmVyJz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYWdtLW1hcC1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21NYXAgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSBsb25naXR1ZGUgdGhhdCBkZWZpbmVzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcC5cbiAgICovXG4gIEBJbnB1dCgpIGxvbmdpdHVkZSA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBsYXRpdHVkZSB0aGF0IGRlZmluZXMgdGhlIGNlbnRlciBvZiB0aGUgbWFwLlxuICAgKi9cbiAgQElucHV0KCkgbGF0aXR1ZGUgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLiBUaGUgZGVmYXVsdCB6b29tIGxldmVsIGlzIDguXG4gICAqL1xuICBASW5wdXQoKSB6b29tID0gODtcblxuICAvKipcbiAgICogVGhlIG1pbmltYWwgem9vbSBsZXZlbCBvZiB0aGUgbWFwIGFsbG93ZWQuIFdoZW4gbm90IHByb3ZpZGVkLCBubyByZXN0cmljdGlvbnMgdG8gdGhlIHpvb20gbGV2ZWxcbiAgICogYXJlIGVuZm9yY2VkLlxuICAgKi9cbiAgQElucHV0KCkgbWluWm9vbTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW1hbCB6b29tIGxldmVsIG9mIHRoZSBtYXAgYWxsb3dlZC4gV2hlbiBub3QgcHJvdmlkZWQsIG5vIHJlc3RyaWN0aW9ucyB0byB0aGUgem9vbSBsZXZlbFxuICAgKiBhcmUgZW5mb3JjZWQuXG4gICAqL1xuICBASW5wdXQoKSBtYXhab29tOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBjb250cm9sIHNpemUgZm9yIHRoZSBkZWZhdWx0IG1hcCBjb250cm9scy4gT25seSBnb3Zlcm5zIHRoZSBjb250cm9scyBtYWRlIGJ5IHRoZSBNYXBzIEFQSSBpdHNlbGZcbiAgICovXG4gIEBJbnB1dCgpIGNvbnRyb2xTaXplOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMvZGlzYWJsZXMgaWYgbWFwIGlzIGRyYWdnYWJsZS5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdtYXBEcmFnZ2FibGUnKSBkcmFnZ2FibGUgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzL2Rpc2FibGVzIHpvb20gYW5kIGNlbnRlciBvbiBkb3VibGUgY2xpY2suIEVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVEb3VibGVDbGlja1pvb20gPSBmYWxzZTtcblxuICAvKipcbiAgICogRW5hYmxlcy9kaXNhYmxlcyBhbGwgZGVmYXVsdCBVSSBvZiB0aGUgR29vZ2xlIG1hcC4gUGxlYXNlIG5vdGU6IFdoZW4gdGhlIG1hcCBpcyBjcmVhdGVkLCB0aGlzXG4gICAqIHZhbHVlIGNhbm5vdCBnZXQgdXBkYXRlZC5cbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVEZWZhdWx0VUkgPSBmYWxzZTtcblxuICAvKipcbiAgICogSWYgZmFsc2UsIGRpc2FibGVzIHNjcm9sbHdoZWVsIHpvb21pbmcgb24gdGhlIG1hcC4gVGhlIHNjcm9sbHdoZWVsIGlzIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIEBJbnB1dCgpIHNjcm9sbHdoZWVsID0gdHJ1ZTtcblxuICAvKipcbiAgICogQ29sb3IgdXNlZCBmb3IgdGhlIGJhY2tncm91bmQgb2YgdGhlIE1hcCBkaXYuIFRoaXMgY29sb3Igd2lsbCBiZSB2aXNpYmxlIHdoZW4gdGlsZXMgaGF2ZSBub3RcbiAgICogeWV0IGxvYWRlZCBhcyB0aGUgdXNlciBwYW5zLiBUaGlzIG9wdGlvbiBjYW4gb25seSBiZSBzZXQgd2hlbiB0aGUgbWFwIGlzIGluaXRpYWxpemVkLlxuICAgKi9cbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9yIHVybCBvZiB0aGUgY3Vyc29yIHRvIGRpc3BsYXkgd2hlbiBtb3VzaW5nIG92ZXIgYSBkcmFnZ2FibGUgbWFwLiBUaGlzIHByb3BlcnR5IHVzZXNcbiAgICogdGhlIGNzcyAgKiBjdXJzb3IgYXR0cmlidXRlIHRvIGNoYW5nZSB0aGUgaWNvbi4gQXMgd2l0aCB0aGUgY3NzIHByb3BlcnR5LCB5b3UgbXVzdCBzcGVjaWZ5IGF0XG4gICAqIGxlYXN0IG9uZSBmYWxsYmFjayBjdXJzb3IgdGhhdCBpcyBub3QgYSBVUkwuIEZvciBleGFtcGxlOlxuICAgKiBbZHJhZ2dhYmxlQ3Vyc29yXT1cIid1cmwoaHR0cDovL3d3dy5leGFtcGxlLmNvbS9pY29uLnBuZyksIGF1dG87J1wiXG4gICAqL1xuICBASW5wdXQoKSBkcmFnZ2FibGVDdXJzb3I6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG5hbWUgb3IgdXJsIG9mIHRoZSBjdXJzb3IgdG8gZGlzcGxheSB3aGVuIHRoZSBtYXAgaXMgYmVpbmcgZHJhZ2dlZC4gVGhpcyBwcm9wZXJ0eSB1c2VzIHRoZVxuICAgKiBjc3MgY3Vyc29yIGF0dHJpYnV0ZSB0byBjaGFuZ2UgdGhlIGljb24uIEFzIHdpdGggdGhlIGNzcyBwcm9wZXJ0eSwgeW91IG11c3Qgc3BlY2lmeSBhdCBsZWFzdFxuICAgKiBvbmUgZmFsbGJhY2sgY3Vyc29yIHRoYXQgaXMgbm90IGEgVVJMLiBGb3IgZXhhbXBsZTpcbiAgICogW2RyYWdnaW5nQ3Vyc29yXT1cIid1cmwoaHR0cDovL3d3dy5leGFtcGxlLmNvbS9pY29uLnBuZyksIGF1dG87J1wiXG4gICAqL1xuICBASW5wdXQoKSBkcmFnZ2luZ0N1cnNvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJZiBmYWxzZSwgcHJldmVudHMgdGhlIG1hcCBmcm9tIGJlaW5nIGNvbnRyb2xsZWQgYnkgdGhlIGtleWJvYXJkLiBLZXlib2FyZCBzaG9ydGN1dHMgYXJlXG4gICAqIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIEBJbnB1dCgpIGtleWJvYXJkU2hvcnRjdXRzID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIFpvb20gY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIHpvb21Db250cm9sOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciB0aGUgWm9vbSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgem9vbUNvbnRyb2xPcHRpb25zOiBab29tQ29udHJvbE9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIFN0eWxlcyB0byBhcHBseSB0byBlYWNoIG9mIHRoZSBkZWZhdWx0IG1hcCB0eXBlcy4gTm90ZSB0aGF0IGZvciBTYXRlbGxpdGUvSHlicmlkIGFuZCBUZXJyYWluXG4gICAqIG1vZGVzLCB0aGVzZSBzdHlsZXMgd2lsbCBvbmx5IGFwcGx5IHRvIGxhYmVscyBhbmQgZ2VvbWV0cnkuXG4gICAqL1xuICBASW5wdXQoKSBzdHlsZXM6IE1hcFR5cGVTdHlsZVtdID0gW107XG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSBhbmQgdGhlIGxhdGl0dWRlIGFuZC9vciBsb25naXR1ZGUgdmFsdWVzIGNoYW5nZXMsIHRoZSBHb29nbGUgTWFwcyBwYW5UbyBtZXRob2QgaXNcbiAgICogdXNlZCB0b1xuICAgKiBjZW50ZXIgdGhlIG1hcC4gU2VlOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFwXG4gICAqL1xuICBASW5wdXQoKSB1c2VQYW5uaW5nID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIFN0cmVldCBWaWV3IFBlZ21hbiBjb250cm9sLlxuICAgKiBUaGlzIGNvbnRyb2wgaXMgcGFydCBvZiB0aGUgZGVmYXVsdCBVSSwgYW5kIHNob3VsZCBiZSBzZXQgdG8gZmFsc2Ugd2hlbiBkaXNwbGF5aW5nIGEgbWFwIHR5cGVcbiAgICogb24gd2hpY2ggdGhlIFN0cmVldCBWaWV3IHJvYWQgb3ZlcmxheSBzaG91bGQgbm90IGFwcGVhciAoZS5nLiBhIG5vbi1FYXJ0aCBtYXAgdHlwZSkuXG4gICAqL1xuICBASW5wdXQoKSBzdHJlZXRWaWV3Q29udHJvbDogYm9vbGVhbjtcblxuICAvKipcbiAgICogT3B0aW9ucyBmb3IgdGhlIFN0cmVldCBWaWV3IGNvbnRyb2wuXG4gICAqL1xuICBASW5wdXQoKSBzdHJlZXRWaWV3Q29udHJvbE9wdGlvbnM6IFN0cmVldFZpZXdDb250cm9sT3B0aW9ucztcblxuICAvKipcbiAgICogU2V0cyB0aGUgdmlld3BvcnQgdG8gY29udGFpbiB0aGUgZ2l2ZW4gYm91bmRzLlxuICAgKiBJZiB0aGlzIG9wdGlvbiB0byBgdHJ1ZWAsIHRoZSBib3VuZHMgZ2V0IGF1dG9tYXRpY2FsbHkgY29tcHV0ZWQgZnJvbSBhbGwgZWxlbWVudHMgdGhhdCB1c2UgdGhlIHtAbGluayBBZ21GaXRCb3VuZHN9IGRpcmVjdGl2ZS5cbiAgICovXG4gIEBJbnB1dCgpIGZpdEJvdW5kczogTGF0TG5nQm91bmRzTGl0ZXJhbCB8IExhdExuZ0JvdW5kcyB8IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogUGFkZGluZyBhbW91bnQgZm9yIHRoZSBib3VuZHMuXG4gICAqL1xuICBASW5wdXQoKSBmaXRCb3VuZHNQYWRkaW5nOiBudW1iZXIgfCBQYWRkaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbCBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBTY2FsZSBjb250cm9sLiBUaGlzIGlzIGRpc2FibGVkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBASW5wdXQoKSBzY2FsZUNvbnRyb2wgPSBmYWxzZTtcblxuICAvKipcbiAgICogT3B0aW9ucyBmb3IgdGhlIHNjYWxlIGNvbnRyb2wuXG4gICAqL1xuICBASW5wdXQoKSBzY2FsZUNvbnRyb2xPcHRpb25zOiBTY2FsZUNvbnRyb2xPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbCBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBNYXAgdHlwZSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgbWFwVHlwZUNvbnRyb2wgPSBmYWxzZTtcblxuICAvKipcbiAgICogT3B0aW9ucyBmb3IgdGhlIE1hcCB0eXBlIGNvbnRyb2wuXG4gICAqL1xuICBASW5wdXQoKSBtYXBUeXBlQ29udHJvbE9wdGlvbnM6IE1hcFR5cGVDb250cm9sT3B0aW9ucztcblxuICAvKipcbiAgICogVGhlIGluaXRpYWwgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZSBvZiB0aGUgUGFuIGNvbnRyb2wuXG4gICAqL1xuICBASW5wdXQoKSBwYW5Db250cm9sICA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciB0aGUgUGFuIGNvbnRyb2wuXG4gICAqL1xuICBASW5wdXQoKSBwYW5Db250cm9sT3B0aW9uczogUGFuQ29udHJvbE9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIFJvdGF0ZSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgcm90YXRlQ29udHJvbCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciB0aGUgUm90YXRlIGNvbnRyb2wuXG4gICAqL1xuICBASW5wdXQoKSByb3RhdGVDb250cm9sT3B0aW9uczogUm90YXRlQ29udHJvbE9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIEZ1bGxzY3JlZW4gY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW5Db250cm9sICA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciB0aGUgRnVsbHNjcmVlbiBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgZnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zOiBGdWxsc2NyZWVuQ29udHJvbE9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIFRoZSBtYXAgbWFwVHlwZUlkLiBEZWZhdWx0cyB0byAncm9hZG1hcCcuXG4gICAqL1xuICBASW5wdXQoKSBtYXBUeXBlSWQ6ICdyb2FkbWFwJyB8ICdoeWJyaWQnIHwgJ3NhdGVsbGl0ZScgfCAndGVycmFpbicgfCBzdHJpbmcgPSAncm9hZG1hcCc7XG5cbiAgLyoqXG4gICAqIFdoZW4gZmFsc2UsIG1hcCBpY29ucyBhcmUgbm90IGNsaWNrYWJsZS4gQSBtYXAgaWNvbiByZXByZXNlbnRzIGEgcG9pbnQgb2YgaW50ZXJlc3QsXG4gICAqIGFsc28ga25vd24gYXMgYSBQT0kuIEJ5IGRlZmF1bHQgbWFwIGljb25zIGFyZSBjbGlja2FibGUuXG4gICAqL1xuICBASW5wdXQoKSBjbGlja2FibGVJY29ucyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWFwIGljb24gcmVwcmVzZW50cyBhIHBvaW50IG9mIGludGVyZXN0LCBhbHNvIGtub3duIGFzIGEgUE9JLlxuICAgKiBXaGVuIG1hcCBpY29ucyBhcmUgY2xpY2thYmxlIGJ5IGRlZmF1bHQsIGFuIGluZm8gd2luZG93IGlzIGRpc3BsYXllZC5cbiAgICogV2hlbiB0aGlzIHByb3BlcnR5IGlzIHNldCB0byBmYWxzZSwgdGhlIGluZm8gd2luZG93IHdpbGwgbm90IGJlIHNob3duIGJ1dCB0aGUgY2xpY2sgZXZlbnRcbiAgICogd2lsbCBzdGlsbCBmaXJlXG4gICAqL1xuICBASW5wdXQoKSBzaG93RGVmYXVsdEluZm9XaW5kb3cgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGlzIHNldHRpbmcgY29udHJvbHMgaG93IGdlc3R1cmVzIG9uIHRoZSBtYXAgYXJlIGhhbmRsZWQuXG4gICAqIEFsbG93ZWQgdmFsdWVzOlxuICAgKiAtICdjb29wZXJhdGl2ZScgKFR3by1maW5nZXIgdG91Y2ggZ2VzdHVyZXMgcGFuIGFuZCB6b29tIHRoZSBtYXAuIE9uZS1maW5nZXIgdG91Y2ggZ2VzdHVyZXMgYXJlIG5vdCBoYW5kbGVkIGJ5IHRoZSBtYXAuKVxuICAgKiAtICdncmVlZHknICAgICAgKEFsbCB0b3VjaCBnZXN0dXJlcyBwYW4gb3Igem9vbSB0aGUgbWFwLilcbiAgICogLSAnbm9uZScgICAgICAgIChUaGUgbWFwIGNhbm5vdCBiZSBwYW5uZWQgb3Igem9vbWVkIGJ5IHVzZXIgZ2VzdHVyZXMuKVxuICAgKiAtICdhdXRvJyAgICAgICAgW2RlZmF1bHRdIChHZXN0dXJlIGhhbmRsaW5nIGlzIGVpdGhlciBjb29wZXJhdGl2ZSBvciBncmVlZHksIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBwYWdlIGlzIHNjcm9sbGFibGUgb3Igbm90LlxuICAgKi9cbiAgQElucHV0KCkgZ2VzdHVyZUhhbmRsaW5nOiAnY29vcGVyYXRpdmUnIHwgJ2dyZWVkeScgfCAnbm9uZScgfCAnYXV0bycgPSAnYXV0byc7XG5cbiAgICAvKipcbiAgICAgKiBDb250cm9scyB0aGUgYXV0b21hdGljIHN3aXRjaGluZyBiZWhhdmlvciBmb3IgdGhlIGFuZ2xlIG9mIGluY2lkZW5jZSBvZlxuICAgICAqIHRoZSBtYXAuIFRoZSBvbmx5IGFsbG93ZWQgdmFsdWVzIGFyZSAwIGFuZCA0NS4gVGhlIHZhbHVlIDAgY2F1c2VzIHRoZSBtYXBcbiAgICAgKiB0byBhbHdheXMgdXNlIGEgMMKwIG92ZXJoZWFkIHZpZXcgcmVnYXJkbGVzcyBvZiB0aGUgem9vbSBsZXZlbCBhbmRcbiAgICAgKiB2aWV3cG9ydC4gVGhlIHZhbHVlIDQ1IGNhdXNlcyB0aGUgdGlsdCBhbmdsZSB0byBhdXRvbWF0aWNhbGx5IHN3aXRjaCB0b1xuICAgICAqIDQ1IHdoZW5ldmVyIDQ1wrAgaW1hZ2VyeSBpcyBhdmFpbGFibGUgZm9yIHRoZSBjdXJyZW50IHpvb20gbGV2ZWwgYW5kXG4gICAgICogdmlld3BvcnQsIGFuZCBzd2l0Y2ggYmFjayB0byAwIHdoZW5ldmVyIDQ1wrAgaW1hZ2VyeSBpcyBub3QgYXZhaWxhYmxlXG4gICAgICogKHRoaXMgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3IpLiA0NcKwIGltYWdlcnkgaXMgb25seSBhdmFpbGFibGUgZm9yXG4gICAgICogc2F0ZWxsaXRlIGFuZCBoeWJyaWQgbWFwIHR5cGVzLCB3aXRoaW4gc29tZSBsb2NhdGlvbnMsIGFuZCBhdCBzb21lIHpvb21cbiAgICAgKiBsZXZlbHMuIE5vdGU6IGdldFRpbHQgcmV0dXJucyB0aGUgY3VycmVudCB0aWx0IGFuZ2xlLCBub3QgdGhlIHZhbHVlXG4gICAgICogc3BlY2lmaWVkIGJ5IHRoaXMgb3B0aW9uLiBCZWNhdXNlIGdldFRpbHQgYW5kIHRoaXMgb3B0aW9uIHJlZmVyIHRvXG4gICAgICogZGlmZmVyZW50IHRoaW5ncywgZG8gbm90IGJpbmQoKSB0aGUgdGlsdCBwcm9wZXJ0eTsgZG9pbmcgc28gbWF5IHlpZWxkXG4gICAgICogdW5wcmVkaWN0YWJsZSBlZmZlY3RzLiAoRGVmYXVsdCBvZiBBR00gaXMgMCAoZGlzYWJsZWQpLiBFbmFibGUgaXQgd2l0aCB2YWx1ZSA0NS4pXG4gICAgICovXG4gIEBJbnB1dCgpIHRpbHQgPSAwO1xuXG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciByZXN0cmljdGluZyB0aGUgYm91bmRzIG9mIHRoZSBtYXAuXG4gICAqIFVzZXIgY2Fubm90IHBhbiBvciB6b29tIGF3YXkgZnJvbSByZXN0cmljdGVkIGFyZWEuXG4gICAqL1xuICBASW5wdXQoKSByZXN0cmljdGlvbjogTWFwUmVzdHJpY3Rpb247XG4gIC8qKlxuICAgKiBNYXAgb3B0aW9uIGF0dHJpYnV0ZXMgdGhhdCBjYW4gY2hhbmdlIG92ZXIgdGltZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX21hcE9wdGlvbnNBdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFtcbiAgICAnZGlzYWJsZURvdWJsZUNsaWNrWm9vbScsICdzY3JvbGx3aGVlbCcsICdkcmFnZ2FibGUnLCAnZHJhZ2dhYmxlQ3Vyc29yJywgJ2RyYWdnaW5nQ3Vyc29yJyxcbiAgICAna2V5Ym9hcmRTaG9ydGN1dHMnLCAnem9vbUNvbnRyb2wnLCAnem9vbUNvbnRyb2xPcHRpb25zJywgJ3N0eWxlcycsICdzdHJlZXRWaWV3Q29udHJvbCcsXG4gICAgJ3N0cmVldFZpZXdDb250cm9sT3B0aW9ucycsICd6b29tJywgJ21hcFR5cGVDb250cm9sJywgJ21hcFR5cGVDb250cm9sT3B0aW9ucycsICdtaW5ab29tJyxcbiAgICAnbWF4Wm9vbScsICdwYW5Db250cm9sJywgJ3BhbkNvbnRyb2xPcHRpb25zJywgJ3JvdGF0ZUNvbnRyb2wnLCAncm90YXRlQ29udHJvbE9wdGlvbnMnLFxuICAgICdmdWxsc2NyZWVuQ29udHJvbCcsICdmdWxsc2NyZWVuQ29udHJvbE9wdGlvbnMnLCAnc2NhbGVDb250cm9sJywgJ3NjYWxlQ29udHJvbE9wdGlvbnMnLFxuICAgICdtYXBUeXBlSWQnLCAnY2xpY2thYmxlSWNvbnMnLCAnZ2VzdHVyZUhhbmRsaW5nJywgJ3RpbHQnLCAncmVzdHJpY3Rpb24nLFxuICBdO1xuXG4gIHByaXZhdGUgX29ic2VydmFibGVTdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIF9maXRCb3VuZHNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgbWFwIChidXQgbm90IHdoZW4gdGhleSBjbGljayBvbiBhXG4gICAqIG1hcmtlciBvciBpbmZvV2luZG93KS5cbiAgICovXG4gIEBPdXRwdXQoKSBtYXBDbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgcmlnaHQtY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrXG4gICAqIG9uIGEgbWFya2VyIG9yIGluZm9XaW5kb3cpLlxuICAgKi9cbiAgQE91dHB1dCgpIG1hcFJpZ2h0Q2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGRvdWJsZS1jbGlja3Mgb24gdGhlIG1hcCAoYnV0IG5vdCB3aGVuIHRoZXkgY2xpY2tcbiAgICogb24gYSBtYXJrZXIgb3IgaW5mb1dpbmRvdykuXG4gICAqL1xuICBAT3V0cHV0KCkgbWFwRGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGlzIGZpcmVkIHdoZW4gdGhlIG1hcCBjZW50ZXIgY2hhbmdlcy5cbiAgICovXG4gIEBPdXRwdXQoKSBjZW50ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxMYXRMbmdMaXRlcmFsPiA9IG5ldyBFdmVudEVtaXR0ZXI8TGF0TG5nTGl0ZXJhbD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB2aWV3cG9ydCBib3VuZHMgaGF2ZSBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGJvdW5kc0NoYW5nZTogRXZlbnRFbWl0dGVyPExhdExuZ0JvdW5kcz4gPSBuZXcgRXZlbnRFbWl0dGVyPExhdExuZ0JvdW5kcz4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBtYXBUeXBlSWQgcHJvcGVydHkgY2hhbmdlcy5cbiAgICovXG4gIEBPdXRwdXQoKSBtYXBUeXBlSWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNYXBUeXBlSWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBUeXBlSWQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgbWFwIGJlY29tZXMgaWRsZSBhZnRlciBwYW5uaW5nIG9yIHpvb21pbmcuXG4gICAqL1xuICBAT3V0cHV0KCkgaWRsZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHpvb20gbGV2ZWwgaGFzIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgem9vbUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBnb29nbGUgbWFwIGlzIGZ1bGx5IGluaXRpYWxpemVkLlxuICAgKiBZb3UgZ2V0IHRoZSBnb29nbGUubWFwcy5NYXAgaW5zdGFuY2UgYXMgYSByZXN1bHQgb2YgdGhpcyBFdmVudEVtaXR0ZXIuXG4gICAqL1xuICBAT3V0cHV0KCkgbWFwUmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdmlzaWJsZSB0aWxlcyBoYXZlIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAqL1xuICBAT3V0cHV0KCkgdGlsZXNMb2FkZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX21hcHNXcmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlcixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIF9wbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgcHJvdGVjdGVkIF9maXRCb3VuZHNTZXJ2aWNlOiBGaXRCb3VuZHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZVxuICApIHt9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoaXNQbGF0Zm9ybVNlcnZlcih0aGlzLl9wbGF0Zm9ybUlkKSkge1xuICAgICAgLy8gVGhlIGNvZGUgaXMgcnVubmluZyBvbiB0aGUgc2VydmVyLCBkbyBub3RoaW5nXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHRvZG86IHRoaXMgc2hvdWxkIGJlIHNvbHZlZCB3aXRoIGEgbmV3IGNvbXBvbmVudCBhbmQgYSB2aWV3Q2hpbGQgZGVjb3JhdG9yXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZ20tbWFwLWNvbnRhaW5lci1pbm5lcicpO1xuICAgIHRoaXMuX2luaXRNYXBJbnN0YW5jZShjb250YWluZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdE1hcEluc3RhbmNlKGVsOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX21hcHNXcmFwcGVyLmNyZWF0ZU1hcChlbCwge1xuICAgICAgY2VudGVyOiB7bGF0OiB0aGlzLmxhdGl0dWRlIHx8IDAsIGxuZzogdGhpcy5sb25naXR1ZGUgfHwgMH0sXG4gICAgICB6b29tOiB0aGlzLnpvb20sXG4gICAgICBtaW5ab29tOiB0aGlzLm1pblpvb20sXG4gICAgICBtYXhab29tOiB0aGlzLm1heFpvb20sXG4gICAgICBjb250cm9sU2l6ZTogdGhpcy5jb250cm9sU2l6ZSxcbiAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRoaXMuZGlzYWJsZURlZmF1bHRVSSxcbiAgICAgIGRpc2FibGVEb3VibGVDbGlja1pvb206IHRoaXMuZGlzYWJsZURvdWJsZUNsaWNrWm9vbSxcbiAgICAgIHNjcm9sbHdoZWVsOiB0aGlzLnNjcm9sbHdoZWVsLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGUsXG4gICAgICBkcmFnZ2FibGVDdXJzb3I6IHRoaXMuZHJhZ2dhYmxlQ3Vyc29yLFxuICAgICAgZHJhZ2dpbmdDdXJzb3I6IHRoaXMuZHJhZ2dpbmdDdXJzb3IsXG4gICAgICBrZXlib2FyZFNob3J0Y3V0czogdGhpcy5rZXlib2FyZFNob3J0Y3V0cyxcbiAgICAgIHN0eWxlczogdGhpcy5zdHlsZXMsXG4gICAgICB6b29tQ29udHJvbDogdGhpcy56b29tQ29udHJvbCxcbiAgICAgIHpvb21Db250cm9sT3B0aW9uczogdGhpcy56b29tQ29udHJvbE9wdGlvbnMsXG4gICAgICBzdHJlZXRWaWV3Q29udHJvbDogdGhpcy5zdHJlZXRWaWV3Q29udHJvbCxcbiAgICAgIHN0cmVldFZpZXdDb250cm9sT3B0aW9uczogdGhpcy5zdHJlZXRWaWV3Q29udHJvbE9wdGlvbnMsXG4gICAgICBzY2FsZUNvbnRyb2w6IHRoaXMuc2NhbGVDb250cm9sLFxuICAgICAgc2NhbGVDb250cm9sT3B0aW9uczogdGhpcy5zY2FsZUNvbnRyb2xPcHRpb25zLFxuICAgICAgbWFwVHlwZUNvbnRyb2w6IHRoaXMubWFwVHlwZUNvbnRyb2wsXG4gICAgICBtYXBUeXBlQ29udHJvbE9wdGlvbnM6IHRoaXMubWFwVHlwZUNvbnRyb2xPcHRpb25zLFxuICAgICAgcGFuQ29udHJvbDogdGhpcy5wYW5Db250cm9sLFxuICAgICAgcGFuQ29udHJvbE9wdGlvbnM6IHRoaXMucGFuQ29udHJvbE9wdGlvbnMsXG4gICAgICByb3RhdGVDb250cm9sOiB0aGlzLnJvdGF0ZUNvbnRyb2wsXG4gICAgICByb3RhdGVDb250cm9sT3B0aW9uczogdGhpcy5yb3RhdGVDb250cm9sT3B0aW9ucyxcbiAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiB0aGlzLmZ1bGxzY3JlZW5Db250cm9sLFxuICAgICAgZnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zOiB0aGlzLmZ1bGxzY3JlZW5Db250cm9sT3B0aW9ucyxcbiAgICAgIG1hcFR5cGVJZDogdGhpcy5tYXBUeXBlSWQsXG4gICAgICBjbGlja2FibGVJY29uczogdGhpcy5jbGlja2FibGVJY29ucyxcbiAgICAgIGdlc3R1cmVIYW5kbGluZzogdGhpcy5nZXN0dXJlSGFuZGxpbmcsXG4gICAgICB0aWx0OiB0aGlzLnRpbHQsXG4gICAgICByZXN0cmljdGlvbjogdGhpcy5yZXN0cmljdGlvbixcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fbWFwc1dyYXBwZXIuZ2V0TmF0aXZlTWFwKCkpXG4gICAgICAudGhlbihtYXAgPT4gdGhpcy5tYXBSZWFkeS5lbWl0KG1hcCkpO1xuXG4gICAgLy8gcmVnaXN0ZXIgZXZlbnQgbGlzdGVuZXJzXG4gICAgdGhpcy5faGFuZGxlTWFwQ2VudGVyQ2hhbmdlKCk7XG4gICAgdGhpcy5faGFuZGxlTWFwWm9vbUNoYW5nZSgpO1xuICAgIHRoaXMuX2hhbmRsZU1hcE1vdXNlRXZlbnRzKCk7XG4gICAgdGhpcy5faGFuZGxlQm91bmRzQ2hhbmdlKCk7XG4gICAgdGhpcy5faGFuZGxlTWFwVHlwZUlkQ2hhbmdlKCk7XG4gICAgdGhpcy5faGFuZGxlVGlsZXNMb2FkZWRFdmVudCgpO1xuICAgIHRoaXMuX2hhbmRsZUlkbGVFdmVudCgpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyB1bnN1YnNjcmliZSBhbGwgcmVnaXN0ZXJlZCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbnNcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzKSA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuXG4gICAgLy8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZnJvbSB0aGUgbWFwIGluc3RhbmNlXG4gICAgdGhpcy5fbWFwc1dyYXBwZXIuY2xlYXJJbnN0YW5jZUxpc3RlbmVycygpO1xuICAgIGlmICh0aGlzLl9maXRCb3VuZHNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2ZpdEJvdW5kc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qIEBpbnRlcm5hbCAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5fdXBkYXRlTWFwT3B0aW9uc0NoYW5nZXMoY2hhbmdlcyk7XG4gICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oY2hhbmdlcyk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVNYXBPcHRpb25zQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgbGV0IG9wdGlvbnM6IHtbcHJvcE5hbWU6IHN0cmluZ106IGFueX0gPSB7fTtcbiAgICBsZXQgb3B0aW9uS2V5cyA9XG4gICAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoayA9PiBBZ21NYXAuX21hcE9wdGlvbnNBdHRyaWJ1dGVzLmluZGV4T2YoaykgIT09IC0xKTtcbiAgICBvcHRpb25LZXlzLmZvckVhY2goKGspID0+IHsgb3B0aW9uc1trXSA9IGNoYW5nZXNba10uY3VycmVudFZhbHVlOyB9KTtcbiAgICB0aGlzLl9tYXBzV3JhcHBlci5zZXRNYXBPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIGEgcmVzaXplIGV2ZW50IG9uIHRoZSBnb29nbGUgbWFwIGluc3RhbmNlLlxuICAgKiBXaGVuIHJlY2VudGVyIGlzIHRydWUsIHRoZSBvZiB0aGUgZ29vZ2xlIG1hcCBnZXRzIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IGxhdC9sbmcgdmFsdWVzIG9yIGZpdEJvdW5kcyB2YWx1ZSB0byByZWNlbnRlciB0aGUgbWFwLlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGdldHMgcmVzb2x2ZWQgYWZ0ZXIgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQuXG4gICAqL1xuICB0cmlnZ2VyUmVzaXplKHJlY2VudGVyOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIE5vdGU6IFdoZW4gd2Ugd291bGQgdHJpZ2dlciB0aGUgcmVzaXplIGV2ZW50IGFuZCBzaG93IHRoZSBtYXAgaW4gdGhlIHNhbWUgdHVybiAod2hpY2ggaXMgYVxuICAgIC8vIGNvbW1vbiBjYXNlIGZvciB0cmlnZ2VyaW5nIGEgcmVzaXplIGV2ZW50KSwgdGhlbiB0aGUgcmVzaXplIGV2ZW50IHdvdWxkIG5vdFxuICAgIC8vIHdvcmsgKHRvIHNob3cgdGhlIG1hcCksIHNvIHdlIHRyaWdnZXIgdGhlIGV2ZW50IGluIGEgdGltZW91dC5cbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwc1dyYXBwZXIudHJpZ2dlck1hcEV2ZW50KCdyZXNpemUnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBpZiAocmVjZW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZml0Qm91bmRzICE9IG51bGwgPyB0aGlzLl9maXRCb3VuZHMoKSA6IHRoaXMuX3NldENlbnRlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVQb3NpdGlvbihjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ2xhdGl0dWRlJ10gPT0gbnVsbCAmJiBjaGFuZ2VzWydsb25naXR1ZGUnXSA9PSBudWxsICYmXG4gICAgICAgICFjaGFuZ2VzWydmaXRCb3VuZHMnXSkge1xuICAgICAgLy8gbm8gcG9zaXRpb24gdXBkYXRlIG5lZWRlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHdlIHByZWZlciBmaXRCb3VuZHMgaW4gY2hhbmdlc1xuICAgIGlmICgnZml0Qm91bmRzJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLl9maXRCb3VuZHMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMubGF0aXR1ZGUgIT09ICdudW1iZXInIHx8IHR5cGVvZiB0aGlzLmxvbmdpdHVkZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2V0Q2VudGVyKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRDZW50ZXIoKSB7XG4gICAgbGV0IG5ld0NlbnRlciA9IHtcbiAgICAgIGxhdDogdGhpcy5sYXRpdHVkZSxcbiAgICAgIGxuZzogdGhpcy5sb25naXR1ZGUsXG4gICAgfTtcbiAgICBpZiAodGhpcy51c2VQYW5uaW5nKSB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5wYW5UbyhuZXdDZW50ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5zZXRDZW50ZXIobmV3Q2VudGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maXRCb3VuZHMoKSB7XG4gICAgc3dpdGNoICh0aGlzLmZpdEJvdW5kcykge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICB0aGlzLl9zdWJzY3JpYmVUb0ZpdEJvdW5kc1VwZGF0ZXMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICBpZiAodGhpcy5fZml0Qm91bmRzU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fZml0Qm91bmRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodGhpcy5fZml0Qm91bmRzU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fZml0Qm91bmRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlQm91bmRzKHRoaXMuZml0Qm91bmRzLCB0aGlzLmZpdEJvdW5kc1BhZGRpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N1YnNjcmliZVRvRml0Qm91bmRzVXBkYXRlcygpIHtcbiAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX2ZpdEJvdW5kc1N1YnNjcmlwdGlvbiA9IHRoaXMuX2ZpdEJvdW5kc1NlcnZpY2UuZ2V0Qm91bmRzJCgpLnN1YnNjcmliZShiID0+IHtcbiAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4gdGhpcy5fdXBkYXRlQm91bmRzKGIsIHRoaXMuZml0Qm91bmRzUGFkZGluZykpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3VwZGF0ZUJvdW5kcyhib3VuZHM6IExhdExuZ0JvdW5kcyB8IExhdExuZ0JvdW5kc0xpdGVyYWwsIHBhZGRpbmc/OiBudW1iZXIgfCBQYWRkaW5nKSB7XG4gICAgaWYgKCFib3VuZHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzTGF0TG5nQm91bmRzTGl0ZXJhbChib3VuZHMpICYmIHR5cGVvZiBnb29nbGUgIT09ICd1bmRlZmluZWQnICYmIGdvb2dsZSAmJiBnb29nbGUubWFwcyAmJiBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMpIHtcbiAgICAgIGNvbnN0IG5ld0JvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcbiAgICAgIG5ld0JvdW5kcy51bmlvbihib3VuZHMpO1xuICAgICAgYm91bmRzID0gbmV3Qm91bmRzO1xuICAgIH1cbiAgICBpZiAodGhpcy51c2VQYW5uaW5nKSB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5wYW5Ub0JvdW5kcyhib3VuZHMsIHBhZGRpbmcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tYXBzV3JhcHBlci5maXRCb3VuZHMoYm91bmRzLCBwYWRkaW5nKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzTGF0TG5nQm91bmRzTGl0ZXJhbChib3VuZHM6IExhdExuZ0JvdW5kcyB8IExhdExuZ0JvdW5kc0xpdGVyYWwpOiBib3VuZHMgaXMgTGF0TG5nQm91bmRzTGl0ZXJhbCB7XG4gICAgcmV0dXJuIGJvdW5kcyAhPSBudWxsICYmIChib3VuZHMgYXMgYW55KS5leHRlbmQgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU1hcENlbnRlckNoYW5nZSgpIHtcbiAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudDx2b2lkPignY2VudGVyX2NoYW5nZWQnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIuZ2V0Q2VudGVyKCkudGhlbigoY2VudGVyOiBMYXRMbmcpID0+IHtcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IGNlbnRlci5sYXQoKTtcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBjZW50ZXIubG5nKCk7XG4gICAgICAgIHRoaXMuY2VudGVyQ2hhbmdlLmVtaXQoe2xhdDogdGhpcy5sYXRpdHVkZSwgbG5nOiB0aGlzLmxvbmdpdHVkZX0gYXMgTGF0TG5nTGl0ZXJhbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQm91bmRzQ2hhbmdlKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50PHZvaWQ+KCdib3VuZHNfY2hhbmdlZCcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5nZXRCb3VuZHMoKS50aGVuKFxuICAgICAgICAoYm91bmRzOiBMYXRMbmdCb3VuZHMpID0+IHsgdGhpcy5ib3VuZHNDaGFuZ2UuZW1pdChib3VuZHMpOyB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTWFwVHlwZUlkQ2hhbmdlKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50PHZvaWQ+KCdtYXB0eXBlaWRfY2hhbmdlZCcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5nZXRNYXBUeXBlSWQoKS50aGVuKFxuICAgICAgICAobWFwVHlwZUlkOiBNYXBUeXBlSWQpID0+IHsgdGhpcy5tYXBUeXBlSWRDaGFuZ2UuZW1pdChtYXBUeXBlSWQpOyB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTWFwWm9vbUNoYW5nZSgpIHtcbiAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudDx2b2lkPignem9vbV9jaGFuZ2VkJykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX21hcHNXcmFwcGVyLmdldFpvb20oKS50aGVuKCh6OiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy56b29tID0gejtcbiAgICAgICAgdGhpcy56b29tQ2hhbmdlLmVtaXQoeik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlSWRsZUV2ZW50KCkge1xuICAgIGNvbnN0IHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50PHZvaWQ+KCdpZGxlJykuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4geyB0aGlzLmlkbGUuZW1pdCh2b2lkIDApOyB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlVGlsZXNMb2FkZWRFdmVudCgpIHtcbiAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudDx2b2lkPigndGlsZXNsb2FkZWQnKS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB0aGlzLnRpbGVzTG9hZGVkLmVtaXQodm9pZCAwKSxcbiAgICApO1xuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2gocyk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVNYXBNb3VzZUV2ZW50cygpIHtcbiAgICBpbnRlcmZhY2UgRW1pdHRlciB7XG4gICAgICBlbWl0KHZhbHVlOiBhbnkpOiB2b2lkO1xuICAgIH1cblxuICAgIHR5cGUgRXZlbnQgPSB7IG5hbWU6IHN0cmluZywgZW1pdHRlcjogRW1pdHRlciB9O1xuXG4gICAgY29uc3QgZXZlbnRzOiBFdmVudFtdID0gW1xuICAgICAge25hbWU6ICdjbGljaycsIGVtaXR0ZXI6IHRoaXMubWFwQ2xpY2t9LFxuICAgICAge25hbWU6ICdyaWdodGNsaWNrJywgZW1pdHRlcjogdGhpcy5tYXBSaWdodENsaWNrfSxcbiAgICAgIHtuYW1lOiAnZGJsY2xpY2snLCBlbWl0dGVyOiB0aGlzLm1hcERibENsaWNrfSxcbiAgICBdO1xuXG4gICAgZXZlbnRzLmZvckVhY2goKGU6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudDx7bGF0TG5nOiBMYXRMbmd9PihlLm5hbWUpLnN1YnNjcmliZShcbiAgICAgICAgKGV2ZW50OiB7bGF0TG5nOiBMYXRMbmd9KSA9PiB7XG4gICAgICAgICAgbGV0IHZhbHVlOiBNb3VzZUV2ZW50ID0ge1xuICAgICAgICAgICAgY29vcmRzOiB7XG4gICAgICAgICAgICAgIGxhdDogZXZlbnQubGF0TG5nLmxhdCgpLFxuICAgICAgICAgICAgICBsbmc6IGV2ZW50LmxhdExuZy5sbmcoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGFjZUlkOiAoZXZlbnQgYXMge2xhdExuZzogTGF0TG5nLCBwbGFjZUlkOiBzdHJpbmd9KS5wbGFjZUlkLFxuICAgICAgICAgIH07XG4gICAgICAgICAgLy8gdGhlIHBsYWNlSWQgd2lsbCBiZSB1bmRlZmluZWQgaW4gY2FzZSB0aGUgZXZlbnQgd2FzIG5vdCBhbiBJY29uTW91c2VFdmVudCAoZ29vZ2xlIHR5cGVzKVxuICAgICAgICAgIGlmICh2YWx1ZS5wbGFjZUlkICYmICF0aGlzLnNob3dEZWZhdWx0SW5mb1dpbmRvdykge1xuICAgICAgICAgICAgKGV2ZW50IGFzIGFueSkuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlLmVtaXR0ZXIuZW1pdCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgICB9KTtcbiAgfVxufVxuIl19