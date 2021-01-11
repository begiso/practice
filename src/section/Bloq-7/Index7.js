import React from 'react'
import './style7.css'
import Icon1 from './img/002-facebook.png'
import Icon2 from './img/003-telegram.png'
import Icon3 from './img/004-instagram.png'



const Index7 = () => {
    return (
        <footer>
            <div className='container7'>
            <div>
                <p>LOCATION</p>
                3481 Melrose Place Beverly Hills, CA 90210
            </div>

            <div className="share">
                <p>SHARE WITH LOVE</p>
                <div className='Icons-7'>
                   <img className= 'icons-7' src={Icon1}></img>
                   <img className= 'icons-7' src={Icon2}></img>
                   <img className= 'icons-7' src={Icon3}></img>
                </div>

            </div>

            <div>
                <p>ABOUT ACTIVEBOX</p>
                Melrose Place Beverly Hills,
                Melrose Place Beverly Hills, 
            </div>

            </div>
            <div className='nextFooter'>
            Fusce dapibus, tels ac cursus commodo. tortor mauris condimetum nibh,
                  ut massa justo sit amet risus. <span>&#9829; </span>maecensas sed deam eged risus 
               

            </div>
        </footer>
            
        
    )
}

export default Index7
