// import image1 from "../assets/Collar_1.jpg";


// export const products = [
    //     {
        //         id:1,
//         title:'Collar Hermoso',
//         description: 'Protegemos nuestro cuello y nuestro kundalini',
//         price: 60,
//         img: './assets/Collar_1.jpg',
//         category:'collares'
//     },
//     {
    //         id:2,
//         title:'Oir Fuerte',
//         description: 'La escucha es un gran detalle de todo ser',
//         price: 50,
//         img:'./assets/Aretas_1.jpg',
//         category:'aretes'
//     },
//     {
//         id:3,
//         title:'Oir Fuerte',
//         description: 'La escucha es un gran detalle de todo ser',
//         price: 66,
//         img:'./assets/Pulsera_1.jpg',
//         category:'anillos'
//     },
//     {
    //         id:4,
    //         title:'Oir Fuerte',
    //         description: 'La escucha es un gran detalle de todo ser',
    //         price: 50,
    //         img:'./assets/Collar_2.jpg',
    //         category:'collares'
    //     },
    //     {
        //         id:5,
        //         title:'Oir Fuerte',
        //         description: 'La escucha es un gran detalle de todo ser',
        //         price: 86,
        //         img:'./assets/Aretas_2.jpg',
        //         category:'aretes'
        //     },
        //     {
            //         id:6,
            //         title:'Oir Fuerte',
            //         description: 'La escucha es un gran detalle de todo ser',
            //         price: 28,
            //         img:'./assets/Pulsera_2.jpg',
            //         category:'anillos'
            //     },
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
//]
import { getDocs , collection } from "firebase/firestore";
import { db } from "../firebase";
let productsCollection =collection(db,"products");
const getAllItems = new Promise((resolve, reject) => {
    //Referencia a la coleccion, debe tener referencia a base de datos y nombre de colleccion
    getDocs(productsCollection).then((snapshot) => {
        const products = snapshot.docs.map((doc) =>({id:doc.id,...doc.data()}));
        console.log(products);
        resolve(products);
    }).catch(error=>reject(error))
})
function getItemById(id){
    return new Promise((resolve, reject) =>{
        getDocs(productsCollection).then((snapshot=>{
            console.log(id);
            let product = snapshot.docs.find(doc => doc.id === id)
            let item = {id:id,...product.data()};
            console.log(item);
            resolve(item);
        })).catch(error=>reject(error))
    })
}
// function getItemById(id){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{   
//             let item=products.find(u=>u.id===parseInt(id));
//             resolve(item);
//         },100);
//     })
//}

// export const getItemById = new Promise((resolve, reject) => {
//     setTimeout (()=>{
//         let item=products.find(u=>u.id===2);
//         resolve(item);
//     },500)
// })


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
    getItemById
}

