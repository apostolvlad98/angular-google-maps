import { Directive, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { FitBoundsAccessor } from '../services/fit-bounds';
import * as i0 from "@angular/core";
/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * AgmPolyline}
 */
export class AgmPolylinePoint {
    constructor() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['latitude'] || changes['longitude']) {
            const position = {
                lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
                lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude,
            };
            this.positionChanged.emit(position);
        }
    }
    /** @internal */
    getFitBoundsDetails$() {
        return this.positionChanged.pipe(startWith({ lat: this.latitude, lng: this.longitude }), map(position => ({ latLng: position })));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmPolylinePoint, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: AgmPolylinePoint, selector: "agm-polyline-point", inputs: { latitude: "latitude", longitude: "longitude" }, outputs: { positionChanged: "positionChanged" }, providers: [
            { provide: FitBoundsAccessor, useExisting: forwardRef(() => AgmPolylinePoint) },
        ], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmPolylinePoint, decorators: [{
            type: Directive,
            args: [{
                    selector: 'agm-polyline-point',
                    providers: [
                        { provide: FitBoundsAccessor, useExisting: forwardRef(() => AgmPolylinePoint) },
                    ],
                }]
        }], ctorParameters: () => [], propDecorators: { latitude: [{
                type: Input
            }], longitude: [{
                type: Input
            }], positionChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtcG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy9wb2x5bGluZS1wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQW9CLE1BQU0sd0JBQXdCLENBQUM7O0FBRzdFOzs7R0FHRztBQU9ILE1BQU0sT0FBTyxnQkFBZ0I7SUFnQjNCO1FBTEE7O1dBRUc7UUFDTyxvQkFBZSxHQUFnQyxJQUFJLFlBQVksRUFBaUIsQ0FBQztJQUU1RSxDQUFDO0lBRWhCLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUNoRCxNQUFNLFFBQVEsR0FBa0I7Z0JBQzlCLEdBQUcsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRO2dCQUMzRSxHQUFHLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUzthQUM5RCxDQUFDO1lBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUM5QixTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLEVBQ3BELEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUN0QyxDQUFDO0lBQ0osQ0FBQzs4R0FsQ1UsZ0JBQWdCO2tHQUFoQixnQkFBZ0Isd0pBSmhCO1lBQ1QsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO1NBQzlFOzsyRkFFVSxnQkFBZ0I7a0JBTjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsU0FBUyxFQUFFO3dCQUNULEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLEVBQUM7cUJBQzlFO2lCQUNGO3dEQUtpQixRQUFRO3NCQUF2QixLQUFLO2dCQUtVLFNBQVM7c0JBQXhCLEtBQUs7Z0JBS0ksZUFBZTtzQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRml0Qm91bmRzQWNjZXNzb3IsIEZpdEJvdW5kc0RldGFpbHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9maXQtYm91bmRzJztcclxuaW1wb3J0IHsgTGF0TG5nTGl0ZXJhbCB9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLXR5cGVzJztcclxuXHJcbi8qKlxyXG4gKiBBZ21Qb2x5bGluZVBvaW50IHJlcHJlc2VudHMgb25lIGVsZW1lbnQgb2YgYSBwb2x5bGluZSB3aXRoaW4gYSAge0BsaW5rXHJcbiAqIEFnbVBvbHlsaW5lfVxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhZ20tcG9seWxpbmUtcG9pbnQnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge3Byb3ZpZGU6IEZpdEJvdW5kc0FjY2Vzc29yLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBZ21Qb2x5bGluZVBvaW50KX0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFnbVBvbHlsaW5lUG9pbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEZpdEJvdW5kc0FjY2Vzc29yIHtcclxuICAvKipcclxuICAgKiBUaGUgbGF0aXR1ZGUgcG9zaXRpb24gb2YgdGhlIHBvaW50LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBsYXRpdHVkZTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbG9uZ2l0dWRlIHBvc2l0aW9uIG9mIHRoZSBwb2ludDtcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbG9uZ2l0dWRlOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgcG9zaXRpb24gb2YgdGhlIHBvaW50IGNoYW5nZWQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHBvc2l0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPExhdExuZ0xpdGVyYWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxMYXRMbmdMaXRlcmFsPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiBhbnkge1xyXG4gICAgaWYgKGNoYW5nZXNbJ2xhdGl0dWRlJ10gfHwgY2hhbmdlc1snbG9uZ2l0dWRlJ10pIHtcclxuICAgICAgY29uc3QgcG9zaXRpb246IExhdExuZ0xpdGVyYWwgPSB7XHJcbiAgICAgICAgbGF0OiBjaGFuZ2VzWydsYXRpdHVkZSddID8gY2hhbmdlc1snbGF0aXR1ZGUnXS5jdXJyZW50VmFsdWUgOiB0aGlzLmxhdGl0dWRlLFxyXG4gICAgICAgIGxuZzogY2hhbmdlc1snbG9uZ2l0dWRlJ10gPyBjaGFuZ2VzWydsb25naXR1ZGUnXS5jdXJyZW50VmFsdWUgOiB0aGlzLmxvbmdpdHVkZSxcclxuICAgICAgfSBhcyBMYXRMbmdMaXRlcmFsO1xyXG4gICAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlZC5lbWl0KHBvc2l0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBnZXRGaXRCb3VuZHNEZXRhaWxzJCgpOiBPYnNlcnZhYmxlPEZpdEJvdW5kc0RldGFpbHM+IHtcclxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uQ2hhbmdlZC5waXBlKFxyXG4gICAgICBzdGFydFdpdGgoe2xhdDogdGhpcy5sYXRpdHVkZSwgbG5nOiB0aGlzLmxvbmdpdHVkZX0pLFxyXG4gICAgICBtYXAocG9zaXRpb24gPT4gKHtsYXRMbmc6IHBvc2l0aW9ufSkpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=