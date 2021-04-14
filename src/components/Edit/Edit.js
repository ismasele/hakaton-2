import React, {useState} from 'react';
import './Edit.css'


const Edit = (props) => {

    let [name, setName]=useState(props.edit.name);
    let[desc, setDesc]=useState(props.edit.desc )

    function handleSaveClick(){
        let obj ={...props.edit}
        obj.name=name;
        obj.desc=desc;

        props.handleSaveEdit(obj)
        setName('')
        setDesc('')
    }

    return (
        <div>
            
            < input className ='inp-save'
             onChange={(e)=>setName(e.target.value)}
              type="text" placeholder="название" value={name}
              />
            < input className ='inp-save'
             onChange={(e)=>setDesc(e.target.value)}
             type="text" placeholder="описание" value= {desc}
             />
            <button
             onClick={handleSaveClick}>
                 сохранить </button>
        </div>
    );
};

export default Edit;  