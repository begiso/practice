import React from 'react'
import './style.css'
import Logo01 from './img/1.jpg'
import Logo02 from './img/2.jpg'
import Logo03 from './img/3.jpg'
import Logo04 from './img/4.jpg'
import Icon1 from './img/002-facebook.png'
import Icon2 from './img/003-telegram.png'
import Icon3 from './img/004-instagram.png'


 const Index4 = () => {
      
    return (
        <div className='fourthBlock'>
            <div className='zcontainer'>

                <div className='row'> 

               <img className="zimg" src={Logo01}></img>
                <h2 className="zh2">Ruth Woods</h2> 
                <span>Founder, CEO</span> <br/>
                <h5>
                Fusce dapibus, tels ac cursus commodo. tortor mauris condimetum nibh,
                  ut fermentim massa justo sit amet risus. maecensas sed deam eged risus 
                ut fermentim massa justo sit amet risus. maecensas sed deam eged risus
                </h5>
                <div className='Icons'>
                   <img className= 'icons' src={Icon1}></img>
                   <img className= 'icons' src={Icon2}></img>
                   <img className= 'icons' src={Icon3}></img>
                </div>
                
                </div>
                <div className='row'> 

               <img className="zimg"  src={Logo02}></img>
                <h2 className="zh2">Timothy Reed</h2> 
                <span>Co-Founder, Developer</span> 
                <h5>
                Fusce dapibus, tels ac cursus commodo. tortor mauris condimetum nibh,
                  ut fermentim massa justo sit amet risus. maecensas sed deam eged risus 
                  varius blandit sit amet Fusce dapibus, tels ac mauris condimetum nibh             
                </h5>
                <div className='Icons'>
                   <img className= 'icons' src={Icon1}></img>
                   <img className= 'icons' src={Icon2}></img>
                   <img className= 'icons' src={Icon3}></img>
                </div>
                
                </div>
                <div className='row'> 

               <img className="zimg"  src={Logo03}></img>
                <h2 className="zh2">Victoria Valdez</h2> 
                <span>UI Designer</span> <br/>
                <h5>
                Fusce dapibus, tels ac cursus commodo. tortor mauris condimetum nibh,
                  ut fermentim massa justo sit amet risus. maecensas sed deam eged risus 
                  varius blandit sit amet Fusce dapibus, tels ac mauris condimetum nibh,
                 
                </h5>
                <div className='Icons'>
                   <img className= 'icons' src={Icon1}></img>
                   <img className= 'icons' src={Icon2}></img>
                   <img className= 'icons' src={Icon3}></img>
                </div>
                
                </div>
                 <div className='row'> 

               <img className="zimg"  src={Logo04}></img>
                <h2 className="zh2">Beverly Little</h2> 
                <span>Data Scientist</span> <br/>
                <h5>
                Fusce dapibus, tels ac cursus commodo. tortor mauris condimetum nibh,
                  ut fermentim massa justo sit amet risus. maecensas sed deam eged risus 
                  varius blandit sit amet Fusce dapibus, tels ac mauris condimetum nibh,
                 
                </h5>
                <div className='Icons'>
                   <img className= 'icons' src={Icon1}></img>
                   <img className= 'icons' src={Icon2}></img>
                   <img className= 'icons' src={Icon3}></img>
                </div>
                
                </div>
               
            </div>

          
        </div>
    )
}
export default Index4