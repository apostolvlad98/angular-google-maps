import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
export class RectangleManager {
    constructor(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    addRectangle(rectangle) {
        this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west,
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex,
        }));
    }
    /**
     * Removes the given rectangle from the map.
     */
    removeRectangle(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            r.setMap(null);
            this._rectangles.delete(rectangle);
        });
    }
    setOptions(rectangle, options) {
        return this._rectangles.get(rectangle).then((r) => r.setOptions(options));
    }
    getBounds(rectangle) {
        return this._rectangles.get(rectangle).then((r) => r.getBounds());
    }
    setBounds(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west,
            });
        });
    }
    setEditable(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setEditable(rectangle.editable);
        });
    }
    setDraggable(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setDraggable(rectangle.draggable);
        });
    }
    setVisible(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setVisible(rectangle.visible);
        });
    }
    createEventObservable(eventName, rectangle) {
        return Observable.create((observer) => {
            let listener = null;
            this._rectangles.get(rectangle).then((r) => {
                listener = r.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
            return () => {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    }
    static { this.ɵfac = function RectangleManager_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RectangleManager)(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RectangleManager, factory: RectangleManager.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RectangleManager, [{
        type: Injectable
    }], () => [{ type: i1.GoogleMapsAPIWrapper }, { type: i0.NgZone }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdGFuZ2xlLW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvc2VydmljZXMvbWFuYWdlcnMvcmVjdGFuZ2xlLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDOzs7QUFPNUMsTUFBTSxPQUFPLGdCQUFnQjtJQUkzQixZQUFvQixXQUFpQyxFQUFVLEtBQWE7UUFBeEQsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUhwRSxnQkFBVyxHQUNmLElBQUksR0FBRyxFQUE2QyxDQUFDO0lBRXNCLENBQUM7SUFFaEYsWUFBWSxDQUFDLFNBQXVCO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztZQUMvRCxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO2dCQUN0QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7Z0JBQ3BCLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSztnQkFDdEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO2FBQ3JCO1lBQ0QsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTO1lBQzlCLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUztZQUM5QixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVE7WUFDNUIsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTO1lBQzlCLFdBQVcsRUFBRSxTQUFTLENBQUMsV0FBVztZQUNsQyxXQUFXLEVBQUUsU0FBUyxDQUFDLFdBQVc7WUFDbEMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxhQUFhO1lBQ3RDLGNBQWMsRUFBRSxTQUFTLENBQUMs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LEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxHQUFHLEVBQUU7Z0JBQ1YsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ3RCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztZQUNILENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztpSEF4RlUsZ0JBQWdCO3VFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCOztpRkFBaEIsZ0JBQWdCO2NBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWdtUmVjdGFuZ2xlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfSBmcm9tICcuLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5pbXBvcnQgKiBhcyBtYXBUeXBlcyBmcm9tICcuLi9nb29nbGUtbWFwcy10eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGVNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfcmVjdGFuZ2xlczogTWFwPEFnbVJlY3RhbmdsZSwgUHJvbWlzZTxtYXBUeXBlcy5SZWN0YW5nbGU+PiA9XG4gICAgICBuZXcgTWFwPEFnbVJlY3RhbmdsZSwgUHJvbWlzZTxtYXBUeXBlcy5SZWN0YW5nbGU+PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FwaVdyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBwcml2YXRlIF96b25lOiBOZ1pvbmUpIHt9XG5cbiAgYWRkUmVjdGFuZ2xlKHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKSB7XG4gICAgdGhpcy5fcmVjdGFuZ2xlcy5zZXQocmVjdGFuZ2xlLCB0aGlzLl9hcGlXcmFwcGVyLmNyZWF0ZVJlY3RhbmdsZSh7XG4gICAgICBib3VuZHM6IHtcbiAgICAgICAgbm9ydGg6IHJlY3RhbmdsZS5ub3J0aCxcbiAgICAgICAgZWFzdDogcmVjdGFuZ2xlLmVhc3QsXG4gICAgICAgIHNvdXRoOiByZWN0YW5nbGUuc291dGgsXG4gICAgICAgIHdlc3Q6IHJlY3RhbmdsZS53ZXN0LFxuICAgICAgfSxcbiAgICAgIGNsaWNrYWJsZTogcmVjdGFuZ2xlLmNsaWNrYWJsZSxcbiAgICAgIGRyYWdnYWJsZTogcmVjdGFuZ2xlLmRyYWdnYWJsZSxcbiAgICAgIGVkaXRhYmxlOiByZWN0YW5nbGUuZWRpdGFibGUsXG4gICAgICBmaWxsQ29sb3I6IHJlY3RhbmdsZS5maWxsQ29sb3IsXG4gICAgICBmaWxsT3BhY2l0eTogcmVjdGFuZ2xlLmZpbGxPcGFjaXR5LFxuICAgICAgc3Ryb2tlQ29sb3I6IHJlY3RhbmdsZS5zdHJva2VDb2xvcixcbiAgICAgIHN0cm9rZU9wYWNpdHk6IHJlY3RhbmdsZS5zdHJva2VPcGFjaXR5LFxuICAgICAgc3Ryb2tlUG9zaXRpb246IHJlY3RhbmdsZS5zdHJva2VQb3NpdGlvbixcbiAgICAgIHN0cm9rZVdlaWdodDogcmVjdGFuZ2xlLnN0cm9rZVdlaWdodCxcbiAgICAgIHZpc2libGU6IHJlY3RhbmdsZS52aXNpYmxlLFxuICAgICAgekluZGV4OiByZWN0YW5nbGUuekluZGV4LFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBnaXZlbiByZWN0YW5nbGUgZnJvbSB0aGUgbWFwLlxuICAgKi9cbiAgcmVtb3ZlUmVjdGFuZ2xlKHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY3RhbmdsZXMuZ2V0KHJlY3RhbmdsZSkudGhlbigocikgPT4ge1xuICAgICAgci5zZXRNYXAobnVsbCk7XG4gICAgICB0aGlzLl9yZWN0YW5nbGVzLmRlbGV0ZShyZWN0YW5nbGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhyZWN0YW5nbGU6IEFnbVJlY3RhbmdsZSwgb3B0aW9uczogbWFwVHlwZXMuUmVjdGFuZ2xlT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9yZWN0YW5nbGVzLmdldChyZWN0YW5nbGUpLnRoZW4oKHIpID0+IHIuc2V0T3B0aW9ucyhvcHRpb25zKSk7XG4gIH1cblxuICBnZXRCb3VuZHMocmVjdGFuZ2xlOiBBZ21SZWN0YW5nbGUpOiBQcm9taXNlPG1hcFR5cGVzLkxhdExuZ0JvdW5kcz4ge1xuICAgIHJldHVybiB0aGlzLl9yZWN0YW5nbGVzLmdldChyZWN0YW5nbGUpLnRoZW4oKHIpID0+IHIuZ2V0Qm91bmRzKCkpO1xuICB9XG5cbiAgc2V0Qm91bmRzKHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY3RhbmdsZXMuZ2V0KHJlY3RhbmdsZSkudGhlbigocikgPT4ge1xuICAgICAgcmV0dXJuIHIuc2V0Qm91bmRzKHtcbiAgICAgICAgbm9ydGg6IHJlY3RhbmdsZS5ub3J0aCxcbiAgICAgICAgZWFzdDogcmVjdGFuZ2xlLmVhc3QsXG4gICAgICAgIHNvdXRoOiByZWN0YW5nbGUuc291dGgsXG4gICAgICAgIHdlc3Q6IHJlY3RhbmdsZS53ZXN0LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRFZGl0YWJsZShyZWN0YW5nbGU6IEFnbVJlY3RhbmdsZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9yZWN0YW5nbGVzLmdldChyZWN0YW5nbGUpLnRoZW4oKHIpID0+IHtcbiAgICAgIHJldHVybiByLnNldEVkaXRhYmxlKHJlY3RhbmdsZS5lZGl0YWJsZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXREcmFnZ2FibGUocmVjdGFuZ2xlOiBBZ21SZWN0YW5nbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVjdGFuZ2xlcy5nZXQocmVjdGFuZ2xlKS50aGVuKChyKSA9PiB7XG4gICAgICByZXR1cm4gci5zZXREcmFnZ2FibGUocmVjdGFuZ2xlLmRyYWdnYWJsZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRWaXNpYmxlKHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY3RhbmdsZXMuZ2V0KHJlY3RhbmdsZSkudGhlbigocikgPT4ge1xuICAgICAgcmV0dXJuIHIuc2V0VmlzaWJsZShyZWN0YW5nbGUudmlzaWJsZSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIGxldCBsaXN0ZW5lcjogbWFwVHlwZXMuTWFwc0V2ZW50TGlzdGVuZXIgPSBudWxsO1xuICAgICAgdGhpcy5fcmVjdGFuZ2xlcy5nZXQocmVjdGFuZ2xlKS50aGVuKChyKSA9PiB7XG4gICAgICAgIGxpc3RlbmVyID0gci5hZGRMaXN0ZW5lcihldmVudE5hbWUsIChlOiBUKSA9PiB0aGlzLl96b25lLnJ1bigoKSA9PiBvYnNlcnZlci5uZXh0KGUpKSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgbGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==