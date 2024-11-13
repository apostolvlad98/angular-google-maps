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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: AgmCoreModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.11", ngImport: i0, type: AgmCoreModule, declarations: [AgmBicyclingLayer,
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
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: AgmCoreModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: AgmCoreModule, decorators: [{
            type: NgModule,
            args: [{ declarations: coreDirectives(), exports: coreDirectives() }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFrQyxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUUzRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFcEU7O0dBRUc7QUFDSCxNQUFNLFVBQVUsY0FBYztJQUM1QixPQUFPO1FBQ0wsaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCxZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7UUFDYixXQUFXO1FBQ1gsTUFBTTtRQUNOLFNBQVM7UUFDVCxVQUFVO1FBQ1YsV0FBVztRQUNYLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGVBQWU7S0FDaEIsQ0FBQztBQUNKLENBQUM7QUFDRDs7O0dBR0c7QUFFSCxNQUFNLE9BQU8sYUFBYTtJQUN4Qjs7T0FFRztJQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsdUJBQXdEO1FBQ3JFLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyx5QkFBeUIsRUFBRSxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFDO2dCQUNuRixFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7YUFDbkU7U0FDRixDQUFDO0lBQ0osQ0FBQzsrR0FaVSxhQUFhO2dIQUFiLGFBQWEsaUJBckJ0QixpQkFBaUI7WUFDakIsU0FBUztZQUNULFlBQVk7WUFDWixZQUFZO1lBQ1osYUFBYTtZQUNiLFdBQVc7WUFDWCxNQUFNO1lBQ04sU0FBUztZQUNULFVBQVU7WUFDVixXQUFXO1lBQ1gsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osZUFBZSxhQWJmLGlCQUFpQjtZQUNqQixTQUFTO1lBQ1QsWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsV0FBVztZQUNYLE1BQU07WUFDTixTQUFTO1lBQ1QsVUFBVTtZQUNWLFdBQVc7WUFDWCxlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixlQUFlO2dIQVFOLGFBQWE7OzRGQUFiLGFBQWE7a0JBRHpCLFFBQVE7bUJBQUMsRUFBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdtQmljeWNsaW5nTGF5ZXIgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYmljeWNsaW5nLWxheWVyJztcbmltcG9ydCB7IEFnbUNpcmNsZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jaXJjbGUnO1xuaW1wb3J0IHsgQWdtRGF0YUxheWVyIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RhdGEtbGF5ZXInO1xuaW1wb3J0IHsgQWdtRml0Qm91bmRzIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZpdC1ib3VuZHMnO1xuaW1wb3J0IHsgQWdtSW5mb1dpbmRvdyB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmZvLXdpbmRvdyc7XG5pbXBvcnQgeyBBZ21LbWxMYXllciB9IGZyb20gJy4vZGlyZWN0aXZlcy9rbWwtbGF5ZXInO1xuaW1wb3J0IHsgQWdtTWFwIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21hcCc7XG5pbXBvcnQgeyBBZ21NYXJrZXIgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWFya2VyJztcbmltcG9ydCB7IEFnbVBvbHlnb24gfSBmcm9tICcuL2RpcmVjdGl2ZXMvcG9seWdvbic7XG5pbXBvcnQgeyBBZ21Qb2x5bGluZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9wb2x5bGluZSc7XG5pbXBvcnQgeyBBZ21Qb2x5bGluZUljb24gfSBmcm9tICcuL2RpcmVjdGl2ZXMvcG9seWxpbmUtaWNvbic7XG5pbXBvcnQgeyBBZ21Qb2x5bGluZVBvaW50IH0gZnJvbSAnLi9kaXJlY3RpdmVzL3BvbHlsaW5lLXBvaW50JztcbmltcG9ydCB7IEFnbVJlY3RhbmdsZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgQWdtVHJhbnNpdExheWVyIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RyYW5zaXQtbGF5ZXInO1xuXG5pbXBvcnQgeyBMYXp5TWFwc0FQSUxvYWRlciwgTGF6eU1hcHNBUElMb2FkZXJDb25maWdMaXRlcmFsLCBMQVpZX01BUFNfQVBJX0NPTkZJRyB9IGZyb20gJy4vc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL2xhenktbWFwcy1hcGktbG9hZGVyJztcbmltcG9ydCB7IE1hcHNBUElMb2FkZXIgfSBmcm9tICcuL3NlcnZpY2VzL21hcHMtYXBpLWxvYWRlci9tYXBzLWFwaS1sb2FkZXInO1xuXG5pbXBvcnQgeyBCUk9XU0VSX0dMT0JBTFNfUFJPVklERVJTIH0gZnJvbSAnLi91dGlscy9icm93c2VyLWdsb2JhbHMnO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29yZURpcmVjdGl2ZXMoKSB7XG4gIHJldHVybiBbXG4gICAgQWdtQmljeWNsaW5nTGF5ZXIsXG4gICAgQWdtQ2lyY2xlLFxuICAgIEFnbURhdGFMYXllcixcbiAgICBBZ21GaXRCb3VuZHMsXG4gICAgQWdtSW5mb1dpbmRvdyxcbiAgICBBZ21LbWxMYXllcixcbiAgICBBZ21NYXAsXG4gICAgQWdtTWFya2VyLFxuICAgIEFnbVBvbHlnb24sXG4gICAgQWdtUG9seWxpbmUsXG4gICAgQWdtUG9seWxpbmVJY29uLFxuICAgIEFnbVBvbHlsaW5lUG9pbnQsXG4gICAgQWdtUmVjdGFuZ2xlLFxuICAgIEFnbVRyYW5zaXRMYXllcixcbiAgXTtcbn1cbi8qKlxuICogVGhlIGFuZ3VsYXItZ29vZ2xlLW1hcHMgY29yZSBtb2R1bGUuIENvbnRhaW5zIGFsbCBEaXJlY3RpdmVzL1NlcnZpY2VzL1BpcGVzXG4gKiBvZiB0aGUgY29yZSBtb2R1bGUuIFBsZWFzZSB1c2UgYEFnbUNvcmVNb2R1bGUuZm9yUm9vdCgpYCBpbiB5b3VyIGFwcCBtb2R1bGUuXG4gKi9cbkBOZ01vZHVsZSh7ZGVjbGFyYXRpb25zOiBjb3JlRGlyZWN0aXZlcygpLCBleHBvcnRzOiBjb3JlRGlyZWN0aXZlcygpfSlcbmV4cG9ydCBjbGFzcyBBZ21Db3JlTW9kdWxlIHtcbiAgLyoqXG4gICAqIFBsZWFzZSB1c2UgdGhpcyBtZXRob2Qgd2hlbiB5b3UgcmVnaXN0ZXIgdGhlIG1vZHVsZSBhdCB0aGUgcm9vdCBsZXZlbC5cbiAgICovXG4gIHN0YXRpYyBmb3JSb290KGxhenlNYXBzQVBJTG9hZGVyQ29uZmlnPzogTGF6eU1hcHNBUElMb2FkZXJDb25maWdMaXRlcmFsKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBZ21Db3JlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBZ21Db3JlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLkJST1dTRVJfR0xPQkFMU19QUk9WSURFUlMsIHtwcm92aWRlOiBNYXBzQVBJTG9hZGVyLCB1c2VDbGFzczogTGF6eU1hcHNBUElMb2FkZXJ9LFxuICAgICAgICB7cHJvdmlkZTogTEFaWV9NQVBTX0FQSV9DT05GSUcsIHVzZVZhbHVlOiBsYXp5TWFwc0FQSUxvYWRlckNvbmZpZ30sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==