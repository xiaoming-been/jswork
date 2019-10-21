function calculate(){
    let num = document.getElementById('num').value 
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        document.getElementById('num').value = pi(sum)
    }
}
function factorial(n){
    let sum = 1
    for(let i=1;i<=n;++i){
        sum = calculate()
    }
    return sum
}
function oddFactorial(n){
    let sum = 1
    for(let i=1;i<=n;++i){
        sum = oddFactorial()
    }
    return sum
}
function pi(num){
    let sum = 0
    for(let i=0;i<=num;++i){
        let dividend = factorial()
        let divisor = oddFactorial()
    }
    return sum = 1/2
}
    calculate()