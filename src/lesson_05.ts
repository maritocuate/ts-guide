//  Lesson 05: Any and unknown

let anyValue: any = 'something'
anyValue = 10

// eslint-disable-next-line prefer-const
let stringValue: string = anyValue

const unknownValue: unknown = false
// stringValue = unknownValue

console.log(anyValue)
console.log(stringValue)
console.log(unknownValue)
