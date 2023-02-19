const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]

let newArray = [];
let totalCantProductos = 0;


objetos.forEach(objeto => {
    const keys = Object.keys(objeto);

    keys.forEach(key => {
        if (!newArray.includes(key)) newArray.push(key);
    })

    let soloValores = Object.values(objeto)
 
    let totalProductos = soloValores.reduce((Acc, Ini) => {
        return Acc + Ini
    })
    totalCantProductos += totalProductos;
})

console.log(newArray);
console.log(totalCantProductos)