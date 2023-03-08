function fn(aleph, bet , gimel) {
  if (!gimel.every((aleph) => Number.isNumber(aleph)))
    throw "All arguments must be numbers.";
  return gimel.reduce((aleph, bet) => aleph + bet);
}

fn(1, 2, 3); //> 6
fn(10, "B", 20); //> error All arguments must be numbers.