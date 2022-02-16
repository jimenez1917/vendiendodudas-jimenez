// import image1 from "../assets/Collar_1.jpg";

export const products = [
    {
        id:1,
        title:'Collar Hermoso',
        description: 'Protegemos nuestro cuello y nuestro kundalini',
        price: '60US',
        img: './assets/Collar_1.jpg',
        category:'collares'
    },
    {
        id:2,
        title:'Oir Fuerte',
        description: 'La escucha es un gran detalle de todo ser',
        price: '50US',
        img:'./assets/Aretas_1.jpg',
        category:'aretes'
    },
    {
        id:3,
        title:'Oir Fuerte',
        description: 'La escucha es un gran detalle de todo ser',
        price: '50US',
        img:'./assets/Pulsera_1.jpg',
        category:'anillos'
    },
    {
        id:4,
        title:'Oir Fuerte',
        description: 'La escucha es un gran detalle de todo ser',
        price: '50US',
        img:'./assets/Collar_2.jpg',
        category:'collares'
    },
    {
        id:5,
        title:'Oir Fuerte',
        description: 'La escucha es un gran detalle de todo ser',
        price: '50US',
        img:'./assets/Aretas_2.jpg',
        category:'aretes'
    },
    {
        id:6,
        title:'Oir Fuerte',
        description: 'La escucha es un gran detalle de todo ser',
        price: '50US',
        img:'./assets/Pulsera_2.jpg',
        category:'anillos'
    },
    // {
    //     id:7,
    //     title:'Oir Fuerte',
    //     description: 'La escucha es un gran detalle de todo ser',
    //     price: '50US',
    //     img:'./assets/Pulsera_2.jpg',
    //     category:'collares'
    // },
    // {
    //     id:8,
    //     title:'Oir Fuerte',
    //     description: 'La escucha es un gran detalle de todo ser',
    //     price: '50US',
    //     img:'./assets/Pulsera_2.jpg',
    //     category:'aretes'
    // },
    // {
    //     id:9,
    //     title:'Oir Fuerte',
    //     description: 'La escucha es un gran detalle de todo ser',
    //     price: '50US',
    //     img:'./assets/Pulsera_2.jpg',
    //     category:'anillos'
    // }
]
const getAllItems = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(products);
    },500);
})

// export const getItemById = new Promise((resolve, reject) => {
//     setTimeout (()=>{
//         let item=products.find(u=>u.id===2);
//         resolve(item);
//     },500)
// })
function getItemById(id){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{   
            let item=products.find(u=>u.id===parseInt(id));
            resolve(item);
        },100);
    })

}
// function getItemByCategory(category){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{   
//             let item=products.find(u=>u.id===parseInt(id));
//             resolve(item);
//         },100);
//     })

// }

export{
    getAllItems,
    getItemById,
}

