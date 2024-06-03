import { Directive, Input, Self } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services/fit-bounds";
/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
export class AgmFitBounds {
    constructor(_fitBoundsAccessor, _fitBoundsService) {
        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
         * If the value is true, the element gets added to the bounds of the map.
         * Default: true.
         */
        this.agmFitBounds = true;
        this._destroyed$ = new Subject();
        this._latestFitBoundsDetails = null;
    }
    /**
     * @internal
     */
    ngOnChanges() {
        this._updateBounds();
    }
    /**
     * @internal
     */
    ngOnInit() {
        this._fitBoundsAccessor
            .getFitBoundsDetails$()
            .pipe(distinctUntilChanged((x, y) => x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng), takeUntil(this._destroyed$))
            .subscribe(details => this._updateBounds(details));
    }
    /*
     Either the location changed, or visible status changed.
     Possible state changes are
     invisible -> visible
     visible -> invisible
     visible -> visible (new location)
    */
    _updateBounds(newFitBoundsDetails) {
        // either visibility will change, or location, so remove the old one anyway
        if (this._latestFitBoundsDetails) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
            // don't set latestFitBoundsDetails to null, because we can toggle visibility from
            // true -> false -> true, in which case we still need old value cached here
        }
        if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
        }
        if (!this._latestFitBoundsDetails) {
            return;
        }
        if (this.agmFitBounds === true) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
        }
    }
    /**
     * @internal
     */
    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
        if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmFitBounds, deps: [{ token: i1.FitBoundsAccessor, self: true }, { token: i1.FitBoundsService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: AgmFitBounds, selector: "[agmFitBounds]", inputs: { agmFitBounds: "agmFitBounds" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmFitBounds, decorators: [{
            type: Directive,
            args: [{
                    selector: '[agmFitBounds]',
                }]
        }], ctorParameters: () => [{ type: i1.FitBoundsAccessor, decorators: [{
                    type: Self
                }] }, { type: i1.FitBoundsService }], propDecorators: { agmFitBounds: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml0LWJvdW5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL2ZpdC1ib3VuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdDLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSWpFOzs7OztHQUtHO0FBSUgsTUFBTSxPQUFPLFlBQVk7SUFVdkIsWUFDMkIsa0JBQXFDLEVBQzdDLGlCQUFtQztRQUQzQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQzdDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFYdEQ7OztXQUdHO1FBQ00saUJBQVksR0FBRyxJQUFJLENBQUM7UUFFckIsZ0JBQVcsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNqRCw0QkFBdUIsR0FBNEIsSUFBSSxDQUFDO0lBSzdELENBQUM7SUFFSjs7T0FFRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0I7YUFDcEIsb0JBQW9CLEVBQUU7YUFDdEIsSUFBSSxDQUNILG9CQUFvQixDQUNsQixDQUFDLENBQW1CLEVBQUUsQ0FBbUIsRUFBRSxFQUFFLENBQzNDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUNqRSxFQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzVCO2FBQ0EsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7Ozs7O01BTUU7SUFDTSxhQUFhLENBQUMsbUJBQXNDO1FBQzFELDJFQUEyRTtRQUMzRSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0Usa0ZBQWtGO1lBQ2xGLDJFQUEyRTtRQUM3RSxDQUFDO1FBRUQsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxtQkFBbUIsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQ2xDLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFFLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLHVCQUF1QixLQUFLLElBQUksRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0UsQ0FBQztJQUNILENBQUM7OEdBekVVLFlBQVk7a0dBQVosWUFBWTs7MkZBQVosWUFBWTtrQkFIeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7MEJBWUksSUFBSTt3RUFORSxZQUFZO3NCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBGaXRCb3VuZHNBY2Nlc3NvciwgRml0Qm91bmRzRGV0YWlscywgRml0Qm91bmRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZpdC1ib3VuZHMnO1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgdGhlIGdpdmVuIGRpcmVjdGl2ZSB0byB0aGUgYXV0byBmaXQgYm91bmRzIGZlYXR1cmUgd2hlbiB0aGUgdmFsdWUgaXMgdHJ1ZS5cclxuICogVG8gbWFrZSBpdCB3b3JrIHdpdGggeW91IGN1c3RvbSBBR00gY29tcG9uZW50LCB5b3UgYWxzbyBoYXZlIHRvIGltcGxlbWVudCB0aGUge0BsaW5rIEZpdEJvdW5kc0FjY2Vzc29yfSBhYnN0cmFjdCBjbGFzcy5cclxuICogQGV4YW1wbGVcclxuICogPGFnbS1tYXJrZXIgW2FnbUZpdEJvdW5kc109XCJ0cnVlXCI+PC9hZ20tbWFya2VyPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYWdtRml0Qm91bmRzXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZ21GaXRCb3VuZHMgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICAvKipcclxuICAgKiBJZiB0aGUgdmFsdWUgaXMgdHJ1ZSwgdGhlIGVsZW1lbnQgZ2V0cyBhZGRlZCB0byB0aGUgYm91bmRzIG9mIHRoZSBtYXAuXHJcbiAgICogRGVmYXVsdDogdHJ1ZS5cclxuICAgKi9cclxuICBASW5wdXQoKSBhZ21GaXRCb3VuZHMgPSB0cnVlO1xyXG5cclxuICBwcml2YXRlIF9kZXN0cm95ZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIF9sYXRlc3RGaXRCb3VuZHNEZXRhaWxzOiBGaXRCb3VuZHNEZXRhaWxzIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQFNlbGYoKSBwcml2YXRlIHJlYWRvbmx5IF9maXRCb3VuZHNBY2Nlc3NvcjogRml0Qm91bmRzQWNjZXNzb3IsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9maXRCb3VuZHNTZXJ2aWNlOiBGaXRCb3VuZHNTZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQGludGVybmFsXHJcbiAgICovXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLl91cGRhdGVCb3VuZHMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fZml0Qm91bmRzQWNjZXNzb3JcclxuICAgICAgLmdldEZpdEJvdW5kc0RldGFpbHMkKClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoXHJcbiAgICAgICAgICAoeDogRml0Qm91bmRzRGV0YWlscywgeTogRml0Qm91bmRzRGV0YWlscykgPT5cclxuICAgICAgICAgICAgeC5sYXRMbmcubGF0ID09PSB5LmxhdExuZy5sYXQgJiYgeC5sYXRMbmcubG5nID09PSB5LmxhdExuZy5sbmcsXHJcbiAgICAgICAgKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkJCksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShkZXRhaWxzID0+IHRoaXMuX3VwZGF0ZUJvdW5kcyhkZXRhaWxzKSk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICBFaXRoZXIgdGhlIGxvY2F0aW9uIGNoYW5nZWQsIG9yIHZpc2libGUgc3RhdHVzIGNoYW5nZWQuXHJcbiAgIFBvc3NpYmxlIHN0YXRlIGNoYW5nZXMgYXJlXHJcbiAgIGludmlzaWJsZSAtPiB2aXNpYmxlXHJcbiAgIHZpc2libGUgLT4gaW52aXNpYmxlXHJcbiAgIHZpc2libGUgLT4gdmlzaWJsZSAobmV3IGxvY2F0aW9uKVxyXG4gICovXHJcbiAgcHJpdmF0ZSBfdXBkYXRlQm91bmRzKG5ld0ZpdEJvdW5kc0RldGFpbHM/OiBGaXRCb3VuZHNEZXRhaWxzKSB7XHJcbiAgICAvLyBlaXRoZXIgdmlzaWJpbGl0eSB3aWxsIGNoYW5nZSwgb3IgbG9jYXRpb24sIHNvIHJlbW92ZSB0aGUgb2xkIG9uZSBhbnl3YXlcclxuICAgIGlmICh0aGlzLl9sYXRlc3RGaXRCb3VuZHNEZXRhaWxzKSB7XHJcbiAgICAgIHRoaXMuX2ZpdEJvdW5kc1NlcnZpY2UucmVtb3ZlRnJvbUJvdW5kcyh0aGlzLl9sYXRlc3RGaXRCb3VuZHNEZXRhaWxzLmxhdExuZyk7XHJcbiAgICAgIC8vIGRvbid0IHNldCBsYXRlc3RGaXRCb3VuZHNEZXRhaWxzIHRvIG51bGwsIGJlY2F1c2Ugd2UgY2FuIHRvZ2dsZSB2aXNpYmlsaXR5IGZyb21cclxuICAgICAgLy8gdHJ1ZSAtPiBmYWxzZSAtPiB0cnVlLCBpbiB3aGljaCBjYXNlIHdlIHN0aWxsIG5lZWQgb2xkIHZhbHVlIGNhY2hlZCBoZXJlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld0ZpdEJvdW5kc0RldGFpbHMpIHtcclxuICAgICAgdGhpcy5fbGF0ZXN0Rml0Qm91bmRzRGV0YWlscyA9IG5ld0ZpdEJvdW5kc0RldGFpbHM7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuX2xhdGVzdEZpdEJvdW5kc0RldGFpbHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYWdtRml0Qm91bmRzID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuX2ZpdEJvdW5kc1NlcnZpY2UuYWRkVG9Cb3VuZHModGhpcy5fbGF0ZXN0Rml0Qm91bmRzRGV0YWlscy5sYXRMbmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGludGVybmFsXHJcbiAgICovXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgIHRoaXMuX2Rlc3Ryb3llZCQuY29tcGxldGUoKTtcclxuICAgIGlmICh0aGlzLl9sYXRlc3RGaXRCb3VuZHNEZXRhaWxzICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX2ZpdEJvdW5kc1NlcnZpY2UucmVtb3ZlRnJvbUJvdW5kcyh0aGlzLl9sYXRlc3RGaXRCb3VuZHNEZXRhaWxzLmxhdExuZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==