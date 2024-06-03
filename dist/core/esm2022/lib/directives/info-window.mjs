import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/managers/info-window-manager";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmInfoWindow, deps: [{ token: i1.InfoWindowManager }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: AgmInfoWindow, selector: "agm-info-window", inputs: { latitude: "latitude", longitude: "longitude", disableAutoPan: "disableAutoPan", zIndex: "zIndex", maxWidth: "maxWidth", isOpen: "isOpen" }, outputs: { infoWindowClose: "infoWindowClose" }, usesOnChanges: true, ngImport: i0, template: `<div class='agm-info-window-content'>
      <ng-content></ng-content>
    </div>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmInfoWindow, decorators: [{
            type: Component,
            args: [{
                    selector: 'agm-info-window',
                    template: `<div class='agm-info-window-content'>
      <ng-content></ng-content>
    </div>
  `,
                }]
        }], ctorParameters: () => [{ type: i1.InfoWindowManager }, { type: i0.ElementRef }], propDecorators: { latitude: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby13aW5kb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy9pbmZvLXdpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBZ0IsTUFBTSxlQUFlLENBQUM7OztBQU0vSCxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFFckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFRSCxNQUFNLE9BQU8sYUFBYTthQXNEVCw2QkFBd0IsR0FBYSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxBQUEzQyxDQUE0QztJQUluRixZQUFvQixrQkFBcUMsRUFBVSxHQUFlO1FBQTlELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBZGxGOztXQUVHO1FBQ00sV0FBTSxHQUFHLEtBQUssQ0FBQztRQUV4Qjs7V0FFRztRQUNPLG9CQUFlLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFHakUsOEJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLFFBQUcsR0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFbUMsQ0FBQztJQUV0RixRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDakMsQ0FBQztJ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a0dBQWIsYUFBYSxtUkFMZDs7O0dBR1Q7OzJGQUVVLGFBQWE7a0JBUHpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFOzs7R0FHVDtpQkFDRjsrR0FNVSxRQUFRO3NCQUFoQixLQUFLO2dCQU1HLFNBQVM7c0JBQWpCLEtBQUs7Z0JBTUcsY0FBYztzQkFBdEIsS0FBSztnQkFRRyxNQUFNO3NCQUFkLEtBQUs7Z0JBT0csUUFBUTtzQkFBaEIsS0FBSztnQkFlRyxNQUFNO3NCQUFkLEtBQUs7Z0JBS0ksZUFBZTtzQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEluZm9XaW5kb3dNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvaW5mby13aW5kb3ctbWFuYWdlcic7XHJcblxyXG5pbXBvcnQgeyBBZ21NYXJrZXIgfSBmcm9tICcuL21hcmtlcic7XHJcblxyXG5sZXQgaW5mb1dpbmRvd0lkID0gMDtcclxuXHJcbi8qKlxyXG4gKiBBZ21JbmZvV2luZG93IHJlbmRlcnMgYSBpbmZvIHdpbmRvdyBpbnNpZGUgYSB7QGxpbmsgQWdtTWFya2VyfSBvciBzdGFuZGFsb25lLlxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gKlxyXG4gKiBAQ29tcG9uZW50KHtcclxuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXHJcbiAqICBzdHlsZXM6IFtgXHJcbiAqICAgIC5hZ20tbWFwLWNvbnRhaW5lciB7XHJcbiAqICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICogICAgfVxyXG4gKiBgXSxcclxuICogIHRlbXBsYXRlOiBgXHJcbiAqICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cclxuICogICAgICA8YWdtLW1hcmtlciBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbbGFiZWxdPVwiJ00nXCI+XHJcbiAqICAgICAgICA8YWdtLWluZm8td2luZG93IFtkaXNhYmxlQXV0b1Bhbl09XCJ0cnVlXCI+XHJcbiAqICAgICAgICAgIEhpLCB0aGlzIGlzIHRoZSBjb250ZW50IG9mIHRoZSA8c3Ryb25nPmluZm8gd2luZG93PC9zdHJvbmc+XHJcbiAqICAgICAgICA8L2FnbS1pbmZvLXdpbmRvdz5cclxuICogICAgICA8L2FnbS1tYXJrZXI+XHJcbiAqICAgIDwvYWdtLW1hcD5cclxuICogIGBcclxuICogfSlcclxuICogYGBgXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FnbS1pbmZvLXdpbmRvdycsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPSdhZ20taW5mby13aW5kb3ctY29udGVudCc+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZ21JbmZvV2luZG93IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxhdGl0dWRlIHBvc2l0aW9uIG9mIHRoZSBpbmZvIHdpbmRvdyAob25seSB1c2VmdWxsIGlmIHlvdSB1c2UgaXQgb3VzaWRlIG9mIGEge0BsaW5rXHJcbiAgICogQWdtTWFya2VyfSkuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbGF0aXR1ZGU6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGxvbmdpdHVkZSBwb3NpdGlvbiBvZiB0aGUgaW5mbyB3aW5kb3cgKG9ubHkgdXNlZnVsbCBpZiB5b3UgdXNlIGl0IG91c2lkZSBvZiBhIHtAbGlua1xyXG4gICAqIEFnbU1hcmtlcn0pLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGxvbmdpdHVkZTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBEaXNhYmxlIGF1dG8tcGFuIG9uIG9wZW4uIEJ5IGRlZmF1bHQsIHRoZSBpbmZvIHdpbmRvdyB3aWxsIHBhbiB0aGUgbWFwIHNvIHRoYXQgaXQgaXMgZnVsbHlcclxuICAgKiB2aXNpYmxlIHdoZW4gaXQgb3BlbnMuXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGlzYWJsZUF1dG9QYW46IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbCBJbmZvV2luZG93cyBhcmUgZGlzcGxheWVkIG9uIHRoZSBtYXAgaW4gb3JkZXIgb2YgdGhlaXIgekluZGV4LCB3aXRoIGhpZ2hlciB2YWx1ZXNcclxuICAgKiBkaXNwbGF5aW5nIGluIGZyb250IG9mIEluZm9XaW5kb3dzIHdpdGggbG93ZXIgdmFsdWVzLiBCeSBkZWZhdWx0LCBJbmZvV2luZG93cyBhcmUgZGlzcGxheWVkXHJcbiAgICogYWNjb3JkaW5nIHRvIHRoZWlyIGxhdGl0dWRlLCB3aXRoIEluZm9XaW5kb3dzIG9mIGxvd2VyIGxhdGl0dWRlcyBhcHBlYXJpbmcgaW4gZnJvbnQgb2ZcclxuICAgKiBJbmZvV2luZG93cyBhdCBoaWdoZXIgbGF0aXR1ZGVzLiBJbmZvV2luZG93cyBhcmUgYWx3YXlzIGRpc3BsYXllZCBpbiBmcm9udCBvZiBtYXJrZXJzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBNYXhpbXVtIHdpZHRoIG9mIHRoZSBpbmZvd2luZG93LCByZWdhcmRsZXNzIG9mIGNvbnRlbnQncyB3aWR0aC4gVGhpcyB2YWx1ZSBpcyBvbmx5IGNvbnNpZGVyZWRcclxuICAgKiBpZiBpdCBpcyBzZXQgYmVmb3JlIGEgY2FsbCB0byBvcGVuLiBUbyBjaGFuZ2UgdGhlIG1heGltdW0gd2lkdGggd2hlbiBjaGFuZ2luZyBjb250ZW50LCBjYWxsXHJcbiAgICogY2xvc2UsIHVwZGF0ZSBtYXhXaWR0aCwgYW5kIHRoZW4gb3Blbi5cclxuICAgKi9cclxuICBASW5wdXQoKSBtYXhXaWR0aDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBIb2xkcyB0aGUgbWFya2VyIHRoYXQgaXMgdGhlIGhvc3Qgb2YgdGhlIGluZm8gd2luZG93IChpZiBhdmFpbGFibGUpXHJcbiAgICovXHJcbiAgaG9zdE1hcmtlcjogQWdtTWFya2VyO1xyXG5cclxuICAvKipcclxuICAgKiBIb2xkcyB0aGUgbmF0aXZlIGVsZW1lbnQgdGhhdCBpcyB1c2VkIGZvciB0aGUgaW5mbyB3aW5kb3cgY29udGVudC5cclxuICAgKi9cclxuICBjb250ZW50OiBOb2RlO1xyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBvcGVuIHN0YXRlIGZvciB0aGUgSW5mb1dpbmRvdy4gWW91IGNhbiBhbHNvIGNhbGwgdGhlIG9wZW4oKSBhbmQgY2xvc2UoKSBtZXRob2RzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBpbmZvIHdpbmRvdyBpcyBjbG9zZWQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGluZm9XaW5kb3dDbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBfaW5mb1dpbmRvd09wdGlvbnNJbnB1dHM6IHN0cmluZ1tdID0gWydkaXNhYmxlQXV0b1BhbicsICdtYXhXaWR0aCddO1xyXG4gIHByaXZhdGUgX2luZm9XaW5kb3dBZGRlZFRvTWFuYWdlciA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2lkOiBzdHJpbmcgPSAoaW5mb1dpbmRvd0lkKyspLnRvU3RyaW5nKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2luZm9XaW5kb3dNYW5hZ2VyOiBJbmZvV2luZG93TWFuYWdlciwgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWdtLWluZm8td2luZG93LWNvbnRlbnQnKTtcclxuICAgIHRoaXMuX2luZm9XaW5kb3dNYW5hZ2VyLmFkZEluZm9XaW5kb3codGhpcyk7XHJcbiAgICB0aGlzLl9pbmZvV2luZG93QWRkZWRUb01hbmFnZXIgPSB0cnVlO1xyXG4gICAgdGhpcy5fdXBkYXRlT3BlblN0YXRlKCk7XHJcbiAgICB0aGlzLl9yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1trZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcclxuICAgIGlmICghdGhpcy5faW5mb1dpbmRvd0FkZGVkVG9NYW5hZ2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICgoY2hhbmdlc1snbGF0aXR1ZGUnXSB8fCBjaGFuZ2VzWydsb25naXR1ZGUnXSkgJiYgdHlwZW9mIHRoaXMubGF0aXR1ZGUgPT09ICdudW1iZXInICYmXHJcbiAgICAgICAgdHlwZW9mIHRoaXMubG9uZ2l0dWRlID09PSAnbnVtYmVyJykge1xyXG4gICAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5zZXRQb3NpdGlvbih0aGlzKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWyd6SW5kZXgnXSkge1xyXG4gICAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5zZXRaSW5kZXgodGhpcyk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snaXNPcGVuJ10pIHtcclxuICAgICAgdGhpcy5fdXBkYXRlT3BlblN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZXRJbmZvV2luZG93T3B0aW9ucyhjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGUoJ2Nsb3NlY2xpY2snLCB0aGlzKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmluZm9XaW5kb3dDbG9zZS5lbWl0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZU9wZW5TdGF0ZSgpIHtcclxuICAgIHRoaXMuaXNPcGVuID8gdGhpcy5vcGVuKCkgOiB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRJbmZvV2luZG93T3B0aW9ucyhjaGFuZ2VzOiB7W2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSkge1xyXG4gICAgbGV0IG9wdGlvbnM6IHtbcHJvcE5hbWU6IHN0cmluZ106IGFueX0gPSB7fTtcclxuICAgIGxldCBvcHRpb25LZXlzID0gT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKFxyXG4gICAgICAgIGsgPT4gQWdtSW5mb1dpbmRvdy5faW5mb1dpbmRvd09wdGlvbnNJbnB1dHMuaW5kZXhPZihrKSAhPT0gLTEpO1xyXG4gICAgb3B0aW9uS2V5cy5mb3JFYWNoKChrKSA9PiB7IG9wdGlvbnNba10gPSBjaGFuZ2VzW2tdLmN1cnJlbnRWYWx1ZTsgfSk7XHJcbiAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbnMgdGhlIGluZm8gd2luZG93LlxyXG4gICAqL1xyXG4gIG9wZW4oKTogUHJvbWlzZTx2b2lkPiB7IHJldHVybiB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5vcGVuKHRoaXMpOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3NlcyB0aGUgaW5mbyB3aW5kb3cuXHJcbiAgICovXHJcbiAgY2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5mb1dpbmRvd01hbmFnZXIuY2xvc2UodGhpcykudGhlbigoKSA9PiB7IHRoaXMuaW5mb1dpbmRvd0Nsb3NlLmVtaXQoKTsgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2lkOyB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gJ0FnbUluZm9XaW5kb3ctJyArIHRoaXMuX2lkLnRvU3RyaW5nKCk7IH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIG5nT25EZXN0cm95KCkgeyB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5kZWxldGVJbmZvV2luZG93KHRoaXMpOyB9XHJcbn1cclxuIl19