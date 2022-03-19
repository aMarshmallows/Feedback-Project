import React from 'react'
import {FaQuestion } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className="about-link">
        {/* could do this using <a></a> but using an anchor tag causes a page refresh, which is inefficient */}
        {/* can use for linking to external websites but if linking internally, use the  */}
        {/* Link react object */}
        <Link to='/about'>
            <FaQuestion size={30}></FaQuestion>
        </Link>
        
    </div>
  )
}

export default AboutIconLink