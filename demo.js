
let employess =[{id:101,ename:"Rauhul",sal:45000},
                 
                {id:102,ename:"Sonia",sal:33000},

                {id:103,ename:"Modi",sal:67000}

]

/*for( employes of employess){

    //console.log(employes.ename)
    console.log(`employes Id: ${employes.id} and employes name: ${employes.ename}`)
}*/

let i=0
while(i<=employess.length-1){
    console.log(`employess id: ${employess[i].id} and employess name: ${employess[i].ename}`)
    i++
}
console.log(employess.length)