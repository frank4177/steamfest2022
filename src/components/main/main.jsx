import React from 'react';
import './main.css'
import Homepage_image from '../../asset/Homepage_image.png';
import {BsArrowRight} from 'react-icons/bs'


const Main = () => {
  return (
    <div className='main-container'>
        <div className='main-wrapper'>
            <div >
                <div className='left'>
                <div className='title-wrap'>
                <div className='title'>Steamfest 2022 Quiz</div>
                <div className='subTitle'>Great prizes to be won</div>
                </div>
                
                <div className='enter-code-text'>Enter your steamfest code to join and <br /> exciting prizes!</div>
                <form action="">
                    <div className='code-input-wrap'>
                    <input type="text" maxLength='1' className='code-input'/>
                    <input type="text" maxLength='1'  className='code-input'/>
                    <input type="text" maxLength='1'  className='code-input'/>
                    <input type="text" maxLength='1'  className='code-input'/>
                    </div>
                <button type='submit'>start <BsArrowRight/></button>  
                </form>
            </div>
            <div className='right'>
                <img className='img-wrap' src={Homepage_image} alt="home image" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main;