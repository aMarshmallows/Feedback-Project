import Card from "./shared/Card"
import PropTypes from 'prop-types';
import {FaTimes, FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({item}) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    //   reverse is conditional styling
    <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
        {/* calls the handle delete function from the feedback list file */}
        <button onClick={() => deleteFeedback(item.id)}className="close">
            <FaTimes color='purple'></FaTimes>
        </button>
        <button onClick={() => editFeedback(item)}className="edit">
            <FaEdit color='purple'></FaEdit>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}
export default FeedbackItem