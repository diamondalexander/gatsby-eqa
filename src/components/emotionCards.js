import React from 'react'

const EmotionCards = props => (
    <div className="EmotionCard">
        <p class="emoji">{props.emoji}</p>
        <button>{props.buttonOne}</button>
        <button>{props.buttonTwo}</button>
        <button>{props.buttonThree}</button>
    </div>
)

export default EmotionCards