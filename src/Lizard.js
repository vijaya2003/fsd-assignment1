import Lzard from './images/Lzard.jfif';
function Lizard(){
    return(
        <div>
        <div className="div1">
        <img src={Lzard}/>
        <div className="div2">
        
        <h1>lizard</h1>
        <p>
             lizards are widespread group of squamate
            reptiles,with over 6000 species,raging across
            all continents except antartica</p>
        <a className='s'>share</a>
        <a className='l'>learn more</a>
        </div>
        </div>
        </div>
    )
}
export default Lizard;