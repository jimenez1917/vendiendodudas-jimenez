import { getDocs , collection } from "firebase/firestore";
import { db } from "../firebase";
let productsCollection =collection(db,"products");
const getAllItems = new Promise((resolve, reject) => {
    //Referencia a la coleccion, debe tener referencia a base de datos y nombre de colleccion
    getDocs(productsCollection).then((snapshot) => {
        const products = snapshot.docs.map((doc) =>({id:doc.id,...doc.data()}));
        resolve(products);
    }).catch(error=>reject(error))
})
function getItemById(id){
    return new Promise((resolve, reject) =>{
        getDocs(productsCollection).then((snapshot=>{
            let secure=snapshot.docs.some(doc => doc.id === id);
            if(secure){
                let product = snapshot.docs.find(doc => doc.id === id)
                let item = {id:id,...product.data()};
                resolve(item);
            }else{
                resolve([]);
            }
        })).catch(error=>reject(error))
    })
}


export{
    getAllItems,
    getItemById
}

