/**
 * This question is asked by Amazon.
 * A ship is about to set sail and you are responsible for its safety precautions.
 * More specifically, you are responsible for determining how many life rafts to carry onboard.
 * You are given a list of all the passengers’ weights and are informed that a single life raft has a maximum capacity of limit and can hold at most two people.
 * Return the minimum number of life rafts you must take onboard to ensure the safety of all your passengers.
 * Note: You may assume that a the maximum weight of any individual is at most limit.
 * @param {*} passengerWeights
 * @param {*} limit
 * @returns
 */
function minLifeRafts(passengerWeights, limit) {
  // Sort the list of passenger weights in ascending order
  passengerWeights.sort((a, b) => a - b);

  // Initialize a counter for the number of life rafts
  let numLifeRafts = 0;

  // Iterate through the list of passengers
  for (let i = 0; i < passengerWeights.length; ) {
    // if we are at the last passenger increment number of life rafts
    if (i + 1 >= passengerWeights.length) {
      numLifeRafts++;
      break;
    }
    // Increment the counter for the number of life rafts;
    numLifeRafts++;

    // If the current passenger can be paired with the next passenger,
    // skip next passenger
    if (passengerWeights[i] + passengerWeights[i + 1] <= limit) {
      i += 2;
    } else {
      i += 1;
    }
  }

  // Return the number of life rafts
  return numLifeRafts;
}

console.log(minLifeRafts([1, 3, 5, 2], 5));
console.log(minLifeRafts([1, 2], 3));
console.log(minLifeRafts([4, 2, 3, 3], 5));
