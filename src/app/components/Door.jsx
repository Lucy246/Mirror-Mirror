var React = require('react');

var DoorCard = React.createClass({
    render() {
        return (
            <div className="Card DoorCard">
                <h2>Door Status:</h2>
                <span style={{color: 'green'}}>Locked</span>
            </div>
        );
    }
});

module.exports = DoorCard;
