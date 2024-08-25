import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Home Page</h1>
        <Link to='/forms'>Forms</Link>
        <Link to='/imageContainer'>Image Container</Link>
    </div>
  )
}

export default Home