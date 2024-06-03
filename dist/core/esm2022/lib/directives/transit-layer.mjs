import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/managers/layer-manager";
let layerId = 0;
/*
 * This directive adds a transit layer to a google map instance
 * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
 * */
export class AgmTransitLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        /**
         * Hide/show transit layer
         */
        this.visible = true;
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addTransitLayer(this, { visible: this.visible });
        this._addedToManager = true;
    }
    ngOnChanges(changes) {
        if (!this._addedToManager) {
            return;
        }
        if (changes['visible'] != null) {
            this._manager.toggleLayerVisibility(this, { visible: changes['visible'].currentValue });
        }
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmTransitLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteLayer(this);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmTransitLayer, deps: [{ token: i1.LayerManager }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: AgmTransitLayer, selector: "agm-transit-layer", inputs: { visible: "visible" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmTransitLayer, decorators: [{
            type: Directive,
            args: [{
                    selector: 'agm-transit-layer',
                }]
        }], ctorParameters: () => [{ type: i1.LayerManager }], propDecorators: { visible: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdC1sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL3RyYW5zaXQtbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDOzs7QUFHOUYsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBRWhCOzs7S0FHSztBQUtMLE1BQU0sT0FBTyxlQUFlO0lBU3hCLFlBQXFCLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFSbkMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsUUFBRyxHQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU3Qzs7V0FFRztRQUNNLFlBQU8sR0FBRyxJQUFJLENBQUM7SUFFdUIsQ0FBQztJQUVoRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsT0FBTztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLE9BQU87UUFDWCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7UUFDMUYsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsRUFBRSxLQUFhLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFakMsZ0JBQWdCO0lBQ2hCLFFBQVEsS0FBYSxPQUFPLG1CQUFtQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXZFLGdCQUFnQjtJQUNoQixXQUFXO1FBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs4R0FyQ1EsZUFBZTtrR0FBZixlQUFlOzsyRkFBZixlQUFlO2tCQUozQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxtQkFBbUI7aUJBQ2hDO2lGQVNZLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGF5ZXJNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvbGF5ZXItbWFuYWdlcic7XHJcblxyXG5sZXQgbGF5ZXJJZCA9IDA7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBhZGRzIGEgdHJhbnNpdCBsYXllciB0byBhIGdvb2dsZSBtYXAgaW5zdGFuY2VcclxuICogPGFnbS10cmFuc2l0LWxheWVyIFt2aXNpYmxlXT1cInRydWV8ZmFsc2VcIj4gPGFnbS10cmFuc2l0LWxheWVyPlxyXG4gKiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnYWdtLXRyYW5zaXQtbGF5ZXInLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFnbVRyYW5zaXRMYXllciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3l7XHJcbiAgICBwcml2YXRlIF9hZGRlZFRvTWFuYWdlciA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfaWQ6IHN0cmluZyA9IChsYXllcklkKyspLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlL3Nob3cgdHJhbnNpdCBsYXllclxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSB2aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfbWFuYWdlcjogTGF5ZXJNYW5hZ2VyICkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fYWRkZWRUb01hbmFnZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9tYW5hZ2VyLmFkZFRyYW5zaXRMYXllcih0aGlzLCB7dmlzaWJsZTogdGhpcy52aXNpYmxlfSk7XHJcbiAgICAgICAgdGhpcy5fYWRkZWRUb01hbmFnZXIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2FkZGVkVG9NYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXNbJ3Zpc2libGUnXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZXIudG9nZ2xlTGF5ZXJWaXNpYmlsaXR5KHRoaXMsIHt2aXNpYmxlOiBjaGFuZ2VzWyd2aXNpYmxlJ10uY3VycmVudFZhbHVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIGlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9pZDsgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7IHJldHVybiBgQWdtVHJhbnNpdExheWVyLSR7dGhpcy5faWQudG9TdHJpbmcoKX1gOyB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fbWFuYWdlci5kZWxldGVMYXllcih0aGlzKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19