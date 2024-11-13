export var google;
export var SymbolPath;
(function (SymbolPath) {
    SymbolPath[SymbolPath["BACKWARD_CLOSED_ARROW"] = 3] = "BACKWARD_CLOSED_ARROW";
    SymbolPath[SymbolPath["BACKWARD_OPEN_ARROW"] = 4] = "BACKWARD_OPEN_ARROW";
    SymbolPath[SymbolPath["CIRCLE"] = 0] = "CIRCLE";
    SymbolPath[SymbolPath["FORWARD_CLOSED_ARROW"] = 1] = "FORWARD_CLOSED_ARROW";
    SymbolPath[SymbolPath["FORWARD_OPEN_ARROW"] = 2] = "FORWARD_OPEN_ARROW";
})(SymbolPath || (SymbolPath = {}));
/**
 * Identifiers used to specify the placement of controls on the map. Controls are
 * positioned relative to other controls in the same layout position. Controls that
 * are added first are positioned closer to the edge of the map.
 */
export var ControlPosition;
(function (ControlPosition) {
    ControlPosition[ControlPosition["RIGHT_BOTTOM"] = 0] = "RIGHT_BOTTOM";
    ControlPosition[ControlPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
    ControlPosition[ControlPosition["TOP_CENTER"] = 2] = "TOP_CENTER";
    ControlPosition[ControlPosition["TOP_RIGHT"] = 3] = "TOP_RIGHT";
    ControlPosition[ControlPosition["LEFT_CENTER"] = 4] = "LEFT_CENTER";
    ControlPosition[ControlPosition["LEFT_TOP"] = 5] = "LEFT_TOP";
    ControlPosition[ControlPosition["LEFT_BOTTOM"] = 6] = "LEFT_BOTTOM";
    ControlPosition[ControlPosition["RIGHT_TOP"] = 7] = "RIGHT_TOP";
    ControlPosition[ControlPosition["RIGHT_CENTER"] = 8] = "RIGHT_CENTER";
    ControlPosition[ControlPosition["BOTTOM_RIGHT"] = 9] = "BOTTOM_RIGHT";
    ControlPosition[ControlPosition["BOTTOM_LEFT"] = 10] = "BOTTOM_LEFT";
    ControlPosition[ControlPosition["BOTTOM_CENTER"] = 11] = "BOTTOM_CENTER";
})(ControlPosition || (ControlPosition = {}));
export var MapTypeId;
(function (MapTypeId) {
    /** This map type displays a transparent layer of major streets on satellite images. */
    MapTypeId[MapTypeId["HYBRID"] = 0] = "HYBRID";
    /** This map type displays a normal street map. */
    MapTypeId[MapTypeId["ROADMAP"] = 1] = "ROADMAP";
    /** This map type displays satellite images. */
    MapTypeId[MapTypeId["SATELLITE"] = 2] = "SATELLITE";
    /** This map type displays maps with physical features such as terrain and vegetation. */
    MapTypeId[MapTypeId["TERRAIN"] = 3] = "TERRAIN";
})(MapTypeId || (MapTypeId = {}));
export var MapTypeControlStyle;
(function (MapTypeControlStyle) {
    MapTypeControlStyle[MapTypeControlStyle["DEFAULT"] = 0] = "DEFAULT";
    MapTypeControlStyle[MapTypeControlStyle["DROPDOWN_MENU"] = 2] = "DROPDOWN_MENU";
    MapTypeControlStyle[MapTypeControlStyle["HORIZONTAL_BAR"] = 1] = "HORIZONTAL_BAR";
})(MapTypeControlStyle || (MapTypeControlStyle = {}));
export var ScaleControlStyle;
(function (ScaleControlStyle) {
    ScaleControlStyle[ScaleControlStyle["DEFAULT"] = 0] = "DEFAULT";
})(ScaleControlStyle || (ScaleControlStyle = {}));
export var ZoomControlStyle;
(function (ZoomControlStyle) {
    ZoomControlStyle[ZoomControlStyle["DEFAULT"] = 0] = "DEFAULT";
    ZoomControlStyle[ZoomControlStyle["LARGE"] = 1] = "LARGE";
    ZoomControlStyle[ZoomControlStyle["SMALL"] = 2] = "SMALL";
})(ZoomControlStyle || (ZoomControlStyle = {}));
export var GeocoderLocationType;
(function (GeocoderLocationType) {
    GeocoderLocationType["APPROXIMATE"] = "APPROXIMATE";
    GeocoderLocationType["GEOMETRIC_CENTER"] = "GEOMETRIC_CENTER";
    GeocoderLocationType["RANGE_INTERPOLATED"] = "RANGE_INTERPOLATED";
    GeocoderLocationType["ROOFTOP"] = "ROOFTOP";
})(GeocoderLocationType || (GeocoderLocationType = {}));
export var GeocoderStatus;
(function (GeocoderStatus) {
    GeocoderStatus["ERROR"] = "ERROR";
    GeocoderStatus["INVALID_REQUEST"] = "INVALID_REQUEST";
    GeocoderStatus["OK"] = "OK";
    GeocoderStatus["OVER_QUERY_LIMIT"] = "OVER_QUERY_LIMIT";
    GeocoderStatus["REQUEST_DENIED"] = "REQUEST_DENIED";
    GeocoderStatus["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
    GeocoderStatus["ZERO_RESULTS"] = "ZERO_RESULTS";
})(GeocoderStatus || (GeocoderStatus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcHMtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvc2VydmljZXMvZ29vZ2xlLW1hcHMtdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLElBQUksTUFBVyxDQUFDO0FBMlR2QixNQUFNLENBQU4sSUFBWSxVQU1YO0FBTkQsV0FBWSxVQUFVO0lBQ3BCLDZFQUF5QixDQUFBO0lBQ3pCLHlFQUF1QixDQUFBO0lBQ3ZCLCtDQUFVLENBQUE7SUFDViwyRUFBd0IsQ0FBQTtJQUN4Qix1RUFBc0IsQ0FBQTtBQUN4QixDQUFDLEVBTlcsVUFBVSxLQUFWLFVBQVUsUUFNckI7QUFzTUQ7Ozs7R0FJRztBQUNILE1BQU0sQ0FBTixJQUFZLGVBYVg7QUFiRCxXQUFZLGVBQWU7SUFDekIscUVBQVksQ0FBQTtJQUNaLDZEQUFRLENBQUE7SUFDUixpRUFBVSxDQUFBO0lBQ1YsK0RBQVMsQ0FBQTtJQUNULG1FQUFXLENBQUE7SUFDWCw2REFBUSxDQUFBO0lBQ1IsbUVBQVcsQ0FBQTtJQUNYLCtEQUFTLENBQUE7SUFDVCxxRUFBWSxDQUFBO0lBQ1oscUVBQVksQ0FBQTtJQUNaLG9FQUFXLENBQUE7SUFDWCx3RUFBYSxDQUFBO0FBQ2YsQ0FBQyxFQWJXLGVBQWUsS0FBZixlQUFlLFFBYTFCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FTWDtBQVRELFdBQVksU0FBUztJQUNuQix1RkFBdUY7SUFDdkYsNkNBQU0sQ0FBQTtJQUNOLGtEQUFrRDtJQUNsRCwrQ0FBTyxDQUFBO0lBQ1AsK0NBQStDO0lBQy9DLG1EQUFTLENBQUE7SUFDVCx5RkFBeUY7SUFDekYsK0NBQU8sQ0FBQTtBQUNULENBQUMsRUFUVyxTQUFTLEtBQVQsU0FBUyxRQVNwQjtBQWdCRCxNQUFNLENBQU4sSUFBWSxtQkFJWDtBQUpELFdBQVksbUJBQW1CO0lBQzdCLG1FQUFXLENBQUE7SUFDWCwrRUFBaUIsQ0FBQTtJQUNqQixpRkFBa0IsQ0FBQTtBQUNwQixDQUFDLEVBSlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUk5QjtBQThCRCxNQUFNLENBQU4sSUFBWSxpQkFFWDtBQUZELFdBQVksaUJBQWlCO0lBQzNCLCtEQUFPLENBQUE7QUFDVCxDQUFDLEVBRlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUU1QjtBQXlCRCxNQUFNLENBQU4sSUFBWSxnQkFJWDtBQUpELFdBQVksZ0JBQWdCO0lBQzFCLDZEQUFPLENBQUE7SUFDUCx5REFBSyxDQUFBO0lBQ0wseURBQUssQ0FBQTtBQUNQLENBQUMsRUFKVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBSTNCO0FBMkNELE1BQU0sQ0FBTixJQUFZLG9CQUtYO0FBTEQsV0FBWSxvQkFBb0I7SUFDOUIsbURBQTJCLENBQUE7SUFDM0IsNkRBQXFDLENBQUE7SUFDckMsaUVBQXlDLENBQUE7SUFDekMsMkNBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUxXLG9CQUFvQixLQUFwQixvQkFBb0IsUUFLL0I7QUFxQkQsTUFBTSxDQUFOLElBQVksY0FRWDtBQVJELFdBQVksY0FBYztJQUN4QixpQ0FBZSxDQUFBO0lBQ2YscURBQW1DLENBQUE7SUFDbkMsMkJBQVMsQ0FBQTtJQUNULHVEQUFxQyxDQUFBO0lBQ3JDLG1EQUFpQyxDQUFBO0lBQ2pDLGlEQUErQixDQUFBO0lBQy9CLCtDQUE2QixDQUFBO0FBQy9CLENBQUMsRUFSVyxjQUFjLEtBQWQsY0FBYyxRQVF6QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgZ29vZ2xlOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTVZDT2JqZWN0IHtcbiAgYWRkTGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogTWFwc0V2ZW50TGlzdGVuZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTVZDQXJyYXk8VD4gZXh0ZW5kcyBNVkNPYmplY3Qge1xuICBjbGVhcigpOiB2b2lkO1xuICBnZXRBcnJheSgpOiBBcnJheTxUPjtcbiAgZ2V0QXQoaTogbnVtYmVyKTogVDtcbiAgZ2V0TGVuZ3RoKCk6IG51bWJlcjtcbiAgaW5zZXJ0QXQoaTogbnVtYmVyLCBlbGVtOiBUKTogdm9pZDtcbiAgcG9wKCk6IFQ7XG4gIHB1c2goZWxlbTogVCk6IG51bWJlcjtcbiAgcmVtb3ZlQXQoaTogbnVtYmVyKTogVDtcbiAgc2V0QXQoaTogbnVtYmVyLCBlbGVtOiBUKTogdm9pZDtcbiAgLyogdHNsaW50OmRpc2FibGUgKi9cbiAgLypcbiAgKiBUc2xpbnQgY29uZmlndXJhdGlvbiBjaGVjay1wYXJhbWV0ZXJzIHdpbGwgcHJvbXB0IGVycm9ycyBmb3IgdGhlc2UgbGluZXMgb2YgY29kZS5cbiAgKiBodHRwczovL3BhbGFudGlyLmdpdGh1Yi5pby90c2xpbnQvcnVsZXMvbm8tdW51c2VkLXZhcmlhYmxlL1xuICAqL1xuICBmb3JFYWNoKGNhbGxiYWNrOiAoZWxlbTogVCwgaTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZDtcbiAgLyogdHNsaW50OmVuYWJsZSAqL1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcCBleHRlbmRzIE1WQ09iamVjdCB7XG4gIGRhdGE/OiBEYXRhO1xuICBwYW5UbyhsYXRMbmc6IExhdExuZyB8IExhdExuZ0xpdGVyYWwpOiB2b2lkO1xuICBwYW5CeSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XG4gIHNldFpvb20oem9vbTogbnVtYmVyKTogdm9pZDtcbiAgZ2V0Q2VudGVyKCk6IExhdExuZztcbiAgc2V0Q2VudGVyKGxhdExuZzogTGF0TG5nIHwgTGF0TG5nTGl0ZXJhbCk6IHZvaWQ7XG4gIGdldEJvdW5kcygpOiBMYXRMbmdCb3VuZHM7XG4gIGdldE1hcFR5cGVJZCgpOiBNYXBUeXBlSWQ7XG4gIGdldFpvb20oKTogbnVtYmVyO1xuICBzZXRPcHRpb25zKG9wdGlvbnM6IE1hcE9wdGlvbnMpOiB2b2lkO1xuICBwYW5Ub0JvdW5kcyhsYXRMbmdCb3VuZHM6IExhdExuZ0JvdW5kcyB8IExhdExuZ0JvdW5kc0xpdGVyYWwsIHBhZGRpbmc/OiBudW1iZXIgfCBQYWRkaW5nKTogdm9pZDtcbiAgZml0Qm91bmRzKGJvdW5kczogTGF0TG5nQm91bmRzIHwgTGF0TG5nQm91bmRzTGl0ZXJhbCwgcGFkZGluZz86IG51bWJlciB8IFBhZGRpbmcpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhdExuZyB7XG4gIGxhdCgpOiBudW1iZXI7XG4gIGxuZygpOiBudW1iZXI7XG4gIHRvSlNPTigpOiBhbnk7XG4gIHRvU3RyaW5nKCk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXIgZXh0ZW5kcyBNVkNPYmplY3Qge1xuICBzZXRNYXAobWFwOiBHb29nbGVNYXApOiB2b2lkO1xuICBzZXRQb3NpdGlvbihsYXRMbmc6IExhdExuZyB8IExhdExuZ0xpdGVyYWwpOiB2b2lkO1xuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKTogdm9pZDtcbiAgc2V0TGFiZWwobGFiZWw6IHN0cmluZyB8IE1hcmtlckxhYmVsKTogdm9pZDtcbiAgc2V0RHJhZ2dhYmxlKGRyYWdnYWJsZTogYm9vbGVhbik6IHZvaWQ7XG4gIHNldEljb24oaWNvbjogc3RyaW5nIHwgTWFya2VySWNvbiB8IEdvb2dsZVN5bWJvbCk6IHZvaWQ7XG4gIHNldE9wYWNpdHkob3BhY2l0eTogbnVtYmVyKTogdm9pZDtcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZDtcbiAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogdm9pZDtcbiAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbjogYW55KTogdm9pZDtcbiAgZ2V0TGFiZWwoKTogTWFya2VyTGFiZWw7XG4gIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlck9wdGlvbnMge1xuICBwb3NpdGlvbjogTGF0TG5nIHwgTGF0TG5nTGl0ZXJhbDtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG1hcD86IEdvb2dsZU1hcDtcbiAgbGFiZWw/OiBzdHJpbmcgfCBNYXJrZXJMYWJlbDtcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgaWNvbj86IHN0cmluZyB8IE1hcmtlckljb24gfCBHb29nbGVTeW1ib2w7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIHZpc2libGU/OiBib29sZWFuO1xuICB6SW5kZXg/OiBudW1iZXI7XG4gIGNsaWNrYWJsZTogYm9vbGVhbjtcbiAgYW5pbWF0aW9uPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckxhYmVsIHtcbiAgY29sb3I6IHN0cmluZztcbiAgZm9udEZhbWlseTogc3RyaW5nO1xuICBmb250U2l6ZTogc3RyaW5nO1xuICBmb250V2VpZ2h0OiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJJY29uIHtcbiAgYW5jaG9yPzogUG9pbnQ7XG4gIGxhYmVsT3JpZ2luPzogUG9pbnQ7XG4gIG9yaWdpbj86IFBvaW50O1xuICBzY2FsZWRTaXplPzogU2l6ZTtcbiAgc2l6ZT86IFNpemU7XG4gIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZSBleHRlbmRzIE1WQ09iamVjdCB7XG4gIGdldEJvdW5kcygpOiBMYXRMbmdCb3VuZHM7XG4gIGdldENlbnRlcigpOiBMYXRMbmc7XG4gIGdldERyYWdnYWJsZSgpOiBib29sZWFuO1xuICBnZXRFZGl0YWJsZSgpOiBib29sZWFuO1xuICBnZXRNYXAoKTogR29vZ2xlTWFwO1xuICBnZXRSYWRpdXMoKTogbnVtYmVyO1xuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW47XG4gIHNldENlbnRlcihjZW50ZXI6IExhdExuZyB8IExhdExuZ0xpdGVyYWwpOiB2b2lkO1xuICBzZXREcmFnZ2FibGUoZHJhZ2dhYmxlOiBib29sZWFuKTogdm9pZDtcbiAgc2V0RWRpdGFibGUoZWRpdGFibGU6IGJvb2xlYW4pOiB2b2lkO1xuICBzZXRNYXAobWFwOiBHb29nbGVNYXApOiB2b2lkO1xuICBzZXRPcHRpb25zKG9wdGlvbnM6IENpcmNsZU9wdGlvbnMpOiB2b2lkO1xuICBzZXRSYWRpdXMocmFkaXVzOiBudW1iZXIpOiB2b2lkO1xuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZU9wdGlvbnMge1xuICBjZW50ZXI/OiBMYXRMbmcgfCBMYXRMbmdMaXRlcmFsO1xuICBjbGlja2FibGU/OiBib29sZWFuO1xuICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICBlZGl0YWJsZT86IGJvb2xlYW47XG4gIGZpbGxDb2xvcj86IHN0cmluZztcbiAgZmlsbE9wYWNpdHk/OiBudW1iZXI7XG4gIG1hcD86IEdvb2dsZU1hcDtcbiAgcmFkaXVzPzogbnVtYmVyO1xuICBzdHJva2VDb2xvcj86IHN0cmluZztcbiAgc3Ryb2tlT3BhY2l0eT86IG51bWJlcjtcbiAgc3Ryb2tlUG9zaXRpb24/OiAnQ0VOVEVSJyB8ICdJTlNJREUnIHwgJ09VVFNJREUnO1xuICBzdHJva2VXZWlnaHQ/OiBudW1iZXI7XG4gIHZpc2libGU/OiBib29sZWFuO1xuICB6SW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjdGFuZ2xlIGV4dGVuZHMgTVZDT2JqZWN0IHtcbiAgZ2V0Qm91bmRzKCk6IExhdExuZ0JvdW5kcztcbiAgZ2V0RHJhZ2dhYmxlKCk6IGJvb2xlYW47XG4gIGdldEVkaXRhYmxlKCk6IGJvb2xlYW47XG4gIGdldE1hcCgpOiBHb29nbGVNYXA7XG4gIGdldFZpc2libGUoKTogYm9vbGVhbjtcbiAgc2V0Qm91bmRzKGJvdW5kczogTGF0TG5nQm91bmRzIHwgTGF0TG5nQm91bmRzTGl0ZXJhbCk6IHZvaWQ7XG4gIHNldERyYWdnYWJsZShkcmFnZ2FibGU6IGJvb2xlYW4pOiB2b2lkO1xuICBzZXRFZGl0YWJsZShlZGl0YWJsZTogYm9vbGVhbik6IHZvaWQ7XG4gIHNldE1hcChtYXA6IEdvb2dsZU1hcCk6IHZvaWQ7XG4gIHNldE9wdGlvbnMob3B0aW9uczogUmVjdGFuZ2xlT3B0aW9ucyk6IHZvaWQ7XG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjdGFuZ2xlT3B0aW9ucyB7XG4gIGJvdW5kcz86IExhdExuZ0JvdW5kcyB8IExhdExuZ0JvdW5kc0xpdGVyYWw7XG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gIGVkaXRhYmxlPzogYm9vbGVhbjtcbiAgZmlsbENvbG9yPzogc3RyaW5nO1xuICBmaWxsT3BhY2l0eT86IG51bWJlcjtcbiAgbWFwPzogR29vZ2xlTWFwO1xuICBzdHJva2VDb2xvcj86IHN0cmluZztcbiAgc3Ryb2tlT3BhY2l0eT86IG51bWJlcjtcbiAgc3Ryb2tlUG9zaXRpb24/OiAnQ0VOVEVSJyB8ICdJTlNJREUnIHwgJ09VVFNJREUnO1xuICBzdHJva2VXZWlnaHQ/OiBudW1iZXI7XG4gIHZpc2libGU/OiBib29sZWFuO1xuICB6SW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF0TG5nQm91bmRzIHtcbiAgY29udGFpbnMobGF0TG5nOiBMYXRMbmcpOiBib29sZWFuO1xuICBlcXVhbHMob3RoZXI6IExhdExuZ0JvdW5kcyB8IExhdExuZ0JvdW5kc0xpdGVyYWwpOiBib29sZWFuO1xuICBleHRlbmQocG9pbnQ6IExhdExuZyB8IExhdExuZ0xpdGVyYWwpOiB2b2lkO1xuICBnZXRDZW50ZXIoKTogTGF0TG5nO1xuICBnZXROb3J0aEVhc3QoKTogTGF0TG5nO1xuICBnZXRTb3V0aFdlc3QoKTogTGF0TG5nO1xuICBpbnRlcnNlY3RzKG90aGVyOiBMYXRMbmdCb3VuZHMgfCBMYXRMbmdCb3VuZHNMaXRlcmFsKTogYm9vbGVhbjtcbiAgaXNFbXB0eSgpOiBib29sZWFuO1xuICB0b0pTT04oKTogTGF0TG5nQm91bmRzTGl0ZXJhbDtcbiAgdG9TcGFuKCk6IExhdExuZztcbiAgdG9TdHJpbmcoKTogc3RyaW5nO1xuICB0b1VybFZhbHVlKHByZWNpc2lvbj86IG51bWJlcik6IHN0cmluZztcbiAgdW5pb24ob3RoZXI6IExhdExuZ0JvdW5kcyB8IExhdExuZ0JvdW5kc0xpdGVyYWwpOiBMYXRMbmdCb3VuZHM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFkZGluZyB7XG4gIHRvcDogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG4gIHJpZ2h0OiBudW1iZXI7XG4gIGJvdHRvbTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhdExuZ0JvdW5kc0xpdGVyYWwge1xuICBlYXN0OiBudW1iZXI7XG4gIG5vcnRoOiBudW1iZXI7XG4gIHNvdXRoOiBudW1iZXI7XG4gIHdlc3Q6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXRMbmdMaXRlcmFsIHtcbiAgbGF0OiBudW1iZXI7XG4gIGxuZzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vdXNlRXZlbnQgeyBsYXRMbmc6IExhdExuZzsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcE9wdGlvbnMge1xuICBjZW50ZXI/OiBMYXRMbmcgfCBMYXRMbmdMaXRlcmFsO1xuICB6b29tPzogbnVtYmVyO1xuICBtaW5ab29tPzogbnVtYmVyO1xuICBtYXhab29tPzogbnVtYmVyO1xuICBjb250cm9sU2l6ZT86IG51bWJlcjtcbiAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbT86IGJvb2xlYW47XG4gIGRpc2FibGVEZWZhdWx0VUk/OiBib29sZWFuO1xuICBzY3JvbGx3aGVlbD86IGJvb2xlYW47XG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgZHJhZ2dhYmxlQ3Vyc29yPzogc3RyaW5nO1xuICBkcmFnZ2luZ0N1cnNvcj86IHN0cmluZztcbiAga2V5Ym9hcmRTaG9ydGN1dHM/OiBib29sZWFuO1xuICBzdHlsZXM/OiBNYXBUeXBlU3R5bGVbXTtcbiAgem9vbUNvbnRyb2w/OiBib29sZWFuO1xuICB6b29tQ29udHJvbE9wdGlvbnM/OiBab29tQ29udHJvbE9wdGlvbnM7XG4gIHN0cmVldFZpZXdDb250cm9sPzogYm9vbGVhbjtcbiAgc3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zPzogU3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zO1xuICBzY2FsZUNvbnRyb2w/OiBib29sZWFuO1xuICBzY2FsZUNvbnRyb2xPcHRpb25zPzogU2NhbGVDb250cm9sT3B0aW9ucztcbiAgbWFwVHlwZUNvbnRyb2w/OiBib29sZWFuO1xuICBtYXBUeXBlQ29udHJvbE9wdGlvbnM/OiBNYXBUeXBlQ29udHJvbE9wdGlvbnM7XG4gIHBhbkNvbnRyb2w/OiBib29sZWFuO1xuICBwYW5Db250cm9sT3B0aW9ucz86IFBhbkNvbnRyb2xPcHRpb25zO1xuICByb3RhdGVDb250cm9sPzogYm9vbGVhbjtcbiAgcm90YXRlQ29udHJvbE9wdGlvbnM/OiBSb3RhdGVDb250cm9sT3B0aW9ucztcbiAgZnVsbHNjcmVlbkNvbnRyb2w/OiBib29sZWFuO1xuICBmdWxsc2NyZWVuQ29udHJvbE9wdGlvbnM/OiBGdWxsc2NyZWVuQ29udHJvbE9wdGlvbnM7XG4gIG1hcFR5cGVJZD86IHN0cmluZyB8IE1hcFR5cGVJZDtcbiAgY2xpY2thYmxlSWNvbnM/OiBib29sZWFuO1xuICBnZXN0dXJlSGFuZGxpbmc/OiAnY29vcGVyYXRpdmUnIHwgJ2dyZWVkeScgfCAnbm9uZScgfCAnYXV0byc7XG4gIHRpbHQ/OiBudW1iZXI7XG4gIHJlc3RyaWN0aW9uPzogTWFwUmVzdHJpY3Rpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFwVHlwZVN0eWxlIHtcbiAgZWxlbWVudFR5cGU/OiAnYWxsJyB8ICdnZW9tZXRyeScgfCAnZ2VvbWV0cnkuZmlsbCcgfCAnZ2VvbWV0cnkuc3Ryb2tlJyB8ICdsYWJlbHMnIHwgJ2xhYmVscy5pY29uJyB8XG4gICdsYWJlbHMudGV4dCcgfCAnbGFiZWxzLnRleHQuZmlsbCcgfCAnbGFiZWxzLnRleHQuc3Ryb2tlJztcbiAgZmVhdHVyZVR5cGU/OiAnYWRtaW5pc3RyYXRpdmUnIHwgJ2FkbWluaXN0cmF0aXZlLmNvdW50cnknIHwgJ2FkbWluaXN0cmF0aXZlLmxhbmRfcGFyY2VsJyB8XG4gICdhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eScgfCAnYWRtaW5pc3RyYXRpdmUubmVpZ2hib3Job29kJyB8ICdhZG1pbmlzdHJhdGl2ZS5wcm92aW5jZScgfCAnYWxsJyB8XG4gICdsYW5kc2NhcGUnIHwgJ2xhbmRzY2FwZS5tYW5fbWFkZScgfCAnbGFuZHNjYXBlLm5hdHVyYWwnIHwgJ2xhbmRzY2FwZS5uYXR1cmFsLmxhbmRjb3ZlcicgfFxuICAnbGFuZHNjYXBlLm5hdHVyYWwudGVycmFpbicgfCAncG9pJyB8ICdwb2kuYXR0cmFjdGlvbicgfCAncG9pLmJ1c2luZXNzJyB8ICdwb2kuZ292ZXJubWVudCcgfFxuICAncG9pLm1lZGljYWwnIHwgJ3BvaS5wYXJrJyB8ICdwb2kucGxhY2Vfb2Zfd29yc2hpcCcgfCAncG9pLnNjaG9vbCcgfCAncG9pLnNwb3J0c19jb21wbGV4JyB8ICdyb2FkJyB8XG4gICdyb2FkLmFydGVyaWFsJyB8ICdyb2FkLmhpZ2h3YXknIHwgJ3JvYWQuaGlnaHdheS5jb250cm9sbGVkX2FjY2VzcycgfCAncm9hZC5sb2NhbCcgfCAndHJhbnNpdCcgfFxuICAndHJhbnNpdC5saW5lJyB8ICd0cmFuc2l0LnN0YXRpb24nIHwgJ3RyYW5zaXQuc3RhdGlvbi5haXJwb3J0JyB8ICd0cmFuc2l0LnN0YXRpb24uYnVzJyB8XG4gICd0cmFuc2l0LnN0YXRpb24ucmFpbCcgfCAnd2F0ZXInO1xuICBzdHlsZXJzOiBNYXBUeXBlU3R5bGVyW107XG59XG5cbi8qKlxuICogIElmIG1vcmUgdGhhbiBvbmUga2V5IGlzIHNwZWNpZmllZCBpbiBhIHNpbmdsZSBNYXBUeXBlU3R5bGVyLCBhbGwgYnV0IG9uZSB3aWxsIGJlIGlnbm9yZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFwVHlwZVN0eWxlciB7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBnYW1tYT86IG51bWJlcjtcbiAgaHVlPzogc3RyaW5nO1xuICBpbnZlcnRfbGlnaHRuZXNzPzogYm9vbGVhbjtcbiAgbGlnaHRuZXNzPzogbnVtYmVyO1xuICBzYXR1cmF0aW9uPzogbnVtYmVyO1xuICB2aXNpYmlsaXR5Pzogc3RyaW5nO1xuICB3ZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5mb1dpbmRvdyBleHRlbmRzIE1WQ09iamVjdCB7XG4gIGNsb3NlKCk6IHZvaWQ7XG4gIGdldENvbnRlbnQoKTogc3RyaW5nIHwgTm9kZTtcbiAgZ2V0UG9zaXRpb24oKTogTGF0TG5nO1xuICBnZXRaSW5kZXgoKTogbnVtYmVyO1xuICBvcGVuKG1hcD86IEdvb2dsZU1hcCwgYW5jaG9yPzogTVZDT2JqZWN0KTogdm9pZDtcbiAgc2V0Q29udGVudChjb250ZW50OiBzdHJpbmcgfCBOb2RlKTogdm9pZDtcbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBJbmZvV2luZG93T3B0aW9ucyk6IHZvaWQ7XG4gIHNldFBvc2l0aW9uKHBvc2l0aW9uOiBMYXRMbmcgfCBMYXRMbmdMaXRlcmFsKTogdm9pZDtcbiAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXBzRXZlbnRMaXN0ZW5lciB7IHJlbW92ZSgpOiB2b2lkOyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2l6ZSB7XG4gIGhlaWdodDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBlcXVhbHMob3RoZXI6IFNpemUpOiBib29sZWFuO1xuICB0b1N0cmluZygpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5mb1dpbmRvd09wdGlvbnMge1xuICBjb250ZW50Pzogc3RyaW5nIHwgTm9kZTtcbiAgZGlzYWJsZUF1dG9QYW4/OiBib29sZWFuO1xuICBtYXhXaWR0aD86IG51bWJlcjtcbiAgcGl4ZWxPZmZzZXQ/OiBTaXplO1xuICBwb3NpdGlvbj86IExhdExuZyB8IExhdExuZ0xpdGVyYWw7XG4gIHpJbmRleD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBlcXVhbHMob3RoZXI6IFBvaW50KTogYm9vbGVhbjtcbiAgdG9TdHJpbmcoKTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZVN5bWJvbCB7XG4gIGFuY2hvcj86IFBvaW50O1xuICBmaWxsQ29sb3I/OiBzdHJpbmc7XG4gIGZpbGxPcGFjaXR5PzogbnVtYmVyO1xuICBsYWJlbE9yaWdpbj86IFBvaW50O1xuICBwYXRoPzogc3RyaW5nIHwgU3ltYm9sUGF0aDtcbiAgcm90YXRpb24/OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xuICBzdHJva2VDb2xvcj86IHN0cmluZztcbiAgc3Ryb2tlT3BhY2l0eT86IG51bWJlcjtcbiAgc3Ryb2tlV2VpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljb25TZXF1ZW5jZSB7XG4gIGZpeGVkUm90YXRpb24/OiBib29sZWFuO1xuICBpY29uPzogR29vZ2xlU3ltYm9sO1xuICBvZmZzZXQ/OiBzdHJpbmc7XG4gIHJlcGVhdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gU3ltYm9sUGF0aCB7XG4gIEJBQ0tXQVJEX0NMT1NFRF9BUlJPVyA9IDMsXG4gIEJBQ0tXQVJEX09QRU5fQVJST1cgPSA0LFxuICBDSVJDTEUgPSAwLFxuICBGT1JXQVJEX0NMT1NFRF9BUlJPVyA9IDEsXG4gIEZPUldBUkRfT1BFTl9BUlJPVyA9IDIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seWxpbmVPcHRpb25zIHtcbiAgY2xpY2thYmxlPzogYm9vbGVhbjtcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgZWRpdGFibGU/OiBib29sZWFuO1xuICBnZW9kZXNpYz86IGJvb2xlYW47XG4gIGljb25zPzogQXJyYXk8SWNvblNlcXVlbmNlPjtcbiAgbWFwPzogR29vZ2xlTWFwO1xuICBwYXRoPzogQXJyYXk8TGF0TG5nPiB8IEFycmF5PExhdExuZyB8IExhdExuZ0xpdGVyYWw+O1xuICBzdHJva2VDb2xvcj86IHN0cmluZztcbiAgc3Ryb2tlT3BhY2l0eT86IG51bWJlcjtcbiAgc3Ryb2tlV2VpZ2h0PzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbiAgekluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbHlsaW5lIGV4dGVuZHMgTVZDT2JqZWN0IHtcbiAgZ2V0RHJhZ2dhYmxlKCk6IGJvb2xlYW47XG4gIGdldEVkaXRhYmxlKCk6IGJvb2xlYW47XG4gIGdldE1hcCgpOiBHb29nbGVNYXA7XG4gIGdldFBhdGgoKTogTVZDQXJyYXk8TGF0TG5nPjtcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuO1xuICBzZXREcmFnZ2FibGUoZHJhZ2dhYmxlOiBib29sZWFuKTogdm9pZDtcbiAgc2V0RWRpdGFibGUoZWRpdGFibGU6IGJvb2xlYW4pOiB2b2lkO1xuICBzZXRNYXAobWFwOiBHb29nbGVNYXApOiB2b2lkO1xuICBzZXRPcHRpb25zKG9wdGlvbnM6IFBvbHlsaW5lT3B0aW9ucyk6IHZvaWQ7XG4gIHNldFBhdGgocGF0aDogQXJyYXk8TGF0TG5nIHwgTGF0TG5nTGl0ZXJhbD4pOiB2b2lkO1xuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkO1xufVxuXG4vKipcbiAqIFBvbHlNb3VzZUV2ZW50IGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIHRyaWdnZXJzIG1vdXNlIGV2ZW50cyBvbiBhIHBvbHlsaW5lLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBvbHlNb3VzZUV2ZW50IGV4dGVuZHMgTW91c2VFdmVudCB7XG4gIGVkZ2U6IG51bWJlcjtcbiAgcGF0aDogbnVtYmVyO1xuICB2ZXJ0ZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uT3B0aW9ucyB7XG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gIGVkaXRhYmxlPzogYm9vbGVhbjtcbiAgZmlsbENvbG9yPzogc3RyaW5nO1xuICBmaWxsT3BhY2l0eT86IG51bWJlcjtcbiAgZ2VvZGVzaWM/OiBib29sZWFuO1xuICBpY29uPzogQXJyYXk8SWNvblNlcXVlbmNlPjtcbiAgbWFwPzogR29vZ2xlTWFwO1xuICBwYXRocz86IEFycmF5PExhdExuZyB8IExhdExuZ0xpdGVyYWw+IHwgQXJyYXk8QXJyYXk8TGF0TG5nIHwgTGF0TG5nTGl0ZXJhbD4+O1xuICBzdHJva2VDb2xvcj86IHN0cmluZztcbiAgc3Ryb2tlT3BhY2l0eT86IG51bWJlcjtcbiAgc3Ryb2tlV2VpZ2h0PzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbiAgekluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbHlnb24gZXh0ZW5kcyBNVkNPYmplY3Qge1xuICBnZXREcmFnZ2FibGUoKTogYm9vbGVhbjtcbiAgZ2V0RWRpdGFibGUoKTogYm9vbGVhbjtcbiAgZ2V0TWFwKCk6IEdvb2dsZU1hcDtcbiAgZ2V0UGF0aCgpOiBNVkNBcnJheTxMYXRMbmc+O1xuICBnZXRQYXRocygpOiBNVkNBcnJheTxNVkNBcnJheTxMYXRMbmc+PjtcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuO1xuICBzZXREcmFnZ2FibGUoZHJhZ2dhYmxlOiBib29sZWFuKTogdm9pZDtcbiAgc2V0RWRpdGFibGUoZWRpdGFibGU6IGJvb2xlYW4pOiB2b2lkO1xuICBzZXRNYXAobWFwOiBHb29nbGVNYXApOiB2b2lkO1xuICBzZXRQYXRoKHBhdGg6IEFycmF5PExhdExuZz4gfCBBcnJheTxMYXRMbmcgfCBMYXRMbmdMaXRlcmFsPik6IHZvaWQ7XG4gIHNldE9wdGlvbnMob3B0aW9uczogUG9seWdvbk9wdGlvbnMpOiB2b2lkO1xuICBzZXRQYXRocyhwYXRoczogQXJyYXk8QXJyYXk8TGF0TG5nIHwgTGF0TG5nTGl0ZXJhbD4+IHwgQXJyYXk8TGF0TG5nIHwgTGF0TG5nTGl0ZXJhbD4pOiB2b2lkO1xuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEttbExheWVyIGV4dGVuZHMgTVZDT2JqZWN0IHtcbiAgZ2V0RGVmYXVsdFZpZXdwb3J0KCk6IExhdExuZ0JvdW5kcztcbiAgZ2V0TWFwKCk6IEdvb2dsZU1hcDtcbiAgZ2V0TWV0YWRhdGEoKTogS21sTGF5ZXJNZXRhZGF0YTtcbiAgZ2V0U3RhdHVzKCk6IEttbExheWVyU3RhdHVzO1xuICBnZXRVcmwoKTogc3RyaW5nO1xuICBnZXRaSW5kZXgoKTogbnVtYmVyO1xuICBzZXRNYXAobWFwOiBHb29nbGVNYXApOiB2b2lkO1xuICBzZXRPcHRpb25zKG9wdGlvbnM6IEttbExheWVyT3B0aW9ucyk6IHZvaWQ7XG4gIHNldFVybCh1cmw6IHN0cmluZyk6IHZvaWQ7XG4gIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IHZvaWQ7XG59XG5cbi8qKlxuICogU2VlOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2U/aGw9ZGUjS21sTGF5ZXJTdGF0dXNcbiAqL1xuZXhwb3J0IHR5cGUgS21sTGF5ZXJTdGF0dXMgPSAnRE9DVU1FTlRfTk9UX0ZPVU5EJyB8XG4gICdET0NVTUVOVF9UT09fTEFSR0UnIHwgJ0ZFVENIX0VSUk9SJyB8ICdJTlZBTElEX0RPQ1VNRU5UJyB8ICdJTlZBTElEX1JFUVVFU1QnIHxcbiAgJ0xJTUlUU19FWENFRURFRCcgfCAnT0snIHwgJ1RJTUVEX09VVCcgfCAnVU5LTk9XTic7XG5cbi8qKlxuICogU2VlOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2U/aGw9ZGUjS21sTGF5ZXJNZXRhZGF0YVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEttbExheWVyTWV0YWRhdGEge1xuICBhdXRob3I6IEttbEF1dGhvcjtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaGFzU2NyZWVuT3ZlcmxheXM6IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgc25pcHBldDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEttbEF1dGhvciB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdXJpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS21sTGF5ZXJPcHRpb25zIHtcbiAgY2xpY2thYmxlPzogYm9vbGVhbjtcbiAgbWFwPzogR29vZ2xlTWFwO1xuICBwcmVzZXJ2ZVZpZXdwb3J0PzogYm9vbGVhbjtcbiAgc2NyZWVuT3ZlcmxheXM/OiBib29sZWFuO1xuICBzdXBwcmVzc0luZm9XaW5kb3dzPzogYm9vbGVhbjtcbiAgdXJsPzogc3RyaW5nO1xuICB6SW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS21sRmVhdHVyZURhdGEge1xuICBhdXRob3I6IEttbEF1dGhvcjtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgaW5mb1dpbmRvd0h0bWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBzbmlwcGV0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS21sTW91c2VFdmVudCBleHRlbmRzIE1vdXNlRXZlbnQge1xuICBmZWF0dXJlRGF0YTogS21sRmVhdHVyZURhdGE7XG4gIHBpeGVsT2Zmc2V0OiBTaXplO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zaXRMYXllciBleHRlbmRzIE1WQ09iamVjdCB7XG4gIGdldE1hcCgpOiBHb29nbGVNYXA7XG4gIHNldE1hcChtYXA6IEdvb2dsZU1hcCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNpdExheWVyT3B0aW9ucyB7XG4gIHZpc2libGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmljeWNsaW5nTGF5ZXIgZXh0ZW5kcyBNVkNPYmplY3Qge1xuICBnZXRNYXAoKTogR29vZ2xlTWFwO1xuICBzZXRNYXAobWFwOiBHb29nbGVNYXApOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJpY3ljbGluZ0xheWVyT3B0aW9ucyB7XG4gIHZpc2libGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YSBleHRlbmRzIE1WQ09iamVjdCB7XG4gIGZlYXR1cmVzOiBGZWF0dXJlW107XG4gIGFkZEdlb0pzb24oZ2VvSnNvbjogT2JqZWN0LCBvcHRpb25zPzogR2VvSnNvbk9wdGlvbnMpOiBGZWF0dXJlW107XG4gIHJlbW92ZShmZWF0dXJlOiBGZWF0dXJlKTogdm9pZDtcbiAgc2V0Q29udHJvbFBvc2l0aW9uKGNvbnRyb2xQb3NpdGlvbjogQ29udHJvbFBvc2l0aW9uKTogdm9pZDtcbiAgc2V0Q29udHJvbHMoY29udHJvbHM6IHN0cmluZ1tdKTogdm9pZDtcbiAgc2V0RHJhd2luZ01vZGUoZHJhd2luZ01vZGU6IHN0cmluZyk6IHZvaWQ7XG4gIHNldE1hcChtYXA6IEdvb2dsZU1hcCk6IHZvaWQ7XG4gIC8qIHRzbGludDpkaXNhYmxlICovXG4gIC8qXG4gICogVHNsaW50IGNvbmZpZ3VyYXRpb24gY2hlY2stcGFyYW1ldGVycyB3aWxsIHByb21wdCBlcnJvcnMgZm9yIHRoZXNlIGxpbmVzIG9mIGNvZGUuXG4gICogaHR0cHM6Ly9wYWxhbnRpci5naXRodWIuaW8vdHNsaW50L3J1bGVzL25vLXVudXNlZC12YXJpYWJsZS9cbiAgKi9cbiAgc2V0U3R5bGUoc3R5bGU6ICgpID0+IHZvaWQpOiB2b2lkO1xuICBmb3JFYWNoKGNhbGxiYWNrOiAoZmVhdHVyZTogRmVhdHVyZSkgPT4gdm9pZCk6IHZvaWQ7XG4gIGxvYWRHZW9Kc29uKHVybDogc3RyaW5nLCBvcHRpb25zPzogR2VvSnNvbk9wdGlvbnMsIGNhbGxiYWNrPzogKGZlYXRzOiBGZWF0dXJlW10pID0+IHZvaWQpOiB2b2lkO1xuICAvKiB0c2xpbnQ6ZW5hYmxlICovXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZSBleHRlbmRzIE1WQ09iamVjdCB7XG4gIGlkPzogbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBnZW9tZXRyeTogR2VvbWV0cnk7XG4gIHByb3BlcnRpZXM6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhT3B0aW9ucyB7XG4gIGNvbnRyb2xQb3NpdGlvbj86IENvbnRyb2xQb3NpdGlvbjtcbiAgY29udHJvbHM/OiBzdHJpbmdbXTtcbiAgZHJhd2luZ01vZGU/OiBzdHJpbmc7XG4gIGZlYXR1cmVGYWN0b3J5PzogKGdlb21ldHJ5OiBHZW9tZXRyeSkgPT4gRmVhdHVyZTtcbiAgbWFwPzogR29vZ2xlTWFwO1xuICBzdHlsZT86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YU1vdXNlRXZlbnQgZXh0ZW5kcyBNb3VzZUV2ZW50IHtcbiAgZmVhdHVyZTogRmVhdHVyZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9Kc29uT3B0aW9ucyB7XG4gIGlkUHJvcGVydHlOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvbWV0cnkge1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogSWRlbnRpZmllcnMgdXNlZCB0byBzcGVjaWZ5IHRoZSBwbGFjZW1lbnQgb2YgY29udHJvbHMgb24gdGhlIG1hcC4gQ29udHJvbHMgYXJlXG4gKiBwb3NpdGlvbmVkIHJlbGF0aXZlIHRvIG90aGVyIGNvbnRyb2xzIGluIHRoZSBzYW1lIGxheW91dCBwb3NpdGlvbi4gQ29udHJvbHMgdGhhdFxuICogYXJlIGFkZGVkIGZpcnN0IGFyZSBwb3NpdGlvbmVkIGNsb3NlciB0byB0aGUgZWRnZSBvZiB0aGUgbWFwLlxuICovXG5leHBvcnQgZW51bSBDb250cm9sUG9zaXRpb24ge1xuICBSSUdIVF9CT1RUT00sXG4gIFRPUF9MRUZULFxuICBUT1BfQ0VOVEVSLFxuICBUT1BfUklHSFQsXG4gIExFRlRfQ0VOVEVSLFxuICBMRUZUX1RPUCxcbiAgTEVGVF9CT1RUT00sXG4gIFJJR0hUX1RPUCxcbiAgUklHSFRfQ0VOVEVSLFxuICBCT1RUT01fUklHSFQsXG4gIEJPVFRPTV9MRUZULFxuICBCT1RUT01fQ0VOVEVSLFxufVxuXG5leHBvcnQgZW51bSBNYXBUeXBlSWQge1xuICAvKiogVGhpcyBtYXAgdHlwZSBkaXNwbGF5cyBhIHRyYW5zcGFyZW50IGxheWVyIG9mIG1ham9yIHN0cmVldHMgb24gc2F0ZWxsaXRlIGltYWdlcy4gKi9cbiAgSFlCUklELFxuICAvKiogVGhpcyBtYXAgdHlwZSBkaXNwbGF5cyBhIG5vcm1hbCBzdHJlZXQgbWFwLiAqL1xuICBST0FETUFQLFxuICAvKiogVGhpcyBtYXAgdHlwZSBkaXNwbGF5cyBzYXRlbGxpdGUgaW1hZ2VzLiAqL1xuICBTQVRFTExJVEUsXG4gIC8qKiBUaGlzIG1hcCB0eXBlIGRpc3BsYXlzIG1hcHMgd2l0aCBwaHlzaWNhbCBmZWF0dXJlcyBzdWNoIGFzIHRlcnJhaW4gYW5kIHZlZ2V0YXRpb24uICovXG4gIFRFUlJBSU4sXG59XG5cbi8qKioqKiBDb250cm9scyAqKioqKi9cbi8qKiBPcHRpb25zIGZvciB0aGUgcmVuZGVyaW5nIG9mIHRoZSBtYXAgdHlwZSBjb250cm9sLiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYXBUeXBlQ29udHJvbE9wdGlvbnMge1xuICAvKiogSURzIG9mIG1hcCB0eXBlcyB0byBzaG93IGluIHRoZSBjb250cm9sLiAqL1xuICBtYXBUeXBlSWRzPzogKE1hcFR5cGVJZCB8IHN0cmluZylbXTtcbiAgLyoqXG4gICAqIFBvc2l0aW9uIGlkLiBVc2VkIHRvIHNwZWNpZnkgdGhlIHBvc2l0aW9uIG9mIHRoZSBjb250cm9sIG9uIHRoZSBtYXAuXG4gICAqIFRoZSBkZWZhdWx0IHBvc2l0aW9uIGlzIFRPUF9SSUdIVC5cbiAgICovXG4gIHBvc2l0aW9uPzogQ29udHJvbFBvc2l0aW9uO1xuICAvKiogU3R5bGUgaWQuIFVzZWQgdG8gc2VsZWN0IHdoYXQgc3R5bGUgb2YgbWFwIHR5cGUgY29udHJvbCB0byBkaXNwbGF5LiAqL1xuICBzdHlsZT86IE1hcFR5cGVDb250cm9sU3R5bGU7XG59XG5cbmV4cG9ydCBlbnVtIE1hcFR5cGVDb250cm9sU3R5bGUge1xuICBERUZBVUxUID0gMCxcbiAgRFJPUERPV05fTUVOVSA9IDIsXG4gIEhPUklaT05UQUxfQkFSID0gMSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVydmlld01hcENvbnRyb2xPcHRpb25zIHtcbiAgb3BlbmVkPzogYm9vbGVhbjtcbn1cblxuLyoqIE9wdGlvbnMgZm9yIHRoZSByZW5kZXJpbmcgb2YgdGhlIHBhbiBjb250cm9sLiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYW5Db250cm9sT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBQb3NpdGlvbiBpZC4gVXNlZCB0byBzcGVjaWZ5IHRoZSBwb3NpdGlvbiBvZiB0aGUgY29udHJvbCBvbiB0aGUgbWFwLlxuICAgKiBUaGUgZGVmYXVsdCBwb3NpdGlvbiBpcyBUT1BfTEVGVC5cbiAgICovXG4gIHBvc2l0aW9uPzogQ29udHJvbFBvc2l0aW9uO1xufVxuXG4vKiogT3B0aW9ucyBmb3IgdGhlIHJlbmRlcmluZyBvZiB0aGUgcm90YXRlIGNvbnRyb2wuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvdGF0ZUNvbnRyb2xPcHRpb25zIHtcbiAgLyoqXG4gICAqIFBvc2l0aW9uIGlkLiBVc2VkIHRvIHNwZWNpZnkgdGhlIHBvc2l0aW9uIG9mIHRoZSBjb250cm9sIG9uIHRoZSBtYXAuXG4gICAqIFRoZSBkZWZhdWx0IHBvc2l0aW9uIGlzIFRPUF9MRUZULlxuICAgKi9cbiAgcG9zaXRpb24/OiBDb250cm9sUG9zaXRpb247XG59XG5cbi8qKiBPcHRpb25zIGZvciB0aGUgcmVuZGVyaW5nIG9mIHRoZSBzY2FsZSBjb250cm9sLiAqL1xuZXhwb3J0IGludGVyZmFjZSBTY2FsZUNvbnRyb2xPcHRpb25zIHtcbiAgLyoqIFN0eWxlIGlkLiBVc2VkIHRvIHNlbGVjdCB3aGF0IHN0eWxlIG9mIHNjYWxlIGNvbnRyb2wgdG8gZGlzcGxheS4gKi9cbiAgc3R5bGU/OiBTY2FsZUNvbnRyb2xTdHlsZTtcbn1cblxuZXhwb3J0IGVudW0gU2NhbGVDb250cm9sU3R5bGUge1xuICBERUZBVUxULFxufVxuXG4vKiogT3B0aW9ucyBmb3IgdGhlIHJlbmRlcmluZyBvZiB0aGUgU3RyZWV0IFZpZXcgcGVnbWFuIGNvbnRyb2wgb24gdGhlIG1hcC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zIHtcbiAgLyoqXG4gICAqIFBvc2l0aW9uIGlkLiBVc2VkIHRvIHNwZWNpZnkgdGhlIHBvc2l0aW9uIG9mIHRoZSBjb250cm9sIG9uIHRoZSBtYXAuIFRoZVxuICAgKiBkZWZhdWx0IHBvc2l0aW9uIGlzIGVtYmVkZGVkIHdpdGhpbiB0aGUgbmF2aWdhdGlvbiAoem9vbSBhbmQgcGFuKSBjb250cm9scy5cbiAgICogSWYgdGhpcyBwb3NpdGlvbiBpcyBlbXB0eSBvciB0aGUgc2FtZSBhcyB0aGF0IHNwZWNpZmllZCBpbiB0aGVcbiAgICogem9vbUNvbnRyb2xPcHRpb25zIG9yIHBhbkNvbnRyb2xPcHRpb25zLCB0aGUgU3RyZWV0IFZpZXcgY29udHJvbCB3aWxsIGJlXG4gICAqIGRpc3BsYXllZCBhcyBwYXJ0IG9mIHRoZSBuYXZpZ2F0aW9uIGNvbnRyb2xzLiBPdGhlcndpc2UsIGl0IHdpbGwgYmUgZGlzcGxheWVkXG4gICAqIHNlcGFyYXRlbHkuXG4gICAqL1xuICBwb3NpdGlvbj86IENvbnRyb2xQb3NpdGlvbjtcbn1cblxuLyoqIE9wdGlvbnMgZm9yIHRoZSByZW5kZXJpbmcgb2YgdGhlIHpvb20gY29udHJvbC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgWm9vbUNvbnRyb2xPcHRpb25zIHtcbiAgLyoqXG4gICAqIFBvc2l0aW9uIGlkLiBVc2VkIHRvIHNwZWNpZnkgdGhlIHBvc2l0aW9uIG9mIHRoZSBjb250cm9sIG9uIHRoZSBtYXAuXG4gICAqIFRoZSBkZWZhdWx0IHBvc2l0aW9uIGlzIFRPUF9MRUZULlxuICAgKi9cbiAgcG9zaXRpb24/OiBDb250cm9sUG9zaXRpb247XG4gIHN0eWxlPzogWm9vbUNvbnRyb2xTdHlsZTtcbn1cblxuZXhwb3J0IGVudW0gWm9vbUNvbnRyb2xTdHlsZSB7XG4gIERFRkFVTFQsXG4gIExBUkdFLFxuICBTTUFMTCxcbn1cblxuLyoqIE9wdGlvbnMgZm9yIHRoZSByZW5kZXJpbmcgb2YgdGhlIGZ1bGxzY3JlZW4gY29udHJvbC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zIHtcbiAgLyoqXG4gICAqIFBvc2l0aW9uIGlkLiBVc2VkIHRvIHNwZWNpZnkgdGhlIHBvc2l0aW9uIG9mIHRoZSBjb250cm9sIG9uIHRoZSBtYXAuXG4gICAqIFRoZSBkZWZhdWx0IHBvc2l0aW9uIGlzIFJJR0hUX1RPUC5cbiAgICovXG4gIHBvc2l0aW9uPzogQ29udHJvbFBvc2l0aW9uO1xufVxuXG4vKiogT3B0aW9ucyBmb3IgdGhlIHJlc3RyaWN0aW5nIHRoZSBib3VuZHMgb2YgdGhlIG1hcC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFwUmVzdHJpY3Rpb24ge1xuICBsYXRMbmdCb3VuZHM6IExhdExuZ0JvdW5kcyB8IExhdExuZ0JvdW5kc0xpdGVyYWw7XG4gIHN0cmljdEJvdW5kcz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvY29kZXIge1xuICBnZW9jb2RlOiAocmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0LCBnb29nbGVDYWxsYmFjazogKHJlc3VsdHM6IEdlb2NvZGVyUmVzdWx0W10sIHN0YXR1czogR2VvY29kZXJTdGF0dXMpID0+IHZvaWQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvY29kZXJBZGRyZXNzQ29tcG9uZW50IHtcbiAgbG9uZ19uYW1lOiBzdHJpbmc7XG4gIHNob3J0X25hbWU6IHN0cmluZztcbiAgdHlwZXM6IHN0cmluZ1tdO1xufVxuXG4vKiogT3B0aW9ucyBmb3IgcmVzdHJpY3RpbmcgdGhlIGdlb2NvZGVyIHJlc3VsdHMgKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2VvY29kZXJDb21wb25lbnRSZXN0cmljdGlvbnMge1xuICBhZG1pbmlzdHJhdGl2ZUFyZWE/OiBzdHJpbmc7XG4gIGNvdW50cnk/OiBzdHJpbmc7XG4gIGxvY2FsaXR5Pzogc3RyaW5nO1xuICBwb3N0YWxDb2RlPzogc3RyaW5nO1xuICByb3V0ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9jb2Rlckdlb21ldHJ5IHtcbiAgYm91bmRzOiBMYXRMbmdCb3VuZHM7XG4gIGxvY2F0aW9uOiBMYXRMbmc7XG4gIGxvY2F0aW9uX3R5cGU6IEdlb2NvZGVyTG9jYXRpb25UeXBlO1xuICB2aWV3cG9ydDogTGF0TG5nQm91bmRzO1xufVxuXG5leHBvcnQgZW51bSBHZW9jb2RlckxvY2F0aW9uVHlwZSB7XG4gIEFQUFJPWElNQVRFID0gJ0FQUFJPWElNQVRFJyxcbiAgR0VPTUVUUklDX0NFTlRFUiA9ICdHRU9NRVRSSUNfQ0VOVEVSJyxcbiAgUkFOR0VfSU5URVJQT0xBVEVEID0gJ1JBTkdFX0lOVEVSUE9MQVRFRCcsXG4gIFJPT0ZUT1AgPSAnUk9PRlRPUCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvY29kZXJSZXF1ZXN0IHtcbiAgYWRkcmVzcz86IHN0cmluZztcbiAgYm91bmRzPzogTGF0TG5nQm91bmRzIHwgTGF0TG5nQm91bmRzTGl0ZXJhbDtcbiAgY29tcG9uZW50UmVzdHJpY3Rpb25zPzogR2VvY29kZXJDb21wb25lbnRSZXN0cmljdGlvbnM7XG4gIGxvY2F0aW9uPzogTGF0TG5nIHwgTGF0TG5nTGl0ZXJhbDtcbiAgcGxhY2VJZD86IHN0cmluZztcbiAgcmVnaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb2NvZGVyUmVzdWx0IHtcbiAgYWRkcmVzc19jb21wb25lbnRzOiBHZW9jb2RlckFkZHJlc3NDb21wb25lbnRbXTtcbiAgZm9ybWF0dGVkX2FkZHJlc3M6IHN0cmluZztcbiAgZ2VvbWV0cnk6IEdlb2NvZGVyR2VvbWV0cnk7XG4gIHBhcnRpYWxfbWF0Y2g6IGJvb2xlYW47XG4gIHBsYWNlX2lkOiBzdHJpbmc7XG4gIHBvc3Rjb2RlX2xvY2FsaXRpZXM6IHN0cmluZ1tdO1xuICB0eXBlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBlbnVtIEdlb2NvZGVyU3RhdHVzIHtcbiAgRVJST1IgPSAnRVJST1InLFxuICBJTlZBTElEX1JFUVVFU1QgPSAnSU5WQUxJRF9SRVFVRVNUJyxcbiAgT0sgPSAnT0snLFxuICBPVkVSX1FVRVJZX0xJTUlUID0gJ09WRVJfUVVFUllfTElNSVQnLFxuICBSRVFVRVNUX0RFTklFRCA9ICdSRVFVRVNUX0RFTklFRCcsXG4gIFVOS05PV05fRVJST1IgPSAnVU5LTk9XTl9FUlJPUicsXG4gIFpFUk9fUkVTVUxUUyA9ICdaRVJPX1JFU1VMVFMnLFxufVxuIl19