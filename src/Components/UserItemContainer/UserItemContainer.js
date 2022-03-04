import React, {useState,useContext} from 'react';
import bootstrap from 'bootstrap';
import { addDoc , collection } from "firebase/firestore";
import { db } from "../../firebase";
import {getStorage, ref , uploadBytes,getDownloadURL}from "firebase/storage";
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';

const AddItemContainer = ()=> {
    const { TotalPriceGuardar , Ordencart } = useContext(CartContext);

    const [name,setName] =useState("");
    const [phone,setPhone] =useState("");
    const [mail,setMail] =useState("");


    const handleNameChange = event => setName(event.target.value);
    const handlePhoneChange = event => setPhone(event.target.value);
    const handleMailChange = event => setMail(event.target.value);
 
    const onSubmit= async (event) => {
        event.preventDefault();

        if(![name,phone,mail]!==""){

            const itemcollection = collection(db,"userCart")

            const newUser = {buyer:{name:name,
                                    phone:phone,
                                    mail:mail},
                                    items: Ordencart,
                                    date: Date.now(),
                                    total:TotalPriceGuardar
            }
            addDoc(itemcollection, newUser).then((doc) =>{
                console.log(doc.id)
            })
        }
        //validar que los campos no esten vacios
    }
 
    return(
        <div className="container sm-6">
            <h1>Ingrese Orden de Compra</h1>
            <form onSubmit={onSubmit}>
                <div className="form-floating mb-3">
                    <input name="name" type="text" className="form-control" id="floatingInput" placeholder="Name" onChange={handleNameChange}/>
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input name="phone" type="text" className="form-control" id="floatingInput" placeholder="phone" onChange={handlePhoneChange}/>
                    <label htmlFor="floatingInput">Phone</label>
                </div>
                <div className="form-floating mb-3">
                    <input name="email" type="email" className="form-control" id="floatingInput" placeholder="email" onChange={handleMailChange}/>
                    <label htmlFor="floatingInput">email</label>
                </div>
                <div className="col-mb-3">
                    <Link to="/checkout">
                        <button type="submit" className="btn btn-dark">Enviar</button>
                    </Link>
                </div>
            </form>
    </div>
    )
}

export default AddItemContainer;