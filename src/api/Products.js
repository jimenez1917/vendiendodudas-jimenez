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