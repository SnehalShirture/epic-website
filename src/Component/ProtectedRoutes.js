import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({loggedin,children}) => {
  if(!loggedin){
    return <Navigate to='/login'/>
  }
}

export default ProtectedRoutes
