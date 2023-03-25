const {} = rxjs;
/**
 * Create an observable, that listens to click events and outputs the mouse coordinates.
 */
fromEvent(document, "click").pipe(tap((value) => console.log("X: "+ value.x+" Y: "+ value.y))).subscribe();