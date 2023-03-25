import { Observable } from "rxjs";

//Observable
const obs = new Observable((subject) => {
  //Push messages to the observer
  subject.next(1);
  subject.next(2);
  subject.complete();
});
//Define an observer
function observer(message) {
  console.log(message);
}

//Attach the observer to the Observable
obs.subscribe({
  next: observer,
  error: (err) => console.error(err),
  complete: () => console.log("Observable completed"),
});
