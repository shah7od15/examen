import  './header.css'

function Header() {
  return (
    <div className="container">
        <header>
        <h1>Exclusive</h1>
        <nav>
            <ul>
                <li>home</li>
                <li>contact</li>
                <li>about</li>
                <li>sign up</li>
            </ul>
        </nav>
         <div className="box-h">
             
        <button className="btn-h">
            <input type="text" placeholder='What are you looking for?'/>
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-regular fa-user"></i>
         </div>


        
        </header>
       
    </div>
  )
}

export default Header
