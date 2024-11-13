/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
export class NoOpMapsAPILoader {
    load() {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9vcC1tYXBzLWFwaS1sb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL25vb3AtbWFwcy1hcGktbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLElBQUk7UUFDRixJQUFJLENBQUUsTUFBYyxDQUFDLE1BQU0sSUFBSSxDQUFFLE1BQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUQsTUFBTSxJQUFJLEtBQUssQ0FDWCxnRkFBZ0YsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBzQVBJTG9hZGVyIH0gZnJvbSAnLi9tYXBzLWFwaS1sb2FkZXInO1xuXG4vKipcbiAqIFdoZW4gdXNpbmcgdGhlIE5vT3BNYXBzQVBJTG9hZGVyLCB0aGUgR29vZ2xlIE1hcHMgQVBJIG11c3QgYmUgYWRkZWQgdG8gdGhlIHBhZ2UgdmlhIGEgYDxzY3JpcHQ+YFxuICogVGFnLlxuICogSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgR29vZ2xlIE1hcHMgQVBJIHNjcmlwdCBnZXRzIGxvYWRlZCBmaXJzdCBvbiB0aGUgcGFnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vT3BNYXBzQVBJTG9hZGVyIGltcGxlbWVudHMgTWFwc0FQSUxvYWRlciB7XG4gIGxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCEod2luZG93IGFzIGFueSkuZ29vZ2xlIHx8ICEod2luZG93IGFzIGFueSkuZ29vZ2xlLm1hcHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnR29vZ2xlIE1hcHMgQVBJIG5vdCBsb2FkZWQgb24gcGFnZS4gTWFrZSBzdXJlIHdpbmRvdy5nb29nbGUubWFwcyBpcyBhdmFpbGFibGUhJyk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufVxuIl19