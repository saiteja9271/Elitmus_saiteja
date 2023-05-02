import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const Navbar = (prop) => {
  const {loginTrue}=useContext(ThemeContext)
  return (
    <div style={{width:"100vw"}}>
     <nav class="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: prop.color}}>
  <a class="navbar-brand ml-3" href="/">TreasureHunt</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item ml-3"><a class="nav-link" href="/">Home</a></li>
      <li class="nav-item ml-3"><a class="nav-link" href="/about">About</a></li>
     {loginTrue ? <li class="nav-item ml-3"><a class="nav-link" href="/logout">logout</a></li>:
      <> <li class="nav-item ml-3"><a class="nav-link" href="/login">login</a></li>
      <li class="nav-item  ml-3"><a class="nav-link" href="/register">register</a></li></>
    }
       <li class="nav-item mr-5 ml-3"><a class="nav-link" href="/admin">admin</a></li>
      
    </ul>
    </div>
 </nav>
</div>
  )
}

export default Navbar
