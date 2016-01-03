var React = require('react');
var moment = require('moment');
var Time = React.createClass({
    propTypes: {
        timeFormat: React.PropTypes.number.isRequired,
        updateInterval: React.PropTypes.number.isRequired
    },

    getInitialState() {
        var now = moment();
        return {
            timeFormat: null,
            now: now,
            date: now.format('dddd, LL')
        }
    },

    componentDidMount() {
        if (parseInt(this.props.timeFormat) === 12) {
            this.state.timeFormat = 'hh'
        } else {
            time.state.timeFormat = 'HH';
        }

        this.intervalId = setInterval(function () {
            this.updateTime();
        }.bind(this), this.props.updateInterval);
    },

    updateTime() {
        var now = moment();
        this.setState({
            now: now,
            date: now.format('dddd, LL'),
            time:  now.format(this.state.timeFormat+':mm:ss')
        });
    },

    render() {
        return (
            <section>
                <div className="date small dimmed">{this.state.date}</div>
                <div className="time" style={{fontSize: 40, marginTop: 20}}>{this.state.time}</div>
            </section>
        );
    }
});

module.exports = Time;