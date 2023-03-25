import { ReplaySubject } from "rxjs";
export const subject = new ReplaySubject();
subject.next("This");
subject.next("Is");
