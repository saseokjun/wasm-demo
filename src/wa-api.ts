import { instantiateStreaming } from 'assemblyscript/lib/loader'

interface APIs {
  factorial(input: number): number,
  // scramble(input: number): number
}

export default instantiateStreaming<APIs>(
  fetch('./as-api.wasm')
)
// .then(rawModule => Object.assign({}, rawModule, {
//   scramble: (input: string) => {
//       // Create the string in memory and get the pointer
//       const pInput = rawModule.__retain(rawModule.__allocString(input))

//       // Call the WebAssembly function
//       const pOutput = rawModule.scramble(pInput)

//       // Retrieve the result string
//       const result = rawModule.__getString(pOutput)

//       // Free up memory
//       rawModule.__release(pInput)
//       rawModule.__release(pOutput)
//       return result
//   }
// }))