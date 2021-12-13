import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      home
      <Link to="/tv">TV Show</Link>
    </div>
  )
}

export default Home
