import React,{useState} from "react";
// import "./style.css";
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addUser} from './UserReduser'

export default function Create() {
  const users = useSelector((state)=> state.users)

  const navigate =useNavigate()
  const[name ,setName]=useState('')
  const[email ,setEmail]=useState('')

const dispatch = useDispatch();


  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addUser({id: users[users.length-1].id+1,name, email}))
    navigate('/')
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className="w-50 border bg-secondary text-white p-5">
      <h3>Add new User</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name' >Name: </label><br/>
          <input type='text' value={name} onChange={e=> setName(e.target.value)} name='name' className='col-12 p-2  rounded' placeholder='enter name'/>
        </div>
    
        <div>
          <label htmlFor='email' >Email: </label><br/>
          <input type='email' value={email} name='email' className='col-12 p-2 rounded' onChange={e=> setEmail(e.target.value)} placeholder='enter email'/>
        </div>
        <button className='btn btn-info mt-3'>Submit</button>
      </form>
    </div>
    </div>
  );
}
