function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}


function reverseString(str){
    return str.split('').reverse().join('')
}


const calculator={
    add(a,b){
        return a+b
    },
    subtract(a,b){
        return a-b
    },
    multiply(a,b){
        return a*b
    },
    divide(a,b){
        return a/b
    }
}

function caesarCipher(str,key){
   return str.split('').map((char)=>{
    if(/[a-z]/.test(char)){
        return String.fromCharCode(((char.charCodeAt(0) - 97 + key) % 26  + 26 ) %26 + 97)
    }
    else if(/[A-Z]/.test(char)){
        return String.fromCharCode(((char.charCodeAt(0) - 65 + key) % 26  + 26 ) %26 + 65)
    }
    else{
        return char
    }
   }).join('')
}



function analyzeArray(arr){

    let average= arr.length ? arr.reduce((sum , num)=> sum + num) / arr.length : NaN
    let min= arr.length ? Math.min(...arr) : undefined
    let max= arr.length ? Math.max(...arr) : undefined

    const analysis={
        'average' : average,
        'min' : min,
        'max' : max,
        'length' : arr.length
    }

    return analysis
}

console.log(analyzeArray([]))

module.exports={ capitalize , reverseString , calculator , caesarCipher , analyzeArray  }