import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'


const InfoBox = ({ text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'></img>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
         🙋‍♀️ Hi, I am <span className='font-semibold'>Khélia</span><br/>
            A front-end Engineer.
        </h1>
    ),
    2: (
        <h1>
            <InfoBox
                text="I have a master's degree in Software Engineering and picked up many skills along the way"
                link="/about"
                btnText="Learn more"
            />
        </h1>
    ),
    3: (
        <h1>
            <InfoBox
                text="Here's my projects"
                link="/projects"
                btnText="Visit my portfolio"
            />
        </h1>
    ),
    4: (
        <h1>
            <InfoBox
                text="Looking for a front-end developper?"
                btnText="Get in touch with me"
            />
        </h1>
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo