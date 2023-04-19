// fatorial de 5 : !5 === 5 * 4 * 3 * 2 * 1

function fatorial(num) {
    console.log(num)
    if (num === 0){
        return 1
    } else if (num === 1){
        return 1
    } else{
        console.log(num + " * ! " + (num -1)) 
        return num * fatorial(num-1)
    }
}

console.log(fatorial(5))