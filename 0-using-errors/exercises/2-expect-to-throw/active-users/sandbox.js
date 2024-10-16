import { listActiveUsers } from "./list-active-users.js";
import { findActiveUsers } from "./find-active-users.js";

const people = [
  { userName: "a", name: "", active: true },
  { userName: "b", name: "", active: false },
  { userName: "c", name: "", active: false },
  { userName: "e", name: "", active: true },
]

const found = findActiveUsers(people);
console.log("found:", found);

// debugger;
const listed = listActiveUsers(people);
console.log("listed:", listed);
