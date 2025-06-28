import './card.css'

function Card(shoop) {
    return (
        <div className="card">
            <div className="imgbox">
                <img src={shoop.rasm} alt="dsd" />
                <button className="bt"><i class="fa-solid fa-cart-shopping"></i> add to card</button>
            </div>
            <p>{shoop.nomi}</p>
            <span>{shoop.narx}</span>

        </div>
    )
}

export default Card
