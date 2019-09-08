export function getLabel(arr, value) {
  console.log(arr, value)
  return arr.find(o => o.value === value.toString()).label
}
