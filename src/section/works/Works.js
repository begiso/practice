import React from 'react'
import './Works.css'
import img1 from '../../img/works/1.jpeg'
import img2 from '../../img/works/2.jpeg'
import img3 from '../../img/works/3.jpeg'
import img4 from '../../img/works/4.jpeg'
import img5 from '../../img/works/5.jpeg'
import img6 from '../../img/works/6.jpeg'
import img7 from '../../img/works/7.jpeg'
import img8 from '../../img/works/8.jpeg'

function Works() {
    return (
        <div className="works">
            <div className="work">
                <img className="workImg" src={img1} alt="1" />
                <div className="cursor">
                    <h3 className="cursorHeader">Project name</h3>
                    <p className="cursorText">User interface Design</p>
                </div>
            </div>         
            <div className="work">
                <img className="workImg" src={img2} alt="2" />
                <div className="cursor">
                    <h3 className="cursorHeader">Project name</h3>
                    <p className="cursorText">User interface Design</p>
                </div>
            </div>
            <div className="work">
                <img className="workImg" src={img3} alt="3" />
                <div className="cursor">
                    <h3 className="cursorHeader">Project name</h3>
                    <p className="cursorText">User interface Design</p>
                </div>
            </div>
            <div className="work">
                <img className="workImg" src={img4} alt="4" />
                <div className="cursor">
                    <h3 className="cursorHeader">Project name</h3>
                    <p className="cursorText">User interface Design</p>
                </div>
            </div>
            <div className="work">
                <img className="workImg" src={img5} alt="5" />
                <div className="cursor">
                    <h3 className="cursorHeader">Project name</h3>
                    <p className="cursorText">User interface Design</p>
                </div>
            </div>
            <div className="work">
                <img className="workImg" src={img6} alt="6" />
                <div className="cursor">
                    <h3 className="cursorHeader">Project name</h3>
                    <p className="cursorText">User interface Design</p>
                </div>
            </div>
            <div className="work">
                <img className="workImg" src={img7} alt="7" />
                <div className="cursor">
                    <h3 className="cursorHeader">Project name</h3>
                    <p className="cursorText">User interface Design</p>
                </div>
            </div>
            <div className="work">
                <img className="workImg" src={img8} alt="8" />
                <div className="cursor">
                    <h3 className="cursorHeader">Project name</h3>
                    <p className="cursorText">User interface Design</p>
                </div>
            </div>               
        </div>
    )
}

export default Works
