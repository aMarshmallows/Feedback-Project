import Card from "./shared/Card"
import PropTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({item, handleDelete}) {

  return (
    //   reverse is conditional styling
    <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
        {/* calls the handle delete function from the feedback list file */}
        <button onClick={() => handleDelete(item.id)}className="close">
            <FaTimes color='purple'></FaTimes>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}
export default FeedbackItem