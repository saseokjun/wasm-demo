export function factorial(value: f64): f64 {
  if(value == 0 || value == 1){
    return 1
  }
  return value * factorial(value - 1)
}

// export function scramble(input: string) : string {
//   return input
// }