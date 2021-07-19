// 꼭 이름 사용
// named export
// 많이 쓰는 방식

exports.PI = 3.14;
exports.min = function () {
  let min = Number.MAX_SAFE_INTEGER;
  Array.from(arguments).forEach((e) => (min = e < min ? e : min));
  return min;
};
exports.max = function () {
  let max = Number.MIN_SAFE_INTEGER;
  Array.from(arguments).forEach((e) => (max = e > max ? e : max));
  return max;
};