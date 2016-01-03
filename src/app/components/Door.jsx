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
                <h3 style={{marginBottom: 0, paddingBottom: 0}}>Door Status</h3>
                <span className={'DoorStatus ' + string}>{string}</span>
            </div>
        );
    }
});

module.exports = DoorCard;
