import React from 'react'



export const HeaderComponent = () => {
  return (
<nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary" style={{color:"#e3f2fd;"}}>
{/* data-bs-theme="dark" */}
  <div class="container-fluid">
    <p><a class="navbar-brand" href="#">
    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/p-10416405-8398284.png?f=webp&w=256"  width="1" height="30"></img>
        PayFocus
        </a></p>
    
    
      <div class="navbar-nav">
        <p><a class="nav-link active" aria-current="page" href="#">About Us</a></p>
        <p><a class="nav-link" href="#">Products</a></p>
        <p><a class="nav-link" href="#">Why Payfocus</a></p>
        <p><a class="nav-link" href="#">Contacts</a></p>
        <p><a class="nav-link" href="#">Policies</a></p>
      </div>
      <form class="d-flex" role="search">
      <button class="btn btn-outline-info btn-lg" type="submit">Login</button>
      <span>&nbsp;</span>
      <button class="btn btn-outline-info btn-lg" type="submit">SignUp</button>
    </form>
  </div>
  
</nav>

  )
}
