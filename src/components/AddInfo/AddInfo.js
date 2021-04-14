import React, {useState} from 'react';
import './AddInfo.css'





const AddInfo = (props) => {
    let [name, setName]=useState('');
    let[desc, setDesc]=useState('')

    function handleClick(){
        let newDetail={
            name,
            desc,
            id: Date.now()
        }

        props.handleNewObj(newDetail)
        setName('')
        setDesc('')
    }
   


    return (
        <div>
            <img className="img" src="https://miro.medium.com/max/1200/1*Uov-TfA20xfGqeIZyLWfnA.png"></img>
           
        
    
            < input className='add-inp' 
             onChange={(e)=>setName(e.target.value)} type="text" placeholder="название"
             value={name}/>
            < input className='add-inp'
             onChange={(e)=>setDesc(e.target.value)}type="text" placeholder="описание"
             value= {desc}/>
            <button className="add-detail" onClick={handleClick}>Добавить</button>
            
        </div>

    );
};

export default AddInfo;