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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: AgmPolylineIcon, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.11", type: AgmPolylineIcon, selector: "agm-polyline agm-icon-sequence", inputs: { fixedRotation: "fixedRotation", offset: "offset", repeat: "repeat", anchorX: "anchorX", anchorY: "anchorY", fillColor: "fillColor", fillOpacity: "fillOpacity", path: "path", rotation: "rotation", scale: "scale", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokeWeight: "strokeWeight" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: AgmPolylineIcon, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtaWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL3BvbHlsaW5lLWljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBRXpEOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUVILE1BQU0sT0FBTyxlQUFlO0lBMkgxQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0gsQ0FBQzsrR0EvSFUsZUFBZTttR0FBZixlQUFlOzs0RkFBZixlQUFlO2tCQUQzQixTQUFTO21CQUFDLEVBQUMsUUFBUSxFQUFFLGdDQUFnQyxFQUFDOzhCQVc1QyxhQUFhO3NCQUFyQixLQUFLO2dCQVVHLE1BQU07c0JBQWQsS0FBSztnQkFVRyxNQUFNO3NCQUFkLEtBQUs7Z0JBV0csT0FBTztzQkFBZixLQUFLO2dCQVdHLE9BQU87c0JBQWYsS0FBSztnQkFTRyxTQUFTO3NCQUFqQixLQUFLO2dCQUtHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBU0csSUFBSTtzQkFBWixLQUFLO2dCQVdHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBVUcsS0FBSztzQkFBYixLQUFLO2dCQVNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBUUcsYUFBYTtzQkFBckIsS0FBSztnQkFRRyxZQUFZO3NCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQWdtUG9seWxpbmVJY29uIGVuYWJsZXMgdG8gYWRkIHBvbHlsaW5lIHNlcXVlbmNlcyB0byBhZGQgYXJyb3dzLCBjaXJjbGUsXG4gKiBvciBjdXN0b20gaWNvbnMgZWl0aGVyIGFsb25nIHRoZSBlbnRpcmUgbGluZSwgb3IgaW4gYSBzcGVjaWZpYyBwYXJ0IG9mIGl0LlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3NoYXBlcyNwb2x5bGluZV9jdXN0b21pemVcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgaHRtbFxuICogICAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW3pvb21dPVwiem9vbVwiPlxuICogICAgICA8YWdtLXBvbHlsaW5lPlxuICogICAgICAgICAgPGFnbS1pY29uLXNlcXVlbmNlIFtmaXhlZFJvdGF0aW9uXT1cInRydWVcIiBbcGF0aF09XCInRk9SV0FSRF9PUEVOX0FSUk9XJ1wiPlxuICogICAgICAgICAgPC9hZ20taWNvbi1zZXF1ZW5jZT5cbiAqICAgICAgPC9hZ20tcG9seWxpbmU+XG4gKiAgICA8L2FnbS1tYXA+XG4gKiBgYGBcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQWdtUG9seWxpbmVJY29uXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnYWdtLXBvbHlsaW5lIGFnbS1pY29uLXNlcXVlbmNlJ30pXG5leHBvcnQgY2xhc3MgQWdtUG9seWxpbmVJY29uIGltcGxlbWVudHMgT25Jbml0e1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGVhY2ggaWNvbiBpbiB0aGUgc2VxdWVuY2UgaGFzIHRoZSBzYW1lIGZpeGVkIHJvdGF0aW9uIHJlZ2FyZGxlc3Mgb2YgdGhlXG4gICAqIGFuZ2xlIG9mIHRoZSBlZGdlIG9uIHdoaWNoIGl0IGxpZXMuIERlZmF1bHRzIHRvIGBmYWxzZWAsIGluIHdoaWNoIGNhc2UgZWFjaCBpY29uXG4gICAqIGluIHRoZSBzZXF1ZW5jZSBpcyByb3RhdGVkIHRvIGFsaWduIHdpdGggaXRzIGVkZ2UuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXG4gICAqL1xuICBASW5wdXQoKSBmaXhlZFJvdGF0aW9uOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgZGlzdGFuY2UgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIGxpbmUgYXQgd2hpY2ggYW4gaWNvbiBpcyB0byBiZSByZW5kZXJlZC4gVGhpc1xuICAgKiBkaXN0YW5jZSBtYXkgYmUgZXhwcmVzc2VkIGFzIGEgcGVyY2VudGFnZSBvZiBsaW5lJ3MgbGVuZ3RoIChlLmcuICc1MCUnKSBvciBpbiBwaXhlbHNcbiAgICogKGUuZy4gJzUwcHgnKS4gRGVmYXVsdHMgdG8gJzEwMCUnLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXG4gICAqL1xuICBASW5wdXQoKSBvZmZzZXQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGRpc3RhbmNlIGJldHdlZW4gY29uc2VjdXRpdmUgaWNvbnMgb24gdGhlIGxpbmUuIFRoaXMgZGlzdGFuY2UgbWF5IGJlIGV4cHJlc3NlZCBhc1xuICAgKiBhIHBlcmNlbnRhZ2Ugb2YgdGhlIGxpbmUncyBsZW5ndGggKGUuZy4gJzUwJScpIG9yIGluIHBpeGVscyAoZS5nLiAnNTBweCcpLiBUbyBkaXNhYmxlXG4gICAqIHJlcGVhdGluZyBvZiB0aGUgaWNvbiwgc3BlY2lmeSAnMCcuIERlZmF1bHRzIHRvICcwJy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxuICAgKi9cbiAgQElucHV0KCkgcmVwZWF0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHBvc2l0aW9uIG9mIHRoZSBzeW1ib2wgcmVsYXRpdmUgdG8gdGhlIHBvbHlsaW5lLiBUaGUgY29vcmRpbmF0ZVxuICAgKiBvZiB0aGUgc3ltYm9sJ3MgcGF0aCBpcyB0cmFuc2xhdGVkIF9sZWZ0XyBieSB0aGUgYW5jaG9yJ3MgeCBjb29yZGluYXRlLiBCeSBkZWZhdWx0LCBhXG4gICAqIHN5bWJvbCBpcyBhbmNob3JlZCBhdCAoMCwgMCkuIFRoZSBwb3NpdGlvbiBpcyBleHByZXNzZWQgaW4gdGhlIHNhbWUgY29vcmRpbmF0ZSBzeXN0ZW0gYXMgdGhlXG4gICAqIHN5bWJvbCdzIHBhdGguXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICovXG4gIEBJbnB1dCgpIGFuY2hvclg6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgcG9zaXRpb24gb2YgdGhlIHN5bWJvbCByZWxhdGl2ZSB0byB0aGUgcG9seWxpbmUuIFRoZSBjb29yZGluYXRlXG4gICAqIG9mIHRoZSBzeW1ib2wncyBwYXRoIGlzIHRyYW5zbGF0ZWQgX3VwXyBieSB0aGUgYW5jaG9yJ3MgeSBjb29yZGluYXRlLiBCeSBkZWZhdWx0LCBhXG4gICAqIHN5bWJvbCBpcyBhbmNob3JlZCBhdCAoMCwgMCkuIFRoZSBwb3NpdGlvbiBpcyBleHByZXNzZWQgaW4gdGhlIHNhbWUgY29vcmRpbmF0ZSBzeXN0ZW0gYXMgdGhlXG4gICAqIHN5bWJvbCdzIHBhdGguXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICovXG4gIEBJbnB1dCgpIGFuY2hvclk6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHN5bWJvbCdzIGZpbGwgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWQgbmFtZWRcbiAgICogY29sb3JzLiBEZWZhdWx0cyB0byB0aGUgc3Ryb2tlIGNvbG9yIG9mIHRoZSBjb3JyZXNwb25kaW5nIHBvbHlsaW5lLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXG4gICAqL1xuICBASW5wdXQoKSBmaWxsQ29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHN5bWJvbCdzIGZpbGwgb3BhY2l0eS4gRGVmYXVsdHMgdG8gMC5cbiAgICovXG4gIEBJbnB1dCgpIGZpbGxPcGFjaXR5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzeW1ib2wncyBwYXRoLCB3aGljaCBpcyBhIGJ1aWx0LWluIHN5bWJvbCBwYXRoLCBvciBhIGN1c3RvbSBwYXRoIGV4cHJlc3NlZCB1c2luZ1xuICAgKiBTVkcgcGF0aCBub3RhdGlvbi4gUmVxdWlyZWQuXG4gICAqXG4gICAqIEB0eXBlIHtTeW1ib2xQYXRofVxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXG4gICAqL1xuICBASW5wdXQoKSBwYXRoOiAnQ0lSQ0xFJyB8ICdCQUNLV0FSRF9DTE9TRURfQVJST1cnIHwgJ0JBQ0tXQVJEX09QRU5fQVJST1cnIHwgJ0ZPUldBUkRfQ0xPU0VEX0FSUk9XJyB8XG4gICAgICAgICdGT1JXQVJEX09QRU5fQVJST1cnIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIHRoZSBzeW1ib2wsIGV4cHJlc3NlZCBjbG9ja3dpc2UgaW4gZGVncmVlcy5cbiAgICogRGVmYXVsdHMgdG8gMC4gQSBzeW1ib2wgd2hlcmUgYGZpeGVkUm90YXRpb25gIGlzIGBmYWxzZWAgaXMgcm90YXRlZCByZWxhdGl2ZSB0b1xuICAgKiB0aGUgYW5nbGUgb2YgdGhlIGVkZ2Ugb24gd2hpY2ggaXQgbGllcy5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxuICAgKi9cbiAgQElucHV0KCkgcm90YXRpb246IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGFtb3VudCBieSB3aGljaCB0aGUgc3ltYm9sIGlzIHNjYWxlZCBpbiBzaXplLiBEZWZhdWx0cyB0byB0aGUgc3Ryb2tlIHdlaWdodFxuICAgKiBvZiB0aGUgcG9seWxpbmU7IGFmdGVyIHNjYWxpbmcsIHRoZSBzeW1ib2wgbXVzdCBsaWUgaW5zaWRlIGEgc3F1YXJlIDIyIHBpeGVscyBpblxuICAgKiBzaXplIGNlbnRlcmVkIGF0IHRoZSBzeW1ib2wncyBhbmNob3IuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICovXG4gIEBJbnB1dCgpIHNjYWxlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzeW1ib2wncyBzdHJva2UgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWQgbmFtZWRcbiAgICogY29sb3JzLiBEZWZhdWx0cyB0byB0aGUgc3Ryb2tlIGNvbG9yIG9mIHRoZSBwb2x5bGluZS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxuICAgKi9cbiAgQElucHV0KCkgc3Ryb2tlQ29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHN5bWJvbCdzIHN0cm9rZSBvcGFjaXR5LiBEZWZhdWx0cyB0byB0aGUgc3Ryb2tlIG9wYWNpdHkgb2YgdGhlIHBvbHlsaW5lLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VPcGFjaXR5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzeW1ib2wncyBzdHJva2Ugd2VpZ2h0LiBEZWZhdWx0cyB0byB0aGUgc2NhbGUgb2YgdGhlIHN5bWJvbC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxuICAgKi9cbiAgQElucHV0KCkgc3Ryb2tlV2VpZ2h0OiBudW1iZXI7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGF0aCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ljb24gU2VxdWVuY2UgcGF0aCBpcyByZXF1aXJlZCcpO1xuICAgIH1cbiAgfVxufVxuIl19