import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./../google-maps-api-wrapper";
/**
 * Manages all KML Layers for a Google Map instance.
 */
export class KmlLayerManager {
    constructor(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    addKmlLayer(layer) {
        const newLayer = this._wrapper.getNativeMap().then(m => {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex,
            });
        });
        this._layers.set(layer, newLayer);
    }
    setOptions(layer, options) {
        this._layers.get(layer).then(l => l.setOptions(options));
    }
    deleteKmlLayer(layer) {
        this._layers.get(layer).then(l => {
            l.setMap(null);
            this._layers.delete(layer);
        });
    }
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    createEventObservable(eventName, layer) {
        return new Observable((observer) => {
            this._layers.get(layer).then((m) => {
                m.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: KmlLayerManager, deps: [{ token: i1.GoogleMapsAPIWrapper }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: KmlLayerManager }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: KmlLayerManager, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.GoogleMapsAPIWrapper }, { type: i0.NgZone }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia21sLWxheWVyLW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvc2VydmljZXMvbWFuYWdlcnMva21sLWxheWVyLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDOzs7QUFRNUM7O0dBRUc7QUFFSCxNQUFNLE9BQU8sZUFBZTtJQUkxQixZQUFvQixRQUE4QixFQUFVLEtBQWE7UUFBckQsYUFBUSxHQUFSLFFBQVEsQ0FBc0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBSGpFLFlBQU8sR0FDWCxJQUFJLEdBQUcsRUFBa0MsQ0FBQztJQUU4QixDQUFDO0lBRTdFOztPQUVHO0lBQ0gsV0FBVyxDQUFDLEtBQWtCO1FBQzVCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JELE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDOUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO2dCQUMxQixHQUFHLEVBQUUsQ0FBQztnQkFDTixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO2dCQUN4QyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7Z0JBQ3BDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7Z0JBQzlDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztnQkFDZCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07YUFDRixDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFrQixFQUFFLE9BQXdCO1FBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQWtCO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQkFBcUIsQ0FBSSxTQUFpQixFQUFFLEtBQWtCO1FBQzVELE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUFxQixFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBVyxFQUFFLEVBQUU7Z0JBQzNDLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0E1Q1UsZUFBZTtrSEFBZixlQUFlOzsyRkFBZixlQUFlO2tCQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBBZ21LbWxMYXllciB9IGZyb20gJy4vLi4vLi4vZGlyZWN0aXZlcy9rbWwtbGF5ZXInO1xyXG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4vLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xyXG5pbXBvcnQgeyBLbWxMYXllciwgS21sTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwcy10eXBlcyc7XHJcblxyXG5kZWNsYXJlIHZhciBnb29nbGU6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBNYW5hZ2VzIGFsbCBLTUwgTGF5ZXJzIGZvciBhIEdvb2dsZSBNYXAgaW5zdGFuY2UuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBLbWxMYXllck1hbmFnZXIge1xyXG4gIHByaXZhdGUgX2xheWVyczogTWFwPEFnbUttbExheWVyLCBQcm9taXNlPEttbExheWVyPj4gPVxyXG4gICAgICBuZXcgTWFwPEFnbUttbExheWVyLCBQcm9taXNlPEttbExheWVyPj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIHByaXZhdGUgX3pvbmU6IE5nWm9uZSkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIG5ldyBLTUwgTGF5ZXIgdG8gdGhlIG1hcC5cclxuICAgKi9cclxuICBhZGRLbWxMYXllcihsYXllcjogQWdtS21sTGF5ZXIpIHtcclxuICAgIGNvbnN0IG5ld0xheWVyID0gdGhpcy5fd3JhcHBlci5nZXROYXRpdmVNYXAoKS50aGVuKG0gPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkttbExheWVyKHtcclxuICAgICAgICBjbGlja2FibGU6IGxheWVyLmNsaWNrYWJsZSxcclxuICAgICAgICBtYXA6IG0sXHJcbiAgICAgICAgcHJlc2VydmVWaWV3cG9ydDogbGF5ZXIucHJlc2VydmVWaWV3cG9ydCxcclxuICAgICAgICBzY3JlZW5PdmVybGF5czogbGF5ZXIuc2NyZWVuT3ZlcmxheXMsXHJcbiAgICAgICAgc3VwcHJlc3NJbmZvV2luZG93czogbGF5ZXIuc3VwcHJlc3NJbmZvV2luZG93cyxcclxuICAgICAgICB1cmw6IGxheWVyLnVybCxcclxuICAgICAgICB6SW5kZXg6IGxheWVyLnpJbmRleCxcclxuICAgICAgfSBhcyBLbWxMYXllck9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9sYXllcnMuc2V0KGxheWVyLCBuZXdMYXllcik7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKGxheWVyOiBBZ21LbWxMYXllciwgb3B0aW9uczogS21sTGF5ZXJPcHRpb25zKSB7XHJcbiAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGwgPT4gbC5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUttbExheWVyKGxheWVyOiBBZ21LbWxMYXllcikge1xyXG4gICAgdGhpcy5fbGF5ZXJzLmdldChsYXllcikudGhlbihsID0+IHtcclxuICAgICAgbC5zZXRNYXAobnVsbCk7XHJcbiAgICAgIHRoaXMuX2xheWVycy5kZWxldGUobGF5ZXIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgR29vZ2xlIE1hcHMgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBLbWxMYXllciBhcyBhbiBPYnNlcnZhYmxlXHJcbiAgICovXHJcbiAgY3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBsYXllcjogQWdtS21sTGF5ZXIpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPFQ+KSA9PiB7XHJcbiAgICAgIHRoaXMuX2xheWVycy5nZXQobGF5ZXIpLnRoZW4oKG06IEttbExheWVyKSA9PiB7XHJcbiAgICAgICAgbS5hZGRMaXN0ZW5lcihldmVudE5hbWUsIChlOiBUKSA9PiB0aGlzLl96b25lLnJ1bigoKSA9PiBvYnNlcnZlci5uZXh0KGUpKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==