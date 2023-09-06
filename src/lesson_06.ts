//  Lesson 06: Never and void

function getError (message: string): never {
  throw new Error(message)
}

function getGreet (message: string): void {
  console.log(message)
}

console.log(getError('Something went wrong'))
getGreet('Hello world')
