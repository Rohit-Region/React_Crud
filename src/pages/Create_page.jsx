import React, { useState } from 'react'
import './Create_page.css'
import { v4 as uuidv4 } from 'uuid';

function Create_page() {
    const [data,setData]=useState([])
    const [button,setButton]=useState(true)
    const [userData,setUserData]=useState({
        name:"",
        age:"",
        phone:"",
        address:""
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const [index,setIndex]=useState(0)
    const handleEdit = (i,index) =>{
        setButton(false)
        const {name,age,address,phone}=i
        setIndex(index)
        
        setUserData({
            name:name,
            age:age,
            phone:phone,
            address:address
        })
      
    }

const onEdit = () =>{
    console.log(index)
    setData((data)=>{
    return data.map((val,i)=>{
        if(i===index)
       {
          return userData
       }
       return val
    })})
    // console.log("updated", a)
    // setData(a)
    setButton(true)
    onCancel()
}


const onCancel = () =>{
    setUserData({
        name:"",
        age:"",
        phone:"",
        address:""
    })
    setButton(true)
}


    const handleDelete = (i) =>{
               setData((prevState)=>prevState.filter((item,index)=>index!==i))
    }

    const onSubmit = () =>{
        setData(prevState=>([...prevState,userData]))
        setUserData({
            name:"",
            age:"",
            phone:"",
            address:""
        })
    }

    return (
    <div className='container'>
        <h1>CREATE USER DATA </h1>
        <div>
        <div className='inside'><p>NAME : </p><input  type='text' name='name' placeholder='Name' value={userData.name} onChange={handleChange}/></div>
        <div className='inside'><p>AGE : </p><input type='number' name='age' placeholder='Age' value={userData.age} onChange={handleChange}></input></div>
        <div className='inside'><p>PHONE NO : </p><input type='number' name='phone' placeholder='Phone No' value={userData.phone} onChange={handleChange}></input></div>
        <div className='inside'><p>ADDRESS : </p><input type='text'   name='address' placeholder='Address' value={userData.address} onChange={handleChange}></input></div>
        {button?
        (
            <button onClick={onSubmit}>ADD USER </button>
        ):
        (
        <div>
            <button onClick={onEdit}>EDIT </button> 
            <button onClick={onCancel}>CANCEL </button>
        </div>
        )}

        </div>

        <br></br>
        <h2> USER  DATA : </h2>
        <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Address</th>
          <th colSpan={2}>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {data.map((i, index) => (
          <tr key={index}>
            <td>{i.name}</td>
            <td>{i.age}</td>
            <td>{i.phone}</td>
            <td>{i.address}</td>
            <td><button onClick={() =>handleEdit(i,index)}>EDIT</button></td>
            <td><button onClick={() => handleDelete(index)}>DELETE</button></td>
          </tr>
        ))}
       
      </tbody>
    </table>
        </div>

    </div>
  )
}

export default Create_page