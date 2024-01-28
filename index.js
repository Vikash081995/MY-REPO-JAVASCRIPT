const names = ["abc", "bcd", "def", "fgh"];

console.log(names.map((a) => (a.includes(a) ? "found" : "")));
