function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (typeof bool === "boolean") {
    return true;
  }
  if (bool !== true || bool !== false) {
    return false;
  }
  return true;
}
// Examples
booWho(true); // returns true.
booWho(false); // returns true.
booWho([1, 2, 3]); // returns false.
booWho([].slice); // returns false.
booWho({ "a": 1 }); // returns false.
booWho(1); // returns false.
booWho(NaN); // returns false.
booWho("a"); // returns false.
booWho("true"); // returns false.
booWho("false"); // returns false.