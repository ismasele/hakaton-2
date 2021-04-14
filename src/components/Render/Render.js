import React from 'react';
import './Render.css'

const Render = (props) => {

    console.log(props)
    return (
        <div className="divs" >
            {props.obj.map((item, index)=>(
               <div> 
                <div className="card" key={item.id}>

                    <span className ="span">{item.name}</span>
                    <p>{item.desc}</p>

                </div>
                    <li className="li">
                        <button className="btn" onClick={()=>props.handleDelete(item.id)}>Удалить</button>
                        <button classmane="btn"onClick={()=>props.handleEdit(index)} > редактировать</button>
                    </li>
            </div>
            ))}
        </div>
    );
};

export default Render;