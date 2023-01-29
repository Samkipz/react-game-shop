import React from 'react'
import './HeroButton.scss'

function HeroButton(props) {
    return (
        // <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
        // eslint-disable-next-line
        <a href="#" className="Button" data-primary={props.primary}>{props.text}</a>
    )
}

export default HeroButton

