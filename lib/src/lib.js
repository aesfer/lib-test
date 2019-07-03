export function square(x) {
  console.log('export function square');
  return x * x;
}

export function cube(x) {
  console.log('export function cube');
  return x * x * x;
}

function unusedUnexported() {
  console.log('unused unexported function');
}
