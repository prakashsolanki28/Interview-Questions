var minTimeToVisitAllPoints = function (points) {
  var time = 0;
  for (let i = 0; i < points.length; i++) {
    if (i == points.length - 1) break;
    let x_diff = Math.abs(points[i][0] - points[i + 1][0]);
    let y_diff = Math.abs(points[i][1] - points[i + 1][1]);
    time += x_diff > y_diff ? x_diff : y_diff;
  }
  return time;
};

let points = [
  [1, 1],
  [3, 4],
  [-1, 0],
];

console.log(minTimeToVisitAllPoints(points));