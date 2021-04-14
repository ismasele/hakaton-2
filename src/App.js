import React, {useState} from 'react';

import AddInfo from './components/AddInfo/AddInfo'
import Navbar from './components/Navbar/Navbar'
import Render from './components/Render/Render'
import Edit from './components/Edit/Edit'


function App() {
  let [obj, setObj]=useState([]);
  let[edit, setEdit]=useState({});
  let [isEdit, setIsEdit]=useState(false);

  

  function handleNewObj(newDetail){
    let newDetailArray=[...obj];
    newDetailArray.push(newDetail);
    
    setObj(newDetailArray)
  }
  function handleDelete(id){
    let newDetailArray=obj.filter(item=>{
      return item.id !==id
    })
    setObj(newDetailArray)

  }
  function handleEdit(index){
    setIsEdit(true)
    setEdit(obj[index])

  }
   
  function handleSaveEdit(newDetail){
    let newDetailArray=obj.map(item=>{
      if(item.id===newDetail.id){
       return newDetail
      }
      return item
    })
    setObj(newDetailArray)
    setIsEdit(false)
  }

  return (
    <div className="App">
      
   


     <Navbar
     />
     <AddInfo handleNewObj={handleNewObj}
       />
    {isEdit? <Edit
     edit={edit}
     handleSaveEdit={handleSaveEdit}

     />: null}

     <Render obj={obj}
     handleDelete={handleDelete}
     handleEdit ={handleEdit}
       />

    </div>
  );
}

export default App;

