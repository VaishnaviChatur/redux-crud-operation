import React from "react";
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {deleteUser} from  './UserReduser'

export default function Home() {
  const users = useSelector((state)=> state.users);
  const dispatch = useDispatch();
  const handleDelete=(id)=>{
    dispatch(deleteUser({id:id}))
  }
  console.log(users)
  return (
    <div className='container'>
    <h2>React CRUD APP WITH REDUX/TOOLKIT</h2>
    <Link to='/create' className="btn btn-success my-3">create +</Link>
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ACTION</th>
      
        </tr>
      </thead>
      <tbody>
        {users.map((user,index)=>(
<tr key={index}>
  <td>{user.id}</td>
  <td>{user.name}</td>
  <td>{user.email}</td>
  <td>
    <Link to={`/edit/${user.id}`} className='btn btn-warning'>Edit</Link>
  </td>
  <td>
    <button onClick={()=>handleDelete(user.id)} className='btn btn-danger'>Delete</button>
  </td>
</tr>
         ) )}
      </tbody>
    </table>
    </div>
  );
}
