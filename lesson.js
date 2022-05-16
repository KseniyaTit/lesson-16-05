let a =[1,2,3]
a.reverse()
a.join(' ')


let st = 'hello'
console.log(st.split())
console.log(st.join(','))


function func(str){
   let a = str.split('')
   let b = a.reverse()
   return b.join()


 
}

function fun(str){
    let newStr ='';
    for (let i = str.length -1; i>=0; i--){
         newStr += str[i]
    }
    return newStr
}
//////////////

function fun(str){
    let newStr = str.split()
    const arr = [];
    for (let i = newStr.length -1; i>=0; i--){
         arr.push(newStr[i])
    }
    return arr.join('')
}

///////////
const arr=[1,2,3]
console.log(arr.some((i)=> i%2===0))
console.log(arr.every((i)=> i%2===0))




for(let key of arr){
console.log(arr)
}
arr.forEach(i => console.log(i))

let a = Array.from('easa')   ///////let a = Array.from(['easa'])
console.log(a)


let b = [1,2,3]
console.log(Array.isArray(b))

////////
let obj ={
    '0': 10,
     0:20,
}
console.log(obj['0'] + obj[0])//40



const ar = [1,1,2,3]
console.log(new Set(ar))//убирает повторяющиеся начения 
console.log(Array.from(new Set(ar)))//
console.log([...ar])

////

let arra = [1,1,3,3,5,6,6] ///////////NB
function func(arra){
    let b = new Set(arra)
    let c = Array.from(b)
    let newAr = arra.map((num)=> num*2)
    
    return (new Set(newAr))   ///return [...new Set(arra)].map((num)=> num*2)
}


function func(ar1){
   
    for(let i =0; i>ar1; i++){
       let b = ar1 *2;
       let ar1New =new Set(ar1)
    }
    return b
}

///запрос
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) => console.log(data))