import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <div className='About'>
        
        <div className="tutorials">
            {/* <iframe src="https://www.youtube.com/embed/C7TRDzRmt1w?color=white&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.waveapps.com&widgetid=1" frameborder="0"></iframe> */}
        </div>
        
        <div className="content">
          
            <div className="titletext">
                <h2 className="about-title">
                    One less thing to worry about
                </h2>
                <p className="about-titletext">
                    Your FMS account gets you access to all this and more:
                </p>
            </div>
            
            <div className="principles">
                <div className="principleOne">
                    <FontAwesomeIcon icon={faUser} className='userIcon'></FontAwesomeIcon>
                    A user-friendly dashboard built for you, not your accountant.
                </div>
                <div className="principleTwo">
                    Peace of mind that you’re always organized ahead of tax season.
                </div>
                <div className="principleThree">
                    A complete picture of your business health, wherever you are.
                </div>
                <div className="principleFour">
                    Our in-house team of bookkeeping, accounting, and payroll coaches.
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About