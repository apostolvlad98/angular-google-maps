import { NgModule } from '@angular/core';
import { AgmBicyclingLayer } from './directives/bicycling-layer';
import { AgmCircle } from './directives/circle';
import { AgmDataLayer } from './directives/data-layer';
import { AgmFitBounds } from './directives/fit-bounds';
import { AgmInfoWindow } from './directives/info-window';
import { AgmKmlLayer } from './directives/kml-layer';
import { AgmMap } from './directives/map';
import { AgmMarker } from './directives/marker';
import { AgmPolygon } from './directives/polygon';
import { AgmPolyline } from './directives/polyline';
import { AgmPolylineIcon } from './directives/polyline-icon';
import { AgmPolylinePoint } from './directives/polyline-point';
import { AgmRectangle } from './directives/rectangle';
import { AgmTransitLayer } from './directives/transit-layer';
import { LazyMapsAPILoader, LAZY_MAPS_API_CONFIG } from './services/maps-api-loader/lazy-maps-api-loader';
import { MapsAPILoader } from './services/maps-api-loader/maps-api-loader';
import { BROWSER_GLOBALS_PROVIDERS } from './utils/browser-globals';
import * as i0 from "@angular/core";
/**
 * @internal
 */
export function coreDirectives() {
    return [
        AgmBicyclingLayer,
        AgmCircle,
        AgmDataLayer,
        AgmFitBounds,
        AgmInfoWindow,
        AgmKmlLayer,
        AgmMap,
        AgmMarker,
        AgmPolygon,
        AgmPolyline,
        AgmPolylineIcon,
        AgmPolylinePoint,
        AgmRectangle,
        AgmTransitLayer,
    ];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
export class AgmCoreModule {
    /**
     * Please use this method when you register the module at the root level.
     */
    static forRoot(lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule,
            providers: [
                ...BROWSER_GLOBALS_PROVIDERS, { provide: MapsAPILoader, useClass: LazyMapsAPILoader },
                { provide: LAZY_MAPS_API_CONFIG, useValue: lazyMapsAPILoaderConfig },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmCoreModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: AgmCoreModule, declarations: [AgmBicyclingLayer,
            AgmCircle,
            AgmDataLayer,
            AgmFitBounds,
            AgmInfoWindow,
            AgmKmlLayer,
            AgmMap,
            AgmMarker,
            AgmPolygon,
            AgmPolyline,
            AgmPolylineIcon,
            AgmPolylinePoint,
            AgmRectangle,
            AgmTransitLayer], exports: [AgmBicyclingLayer,
            AgmCircle,
            AgmDataLayer,
            AgmFitBounds,
            AgmInfoWindow,
            AgmKmlLayer,
            AgmMap,
            AgmMarker,
            AgmPolygon,
            AgmPolyline,
            AgmPolylineIcon,
            AgmPolylinePoint,
            AgmRectangle,
            AgmTransitLayer] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmCoreModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmCoreModule, decorators: [{
            type: NgModule,
            args: [{ declarations: coreDirectives(), exports: coreDirectives() }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFrQyxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUUzRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFcEU7O0dBRUc7QUFDSCxNQUFNLFVBQVUsY0FBYztJQUM1QixPQUFPO1FBQ0wsaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCxZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7UUFDYixXQUFXO1FBQ1gsTUFBTTtRQUNOLFNBQVM7UUFDVCxVQUFVO1FBQ1YsV0FBVztRQUNYLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGVBQWU7S0FDaEIsQ0FBQztBQUNKLENBQUM7QUFDRDs7O0dBR0c7QUFFSCxNQUFNLE9BQU8sYUFBYTtJQUN4Qjs7T0FFRztJQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsdUJBQXdEO1FBQ3JFLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyx5QkFBeUIsRUFBRSxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFDO2dCQUNuRixFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7YUFDbkU7U0FDRixDQUFDO0lBQ0osQ0FBQzs4R0FaVSxhQUFhOytHQUFiLGFBQWEsaUJBckJ0QixpQkFBaUI7WUFDakIsU0FBUztZQUNULFlBQVk7WUFDWixZQUFZO1lBQ1osYUFBYTtZQUNiLFdBQVc7WUFDWCxNQUFNO1lBQ04sU0FBUztZQUNULFVBQVU7WUFDVixXQUFXO1lBQ1gsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osZUFBZSxhQWJmLGlCQUFpQjtZQUNqQixTQUFTO1lBQ1QsWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsV0FBVztZQUNYLE1BQU07WUFDTixTQUFTO1lBQ1QsVUFBVTtZQUNWLFdBQVc7WUFDWCxlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixlQUFlOytHQVFOLGFBQWE7OzJGQUFiLGFBQWE7a0JBRHpCLFFBQVE7bUJBQUMsRUFBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFnbUJpY3ljbGluZ0xheWVyIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2JpY3ljbGluZy1sYXllcic7XHJcbmltcG9ydCB7IEFnbUNpcmNsZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jaXJjbGUnO1xyXG5pbXBvcnQgeyBBZ21EYXRhTGF5ZXIgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGF0YS1sYXllcic7XHJcbmltcG9ydCB7IEFnbUZpdEJvdW5kcyB9IGZyb20gJy4vZGlyZWN0aXZlcy9maXQtYm91bmRzJztcclxuaW1wb3J0IHsgQWdtSW5mb1dpbmRvdyB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmZvLXdpbmRvdyc7XHJcbmltcG9ydCB7IEFnbUttbExheWVyIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ttbC1sYXllcic7XHJcbmltcG9ydCB7IEFnbU1hcCB9IGZyb20gJy4vZGlyZWN0aXZlcy9tYXAnO1xyXG5pbXBvcnQgeyBBZ21NYXJrZXIgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWFya2VyJztcclxuaW1wb3J0IHsgQWdtUG9seWdvbiB9IGZyb20gJy4vZGlyZWN0aXZlcy9wb2x5Z29uJztcclxuaW1wb3J0IHsgQWdtUG9seWxpbmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcG9seWxpbmUnO1xyXG5pbXBvcnQgeyBBZ21Qb2x5bGluZUljb24gfSBmcm9tICcuL2RpcmVjdGl2ZXMvcG9seWxpbmUtaWNvbic7XHJcbmltcG9ydCB7IEFnbVBvbHlsaW5lUG9pbnQgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcG9seWxpbmUtcG9pbnQnO1xyXG5pbXBvcnQgeyBBZ21SZWN0YW5nbGUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVjdGFuZ2xlJztcclxuaW1wb3J0IHsgQWdtVHJhbnNpdExheWVyIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RyYW5zaXQtbGF5ZXInO1xyXG5cclxuaW1wb3J0IHsgTGF6eU1hcHNBUElMb2FkZXIsIExhenlNYXBzQVBJTG9hZGVyQ29uZmlnTGl0ZXJhbCwgTEFaWV9NQVBTX0FQSV9DT05GSUcgfSBmcm9tICcuL3NlcnZpY2VzL21hcHMtYXBpLWxvYWRlci9sYXp5LW1hcHMtYXBpLWxvYWRlcic7XHJcbmltcG9ydCB7IE1hcHNBUElMb2FkZXIgfSBmcm9tICcuL3NlcnZpY2VzL21hcHMtYXBpLWxvYWRlci9tYXBzLWFwaS1sb2FkZXInO1xyXG5cclxuaW1wb3J0IHsgQlJPV1NFUl9HTE9CQUxTX1BST1ZJREVSUyB9IGZyb20gJy4vdXRpbHMvYnJvd3Nlci1nbG9iYWxzJztcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3JlRGlyZWN0aXZlcygpIHtcclxuICByZXR1cm4gW1xyXG4gICAgQWdtQmljeWNsaW5nTGF5ZXIsXHJcbiAgICBBZ21DaXJjbGUsXHJcbiAgICBBZ21EYXRhTGF5ZXIsXHJcbiAgICBBZ21GaXRCb3VuZHMsXHJcbiAgICBBZ21JbmZvV2luZG93LFxyXG4gICAgQWdtS21sTGF5ZXIsXHJcbiAgICBBZ21NYXAsXHJcbiAgICBBZ21NYXJrZXIsXHJcbiAgICBBZ21Qb2x5Z29uLFxyXG4gICAgQWdtUG9seWxpbmUsXHJcbiAgICBBZ21Qb2x5bGluZUljb24sXHJcbiAgICBBZ21Qb2x5bGluZVBvaW50LFxyXG4gICAgQWdtUmVjdGFuZ2xlLFxyXG4gICAgQWdtVHJhbnNpdExheWVyLFxyXG4gIF07XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBhbmd1bGFyLWdvb2dsZS1tYXBzIGNvcmUgbW9kdWxlLiBDb250YWlucyBhbGwgRGlyZWN0aXZlcy9TZXJ2aWNlcy9QaXBlc1xyXG4gKiBvZiB0aGUgY29yZSBtb2R1bGUuIFBsZWFzZSB1c2UgYEFnbUNvcmVNb2R1bGUuZm9yUm9vdCgpYCBpbiB5b3VyIGFwcCBtb2R1bGUuXHJcbiAqL1xyXG5ATmdNb2R1bGUoe2RlY2xhcmF0aW9uczogY29yZURpcmVjdGl2ZXMoKSwgZXhwb3J0czogY29yZURpcmVjdGl2ZXMoKX0pXHJcbmV4cG9ydCBjbGFzcyBBZ21Db3JlTW9kdWxlIHtcclxuICAvKipcclxuICAgKiBQbGVhc2UgdXNlIHRoaXMgbWV0aG9kIHdoZW4geW91IHJlZ2lzdGVyIHRoZSBtb2R1bGUgYXQgdGhlIHJvb3QgbGV2ZWwuXHJcbiAgICovXHJcbiAgc3RhdGljIGZvclJvb3QobGF6eU1hcHNBUElMb2FkZXJDb25maWc/OiBMYXp5TWFwc0FQSUxvYWRlckNvbmZpZ0xpdGVyYWwpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFnbUNvcmVNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBBZ21Db3JlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAuLi5CUk9XU0VSX0dMT0JBTFNfUFJPVklERVJTLCB7cHJvdmlkZTogTWFwc0FQSUxvYWRlciwgdXNlQ2xhc3M6IExhenlNYXBzQVBJTG9hZGVyfSxcclxuICAgICAgICB7cHJvdmlkZTogTEFaWV9NQVBTX0FQSV9DT05GSUcsIHVzZVZhbHVlOiBsYXp5TWFwc0FQSUxvYWRlckNvbmZpZ30sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=