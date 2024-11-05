import { OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FitBoundsAccessor, FitBoundsService } from '../services/fit-bounds';
import * as i0 from "@angular/core";
/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
export declare class AgmFitBounds implements OnInit, OnDestroy, OnChanges {
    private readonly _fitBoundsAccessor;
    private readonly _fitBoundsService;
    /**
     * If the value is true, the element gets added to the bounds of the map.
     * Default: true.
     */
    agmFitBounds: boolean;
    private _destroyed$;
    private _latestFitBoundsDetails;
    constructor(_fitBoundsAccessor: FitBoundsAccessor, _fitBoundsService: FitBoundsService);
    /**
     * @internal
     */
    ngOnChanges(): void;
    /**
     * @internal
     */
    ngOnInit(): void;
    private _updateBounds;
    /**
     * @internal
     */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgmFitBounds, [{ self: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AgmFitBounds, "[agmFitBounds]", never, { "agmFitBounds": { "alias": "agmFitBounds"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=fit-bounds.d.ts.map