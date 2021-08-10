function saturdayFun(fun='roller-skate') {
    return `This Saturday, I want to ${fun}!`
    }

const mondayWork = function(monday='go to the office') {
    return `This Monday, I will ${monday}.`

}

const wrapAdjective = function(flair='*'){
    return function(adjective='special') {
        return `You are ${flair}${adjective}${flair}!`
    }
} 