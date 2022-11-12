/**
 * This question is asked by Amazon.
 * Given a string representing the sequence of moves a robot vacuum makes,
 * return whether or not it will return to its original position.
 * The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.
 *
 * @param {*} route
 * @returns
 */
const vacuumCleanerRoute = (route) => {
  const start = [0, 0];

  for (let path of route) {
    if (path === "U") {
      start[1]++;
    } else if (path === "D") {
      start[1]--;
    } else if (path === "R") {
      start[0]++;
    } else {
      start[0]--;
    }
  }

  return start.every((v) => v === 0);
};

console.log(vacuumCleanerRoute("LR"), "should be", true);
console.log(vacuumCleanerRoute("URURD"), "should be", false);
console.log(vacuumCleanerRoute("RUULLDRD"), "should be", true);
