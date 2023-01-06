import React, { useState } from 'react'
import './Home.css'
import image1 from '../images/image1.svg'
import image2 from '../images/image2.svg'
import image3 from '../images/image3.svg'
import image4 from '../images/image4.svg'

function Home() {
    const [active, setActive] = useState(1);
    setInterval(() => {
      setActive(active === 4 ? 1 : active + 1);
    }, 7000);
  
    const ImageSlider = () => {
      if (active === 1)
        return (
          <>
            <img className='scroall-slide-1' src={image1} alt='Slide 1 Error' />
          </>
        );
      if (active === 2)
        return (
          <>
            <img className='scroall-slide-1' src={image2} alt='Slide 2 Error' />
          </>
        );
      if (active === 3)
        return (
          <>
            <img className='scroall-slide-1' src={image3} alt='Slide 3 Error' />
          </>
        );
      if (active === 4)
        return (
          <>
            <img className='scroall-slide-1' src={image4} alt='Slide 4 Error' />
          </>
        );
    };

    return (
    <>
      <div className='scroall-section'>
        <div className='scroall-images'>
            <ImageSlider/>
        </div>
        <div className='scroall-tabs'>
            <ul className='tabs-list'>
            <li className='tab-list-item' onClick={()=>{setActive(1)}}>
                <h1 className={active===1?`tab-list-heading tab-active`:'tab-list-heading'}>Increase your productivity</h1>
                <p className='tab-list-text'>Paraphrase more text at once to finish writing faster.</p>
                <div className='tab-progress-bar'>
                {active===1?<>
                <div className='tab-progress-bar-active'></div>
                </>:''}
                </div>
            </li>
            <li className='tab-list-item' onClick={()=>{setActive(2)}}>
                <h1 className={active===2?`tab-list-heading tab-active`:'tab-list-heading'}>Access all modes</h1>
                <p className='tab-list-text'>Get maximum control over how you paraphrase.</p>
            <div className='tab-progress-bar'>
            {active===2?<>
                <div className='tab-progress-bar-active'></div>
                </>:''}
                </div>
            </li>
            <li className='tab-list-item' onClick={()=>{setActive(3)}}>
                <h1 className={active===3?`tab-list-heading tab-active`:'tab-list-heading'}>Scan for plagiarism</h1>
                <p className='tab-list-text'>Unlock the Plagiarism Checker to guarantee all sources <br/> are cited and nothing is unintentionally plagiarized.</p>
                <div className='tab-progress-bar'>
                {active===3?<>
                <div className='tab-progress-bar-active'></div>
                </>:''}
                </div>
            </li>
            <li className='tab-list-item' onClick={()=>{setActive(4)}}>
                <h1 className={active===4?`tab-list-heading tab-active`:'tab-list-heading'}>Compare all mode outputs at once</h1>
                <p className='tab-list-text'>Paraphrase in and compare outputs from all seven modes.</p>
                <div className='tab-progress-bar'>
                {active===4?<>
                <div className='tab-progress-bar-active'></div>
                </>:''}
                </div>
            </li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Home;