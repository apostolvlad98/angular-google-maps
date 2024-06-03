import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/managers/circle-manager";
export class AgmCircle {
    static { this._mapOptions = [
        'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
        'visible', 'zIndex', 'clickable',
    ]; }
    constructor(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */
        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */
        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */
        this.centerChange = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleDblClick = new EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        this.drag = new EventEmitter();
        /**
         * This event is fired when the user stops dragging the circle.
         */
        this.dragEnd = new EventEmitter();
        /**
         * This event is fired when the user starts dragging the circle.
         */
        this.dragStart = new EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */
        this.mouseDown = new EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */
        this.mouseMove = new EventEmitter();
        /**
         * This event is fired on circle mouseout.
         */
        this.mouseOut = new EventEmitter();
        /**
         * This event is fired on circle mouseover.
         */
        this.mouseOver = new EventEmitter();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */
        this.mouseUp = new EventEmitter();
        /**
         * This event is fired when the circle's radius is changed.
         */
        this.radiusChange = new EventEmitter();
        /**
         * This event is fired when the circle is right-clicked on.
         */
        this.rightClick = new EventEmitter();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    ngOnInit() {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    }
    _updateCircleOptionsChanges(changes) {
        let options = {};
        let optionKeys = Object.keys(changes).filter(k => AgmCircle._mapOptions.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _registerEventListeners() {
        let events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragstart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach((eventEmitter, eventName) => {
            this._eventSubscriptions.push(this._manager.createEventObservable(eventName, this).subscribe((value) => {
                switch (eventName) {
                    case 'radius_changed':
                        this._manager.getRadius(this).then((radius) => eventEmitter.emit(radius));
                        break;
                    case 'center_changed':
                        this._manager.getCenter(this).then((center) => eventEmitter.emit({ lat: center.lat(), lng: center.lng() }));
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    }
    /** @internal */
    ngOnDestroy() {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    }
    /**
     * Gets the LatLngBounds of this Circle.
     */
    getBounds() { return this._manager.getBounds(this); }
    getCenter() { return this._manager.getCenter(this); }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmCircle, deps: [{ token: i1.CircleManager }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: AgmCircle, selector: "agm-circle", inputs: { latitude: "latitude", longitude: "longitude", clickable: "clickable", draggable: ["circleDraggable", "draggable"], editable: "editable", fillColor: "fillColor", fillOpacity: "fillOpacity", radius: "radius", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokePosition: "strokePosition", strokeWeight: "strokeWeight", visible: "visible", zIndex: "zIndex" }, outputs: { centerChange: "centerChange", circleClick: "circleClick", circleDblClick: "circleDblClick", drag: "drag", dragEnd: "dragEnd", dragStart: "dragStart", mouseDown: "mouseDown", mouseMove: "mouseMove", mouseOut: "mouseOut", mouseOver: "mouseOver", mouseUp: "mouseUp", radiusChange: "radiusChange", rightClick: "rightClick" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmCircle, decorators: [{
            type: Directive,
            args: [{
                    selector: 'agm-circle',
                }]
        }], ctorParameters: () => [{ type: i1.CircleManager }], propDecorators: { latitude: [{
                type: Input
            }], longitude: [{
                type: Input
            }], clickable: [{
                type: Input
            }], draggable: [{
                type: Input,
                args: ['circleDraggable']
            }], editable: [{
                type: Input
            }], fillColor: [{
                type: Input
            }], fillOpacity: [{
                type: Input
            }], radius: [{
                type: Input
            }], strokeColor: [{
                type: Input
            }], strokeOpacity: [{
                type: Input
            }], strokePosition: [{
                type: Input
            }], strokeWeight: [{
                type: Input
            }], visible: [{
                type: Input
            }], zIndex: [{
                type: Input
            }], centerChange: [{
                type: Output
            }], circleClick: [{
                type: Output
            }], circleDblClick: [{
                type: Output
            }], drag: [{
                type: Output
            }], dragEnd: [{
                type: Output
            }], dragStart: [{
                type: Output
            }], mouseDown: [{
                type: Output
            }], mouseMove: [{
                type: Output
            }], mouseOut: [{
                type: Output
            }], mouseOver: [{
                type: Output
            }], mouseUp: [{
                type: Output
            }], radiusChange: [{
                type: Output
            }], rightClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvY2lyY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQzs7O0FBVW5ILE1BQU0sT0FBTyxTQUFTO2FBNklMLGdCQUFXLEdBQWE7UUFDckMsV0FBVyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGNBQWM7UUFDNUYsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXO0tBQ2pDLEFBSHlCLENBR3hCO0lBSUYsWUFBb0IsUUFBdUI7UUFBdkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQXpJM0M7O1dBRUc7UUFDTSxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRTFCOztXQUVHO1FBQ0gsMkNBQTJDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFNUM7OztXQUdHO1FBQ00sYUFBUSxHQUFHLEtBQUssQ0FBQztRQVkxQjs7V0FFRztRQUNNLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFZcEI7OztXQUdHO1FBQ00sbUJBQWMsR0FBb0MsUUFBUSxDQUFDO1FBRXBFOztXQUVHO1FBQ00saUJBQVksR0FBRyxDQUFDLENBQUM7UUFFMUI7O1dBRUc7UUFDTSxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBT3hCOztXQUVHO1FBQ08saUJBQVksR0FBZ0MsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFFeEY7O1dBRUc7UUFDTyxnQkFBVyxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBRWpGOztXQUVHO1FBQ08sbUJBQWMsR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUVwRjs7V0FFRztRQUNPLFNBQUksR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUUxRTs7V0FFRztRQUNP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QU87c0JBQWhCLE1BQU07Z0JBS0csWUFBWTtzQkFBckIsTUFBTTtnQkFLRyxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tICcuLi9tYXAtdHlwZXMnO1xyXG5pbXBvcnQgeyBMYXRMbmcsIExhdExuZ0JvdW5kcywgTGF0TG5nTGl0ZXJhbCwgTW91c2VFdmVudCBhcyBNYXBNb3VzZUV2ZW50IH0gZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLW1hcHMtdHlwZXMnO1xyXG5pbXBvcnQgeyBDaXJjbGVNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvY2lyY2xlLW1hbmFnZXInO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhZ20tY2lyY2xlJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFnbUNpcmNsZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsYXRpdHVkZSBwb3NpdGlvbiBvZiB0aGUgY2lyY2xlIChyZXF1aXJlZCkuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbGF0aXR1ZGU6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNsaWNrYWJsZSBwb3NpdGlvbiBvZiB0aGUgY2lyY2xlIChyZXF1aXJlZCkuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbG9uZ2l0dWRlOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgQ2lyY2xlIGhhbmRsZXMgbW91c2UgZXZlbnRzLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNsaWNrYWJsZSA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gZHJhZyB0aGlzIGNpcmNsZSBvdmVyIHRoZSBtYXAuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoJ2NpcmNsZURyYWdnYWJsZScpIGRyYWdnYWJsZSA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGVkaXQgdGhpcyBjaXJjbGUgYnkgZHJhZ2dpbmcgdGhlIGNvbnRyb2wgcG9pbnRzIHNob3duIGF0XHJcbiAgICogdGhlIGNlbnRlciBhbmQgYXJvdW5kIHRoZSBjaXJjdW1mZXJlbmNlIG9mIHRoZSBjaXJjbGUuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGVkaXRhYmxlID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBmaWxsIGNvbG9yLiBBbGwgQ1NTMyBjb2xvcnMgYXJlIHN1cHBvcnRlZCBleGNlcHQgZm9yIGV4dGVuZGVkIG5hbWVkIGNvbG9ycy5cclxuICAgKi9cclxuICBASW5wdXQoKSBmaWxsQ29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGZpbGwgb3BhY2l0eSBiZXR3ZWVuIDAuMCBhbmQgMS4wLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGZpbGxPcGFjaXR5OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSByYWRpdXMgaW4gbWV0ZXJzIG9uIHRoZSBFYXJ0aCdzIHN1cmZhY2UuXHJcbiAgICovXHJcbiAgQElucHV0KCkgcmFkaXVzID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHN0cm9rZSBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZCBuYW1lZCBjb2xvcnMuXHJcbiAgICovXHJcbiAgQElucHV0KCkgc3Ryb2tlQ29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHN0cm9rZSBvcGFjaXR5IGJldHdlZW4gMC4wIGFuZCAxLjBcclxuICAgKi9cclxuICBASW5wdXQoKSBzdHJva2VPcGFjaXR5OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzdHJva2UgcG9zaXRpb24uIERlZmF1bHRzIHRvIENFTlRFUi5cclxuICAgKiBUaGlzIHByb3BlcnR5IGlzIG5vdCBzdXBwb3J0ZWQgb24gSW50ZXJuZXQgRXhwbG9yZXIgOCBhbmQgZWFybGllci5cclxuICAgKi9cclxuICBASW5wdXQoKSBzdHJva2VQb3NpdGlvbjogJ0NFTlRFUicgfCAnSU5TSURFJyB8ICdPVVRTSURFJyA9ICdDRU5URVInO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVscy5cclxuICAgKi9cclxuICBASW5wdXQoKSBzdHJva2VXZWlnaHQgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRoaXMgY2lyY2xlIGlzIHZpc2libGUgb24gdGhlIG1hcC4gRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICAgKi9cclxuICBASW5wdXQoKSB2aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHpJbmRleCBjb21wYXJlZCB0byBvdGhlciBwb2x5cy5cclxuICAgKi9cclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBjaXJjbGUncyBjZW50ZXIgaXMgY2hhbmdlZC5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgY2VudGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TGF0TG5nTGl0ZXJhbD4gPSBuZXcgRXZlbnRFbWl0dGVyPExhdExuZ0xpdGVyYWw+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGNpcmNsZS5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgY2lyY2xlQ2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgY2lyY2xlLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBjaXJjbGVEYmxDbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IGlzIHJlcGVhdGVkbHkgZmlyZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MgdGhlIGNpcmNsZS5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgZHJhZzogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgZHJhZ2dpbmcgdGhlIGNpcmNsZS5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgZHJhZ0VuZDogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIHRoZSBjaXJjbGUuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGRyYWdTdGFydDogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZWRvd24gZXZlbnQgaXMgZmlyZWQgb24gdGhlIGNpcmNsZS5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgbW91c2VEb3duOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlbW92ZSBldmVudCBpcyBmaXJlZCBvbiB0aGUgY2lyY2xlLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBtb3VzZU1vdmU6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBjaXJjbGUgbW91c2VvdXQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIG1vdXNlT3V0OiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gY2lyY2xlIG1vdXNlb3Zlci5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgbW91c2VPdmVyOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNldXAgZXZlbnQgaXMgZmlyZWQgb24gdGhlIGNpcmNsZS5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgbW91c2VVcDogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIGNpcmNsZSdzIHJhZGl1cyBpcyBjaGFuZ2VkLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSByYWRpdXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgY2lyY2xlIGlzIHJpZ2h0LWNsaWNrZWQgb24uXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHJpZ2h0Q2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfY2lyY2xlQWRkZWRUb01hbmFnZXIgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgX21hcE9wdGlvbnM6IHN0cmluZ1tdID0gW1xyXG4gICAgJ2ZpbGxDb2xvcicsICdmaWxsT3BhY2l0eScsICdzdHJva2VDb2xvcicsICdzdHJva2VPcGFjaXR5JywgJ3N0cm9rZVBvc2l0aW9uJywgJ3N0cm9rZVdlaWdodCcsXHJcbiAgICAndmlzaWJsZScsICd6SW5kZXgnLCAnY2xpY2thYmxlJyxcclxuICBdO1xyXG5cclxuICBwcml2YXRlIF9ldmVudFN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21hbmFnZXI6IENpcmNsZU1hbmFnZXIpIHt9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX21hbmFnZXIuYWRkQ2lyY2xlKHRoaXMpO1xyXG4gICAgdGhpcy5fY2lyY2xlQWRkZWRUb01hbmFnZXIgPSB0cnVlO1xyXG4gICAgdGhpcy5fcmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtba2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XHJcbiAgICBpZiAoIXRoaXMuX2NpcmNsZUFkZGVkVG9NYW5hZ2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydsYXRpdHVkZSddIHx8IGNoYW5nZXNbJ2xvbmdpdHVkZSddKSB7XHJcbiAgICAgIHRoaXMuX21hbmFnZXIuc2V0Q2VudGVyKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ2VkaXRhYmxlJ10pIHtcclxuICAgICAgdGhpcy5fbWFuYWdlci5zZXRFZGl0YWJsZSh0aGlzKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydkcmFnZ2FibGUnXSkge1xyXG4gICAgICB0aGlzLl9tYW5hZ2VyLnNldERyYWdnYWJsZSh0aGlzKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWyd2aXNpYmxlJ10pIHtcclxuICAgICAgdGhpcy5fbWFuYWdlci5zZXRWaXNpYmxlKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3JhZGl1cyddKSB7XHJcbiAgICAgIHRoaXMuX21hbmFnZXIuc2V0UmFkaXVzKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdXBkYXRlQ2lyY2xlT3B0aW9uc0NoYW5nZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVDaXJjbGVPcHRpb25zQ2hhbmdlcyhjaGFuZ2VzOiB7W3Byb3BOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XHJcbiAgICBsZXQgb3B0aW9uczoge1twcm9wTmFtZTogc3RyaW5nXTogYW55fSA9IHt9O1xyXG4gICAgbGV0IG9wdGlvbktleXMgPVxyXG4gICAgICAgIE9iamVjdC5rZXlzKGNoYW5nZXMpLmZpbHRlcihrID0+IEFnbUNpcmNsZS5fbWFwT3B0aW9ucy5pbmRleE9mKGspICE9PSAtMSk7XHJcbiAgICBvcHRpb25LZXlzLmZvckVhY2goKGspID0+IHsgb3B0aW9uc1trXSA9IGNoYW5nZXNba10uY3VycmVudFZhbHVlOyB9KTtcclxuICAgIGlmIChvcHRpb25LZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5fbWFuYWdlci5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHM6IE1hcDxzdHJpbmcsIEV2ZW50RW1pdHRlcjxhbnk+PiA9IG5ldyBNYXA8c3RyaW5nLCBFdmVudEVtaXR0ZXI8YW55Pj4oKTtcclxuICAgIGV2ZW50cy5zZXQoJ2NlbnRlcl9jaGFuZ2VkJywgdGhpcy5jZW50ZXJDaGFuZ2UpO1xyXG4gICAgZXZlbnRzLnNldCgnY2xpY2snLCB0aGlzLmNpcmNsZUNsaWNrKTtcclxuICAgIGV2ZW50cy5zZXQoJ2RibGNsaWNrJywgdGhpcy5jaXJjbGVEYmxDbGljayk7XHJcbiAgICBldmVudHMuc2V0KCdkcmFnJywgdGhpcy5kcmFnKTtcclxuICAgIGV2ZW50cy5zZXQoJ2RyYWdlbmQnLCB0aGlzLmRyYWdFbmQpO1xyXG4gICAgZXZlbnRzLnNldCgnZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnQpO1xyXG4gICAgZXZlbnRzLnNldCgnbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd24pO1xyXG4gICAgZXZlbnRzLnNldCgnbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpO1xyXG4gICAgZXZlbnRzLnNldCgnbW91c2VvdXQnLCB0aGlzLm1vdXNlT3V0KTtcclxuICAgIGV2ZW50cy5zZXQoJ21vdXNlb3ZlcicsIHRoaXMubW91c2VPdmVyKTtcclxuICAgIGV2ZW50cy5zZXQoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXApO1xyXG4gICAgZXZlbnRzLnNldCgncmFkaXVzX2NoYW5nZWQnLCB0aGlzLnJhZGl1c0NoYW5nZSk7XHJcbiAgICBldmVudHMuc2V0KCdyaWdodGNsaWNrJywgdGhpcy5yaWdodENsaWNrKTtcclxuXHJcbiAgICBldmVudHMuZm9yRWFjaCgoZXZlbnRFbWl0dGVyLCBldmVudE5hbWUpID0+IHtcclxuICAgICAgdGhpcy5fZXZlbnRTdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxNYXBNb3VzZUV2ZW50PihldmVudE5hbWUsIHRoaXMpLnN1YnNjcmliZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudE5hbWUpIHtcclxuICAgICAgICAgICAgICBjYXNlICdyYWRpdXNfY2hhbmdlZCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VyLmdldFJhZGl1cyh0aGlzKS50aGVuKChyYWRpdXMpID0+IGV2ZW50RW1pdHRlci5lbWl0KHJhZGl1cykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSAnY2VudGVyX2NoYW5nZWQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlci5nZXRDZW50ZXIodGhpcykudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAoY2VudGVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEVtaXR0ZXIuZW1pdCh7bGF0OiBjZW50ZXIubGF0KCksIGxuZzogY2VudGVyLmxuZygpfSBhcyBMYXRMbmdMaXRlcmFsKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAge2Nvb3Jkczoge2xhdDogdmFsdWUubGF0TG5nLmxhdCgpLCBsbmc6IHZhbHVlLmxhdExuZy5sbmcoKX19IGFzIE1vdXNlRXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2V2ZW50U3Vic2NyaXB0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHM6IFN1YnNjcmlwdGlvbikgeyBzLnVuc3Vic2NyaWJlKCk7IH0pO1xyXG4gICAgdGhpcy5fZXZlbnRTdWJzY3JpcHRpb25zID0gbnVsbDtcclxuICAgIHRoaXMuX21hbmFnZXIucmVtb3ZlQ2lyY2xlKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgTGF0TG5nQm91bmRzIG9mIHRoaXMgQ2lyY2xlLlxyXG4gICAqL1xyXG4gIGdldEJvdW5kcygpOiBQcm9taXNlPExhdExuZ0JvdW5kcz4geyByZXR1cm4gdGhpcy5fbWFuYWdlci5nZXRCb3VuZHModGhpcyk7IH1cclxuXHJcbiAgZ2V0Q2VudGVyKCk6IFByb21pc2U8TGF0TG5nPiB7IHJldHVybiB0aGlzLl9tYW5hZ2VyLmdldENlbnRlcih0aGlzKTsgfVxyXG59XHJcbiJdfQ==