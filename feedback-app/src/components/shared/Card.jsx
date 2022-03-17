import React from 'react'
import PropTypes from 'prop-types';

function Card({children, reverse}) {
    return (
        //   this is how you do conditinal classes - card is always there, but we only want reverse if its true
        // reverse will only happen if set to true because of the && operator
        <div className={`card ${reverse && 'reverse'}`}>
            {children}
        </div>
    )
    // return (
    //     <div className="card" style={{
    //         // this is how you do conditional styling
    //         backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4' : '#fff' ,
    //         color: reverse ? '#fff' : 'rgba(0, 0, 0, 0.4',
    //     }}>
    //         {children}
    //     </div>
    // )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired, 
    reverse: PropTypes.bool,
}
export default Card