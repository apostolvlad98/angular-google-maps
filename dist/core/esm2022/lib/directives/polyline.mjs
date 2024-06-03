import { ContentChildren, Directive, EventEmitter, Input, Output } from '@angular/core';
import { AgmPolylineIcon } from './polyline-icon';
import { AgmPolylinePoint } from './polyline-point';
import * as i0 from "@angular/core";
import * as i1 from "../services/managers/polyline-manager";
let polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
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
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
export class AgmPolyline {
    static { this._polylineOptionsAttributes = [
        'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
        'zIndex',
    ]; }
    constructor(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */
        this.lineClick = new EventEmitter();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */
        this.lineDblClick = new EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */
        this.lineDrag = new EventEmitter();
        /**
         * This event is fired when the user stops dragging the polyline.
         */
        this.lineDragEnd = new EventEmitter();
        /**
         * This event is fired when the user starts dragging the polyline.
         */
        this.lineDragStart = new EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */
        this.lineMouseDown = new EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */
        this.lineMouseMove = new EventEmitter();
        /**
         * This event is fired on Polyline mouseout.
         */
        this.lineMouseOut = new EventEmitter();
        /**
         * This event is fired on Polyline mouseover.
         */
        this.lineMouseOver = new EventEmitter();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */
        this.lineMouseUp = new EventEmitter();
        /**
         * This event is fired when the Polyline is right-clicked on.
         */
        this.lineRightClick = new EventEmitter();
        /**
         * This event is fired after Polyline's path changes.
         */
        this.polyPathChange = new EventEmitter();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    ngAfterContentInit() {
        if (this.points.length) {
            this.points.forEach((point) => {
                const s = point.positionChanged.subscribe(() => { this._polylineManager.updatePolylinePoints(this); });
                this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        const pointSub = this.points.changes.subscribe(() => this._polylineManager.updatePolylinePoints(this));
        this._subscriptions.push(pointSub);
        this._polylineManager.updatePolylinePoints(this);
        const iconSub = this.iconSequences.changes.subscribe(() => this._polylineManager.updateIconSequences(this));
        this._subscriptions.push(iconSub);
    }
    ngOnChanges(changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        let options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmPolyline._polylineOptionsAttributes.indexOf(k) !== -1);
        optionKeys.forEach(k => options[k] = changes[k].currentValue);
        this._polylineManager.setPolylineOptions(this, options);
    }
    getPath() {
        return this._polylineManager.getPath(this);
    }
    _init() {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    }
    _addEventListeners() {
        const handlers = [
            { name: 'click', handler: (ev) => this.lineClick.emit(ev) },
            { name: 'dblclick', handler: (ev) => this.lineDblClick.emit(ev) },
            { name: 'drag', handler: (ev) => this.lineDrag.emit(ev) },
            { name: 'dragend', handler: (ev) => this.lineDragEnd.emit(ev) },
            { name: 'dragstart', handler: (ev) => this.lineDragStart.emit(ev) },
            { name: 'mousedown', handler: (ev) => this.lineMouseDown.emit(ev) },
            { name: 'mousemove', handler: (ev) => this.lineMouseMove.emit(ev) },
            { name: 'mouseout', handler: (ev) => this.lineMouseOut.emit(ev) },
            { name: 'mouseover', handler: (ev) => this.lineMouseOver.emit(ev) },
            { name: 'mouseup', handler: (ev) => this.lineMouseUp.emit(ev) },
            { name: 'rightclick', handler: (ev) => this.lineRightClick.emit(ev) },
        ];
        handlers.forEach((obj) => {
            const os = this._polylineManager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
        this._polylineManager.createPathEventObservable(this).then((ob$) => {
            const os = ob$.subscribe(pathEvent => this.polyPathChange.emit(pathEvent));
            this._subscriptions.push(os);
        });
    }
    /** @internal */
    _getPoints() {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    }
    _getIcons() {
        if (this.iconSequences) {
            return this.iconSequences.toArray();
        }
        return [];
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    ngOnDestroy() {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach((s) => s.unsubscribe());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmPolyline, deps: [{ token: i1.PolylineManager }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: AgmPolyline, selector: "agm-polyline", inputs: { clickable: "clickable", draggable: ["polylineDraggable", "draggable"], editable: "editable", geodesic: "geodesic", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokeWeight: "strokeWeight", visible: "visible", zIndex: "zIndex" }, outputs: { lineClick: "lineClick", lineDblClick: "lineDblClick", lineDrag: "lineDrag", lineDragEnd: "lineDragEnd", lineDragStart: "lineDragStart", lineMouseDown: "lineMouseDown", lineMouseMove: "lineMouseMove", lineMouseOut: "lineMouseOut", lineMouseOver: "lineMouseOver", lineMouseUp: "lineMouseUp", lineRightClick: "lineRightClick", polyPathChange: "polyPathChange" }, queries: [{ propertyName: "points", predicate: AgmPolylinePoint }, { propertyName: "iconSequences", predicate: AgmPolylineIcon }], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmPolyline, decorators: [{
            type: Directive,
            args: [{
                    selector: 'agm-polyline',
                }]
        }], ctorParameters: () => [{ type: i1.PolylineManager }], propDecorators: { clickable: [{
                type: Input
            }], draggable: [{
                type: Input,
                args: ['polylineDraggable']
            }], editable: [{
                type: Input
            }], geodesic: [{
                type: Input
            }], strokeColor: [{
                type: Input
            }], strokeOpacity: [{
                type: Input
            }], strokeWeight: [{
                type: Input
            }], visible: [{
                type: Input
            }], zIndex: [{
                type: Input
            }], lineClick: [{
                type: Output
            }], lineDblClick: [{
                type: Output
            }], lineDrag: [{
                type: Output
            }], lineDragEnd: [{
                type: Output
            }], lineDragStart: [{
                type: Output
            }], lineMouseDown: [{
                type: Output
            }], lineMouseMove: [{
                type: Output
            }], lineMouseOut: [{
                type: Output
            }], lineMouseOver: [{
                type: Output
            }], lineMouseUp: [{
                type: Output
            }], lineRightClick: [{
                type: Output
            }], polyPathChange: [{
                type: Output
            }], points: [{
                type: ContentChildren,
                args: [AgmPolylinePoint]
            }], iconSequences: [{
                type: ContentChildren,
                args: [AgmPolylineIcon]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy9wb2x5bGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLGVBQWUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBd0IsTUFBTSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUsxSixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUVwRCxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJHO0FBSUgsTUFBTSxPQUFPLFdBQVc7YUF1SFAsK0JBQTBCLEdBQWtCO1FBQ3pELFdBQVcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGNBQWM7UUFDOUYsUUFBUTtLQUNULEFBSHdDLENBR3ZDO0lBTUYsWUFBb0IsZ0JBQWlDO1FBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUEvSHJEOztXQUVHO1FBQ00sY0FBUyxHQUFHLElBQUksQ0FBQztRQUUxQjs7O1dBR0c7UUFDSCwyQ0FBMkM7UUFDZixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRTlDOzs7V0FHRztRQUNNLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFMUI7Ozs7O1dBS0c7UUFDTSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBaUIxQjs7V0FFRztRQUNNLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFPeEI7O1dBRUc7UUFDTyxjQUFTLEdBQWlDLElBQUksWUFBWSxFQUFrQixDQUFDO1FBRXZGOztXQUVHO1FBQ08saUJBQVksR0FBaUMsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFFMUY7O1dBRUc7UUFDTyxhQUFR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LFdBQVc7a0dBQVgsV0FBVyw2ckJBbUhMLGdCQUFnQixnREFFaEIsZUFBZTs7MkZBckhyQixXQUFXO2tCQUh2QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6QjtvRkFLVSxTQUFTO3NCQUFqQixLQUFLO2dCQU9zQixTQUFTO3NCQUFwQyxLQUFLO3VCQUFDLG1CQUFtQjtnQkFNakIsUUFBUTtzQkFBaEIsS0FBSztnQkFRRyxRQUFRO3NCQUFoQixLQUFLO2dCQUtHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBS0csYUFBYTtzQkFBckIsS0FBSztnQkFLRyxZQUFZO3NCQUFwQixLQUFLO2dCQUtHLE9BQU87c0JBQWYsS0FBSztnQkFLRyxNQUFNO3NCQUFkLEtBQUs7Z0JBS0ksU0FBUztzQkFBbEIsTUFBTTtnQkFLRyxZQUFZO3NCQUFyQixNQUFNO2dCQUtHLFFBQVE7c0JBQWpCLE1BQU07Z0JBS0csV0FBVztzQkFBcEIsTUFBTTtnQkFLRyxhQUFhO3NCQUF0QixNQUFNO2dCQUtHLGFBQWE7c0JBQXRCLE1BQU07Z0JBS0csYUFBYTtzQkFBdEIsTUFBTTtnQkFLRyxZQUFZO3NCQUFyQixNQUFNO2dCQUtHLGFBQWE7c0JBQXRCLE1BQU07Z0JBS0csV0FBVztzQkFBcEIsTUFBTTtnQkFLRyxjQUFjO3NCQUF2QixNQUFNO2dCQUtHLGNBQWM7c0JBQXZCLE1BQU07Z0JBSzRCLE1BQU07c0JBQXhDLGVBQWU7dUJBQUMsZ0JBQWdCO2dCQUVDLGFBQWE7c0JBQTlDLGVBQWU7dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3V0cHV0LCBRdWVyeUxpc3QsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBMYXRMbmcsIFBvbHlNb3VzZUV2ZW50IH0gZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLW1hcHMtdHlwZXMnO1xyXG5pbXBvcnQgeyBQb2x5bGluZU1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5bGluZS1tYW5hZ2VyJztcclxuaW1wb3J0IHsgQWdtUG9seWxpbmVJY29uIH0gZnJvbSAnLi9wb2x5bGluZS1pY29uJztcclxuaW1wb3J0IHsgQWdtUG9seWxpbmVQb2ludCB9IGZyb20gJy4vcG9seWxpbmUtcG9pbnQnO1xyXG5cclxubGV0IHBvbHlsaW5lSWQgPSAwO1xyXG4vKipcclxuICogQWdtUG9seWxpbmUgcmVuZGVycyBhIHBvbHlsaW5lIG9uIGEge0BsaW5rIEFnbU1hcH1cclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuICpcclxuICogQENvbXBvbmVudCh7XHJcbiAqICBzZWxlY3RvcjogJ215LW1hcC1jbXAnLFxyXG4gKiAgc3R5bGVzOiBbYFxyXG4gKiAgICAuYWdtLW1hcC1jb250YWluZXIge1xyXG4gKiAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAqICAgIH1cclxuICogYF0sXHJcbiAqICB0ZW1wbGF0ZTogYFxyXG4gKiAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbem9vbV09XCJ6b29tXCI+XHJcbiAqICAgICAgPGFnbS1wb2x5bGluZT5cclxuICogICAgICAgICAgPGFnbS1wb2x5bGluZS1wb2ludCBbbGF0aXR1ZGVdPVwibGF0QVwiIFtsb25naXR1ZGVdPVwibG5nQVwiPlxyXG4gKiAgICAgICAgICA8L2FnbS1wb2x5bGluZS1wb2ludD5cclxuICogICAgICAgICAgPGFnbS1wb2x5bGluZS1wb2ludCBbbGF0aXR1ZGVdPVwibGF0QlwiIFtsb25naXR1ZGVdPVwibG5nQlwiPlxyXG4gKiAgICAgICAgICA8L2FnbS1wb2x5bGluZS1wb2ludD5cclxuICogICAgICA8L2FnbS1wb2x5bGluZT5cclxuICogICAgPC9hZ20tbWFwPlxyXG4gKiAgYFxyXG4gKiB9KVxyXG4gKiBgYGBcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnYWdtLXBvbHlsaW5lJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFnbVBvbHlsaW5lIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQge1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgUG9seWxpbmUgaGFuZGxlcyBtb3VzZSBldmVudHMuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICovXHJcbiAgQElucHV0KCkgY2xpY2thYmxlID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiBkcmFnIHRoaXMgc2hhcGUgb3ZlciB0aGUgbWFwLiBUaGUgZ2VvZGVzaWMgcHJvcGVydHkgZGVmaW5lcyB0aGVcclxuICAgKiBtb2RlIG9mIGRyYWdnaW5nLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCdwb2x5bGluZURyYWdnYWJsZScpIGRyYWdnYWJsZSA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGVkaXQgdGhpcyBzaGFwZSBieSBkcmFnZ2luZyB0aGUgY29udHJvbCBwb2ludHMgc2hvd24gYXQgdGhlXHJcbiAgICogdmVydGljZXMgYW5kIG9uIGVhY2ggc2VnbWVudC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICovXHJcbiAgQElucHV0KCkgZWRpdGFibGUgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiB0cnVlLCBlZGdlcyBvZiB0aGUgcG9seWdvbiBhcmUgaW50ZXJwcmV0ZWQgYXMgZ2VvZGVzaWMgYW5kIHdpbGwgZm9sbG93IHRoZSBjdXJ2YXR1cmUgb2ZcclxuICAgKiB0aGUgRWFydGguIFdoZW4gZmFsc2UsIGVkZ2VzIG9mIHRoZSBwb2x5Z29uIGFyZSByZW5kZXJlZCBhcyBzdHJhaWdodCBsaW5lcyBpbiBzY3JlZW4gc3BhY2UuXHJcbiAgICogTm90ZSB0aGF0IHRoZSBzaGFwZSBvZiBhIGdlb2Rlc2ljIHBvbHlnb24gbWF5IGFwcGVhciB0byBjaGFuZ2Ugd2hlbiBkcmFnZ2VkLCBhcyB0aGUgZGltZW5zaW9uc1xyXG4gICAqIGFyZSBtYWludGFpbmVkIHJlbGF0aXZlIHRvIHRoZSBzdXJmYWNlIG9mIHRoZSBlYXJ0aC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICovXHJcbiAgQElucHV0KCkgZ2VvZGVzaWMgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHN0cm9rZSBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZCBuYW1lZCBjb2xvcnMuXHJcbiAgICovXHJcbiAgQElucHV0KCkgc3Ryb2tlQ29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHN0cm9rZSBvcGFjaXR5IGJldHdlZW4gMC4wIGFuZCAxLjAuXHJcbiAgICovXHJcbiAgQElucHV0KCkgc3Ryb2tlT3BhY2l0eTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVscy5cclxuICAgKi9cclxuICBASW5wdXQoKSBzdHJva2VXZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGlzIHBvbHlsaW5lIGlzIHZpc2libGUgb24gdGhlIG1hcC4gRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICAgKi9cclxuICBASW5wdXQoKSB2aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHpJbmRleCBjb21wYXJlZCB0byBvdGhlciBwb2x5cy5cclxuICAgKi9cclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gY2xpY2sgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlsaW5lLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBsaW5lQ2xpY2s6IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBkYmxjbGljayBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWxpbmUuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGxpbmVEYmxDbGljazogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgaXMgcmVwZWF0ZWRseSBmaXJlZCB3aGlsZSB0aGUgdXNlciBkcmFncyB0aGUgcG9seWxpbmUuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGxpbmVEcmFnOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdG9wcyBkcmFnZ2luZyB0aGUgcG9seWxpbmUuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGxpbmVEcmFnRW5kOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgdGhlIHBvbHlsaW5lLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBsaW5lRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlZG93biBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWxpbmUuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGxpbmVNb3VzZURvd246IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZW1vdmUgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlsaW5lLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBsaW5lTW91c2VNb3ZlOiBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBQb2x5bGluZSBtb3VzZW91dC5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgbGluZU1vdXNlT3V0OiBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBQb2x5bGluZSBtb3VzZW92ZXIuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGxpbmVNb3VzZU92ZXI6IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZSB0aGUgRE9NIG1vdXNldXAgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlsaW5lXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGxpbmVNb3VzZVVwOiBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBQb2x5bGluZSBpcyByaWdodC1jbGlja2VkIG9uLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBsaW5lUmlnaHRDbGljazogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgYWZ0ZXIgUG9seWxpbmUncyBwYXRoIGNoYW5nZXMuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHBvbHlQYXRoQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYXRoRXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQWdtUG9seWxpbmVQb2ludCkgcG9pbnRzOiBRdWVyeUxpc3Q8QWdtUG9seWxpbmVQb2ludD47XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQWdtUG9seWxpbmVJY29uKSBpY29uU2VxdWVuY2VzOiBRdWVyeUxpc3Q8QWdtUG9seWxpbmVJY29uPjtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3BvbHlsaW5lT3B0aW9uc0F0dHJpYnV0ZXM6IEFycmF5PHN0cmluZz4gPSBbXHJcbiAgICAnZHJhZ2dhYmxlJywgJ2VkaXRhYmxlJywgJ3Zpc2libGUnLCAnZ2VvZGVzaWMnLCAnc3Ryb2tlQ29sb3InLCAnc3Ryb2tlT3BhY2l0eScsICdzdHJva2VXZWlnaHQnLFxyXG4gICAgJ3pJbmRleCcsXHJcbiAgXTtcclxuXHJcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcclxuICBwcml2YXRlIF9wb2x5bGluZUFkZGVkVG9NYW5hZ2VyID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9seWxpbmVNYW5hZ2VyOiBQb2x5bGluZU1hbmFnZXIpIHsgdGhpcy5faWQgPSAocG9seWxpbmVJZCsrKS50b1N0cmluZygpOyB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goKHBvaW50OiBBZ21Qb2x5bGluZVBvaW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcyA9IHBvaW50LnBvc2l0aW9uQ2hhbmdlZC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICgpID0+IHsgdGhpcy5fcG9seWxpbmVNYW5hZ2VyLnVwZGF0ZVBvbHlsaW5lUG9pbnRzKHRoaXMpOyB9KTtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2gocyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLl9wb2x5bGluZUFkZGVkVG9NYW5hZ2VyKSB7XHJcbiAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBvaW50U3ViID0gdGhpcy5wb2ludHMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fcG9seWxpbmVNYW5hZ2VyLnVwZGF0ZVBvbHlsaW5lUG9pbnRzKHRoaXMpKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChwb2ludFN1Yik7XHJcbiAgICB0aGlzLl9wb2x5bGluZU1hbmFnZXIudXBkYXRlUG9seWxpbmVQb2ludHModGhpcyk7XHJcblxyXG4gICAgY29uc3QgaWNvblN1YiA9IHRoaXMuaWNvblNlcXVlbmNlcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9wb2x5bGluZU1hbmFnZXIudXBkYXRlSWNvblNlcXVlbmNlcyh0aGlzKSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goaWNvblN1Yik7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogYW55IHtcclxuICAgIGlmICghdGhpcy5fcG9seWxpbmVBZGRlZFRvTWFuYWdlcikge1xyXG4gICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgb3B0aW9uczoge1twcm9wTmFtZTogc3RyaW5nXTogYW55fSA9IHt9O1xyXG4gICAgY29uc3Qgb3B0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZXMpLmZpbHRlcihcclxuICAgICAgICBrID0+IEFnbVBvbHlsaW5lLl9wb2x5bGluZU9wdGlvbnNBdHRyaWJ1dGVzLmluZGV4T2YoaykgIT09IC0xKTtcclxuICAgIG9wdGlvbktleXMuZm9yRWFjaChrID0+IG9wdGlvbnNba10gPSBjaGFuZ2VzW2tdLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB0aGlzLl9wb2x5bGluZU1hbmFnZXIuc2V0UG9seWxpbmVPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGF0aCgpOiBQcm9taXNlPEFycmF5PExhdExuZz4+IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2x5bGluZU1hbmFnZXIuZ2V0UGF0aCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2luaXQoKSB7XHJcbiAgICB0aGlzLl9wb2x5bGluZU1hbmFnZXIuYWRkUG9seWxpbmUodGhpcyk7XHJcbiAgICB0aGlzLl9wb2x5bGluZUFkZGVkVG9NYW5hZ2VyID0gdHJ1ZTtcclxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9hZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IGhhbmRsZXJzID0gW1xyXG4gICAgICB7bmFtZTogJ2NsaWNrJywgaGFuZGxlcjogKGV2OiBQb2x5TW91c2VFdmVudCkgPT4gdGhpcy5saW5lQ2xpY2suZW1pdChldil9LFxyXG4gICAgICB7bmFtZTogJ2RibGNsaWNrJywgaGFuZGxlcjogKGV2OiBQb2x5TW91c2VFdmVudCkgPT4gdGhpcy5saW5lRGJsQ2xpY2suZW1pdChldil9LFxyXG4gICAgICB7bmFtZTogJ2RyYWcnLCBoYW5kbGVyOiAoZXY6IE1vdXNlRXZlbnQpID0+IHRoaXMubGluZURyYWcuZW1pdChldil9LFxyXG4gICAgICB7bmFtZTogJ2RyYWdlbmQnLCBoYW5kbGVyOiAoZXY6IE1vdXNlRXZlbnQpID0+IHRoaXMubGluZURyYWdFbmQuZW1pdChldil9LFxyXG4gICAgICB7bmFtZTogJ2RyYWdzdGFydCcsIGhhbmRsZXI6IChldjogTW91c2VFdmVudCkgPT4gdGhpcy5saW5lRHJhZ1N0YXJ0LmVtaXQoZXYpfSxcclxuICAgICAge25hbWU6ICdtb3VzZWRvd24nLCBoYW5kbGVyOiAoZXY6IFBvbHlNb3VzZUV2ZW50KSA9PiB0aGlzLmxpbmVNb3VzZURvd24uZW1pdChldil9LFxyXG4gICAgICB7bmFtZTogJ21vdXNlbW92ZScsIGhhbmRsZXI6IChldjogUG9seU1vdXNlRXZlbnQpID0+IHRoaXMubGluZU1vdXNlTW92ZS5lbWl0KGV2KX0sXHJcbiAgICAgIHtuYW1lOiAnbW91c2VvdXQnLCBoYW5kbGVyOiAoZXY6IFBvbHlNb3VzZUV2ZW50KSA9PiB0aGlzLmxpbmVNb3VzZU91dC5lbWl0KGV2KX0sXHJcbiAgICAgIHtuYW1lOiAnbW91c2VvdmVyJywgaGFuZGxlcjogKGV2OiBQb2x5TW91c2VFdmVudCkgPT4gdGhpcy5saW5lTW91c2VPdmVyLmVtaXQoZXYpfSxcclxuICAgICAge25hbWU6ICdtb3VzZXVwJywgaGFuZGxlcjogKGV2OiBQb2x5TW91c2VFdmVudCkgPT4gdGhpcy5saW5lTW91c2VVcC5lbWl0KGV2KX0sXHJcbiAgICAgIHtuYW1lOiAncmlnaHRjbGljaycsIGhhbmRsZXI6IChldjogUG9seU1vdXNlRXZlbnQpID0+IHRoaXMubGluZVJpZ2h0Q2xpY2suZW1pdChldil9LFxyXG4gICAgXTtcclxuICAgIGhhbmRsZXJzLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICBjb25zdCBvcyA9IHRoaXMuX3BvbHlsaW5lTWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGUob2JqLm5hbWUsIHRoaXMpLnN1YnNjcmliZShvYmouaGFuZGxlcik7XHJcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChvcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9wb2x5bGluZU1hbmFnZXIuY3JlYXRlUGF0aEV2ZW50T2JzZXJ2YWJsZSh0aGlzKS50aGVuKChvYiQpID0+IHtcclxuICAgICAgY29uc3Qgb3MgPSBvYiQuc3Vic2NyaWJlKHBhdGhFdmVudCA9PiB0aGlzLnBvbHlQYXRoQ2hhbmdlLmVtaXQocGF0aEV2ZW50KSk7XHJcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChvcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfZ2V0UG9pbnRzKCk6IEFycmF5PEFnbVBvbHlsaW5lUG9pbnQ+IHtcclxuICAgIGlmICh0aGlzLnBvaW50cykge1xyXG4gICAgICByZXR1cm4gdGhpcy5wb2ludHMudG9BcnJheSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgX2dldEljb25zKCk6IEFycmF5PEFnbVBvbHlsaW5lSWNvbj4ge1xyXG4gICAgaWYgKHRoaXMuaWNvblNlcXVlbmNlcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5pY29uU2VxdWVuY2VzLnRvQXJyYXkoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5faWQ7IH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fcG9seWxpbmVNYW5hZ2VyLmRlbGV0ZVBvbHlsaW5lKHRoaXMpO1xyXG4gICAgLy8gdW5zdWJzY3JpYmUgYWxsIHJlZ2lzdGVyZWQgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb25zXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2goKHMpID0+IHMudW5zdWJzY3JpYmUoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhdGhFdmVudCB7XHJcbiAgbmV3QXJyOiBMYXRMbmdbXTtcclxuICBldk5hbWU6ICdpbnNlcnRfYXQnIHwgJ3JlbW92ZV9hdCcgfCAnc2V0X2F0JztcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIHByZXZpb3VzPzogTGF0TG5nO1xyXG59XHJcbiJdfQ==