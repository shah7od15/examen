import './main.css'
import Card from '../Card'
import data from '../../../public/data'

function Main() {
  return (
    <div className="container">
        <div className="textbox">
            <h2>Products</h2>
            <button className="btn-m">
            Move All To Bag
            </button>
        </div>
        <div className="ota">
           {data.map((m,i)=>{
               return <Card key={i} nomi={m.name} rasm={m.img} narx={m.price}/>
           })}
        </div>
    </div>
  )
}

export default Main