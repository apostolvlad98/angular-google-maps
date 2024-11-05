import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LayerManager } from '../services/managers/layer-manager';
import * as i0 from "@angular/core";
export declare class AgmBicyclingLayer implements OnInit, OnChanges, OnDestroy {
    private _manager;
    private _addedToManager;
    private _id;
    /**
     * Hide/show bicycling layer
     */
    visible: boolean;
    constructor(_manager: LayerManager);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** @internal */
    id(): string;
    /** @internal */
    toString(): string;
    /** @internal */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgmBicyclingLayer, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AgmBicyclingLayer, "agm-bicycling-layer", never, { "visible": { "alias": "visible"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=bicycling-layer.d.ts.map