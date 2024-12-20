import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
 * or custom icons either along the entire line, or in a specific part of it.
 * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
 *
 * ### Example
 * ```html
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
 *          </agm-icon-sequence>
 *      </agm-polyline>
 *    </agm-map>
 * ```
 *
 * @export
 * @class AgmPolylineIcon
 */
export class AgmPolylineIcon {
    ngOnInit() {
        if (this.path == null) {
            throw new Error('Icon Sequence path is required');
        }
    }
    static { this.ɵfac = function AgmPolylineIcon_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AgmPolylineIcon)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AgmPolylineIcon, selectors: [["agm-icon-sequence"]], inputs: { fixedRotation: "fixedRotation", offset: "offset", repeat: "repeat", anchorX: "anchorX", anchorY: "anchorY", fillColor: "fillColor", fillOpacity: "fillOpacity", path: "path", rotation: "rotation", scale: "scale", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokeWeight: "strokeWeight" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AgmPolylineIcon, [{
        type: Directive,
        args: [{ selector: 'agm-polyline agm-icon-sequence' }]
    }], null, { fixedRotation: [{
            type: Input
        }], offset: [{
            type: Input
        }], repeat: [{
            type: Input
        }], anchorX: [{
            type: Input
        }], anchorY: [{
            type: Input
        }], fillColor: [{
            type: Input
        }], fillOpacity: [{
            type: Input
        }], path: [{
            type: Input
        }], rotation: [{
            type: Input
        }], scale: [{
            type: Input
        }], strokeColor: [{
            type: Input
        }], strokeOpacity: [{
            type: Input
        }], strokeWeight: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtaWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL3BvbHlsaW5lLWljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBRXpEOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUVILE1BQU0sT0FBTyxlQUFlO0lBMkgxQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0gsQ0FBQztnSEEvSFUsZUFBZTtvRUFBZixlQUFlOztpRkFBZixlQUFlO2NBRDNCLFNBQVM7ZUFBQyxFQUFDLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBQztnQkFXNUMsYUFBYTtrQkFBckIsS0FBSztZQVVHLE1BQU07a0JBQWQsS0FBSztZQVVHLE1BQU07a0JBQWQsS0FBSztZQVdHLE9BQU87a0JBQWYsS0FBSztZQVdHLE9BQU87a0JBQWYsS0FBSztZQVNHLFNBQVM7a0JBQWpCLEtBQUs7WUFLRyxXQUFXO2tCQUFuQixLQUFLO1lBU0csSUFBSTtrQkFBWixLQUFLO1lBV0csUUFBUTtrQkFBaEIsS0FBSztZQVVHLEtBQUs7a0JBQWIsS0FBSztZQVNHLFdBQVc7a0JBQW5CLEtBQUs7WUFRRyxhQUFhO2tCQUFyQixLQUFLO1lBUUcsWUFBWTtrQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEFnbVBvbHlsaW5lSWNvbiBlbmFibGVzIHRvIGFkZCBwb2x5bGluZSBzZXF1ZW5jZXMgdG8gYWRkIGFycm93cywgY2lyY2xlLFxuICogb3IgY3VzdG9tIGljb25zIGVpdGhlciBhbG9uZyB0aGUgZW50aXJlIGxpbmUsIG9yIGluIGEgc3BlY2lmaWMgcGFydCBvZiBpdC5cbiAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9zaGFwZXMjcG9seWxpbmVfY3VzdG9taXplXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYGh0bWxcbiAqICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqICAgICAgPGFnbS1wb2x5bGluZT5cbiAqICAgICAgICAgIDxhZ20taWNvbi1zZXF1ZW5jZSBbZml4ZWRSb3RhdGlvbl09XCJ0cnVlXCIgW3BhdGhdPVwiJ0ZPUldBUkRfT1BFTl9BUlJPVydcIj5cbiAqICAgICAgICAgIDwvYWdtLWljb24tc2VxdWVuY2U+XG4gKiAgICAgIDwvYWdtLXBvbHlsaW5lPlxuICogICAgPC9hZ20tbWFwPlxuICogYGBgXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEFnbVBvbHlsaW5lSWNvblxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ2FnbS1wb2x5bGluZSBhZ20taWNvbi1zZXF1ZW5jZSd9KVxuZXhwb3J0IGNsYXNzIEFnbVBvbHlsaW5lSWNvbiBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBlYWNoIGljb24gaW4gdGhlIHNlcXVlbmNlIGhhcyB0aGUgc2FtZSBmaXhlZCByb3RhdGlvbiByZWdhcmRsZXNzIG9mIHRoZVxuICAgKiBhbmdsZSBvZiB0aGUgZWRnZSBvbiB3aGljaCBpdCBsaWVzLiBEZWZhdWx0cyB0byBgZmFsc2VgLCBpbiB3aGljaCBjYXNlIGVhY2ggaWNvblxuICAgKiBpbiB0aGUgc2VxdWVuY2UgaXMgcm90YXRlZCB0byBhbGlnbiB3aXRoIGl0cyBlZGdlLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxuICAgKi9cbiAgQElucHV0KCkgZml4ZWRSb3RhdGlvbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIGRpc3RhbmNlIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBsaW5lIGF0IHdoaWNoIGFuIGljb24gaXMgdG8gYmUgcmVuZGVyZWQuIFRoaXNcbiAgICogZGlzdGFuY2UgbWF5IGJlIGV4cHJlc3NlZCBhcyBhIHBlcmNlbnRhZ2Ugb2YgbGluZSdzIGxlbmd0aCAoZS5nLiAnNTAlJykgb3IgaW4gcGl4ZWxzXG4gICAqIChlLmcuICc1MHB4JykuIERlZmF1bHRzIHRvICcxMDAlJy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxuICAgKi9cbiAgQElucHV0KCkgb2Zmc2V0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXN0YW5jZSBiZXR3ZWVuIGNvbnNlY3V0aXZlIGljb25zIG9uIHRoZSBsaW5lLiBUaGlzIGRpc3RhbmNlIG1heSBiZSBleHByZXNzZWQgYXNcbiAgICogYSBwZXJjZW50YWdlIG9mIHRoZSBsaW5lJ3MgbGVuZ3RoIChlLmcuICc1MCUnKSBvciBpbiBwaXhlbHMgKGUuZy4gJzUwcHgnKS4gVG8gZGlzYWJsZVxuICAgKiByZXBlYXRpbmcgb2YgdGhlIGljb24sIHNwZWNpZnkgJzAnLiBEZWZhdWx0cyB0byAnMCcuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICovXG4gIEBJbnB1dCgpIHJlcGVhdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBwb3NpdGlvbiBvZiB0aGUgc3ltYm9sIHJlbGF0aXZlIHRvIHRoZSBwb2x5bGluZS4gVGhlIGNvb3JkaW5hdGVcbiAgICogb2YgdGhlIHN5bWJvbCdzIHBhdGggaXMgdHJhbnNsYXRlZCBfbGVmdF8gYnkgdGhlIGFuY2hvcidzIHggY29vcmRpbmF0ZS4gQnkgZGVmYXVsdCwgYVxuICAgKiBzeW1ib2wgaXMgYW5jaG9yZWQgYXQgKDAsIDApLiBUaGUgcG9zaXRpb24gaXMgZXhwcmVzc2VkIGluIHRoZSBzYW1lIGNvb3JkaW5hdGUgc3lzdGVtIGFzIHRoZVxuICAgKiBzeW1ib2wncyBwYXRoLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXG4gICAqL1xuICBASW5wdXQoKSBhbmNob3JYOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHBvc2l0aW9uIG9mIHRoZSBzeW1ib2wgcmVsYXRpdmUgdG8gdGhlIHBvbHlsaW5lLiBUaGUgY29vcmRpbmF0ZVxuICAgKiBvZiB0aGUgc3ltYm9sJ3MgcGF0aCBpcyB0cmFuc2xhdGVkIF91cF8gYnkgdGhlIGFuY2hvcidzIHkgY29vcmRpbmF0ZS4gQnkgZGVmYXVsdCwgYVxuICAgKiBzeW1ib2wgaXMgYW5jaG9yZWQgYXQgKDAsIDApLiBUaGUgcG9zaXRpb24gaXMgZXhwcmVzc2VkIGluIHRoZSBzYW1lIGNvb3JkaW5hdGUgc3lzdGVtIGFzIHRoZVxuICAgKiBzeW1ib2wncyBwYXRoLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXG4gICAqL1xuICBASW5wdXQoKSBhbmNob3JZOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzeW1ib2wncyBmaWxsIGNvbG9yLiBBbGwgQ1NTMyBjb2xvcnMgYXJlIHN1cHBvcnRlZCBleGNlcHQgZm9yIGV4dGVuZGVkIG5hbWVkXG4gICAqIGNvbG9ycy4gRGVmYXVsdHMgdG8gdGhlIHN0cm9rZSBjb2xvciBvZiB0aGUgY29ycmVzcG9uZGluZyBwb2x5bGluZS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxuICAgKi9cbiAgQElucHV0KCkgZmlsbENvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzeW1ib2wncyBmaWxsIG9wYWNpdHkuIERlZmF1bHRzIHRvIDAuXG4gICAqL1xuICBASW5wdXQoKSBmaWxsT3BhY2l0eTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgc3ltYm9sJ3MgcGF0aCwgd2hpY2ggaXMgYSBidWlsdC1pbiBzeW1ib2wgcGF0aCwgb3IgYSBjdXN0b20gcGF0aCBleHByZXNzZWQgdXNpbmdcbiAgICogU1ZHIHBhdGggbm90YXRpb24uIFJlcXVpcmVkLlxuICAgKlxuICAgKiBAdHlwZSB7U3ltYm9sUGF0aH1cbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxuICAgKi9cbiAgQElucHV0KCkgcGF0aDogJ0NJUkNMRScgfCAnQkFDS1dBUkRfQ0xPU0VEX0FSUk9XJyB8ICdCQUNLV0FSRF9PUEVOX0FSUk9XJyB8ICdGT1JXQVJEX0NMT1NFRF9BUlJPVycgfFxuICAgICAgICAnRk9SV0FSRF9PUEVOX0FSUk9XJyB8IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSB0aGUgc3ltYm9sLCBleHByZXNzZWQgY2xvY2t3aXNlIGluIGRlZ3JlZXMuXG4gICAqIERlZmF1bHRzIHRvIDAuIEEgc3ltYm9sIHdoZXJlIGBmaXhlZFJvdGF0aW9uYCBpcyBgZmFsc2VgIGlzIHJvdGF0ZWQgcmVsYXRpdmUgdG9cbiAgICogdGhlIGFuZ2xlIG9mIHRoZSBlZGdlIG9uIHdoaWNoIGl0IGxpZXMuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICovXG4gIEBJbnB1dCgpIHJvdGF0aW9uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBhbW91bnQgYnkgd2hpY2ggdGhlIHN5bWJvbCBpcyBzY2FsZWQgaW4gc2l6ZS4gRGVmYXVsdHMgdG8gdGhlIHN0cm9rZSB3ZWlnaHRcbiAgICogb2YgdGhlIHBvbHlsaW5lOyBhZnRlciBzY2FsaW5nLCB0aGUgc3ltYm9sIG11c3QgbGllIGluc2lkZSBhIHNxdWFyZSAyMiBwaXhlbHMgaW5cbiAgICogc2l6ZSBjZW50ZXJlZCBhdCB0aGUgc3ltYm9sJ3MgYW5jaG9yLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXG4gICAqL1xuICBASW5wdXQoKSBzY2FsZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgc3ltYm9sJ3Mgc3Ryb2tlIGNvbG9yLiBBbGwgQ1NTMyBjb2xvcnMgYXJlIHN1cHBvcnRlZCBleGNlcHQgZm9yIGV4dGVuZGVkIG5hbWVkXG4gICAqIGNvbG9ycy4gRGVmYXVsdHMgdG8gdGhlIHN0cm9rZSBjb2xvciBvZiB0aGUgcG9seWxpbmUuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZUNvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzeW1ib2wncyBzdHJva2Ugb3BhY2l0eS4gRGVmYXVsdHMgdG8gdGhlIHN0cm9rZSBvcGFjaXR5IG9mIHRoZSBwb2x5bGluZS5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxuICAgKi9cbiAgQElucHV0KCkgc3Ryb2tlT3BhY2l0eTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgc3ltYm9sJ3Mgc3Ryb2tlIHdlaWdodC4gRGVmYXVsdHMgdG8gdGhlIHNjYWxlIG9mIHRoZSBzeW1ib2wuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZVdlaWdodDogbnVtYmVyO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhdGggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJY29uIFNlcXVlbmNlIHBhdGggaXMgcmVxdWlyZWQnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==