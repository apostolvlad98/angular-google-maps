import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/managers/info-window-manager";
const _c0 = ["*"];
let infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
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
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
export class AgmInfoWindow {
    static { this._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth']; }
    constructor(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */
        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */
        this.infoWindowClose = new EventEmitter();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    ngOnInit() {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    }
    _registerEventListeners() {
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(() => {
            this.isOpen = false;
            this.infoWindowClose.emit();
        });
    }
    _updateOpenState() {
        this.isOpen ? this.open() : this.close();
    }
    _setInfoWindowOptions(changes) {
        let options = {};
        let optionKeys = Object.keys(changes).filter(k => AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    }
    /**
     * Opens the info window.
     */
    open() { return this._infoWindowManager.open(this); }
    /**
     * Closes the info window.
     */
    close() {
        return this._infoWindowManager.close(this).then(() => { this.infoWindowClose.emit(); });
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return 'AgmInfoWindow-' + this._id.toString(); }
    /** @internal */
    ngOnDestroy() { this._infoWindowManager.deleteInfoWindow(this); }
    static { this.ɵfac = function AgmInfoWindow_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AgmInfoWindow)(i0.ɵɵdirectiveInject(i1.InfoWindowManager), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AgmInfoWindow, selectors: [["agm-info-window"]], inputs: { latitude: "latitude", longitude: "longitude", disableAutoPan: "disableAutoPan", zIndex: "zIndex", maxWidth: "maxWidth", isOpen: "isOpen" }, outputs: { infoWindowClose: "infoWindowClose" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "agm-info-window-content"]], template: function AgmInfoWindow_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AgmInfoWindow, [{
        type: Component,
        args: [{
                selector: 'agm-info-window',
                template: `<div class='agm-info-window-content'>
      <ng-content></ng-content>
    </div>
  `,
            }]
    }], () => [{ type: i1.InfoWindowManager }, { type: i0.ElementRef }], { latitude: [{
            type: Input
        }], longitude: [{
            type: Input
        }], disableAutoPan: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], infoWindowClose: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AgmInfoWindow, { className: "AgmInfoWindow" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby13aW5kb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy9pbmZvLXdpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBZ0IsTUFBTSxlQUFlLENBQUM7Ozs7QUFNL0gsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBRXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJHO0FBUUgsTUFBTSxPQUFPLGFBQWE7YUFzRFQsNkJBQXdCLEdBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsQUFBM0MsQ0FBNEM7SUFJbkYsWUFBb0Isa0JBQXFDLEVBQVUsR0FBZTtRQUE5RCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQWRsRjs7V0FFRztRQUNNLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFeEI7O1dBRUc7UUFDTyxvQkFBZSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBR2pFLDhCQUF5QixHQUFHLEtBQUssQ0FBQztRQUNsQyxRQUFHLEdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRW1DLENBQUM7SUFFdEYsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7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O29FQUFiLGFBQWE7O1lBTGIsOEJBQXFDO1lBQzVDLGtCQUF5QjtZQUMzQixpQkFBTTs7O2lGQUdHLGFBQWE7Y0FQekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7O0dBR1Q7YUFDRjsyRUFNVSxRQUFRO2tCQUFoQixLQUFLO1lBTUcsU0FBUztrQkFBakIsS0FBSztZQU1HLGNBQWM7a0JBQXRCLEtBQUs7WUFRRyxNQUFNO2tCQUFkLEtBQUs7WUFPRyxRQUFRO2tCQUFoQixLQUFLO1lBZUcsTUFBTTtrQkFBZCxLQUFLO1lBS0ksZUFBZTtrQkFBeEIsTUFBTTs7a0ZBcERJLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluZm9XaW5kb3dNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvaW5mby13aW5kb3ctbWFuYWdlcic7XG5cbmltcG9ydCB7IEFnbU1hcmtlciB9IGZyb20gJy4vbWFya2VyJztcblxubGV0IGluZm9XaW5kb3dJZCA9IDA7XG5cbi8qKlxuICogQWdtSW5mb1dpbmRvdyByZW5kZXJzIGEgaW5mbyB3aW5kb3cgaW5zaWRlIGEge0BsaW5rIEFnbU1hcmtlcn0gb3Igc3RhbmRhbG9uZS5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICAuYWdtLW1hcC1jb250YWluZXIge1xuICogICAgICBoZWlnaHQ6IDMwMHB4O1xuICogICAgfVxuICogYF0sXG4gKiAgdGVtcGxhdGU6IGBcbiAqICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqICAgICAgPGFnbS1tYXJrZXIgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW2xhYmVsXT1cIidNJ1wiPlxuICogICAgICAgIDxhZ20taW5mby13aW5kb3cgW2Rpc2FibGVBdXRvUGFuXT1cInRydWVcIj5cbiAqICAgICAgICAgIEhpLCB0aGlzIGlzIHRoZSBjb250ZW50IG9mIHRoZSA8c3Ryb25nPmluZm8gd2luZG93PC9zdHJvbmc+XG4gKiAgICAgICAgPC9hZ20taW5mby13aW5kb3c+XG4gKiAgICAgIDwvYWdtLW1hcmtlcj5cbiAqICAgIDwvYWdtLW1hcD5cbiAqICBgXG4gKiB9KVxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnbS1pbmZvLXdpbmRvdycsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz0nYWdtLWluZm8td2luZG93LWNvbnRlbnQnPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21JbmZvV2luZG93IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBUaGUgbGF0aXR1ZGUgcG9zaXRpb24gb2YgdGhlIGluZm8gd2luZG93IChvbmx5IHVzZWZ1bGwgaWYgeW91IHVzZSBpdCBvdXNpZGUgb2YgYSB7QGxpbmtcbiAgICogQWdtTWFya2VyfSkuXG4gICAqL1xuICBASW5wdXQoKSBsYXRpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbG9uZ2l0dWRlIHBvc2l0aW9uIG9mIHRoZSBpbmZvIHdpbmRvdyAob25seSB1c2VmdWxsIGlmIHlvdSB1c2UgaXQgb3VzaWRlIG9mIGEge0BsaW5rXG4gICAqIEFnbU1hcmtlcn0pLlxuICAgKi9cbiAgQElucHV0KCkgbG9uZ2l0dWRlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYXV0by1wYW4gb24gb3Blbi4gQnkgZGVmYXVsdCwgdGhlIGluZm8gd2luZG93IHdpbGwgcGFuIHRoZSBtYXAgc28gdGhhdCBpdCBpcyBmdWxseVxuICAgKiB2aXNpYmxlIHdoZW4gaXQgb3BlbnMuXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlQXV0b1BhbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWxsIEluZm9XaW5kb3dzIGFyZSBkaXNwbGF5ZWQgb24gdGhlIG1hcCBpbiBvcmRlciBvZiB0aGVpciB6SW5kZXgsIHdpdGggaGlnaGVyIHZhbHVlc1xuICAgKiBkaXNwbGF5aW5nIGluIGZyb250IG9mIEluZm9XaW5kb3dzIHdpdGggbG93ZXIgdmFsdWVzLiBCeSBkZWZhdWx0LCBJbmZvV2luZG93cyBhcmUgZGlzcGxheWVkXG4gICAqIGFjY29yZGluZyB0byB0aGVpciBsYXRpdHVkZSwgd2l0aCBJbmZvV2luZG93cyBvZiBsb3dlciBsYXRpdHVkZXMgYXBwZWFyaW5nIGluIGZyb250IG9mXG4gICAqIEluZm9XaW5kb3dzIGF0IGhpZ2hlciBsYXRpdHVkZXMuIEluZm9XaW5kb3dzIGFyZSBhbHdheXMgZGlzcGxheWVkIGluIGZyb250IG9mIG1hcmtlcnMuXG4gICAqL1xuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4aW11bSB3aWR0aCBvZiB0aGUgaW5mb3dpbmRvdywgcmVnYXJkbGVzcyBvZiBjb250ZW50J3Mgd2lkdGguIFRoaXMgdmFsdWUgaXMgb25seSBjb25zaWRlcmVkXG4gICAqIGlmIGl0IGlzIHNldCBiZWZvcmUgYSBjYWxsIHRvIG9wZW4uIFRvIGNoYW5nZSB0aGUgbWF4aW11bSB3aWR0aCB3aGVuIGNoYW5naW5nIGNvbnRlbnQsIGNhbGxcbiAgICogY2xvc2UsIHVwZGF0ZSBtYXhXaWR0aCwgYW5kIHRoZW4gb3Blbi5cbiAgICovXG4gIEBJbnB1dCgpIG1heFdpZHRoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvbGRzIHRoZSBtYXJrZXIgdGhhdCBpcyB0aGUgaG9zdCBvZiB0aGUgaW5mbyB3aW5kb3cgKGlmIGF2YWlsYWJsZSlcbiAgICovXG4gIGhvc3RNYXJrZXI6IEFnbU1hcmtlcjtcblxuICAvKipcbiAgICogSG9sZHMgdGhlIG5hdGl2ZSBlbGVtZW50IHRoYXQgaXMgdXNlZCBmb3IgdGhlIGluZm8gd2luZG93IGNvbnRlbnQuXG4gICAqL1xuICBjb250ZW50OiBOb2RlO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBvcGVuIHN0YXRlIGZvciB0aGUgSW5mb1dpbmRvdy4gWW91IGNhbiBhbHNvIGNhbGwgdGhlIG9wZW4oKSBhbmQgY2xvc2UoKSBtZXRob2RzLlxuICAgKi9cbiAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGluZm8gd2luZG93IGlzIGNsb3NlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBpbmZvV2luZG93Q2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBwcml2YXRlIHN0YXRpYyBfaW5mb1dpbmRvd09wdGlvbnNJbnB1dHM6IHN0cmluZ1tdID0gWydkaXNhYmxlQXV0b1BhbicsICdtYXhXaWR0aCddO1xuICBwcml2YXRlIF9pbmZvV2luZG93QWRkZWRUb01hbmFnZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZyA9IChpbmZvV2luZG93SWQrKykudG9TdHJpbmcoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbmZvV2luZG93TWFuYWdlcjogSW5mb1dpbmRvd01hbmFnZXIsIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFnbS1pbmZvLXdpbmRvdy1jb250ZW50Jyk7XG4gICAgdGhpcy5faW5mb1dpbmRvd01hbmFnZXIuYWRkSW5mb1dpbmRvdyh0aGlzKTtcbiAgICB0aGlzLl9pbmZvV2luZG93QWRkZWRUb01hbmFnZXIgPSB0cnVlO1xuICAgIHRoaXMuX3VwZGF0ZU9wZW5TdGF0ZSgpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1trZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcbiAgICBpZiAoIXRoaXMuX2luZm9XaW5kb3dBZGRlZFRvTWFuYWdlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKGNoYW5nZXNbJ2xhdGl0dWRlJ10gfHwgY2hhbmdlc1snbG9uZ2l0dWRlJ10pICYmIHR5cGVvZiB0aGlzLmxhdGl0dWRlID09PSAnbnVtYmVyJyAmJlxuICAgICAgICB0eXBlb2YgdGhpcy5sb25naXR1ZGUgPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5zZXRQb3NpdGlvbih0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ3pJbmRleCddKSB7XG4gICAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5zZXRaSW5kZXgodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydpc09wZW4nXSkge1xuICAgICAgdGhpcy5fdXBkYXRlT3BlblN0YXRlKCk7XG4gICAgfVxuICAgIHRoaXMuX3NldEluZm9XaW5kb3dPcHRpb25zKGNoYW5nZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGUoJ2Nsb3NlY2xpY2snLCB0aGlzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5mb1dpbmRvd0Nsb3NlLmVtaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZU9wZW5TdGF0ZSgpIHtcbiAgICB0aGlzLmlzT3BlbiA/IHRoaXMub3BlbigpIDogdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5mb1dpbmRvd09wdGlvbnMoY2hhbmdlczoge1trZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcbiAgICBsZXQgb3B0aW9uczoge1twcm9wTmFtZTogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgIGxldCBvcHRpb25LZXlzID0gT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKFxuICAgICAgICBrID0+IEFnbUluZm9XaW5kb3cuX2luZm9XaW5kb3dPcHRpb25zSW5wdXRzLmluZGV4T2YoaykgIT09IC0xKTtcbiAgICBvcHRpb25LZXlzLmZvckVhY2goKGspID0+IHsgb3B0aW9uc1trXSA9IGNoYW5nZXNba10uY3VycmVudFZhbHVlOyB9KTtcbiAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBpbmZvIHdpbmRvdy5cbiAgICovXG4gIG9wZW4oKTogUHJvbWlzZTx2b2lkPiB7IHJldHVybiB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5vcGVuKHRoaXMpOyB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgaW5mbyB3aW5kb3cuXG4gICAqL1xuICBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5faW5mb1dpbmRvd01hbmFnZXIuY2xvc2UodGhpcykudGhlbigoKSA9PiB7IHRoaXMuaW5mb1dpbmRvd0Nsb3NlLmVtaXQoKTsgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIGlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9pZDsgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuICdBZ21JbmZvV2luZG93LScgKyB0aGlzLl9pZC50b1N0cmluZygpOyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uRGVzdHJveSgpIHsgdGhpcy5faW5mb1dpbmRvd01hbmFnZXIuZGVsZXRlSW5mb1dpbmRvdyh0aGlzKTsgfVxufVxuIl19