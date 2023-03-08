function fn(...capitals) {
  if (!capitals.every((array) => Number.isNumber(array)))
    throw "All arguments must be numbers.";
  return capitals.reduce((a, b) => a + b);
}

fn(1, 2, 3); //> 6
fn(10, "B", 20); //> error All arguments must be numbers.
