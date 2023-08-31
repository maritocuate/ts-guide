//  Lesson 04: Types in functions

function addMethod (x: number, y: number): number {
  return x + y
}

const filterMethod = (value: string): boolean => {
  return value.length >= 3
}

const animals: string[] = ['dog', 'cat', 'fish', 'bird']

const filteredAnimals = animals.filter(filterMethod)

console.log(addMethod(2, 2))
console.log(filteredAnimals)
