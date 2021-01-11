import React from 'react'
import './Features.css'
import img1 from '../../img/features/1.png'
import img2 from '../../img/features/2.png'
import img3 from '../../img/features/3.png'
import img4 from '../../img/features/4.png'
import img5 from '../../img/features/5.png'
import img6 from '../../img/features/6.png'


function Features() {
    return (
        <div className="features">
            <div className="container">
                <div className="blocks">
                    <div className="block">
                        <img src={img1} alt="1" />
                        <h4 className="blockHeader">Easily Customised</h4>
                        <p className="blockText">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla</p>
                    </div>
                    <div className="block">
                        <img src={img2} alt="2" />
                        <h4 className="blockHeader">Responsive REady</h4>
                        <p className="blockText">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla</p>
                    </div>
                    <div className="block">
                        <img src={img3} alt="3" />
                        <h4 className="blockHeader">Modern Design</h4>
                        <p className="blockText">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla</p>
                    </div>
                    <div className="block">
                        <img src={img4} alt="4" />
                        <h4 className="blockHeader">Clean Code</h4>
                        <p className="blockText">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla</p>
                    </div>
                    <div className="block">
                        <img src={img5} alt="5" />
                        <h4 className="blockHeader">Ready to Ship</h4>
                        <p className="blockText">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla</p>
                    </div>
                    <div className="block">
                        <img src={img6} alt="6" />
                        <h4 className="blockHeader">Download for Free</h4>
                        <p className="blockText">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
