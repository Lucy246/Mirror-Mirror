var React = require('react');
var classNames = require('classnames');

var HouseTempCard = React.createClass({
    propTypes: {
        temperature: React.PropTypes.number.isRequired
    },
    render() {
        return (
            <div className="Card HouseTempCard">
                <h3 style={{marginBottom: 0, paddingBottom: 0}}>House Temperature</h3>
                <span className='HouseTempValue'>{this.props.temperature} &deg;</span>
                <div className="HouseTempMessage">
                    <small>Swipe in front of the screen to view your smart home details.</small>
                </div>
            </div>
        );
    }
});

module.exports = HouseTempCard;
