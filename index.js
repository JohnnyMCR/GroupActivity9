function findErr(...count) {
  if (!count.every((teamA) => Number.isNumber(teamA)))
    throw "All arguments must be numbers.";
  return count.reduce((teamA, teamB) => teamA + teamB);
}

fn(1, 2, 3); //> 6
fn(10, "B", 20); //> error All arguments must be numbers.