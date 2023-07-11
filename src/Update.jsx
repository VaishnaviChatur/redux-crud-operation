import React,{useState} from "react";
import "./style.css";
import {useNavigate} from 'react-router-dom'
import {updateUser} from './UserReduser'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
export default function Update() {
  const {id}= useParams();
 
  const users = useSelector((state)=> state.users)
  const existingUser = users.filter(f => f.id ==id);
  const {name, email}=existingUser[0];
  const[uname ,setName]=useState(name)
  const[uemail ,setEmail]=useState(email)
  const navigate =useNavigate()
  const dispatch = useDispatch();
  const handleUpdate=(e)=>{
    e.preventDefault();
    dispatch(updateUser({id:id,name:uname, email:uemail}))
    navigate('/')
  }
    return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className="w-50 border bg-secondary text-white p-5">
      <h3>Edit User</h3>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor='name' >Name: </label><br/>
          <input type='text' value={uname} name='name' onChange={e=> setName(e.target.value)} className='col-12 p-2 rounded' placeholder='enter name'/
          >
        </div>
    
        <div>
          <label htmlFor='email' >Email: </label><br/>
          <input type='text' value={uemail} onChange={e=> setEmail(e.target.value)}  name='email' className='col-12 p-2 rounded' placeholder='enter email'/>
        </div><br/>
        <button className='btn btn-info mt-3 rounded'>Submit</button>
      </form>
    </div>
    </div>
  );
}
