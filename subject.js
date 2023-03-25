import { subject } from "./subj.js";

function observerOne(message) {
  console.log(`Observer1: ${message}`);
}
function observerTwo(message) {
  console.log(`Observer2: ${message}`);
}

subject.subscribe(observerOne);

console.log("Not");

subject.subscribe(observerTwo);

subject.next("Sparta");
