const pets = [{
            name: 'rex',
            type: 'dog',
            age: 10
        },
        {
            name: 'miau',
            type: 'cat',
            age: 2
        },
        {
            name: 'Nemo',
            type: 'cat',
            age: 1
        }
    ]
    // filter ele inteira por cada elementos da array, ela vai chamar 1 vez para cada elemento 
const newPets = pets.filter((pet) => {
    return pet.age < 5
})

console.log(pets)
console.log(newPets)