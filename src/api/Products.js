export const products = [
    {
        id:1,
        title:'Collar Hermoso',
        description: 'Protegemos nuestro cuello y nuestro kundalini',
        price: '60US',
        img:'./assets/Collar_1.jpg'
    },
    {
        id:2,
        title:'Oir Fuerte',
        description: 'La escucha es un gran detalle de todo ser',
        price: '50US',
        img:'./assets/Aretas_1.jpg'
    }
]
export const getAllItems = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(products);
    },2000);
})

export const getItemById = new Promise((resolve, reject) => {
    setTimeout (()=>{
        let item=products.find(u=>u.id===2);
        resolve(item);
    },1000)
})
// export function getItemById(id){
//     setTimeout(() =>{
//         let item=products.find(u=>u.id===id);
//         return item;
//     },1000);
// }

