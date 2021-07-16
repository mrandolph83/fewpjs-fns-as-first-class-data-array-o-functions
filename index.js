function wakeDog(dogName, dogBreed) {
    let dogWake = `Wake ${dogName} the ${dogBreed}`;
    return dogWake;
    }

function leashDog(dogName, dogBreed) {
    let dogLeash = `Leash ${dogName} the ${dogBreed}`;
    return dogLeash;
}

function walkToPark(dogName, dogBreed) {
    let dogWalk = `Walk to the park with ${dogName} the ${dogBreed}`
    return dogWalk
}

function throwFrisbee(dogName, dogBreed) {
    let dogFrisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`
    return dogFrisbee
}

function walkHome(dogName, dogBreed) { 
    let dogHome = `Walk home with ${dogName} the ${dogBreed}`
    return dogHome
}

function unleashDog(dogName, dogBreed) { 
    let dogUnleash = `Unleash ${dogName} the ${dogBreed}`
    return dogUnleash
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    const messages = []
    for (let i = 0; i < routine.length; i++) {
        const activity = routine[i](dogName, dogBreed)
        messages.push(activity)
    }
    return messages;
}