var React = require('react');
var classNames = require('classnames');

var DoorCard = React.createClass({
    propTypes: {
        locked: React.PropTypes.bool.isRequired
    },
    render() {
        var string = (this.props.locked ? 'Locked' : 'Unlocked');
        return (
            <div className="Card DoorCard">
                <h3 className={'DoorStatus ' + string}>Door is {string}</h3>
            </div>
        );
    }
});

module.exports = DoorCard;
