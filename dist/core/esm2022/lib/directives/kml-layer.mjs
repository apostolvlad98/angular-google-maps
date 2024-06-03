import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./../services/managers/kml-layer-manager";
let layerId = 0;
export class AgmKmlLayer {
    static { this._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex']; }
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
         * If true, the layer receives mouse events. Default value is true.
         */
        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */
        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */
        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */
        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */
        this.url = null;
        /**
         * The z-index of the layer.
         */
        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new EventEmitter();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */
        this.defaultViewportChange = new EventEmitter();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */
        this.statusChange = new EventEmitter();
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    }
    ngOnChanges(changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    }
    _updatePolygonOptions(changes) {
        const options = Object.keys(changes)
            .filter(k => AgmKmlLayer._kmlLayerOptions.indexOf(k) !== -1)
            .reduce((obj, k) => {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _addEventListeners() {
        const listeners = [
            { name: 'click', handler: (ev) => this.layerClick.emit(ev) },
            { name: 'defaultviewport_changed', handler: () => this.defaultViewportChange.emit() },
            { name: 'status_changed', handler: () => this.statusChange.emit() },
        ];
        listeners.forEach((obj) => {
            const os = this._manager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmKmlLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(s => s.unsubscribe());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmKmlLayer, deps: [{ token: i1.KmlLayerManager }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: AgmKmlLayer, selector: "agm-kml-layer", inputs: { clickable: "clickable", preserveViewport: "preserveViewport", screenOverlays: "screenOverlays", suppressInfoWindows: "suppressInfoWindows", url: "url", zIndex: "zIndex" }, outputs: { layerClick: "layerClick", defaultViewportChange: "defaultViewportChange", statusChange: "statusChange" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmKmlLayer, decorators: [{
            type: Directive,
            args: [{
                    selector: 'agm-kml-layer',
                }]
        }], ctorParameters: () => [{ type: i1.KmlLayerManager }], propDecorators: { clickable: [{
                type: Input
            }], preserveViewport: [{
                type: Input
            }], screenOverlays: [{
                type: Input
            }], suppressInfoWindows: [{
                type: Input
            }], url: [{
                type: Input
            }], zIndex: [{
                type: Input
            }], layerClick: [{
                type: Output
            }], defaultViewportChange: [{
                type: Output
            }], statusChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia21sLWxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMva21sLWxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBTXBILElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUtoQixNQUFNLE9BQU8sV0FBVzthQUlQLHFCQUFnQixHQUMzQixDQUFDLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLEFBRGhFLENBQ2lFO0lBb0RoRyxZQUFvQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQXhEckMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsUUFBRyxHQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxtQkFBYyxHQUFtQixFQUFFLENBQUM7UUFJNUM7O1dBRUc7UUFDTSxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRTFCOzs7OztXQUtHO1FBQ00scUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWxDOztXQUVHO1FBQ00sbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFFL0I7O1dBRUc7UUFDTSx3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFFckM7O1dBRUc7UUFDTSxRQUFHLEdBQVcsSUFBSSxDQUFDO1FBRTVCOztXQUVHO1FBQ00sV0FBTSxHQUFrQixJQUFJLENBQUM7UUFFdEM7O1dBRUc7UUFDTyxlQUFVLEdBQWdDLElBQUksWUFBWSxFQUFpQixDQUFDO1FBRXRGOztXQUVHO1FBQ08sMEJBQXFCLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFFL0U7Ozs7V0FJRztRQUNPLGlCQUFZLEdBQXVCLElBQUks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MkZBQVgsV0FBVztrQkFIdkIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7b0ZBV1UsU0FBUztzQkFBakIsS0FBSztnQkFRRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBS0csY0FBYztzQkFBdEIsS0FBSztnQkFLRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBS0csR0FBRztzQkFBWCxLQUFLO2dCQUtHLE1BQU07c0JBQWQsS0FBSztnQkFLSSxVQUFVO3NCQUFuQixNQUFNO2dCQUtHLHFCQUFxQjtzQkFBOUIsTUFBTTtnQkFPRyxZQUFZO3NCQUFyQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBLbWxNb3VzZUV2ZW50IH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9nb29nbGUtbWFwcy10eXBlcyc7XHJcbmltcG9ydCB7IEttbExheWVyTWFuYWdlciB9IGZyb20gJy4vLi4vc2VydmljZXMvbWFuYWdlcnMva21sLWxheWVyLW1hbmFnZXInO1xyXG5cclxubGV0IGxheWVySWQgPSAwO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhZ20ta21sLWxheWVyJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFnbUttbExheWVyIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBfYWRkZWRUb01hbmFnZXIgPSBmYWxzZTtcclxuICBwcml2YXRlIF9pZDogc3RyaW5nID0gKGxheWVySWQrKykudG9TdHJpbmcoKTtcclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG4gIHByaXZhdGUgc3RhdGljIF9rbWxMYXllck9wdGlvbnM6IHN0cmluZ1tdID1cclxuICAgICAgWydjbGlja2FibGUnLCAncHJlc2VydmVWaWV3cG9ydCcsICdzY3JlZW5PdmVybGF5cycsICdzdXBwcmVzc0luZm9XaW5kb3dzJywgJ3VybCcsICd6SW5kZXgnXTtcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdHJ1ZSwgdGhlIGxheWVyIHJlY2VpdmVzIG1vdXNlIGV2ZW50cy4gRGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNsaWNrYWJsZSA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBpbnB1dCBtYXAgaXMgY2VudGVyZWQgYW5kIHpvb21lZCB0byB0aGUgYm91bmRpbmcgYm94IG9mIHRoZSBjb250ZW50cyBvZiB0aGVcclxuICAgKiBsYXllci5cclxuICAgKiBJZiB0aGlzIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZSwgdGhlIHZpZXdwb3J0IGlzIGxlZnQgdW5jaGFuZ2VkLCB1bmxlc3MgdGhlIG1hcCdzIGNlbnRlciBhbmQgem9vbVxyXG4gICAqIHdlcmUgbmV2ZXIgc2V0LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHByZXNlcnZlVmlld3BvcnQgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byByZW5kZXIgdGhlIHNjcmVlbiBvdmVybGF5cy4gRGVmYXVsdCB0cnVlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNjcmVlbk92ZXJsYXlzID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogU3VwcHJlc3MgdGhlIHJlbmRlcmluZyBvZiBpbmZvIHdpbmRvd3Mgd2hlbiBsYXllciBmZWF0dXJlcyBhcmUgY2xpY2tlZC5cclxuICAgKi9cclxuICBASW5wdXQoKSBzdXBwcmVzc0luZm9XaW5kb3dzID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBVUkwgb2YgdGhlIEtNTCBkb2N1bWVudCB0byBkaXNwbGF5LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHotaW5kZXggb2YgdGhlIGxheWVyLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiBhIGZlYXR1cmUgaW4gdGhlIGxheWVyIGlzIGNsaWNrZWQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGxheWVyQ2xpY2s6IEV2ZW50RW1pdHRlcjxLbWxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8S21sTW91c2VFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBLTUwgbGF5ZXJzIGRlZmF1bHQgdmlld3BvcnQgaGFzIGNoYW5nZWQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGRlZmF1bHRWaWV3cG9ydENoYW5nZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIEtNTCBsYXllciBoYXMgZmluaXNoZWQgbG9hZGluZy5cclxuICAgKiBBdCB0aGlzIHBvaW50IGl0IGlzIHNhZmUgdG8gcmVhZCB0aGUgc3RhdHVzIHByb3BlcnR5IHRvIGRldGVybWluZSBpZiB0aGUgbGF5ZXIgbG9hZGVkXHJcbiAgICogc3VjY2Vzc2Z1bGx5LlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBzdGF0dXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWFuYWdlcjogS21sTGF5ZXJNYW5hZ2VyKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLl9hZGRlZFRvTWFuYWdlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9tYW5hZ2VyLmFkZEttbExheWVyKHRoaXMpO1xyXG4gICAgdGhpcy5fYWRkZWRUb01hbmFnZXIgPSB0cnVlO1xyXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICghdGhpcy5fYWRkZWRUb01hbmFnZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdXBkYXRlUG9seWdvbk9wdGlvbnMoY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVQb2x5Z29uT3B0aW9ucyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmtleXMoY2hhbmdlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihrID0+IEFnbUttbExheWVyLl9rbWxMYXllck9wdGlvbnMuaW5kZXhPZihrKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKG9iajogYW55LCBrOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpba10gPSBjaGFuZ2VzW2tdLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSk7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLl9tYW5hZ2VyLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9hZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IGxpc3RlbmVycyA9IFtcclxuICAgICAge25hbWU6ICdjbGljaycsIGhhbmRsZXI6IChldjogS21sTW91c2VFdmVudCkgPT4gdGhpcy5sYXllckNsaWNrLmVtaXQoZXYpfSxcclxuICAgICAge25hbWU6ICdkZWZhdWx0dmlld3BvcnRfY2hhbmdlZCcsIGhhbmRsZXI6ICgpID0+IHRoaXMuZGVmYXVsdFZpZXdwb3J0Q2hhbmdlLmVtaXQoKX0sXHJcbiAgICAgIHtuYW1lOiAnc3RhdHVzX2NoYW5nZWQnLCBoYW5kbGVyOiAoKSA9PiB0aGlzLnN0YXR1c0NoYW5nZS5lbWl0KCl9LFxyXG4gICAgXTtcclxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgY29uc3Qgb3MgPSB0aGlzLl9tYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZShvYmoubmFtZSwgdGhpcykuc3Vic2NyaWJlKG9iai5oYW5kbGVyKTtcclxuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKG9zKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIGlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9pZDsgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuIGBBZ21LbWxMYXllci0ke3RoaXMuX2lkLnRvU3RyaW5nKCl9YDsgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9tYW5hZ2VyLmRlbGV0ZUttbExheWVyKHRoaXMpO1xyXG4gICAgLy8gdW5zdWJzY3JpYmUgYWxsIHJlZ2lzdGVyZWQgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb25zXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=