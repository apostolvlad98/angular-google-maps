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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmPolylineIcon, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: AgmPolylineIcon, selector: "agm-polyline agm-icon-sequence", inputs: { fixedRotation: "fixedRotation", offset: "offset", repeat: "repeat", anchorX: "anchorX", anchorY: "anchorY", fillColor: "fillColor", fillOpacity: "fillOpacity", path: "path", rotation: "rotation", scale: "scale", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokeWeight: "strokeWeight" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AgmPolylineIcon, decorators: [{
            type: Directive,
            args: [{ selector: 'agm-polyline agm-icon-sequence' }]
        }], propDecorators: { fixedRotation: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtaWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL3BvbHlsaW5lLWljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBRXpEOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUVILE1BQU0sT0FBTyxlQUFlO0lBMkgxQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0gsQ0FBQzs4R0EvSFUsZUFBZTtrR0FBZixlQUFlOzsyRkFBZixlQUFlO2tCQUQzQixTQUFTO21CQUFDLEVBQUMsUUFBUSxFQUFFLGdDQUFnQyxFQUFDOzhCQVc1QyxhQUFhO3NCQUFyQixLQUFLO2dCQVVHLE1BQU07c0JBQWQsS0FBSztnQkFVRyxNQUFNO3NCQUFkLEtBQUs7Z0JBV0csT0FBTztzQkFBZixLQUFLO2dCQVdHLE9BQU87c0JBQWYsS0FBSztnQkFTRyxTQUFTO3NCQUFqQixLQUFLO2dCQUtHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBU0csSUFBSTtzQkFBWixLQUFLO2dCQVdHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBVUcsS0FBSztzQkFBYixLQUFLO2dCQVNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBUUcsYUFBYTtzQkFBckIsS0FBSztnQkFRRyxZQUFZO3NCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQWdtUG9seWxpbmVJY29uIGVuYWJsZXMgdG8gYWRkIHBvbHlsaW5lIHNlcXVlbmNlcyB0byBhZGQgYXJyb3dzLCBjaXJjbGUsXHJcbiAqIG9yIGN1c3RvbSBpY29ucyBlaXRoZXIgYWxvbmcgdGhlIGVudGlyZSBsaW5lLCBvciBpbiBhIHNwZWNpZmljIHBhcnQgb2YgaXQuXHJcbiAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9zaGFwZXMjcG9seWxpbmVfY3VzdG9taXplXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqIGBgYGh0bWxcclxuICogICAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW3pvb21dPVwiem9vbVwiPlxyXG4gKiAgICAgIDxhZ20tcG9seWxpbmU+XHJcbiAqICAgICAgICAgIDxhZ20taWNvbi1zZXF1ZW5jZSBbZml4ZWRSb3RhdGlvbl09XCJ0cnVlXCIgW3BhdGhdPVwiJ0ZPUldBUkRfT1BFTl9BUlJPVydcIj5cclxuICogICAgICAgICAgPC9hZ20taWNvbi1zZXF1ZW5jZT5cclxuICogICAgICA8L2FnbS1wb2x5bGluZT5cclxuICogICAgPC9hZ20tbWFwPlxyXG4gKiBgYGBcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgQWdtUG9seWxpbmVJY29uXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ2FnbS1wb2x5bGluZSBhZ20taWNvbi1zZXF1ZW5jZSd9KVxyXG5leHBvcnQgY2xhc3MgQWdtUG9seWxpbmVJY29uIGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICAvKipcclxuICAgKiBJZiBgdHJ1ZWAsIGVhY2ggaWNvbiBpbiB0aGUgc2VxdWVuY2UgaGFzIHRoZSBzYW1lIGZpeGVkIHJvdGF0aW9uIHJlZ2FyZGxlc3Mgb2YgdGhlXHJcbiAgICogYW5nbGUgb2YgdGhlIGVkZ2Ugb24gd2hpY2ggaXQgbGllcy4gRGVmYXVsdHMgdG8gYGZhbHNlYCwgaW4gd2hpY2ggY2FzZSBlYWNoIGljb25cclxuICAgKiBpbiB0aGUgc2VxdWVuY2UgaXMgcm90YXRlZCB0byBhbGlnbiB3aXRoIGl0cyBlZGdlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGZpeGVkUm90YXRpb246IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkaXN0YW5jZSBmcm9tIHRoZSBzdGFydCBvZiB0aGUgbGluZSBhdCB3aGljaCBhbiBpY29uIGlzIHRvIGJlIHJlbmRlcmVkLiBUaGlzXHJcbiAgICogZGlzdGFuY2UgbWF5IGJlIGV4cHJlc3NlZCBhcyBhIHBlcmNlbnRhZ2Ugb2YgbGluZSdzIGxlbmd0aCAoZS5nLiAnNTAlJykgb3IgaW4gcGl4ZWxzXHJcbiAgICogKGUuZy4gJzUwcHgnKS4gRGVmYXVsdHMgdG8gJzEwMCUnLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXHJcbiAgICovXHJcbiAgQElucHV0KCkgb2Zmc2V0OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkaXN0YW5jZSBiZXR3ZWVuIGNvbnNlY3V0aXZlIGljb25zIG9uIHRoZSBsaW5lLiBUaGlzIGRpc3RhbmNlIG1heSBiZSBleHByZXNzZWQgYXNcclxuICAgKiBhIHBlcmNlbnRhZ2Ugb2YgdGhlIGxpbmUncyBsZW5ndGggKGUuZy4gJzUwJScpIG9yIGluIHBpeGVscyAoZS5nLiAnNTBweCcpLiBUbyBkaXNhYmxlXHJcbiAgICogcmVwZWF0aW5nIG9mIHRoZSBpY29uLCBzcGVjaWZ5ICcwJy4gRGVmYXVsdHMgdG8gJzAnLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXHJcbiAgICovXHJcbiAgQElucHV0KCkgcmVwZWF0OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHBvc2l0aW9uIG9mIHRoZSBzeW1ib2wgcmVsYXRpdmUgdG8gdGhlIHBvbHlsaW5lLiBUaGUgY29vcmRpbmF0ZVxyXG4gICAqIG9mIHRoZSBzeW1ib2wncyBwYXRoIGlzIHRyYW5zbGF0ZWQgX2xlZnRfIGJ5IHRoZSBhbmNob3IncyB4IGNvb3JkaW5hdGUuIEJ5IGRlZmF1bHQsIGFcclxuICAgKiBzeW1ib2wgaXMgYW5jaG9yZWQgYXQgKDAsIDApLiBUaGUgcG9zaXRpb24gaXMgZXhwcmVzc2VkIGluIHRoZSBzYW1lIGNvb3JkaW5hdGUgc3lzdGVtIGFzIHRoZVxyXG4gICAqIHN5bWJvbCdzIHBhdGguXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cclxuICAgKi9cclxuICBASW5wdXQoKSBhbmNob3JYOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHBvc2l0aW9uIG9mIHRoZSBzeW1ib2wgcmVsYXRpdmUgdG8gdGhlIHBvbHlsaW5lLiBUaGUgY29vcmRpbmF0ZVxyXG4gICAqIG9mIHRoZSBzeW1ib2wncyBwYXRoIGlzIHRyYW5zbGF0ZWQgX3VwXyBieSB0aGUgYW5jaG9yJ3MgeSBjb29yZGluYXRlLiBCeSBkZWZhdWx0LCBhXHJcbiAgICogc3ltYm9sIGlzIGFuY2hvcmVkIGF0ICgwLCAwKS4gVGhlIHBvc2l0aW9uIGlzIGV4cHJlc3NlZCBpbiB0aGUgc2FtZSBjb29yZGluYXRlIHN5c3RlbSBhcyB0aGVcclxuICAgKiBzeW1ib2wncyBwYXRoLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXHJcbiAgICovXHJcbiAgQElucHV0KCkgYW5jaG9yWTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc3ltYm9sJ3MgZmlsbCBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZCBuYW1lZFxyXG4gICAqIGNvbG9ycy4gRGVmYXVsdHMgdG8gdGhlIHN0cm9rZSBjb2xvciBvZiB0aGUgY29ycmVzcG9uZGluZyBwb2x5bGluZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGZpbGxDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc3ltYm9sJ3MgZmlsbCBvcGFjaXR5LiBEZWZhdWx0cyB0byAwLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGZpbGxPcGFjaXR5OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzeW1ib2wncyBwYXRoLCB3aGljaCBpcyBhIGJ1aWx0LWluIHN5bWJvbCBwYXRoLCBvciBhIGN1c3RvbSBwYXRoIGV4cHJlc3NlZCB1c2luZ1xyXG4gICAqIFNWRyBwYXRoIG5vdGF0aW9uLiBSZXF1aXJlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtTeW1ib2xQYXRofVxyXG4gICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cclxuICAgKi9cclxuICBASW5wdXQoKSBwYXRoOiAnQ0lSQ0xFJyB8ICdCQUNLV0FSRF9DTE9TRURfQVJST1cnIHwgJ0JBQ0tXQVJEX09QRU5fQVJST1cnIHwgJ0ZPUldBUkRfQ0xPU0VEX0FSUk9XJyB8XHJcbiAgICAgICAgJ0ZPUldBUkRfT1BFTl9BUlJPVycgfCBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgdGhlIHN5bWJvbCwgZXhwcmVzc2VkIGNsb2Nrd2lzZSBpbiBkZWdyZWVzLlxyXG4gICAqIERlZmF1bHRzIHRvIDAuIEEgc3ltYm9sIHdoZXJlIGBmaXhlZFJvdGF0aW9uYCBpcyBgZmFsc2VgIGlzIHJvdGF0ZWQgcmVsYXRpdmUgdG9cclxuICAgKiB0aGUgYW5nbGUgb2YgdGhlIGVkZ2Ugb24gd2hpY2ggaXQgbGllcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHJvdGF0aW9uOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhbW91bnQgYnkgd2hpY2ggdGhlIHN5bWJvbCBpcyBzY2FsZWQgaW4gc2l6ZS4gRGVmYXVsdHMgdG8gdGhlIHN0cm9rZSB3ZWlnaHRcclxuICAgKiBvZiB0aGUgcG9seWxpbmU7IGFmdGVyIHNjYWxpbmcsIHRoZSBzeW1ib2wgbXVzdCBsaWUgaW5zaWRlIGEgc3F1YXJlIDIyIHBpeGVscyBpblxyXG4gICAqIHNpemUgY2VudGVyZWQgYXQgdGhlIHN5bWJvbCdzIGFuY2hvci5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNjYWxlOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzeW1ib2wncyBzdHJva2UgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWQgbmFtZWRcclxuICAgKiBjb2xvcnMuIERlZmF1bHRzIHRvIHRoZSBzdHJva2UgY29sb3Igb2YgdGhlIHBvbHlsaW5lLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXHJcbiAgICovXHJcbiAgQElucHV0KCkgc3Ryb2tlQ29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHN5bWJvbCdzIHN0cm9rZSBvcGFjaXR5LiBEZWZhdWx0cyB0byB0aGUgc3Ryb2tlIG9wYWNpdHkgb2YgdGhlIHBvbHlsaW5lLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXHJcbiAgICovXHJcbiAgQElucHV0KCkgc3Ryb2tlT3BhY2l0eTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc3ltYm9sJ3Mgc3Ryb2tlIHdlaWdodC4gRGVmYXVsdHMgdG8gdGhlIHNjYWxlIG9mIHRoZSBzeW1ib2wuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cclxuICAgKi9cclxuICBASW5wdXQoKSBzdHJva2VXZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYXRoID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJY29uIFNlcXVlbmNlIHBhdGggaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19