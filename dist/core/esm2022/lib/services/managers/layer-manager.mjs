import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
/**
 * This class manages Transit and Bicycling Layers for a Google Map instance.
 */
export class LayerManager {
    constructor(_wrapper) {
        this._wrapper = _wrapper;
        this._layers = new Map();
    }
    /**
     * Adds a transit layer to a map instance.
     * @param {AgmTransitLayer} layer - a TransitLayer object
     * @param {TransitLayerOptions} options - TransitLayerOptions options
     * @returns void
     */
    addTransitLayer(layer, options) {
        const newLayer = this._wrapper.createTransitLayer(options);
        this._layers.set(layer, newLayer);
    }
    /**
     * Adds a bicycling layer to a map instance.
     * @param {AgmBicyclingLayer} layer - a bicycling layer object
     * @param {BicyclingLayerOptions} options - BicyclingLayer options
     * @returns void
     */
    addBicyclingLayer(layer, options) {
        const newLayer = this._wrapper.createBicyclingLayer(options);
        this._layers.set(layer, newLayer);
    }
    /**
     * Deletes a map layer
     * @param {AgmTransitLayer|AgmBicyclingLayer} layer - the layer to delete
     * @returns  Promise<void>
     */
    deleteLayer(layer) {
        return this._layers.get(layer).then(currentLayer => {
            currentLayer.setMap(null);
            this._layers.delete(layer);
        });
    }
    /**
     * Hide/Show a google map layer
     * @param { AgmTransitLayer|AgmBicyclingLayer} layer - the layer to hide/show
     * @param {TransitLayerOptions|BicyclingLayerOptions} options - used to set visibility of the layer
     * @returns Promise<void>
     */
    toggleLayerVisibility(layer, options) {
        return this._layers.get(layer).then(currentLayer => {
            if (!options.visible) {
                currentLayer.setMap(null);
                return;
            }
            else {
                return this._wrapper.getNativeMap().then((map) => {
                    currentLayer.setMap(map);
                });
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: LayerManager, deps: [{ token: i1.GoogleMapsAPIWrapper }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: LayerManager }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: LayerManager, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.GoogleMapsAPIWrapper }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9tYW5hZ2Vycy9sYXllci1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU0zQzs7R0FFRztBQUdILE1BQU0sT0FBTyxZQUFZO0lBSXJCLFlBQW9CLFFBQThCO1FBQTlCLGFBQVEsR0FBUixRQUFRLENBQXNCO1FBSDFDLFlBQU8sR0FDWCxJQUFJLEdBQUcsRUFBK0UsQ0FBQztJQUV0QyxDQUFDO0lBRXREOzs7OztPQUtHO0lBQ0gsZUFBZSxDQUFDLEtBQXNCLEVBQUUsT0FBNEI7UUFDaEUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsaUJBQWlCLENBQUMsS0FBd0IsRUFBRSxPQUE4QjtRQUN0RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFdBQVcsQ0FBQyxLQUEwQztRQUNsRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUMvQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gscUJBQXFCLENBQUMsS0FBMEMsRUFBRSxPQUFvRDtRQUNsSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNuQixZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQixPQUFPO1lBQ1gsQ0FBQztpQkFBTSxDQUFDO2dCQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFjLEVBQUUsRUFBRTtvQkFDekQsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzhHQXpEUSxZQUFZO2tIQUFaLFlBQVk7OzJGQUFaLFlBQVk7a0JBRHhCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFnbUJpY3ljbGluZ0xheWVyIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9iaWN5Y2xpbmctbGF5ZXInO1xyXG5pbXBvcnQgeyBBZ21UcmFuc2l0TGF5ZXIgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RyYW5zaXQtbGF5ZXInO1xyXG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcclxuaW1wb3J0IHsgQmljeWNsaW5nTGF5ZXIsIEJpY3ljbGluZ0xheWVyT3B0aW9ucywgR29vZ2xlTWFwLCBUcmFuc2l0TGF5ZXIsIFRyYW5zaXRMYXllck9wdGlvbnMgfSBmcm9tICcuLi9nb29nbGUtbWFwcy10eXBlcyc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBtYW5hZ2VzIFRyYW5zaXQgYW5kIEJpY3ljbGluZyBMYXllcnMgZm9yIGEgR29vZ2xlIE1hcCBpbnN0YW5jZS5cclxuICovXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMYXllck1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBfbGF5ZXJzOiBNYXA8QWdtVHJhbnNpdExheWVyIHwgQWdtQmljeWNsaW5nTGF5ZXIsIFByb21pc2U8VHJhbnNpdExheWVyIHwgQmljeWNsaW5nTGF5ZXI+PiA9XHJcbiAgICAgICAgbmV3IE1hcDxBZ21UcmFuc2l0TGF5ZXIgfCBBZ21CaWN5Y2xpbmdMYXllciwgUHJvbWlzZTxUcmFuc2l0TGF5ZXIgfCBCaWN5Y2xpbmdMYXllcj4+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfd3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgdHJhbnNpdCBsYXllciB0byBhIG1hcCBpbnN0YW5jZS5cclxuICAgICAqIEBwYXJhbSB7QWdtVHJhbnNpdExheWVyfSBsYXllciAtIGEgVHJhbnNpdExheWVyIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHtUcmFuc2l0TGF5ZXJPcHRpb25zfSBvcHRpb25zIC0gVHJhbnNpdExheWVyT3B0aW9ucyBvcHRpb25zXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIGFkZFRyYW5zaXRMYXllcihsYXllcjogQWdtVHJhbnNpdExheWVyLCBvcHRpb25zOiBUcmFuc2l0TGF5ZXJPcHRpb25zKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbmV3TGF5ZXIgPSB0aGlzLl93cmFwcGVyLmNyZWF0ZVRyYW5zaXRMYXllcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLl9sYXllcnMuc2V0KGxheWVyLCBuZXdMYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgYmljeWNsaW5nIGxheWVyIHRvIGEgbWFwIGluc3RhbmNlLlxyXG4gICAgICogQHBhcmFtIHtBZ21CaWN5Y2xpbmdMYXllcn0gbGF5ZXIgLSBhIGJpY3ljbGluZyBsYXllciBvYmplY3RcclxuICAgICAqIEBwYXJhbSB7QmljeWNsaW5nTGF5ZXJPcHRpb25zfSBvcHRpb25zIC0gQmljeWNsaW5nTGF5ZXIgb3B0aW9uc1xyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBhZGRCaWN5Y2xpbmdMYXllcihsYXllcjogQWdtQmljeWNsaW5nTGF5ZXIsIG9wdGlvbnM6IEJpY3ljbGluZ0xheWVyT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5ld0xheWVyID0gdGhpcy5fd3JhcHBlci5jcmVhdGVCaWN5Y2xpbmdMYXllcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLl9sYXllcnMuc2V0KGxheWVyLCBuZXdMYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGVzIGEgbWFwIGxheWVyXHJcbiAgICAgKiBAcGFyYW0ge0FnbVRyYW5zaXRMYXllcnxBZ21CaWN5Y2xpbmdMYXllcn0gbGF5ZXIgLSB0aGUgbGF5ZXIgdG8gZGVsZXRlXHJcbiAgICAgKiBAcmV0dXJucyAgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBkZWxldGVMYXllcihsYXllcjogQWdtVHJhbnNpdExheWVyIHwgQWdtQmljeWNsaW5nTGF5ZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGF5ZXJzLmdldChsYXllcikudGhlbihjdXJyZW50TGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50TGF5ZXIuc2V0TWFwKG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLl9sYXllcnMuZGVsZXRlKGxheWVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhpZGUvU2hvdyBhIGdvb2dsZSBtYXAgbGF5ZXJcclxuICAgICAqIEBwYXJhbSB7IEFnbVRyYW5zaXRMYXllcnxBZ21CaWN5Y2xpbmdMYXllcn0gbGF5ZXIgLSB0aGUgbGF5ZXIgdG8gaGlkZS9zaG93XHJcbiAgICAgKiBAcGFyYW0ge1RyYW5zaXRMYXllck9wdGlvbnN8QmljeWNsaW5nTGF5ZXJPcHRpb25zfSBvcHRpb25zIC0gdXNlZCB0byBzZXQgdmlzaWJpbGl0eSBvZiB0aGUgbGF5ZXJcclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgdG9nZ2xlTGF5ZXJWaXNpYmlsaXR5KGxheWVyOiBBZ21UcmFuc2l0TGF5ZXIgfCBBZ21CaWN5Y2xpbmdMYXllciwgb3B0aW9uczogVHJhbnNpdExheWVyT3B0aW9ucyB8IEJpY3ljbGluZ0xheWVyT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGN1cnJlbnRMYXllciA9PiB7XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TGF5ZXIuc2V0TWFwKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fd3JhcHBlci5nZXROYXRpdmVNYXAoKS50aGVuKCAobWFwOiBHb29nbGVNYXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMYXllci5zZXRNYXAobWFwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19