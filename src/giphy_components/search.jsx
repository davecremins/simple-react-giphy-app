import React from 'react';
import PropTypes from 'prop-types'

class Search extends React.Component {
    render() {
        return (
            <input type="text" onKeyPress={(e) => { this.props.onKeyPress(e) } } />
        )
    }
}

Search.propTypes = {
    onKeyPress: PropTypes.func.isRequired
}

class ImageResult extends React.Component {
    render() {
        return ( 
            <img 
                className={this.props.className} 
                alt={this.props.alt}
                src={this.props.src} 
            />
        )
    }
}

export {
    Search,
    ImageResult
}