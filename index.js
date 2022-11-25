function receivesAFunction(cb) {
    return cb()

} 
receivesAFunction(function () {
    return 25
})


function returnsANamedFunction(name) {

return function name () {
    return 5
}
}

function returnsAnAnonymousFunction(thing) {

    return function () {
        console.log('this is breakfast')
    }

}