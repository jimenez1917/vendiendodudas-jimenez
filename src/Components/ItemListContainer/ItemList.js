import Item from './Item';
import './ItemList.css';

export default function ItemList({Items}){
    return (
        <div className="item-list-container">
            {Items.map((item)=>(
                <Item key={item.id} item={item}/>
            ))}
        </div>
    )
}