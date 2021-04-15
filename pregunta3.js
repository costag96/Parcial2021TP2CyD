// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    if(nums.length < 3) return undefined
    else{
        let arraySinRepetidos = [...new Set(nums)]
        arraySinRepetidos.sort((n1,n2)=> n2-n1)
        return arraySinRepetidos[2]
    }
}


// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === undefined);
console.log(greater3([1,1,2,5]) === 1);