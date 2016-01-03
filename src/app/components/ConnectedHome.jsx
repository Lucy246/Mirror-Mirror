var React = require('react');
var Door = require('./Door');
var Time = require('./Time')
var Weather = require('./Weather');

var ConnectedHome = React.createClass({
  render() {
    return (
        <section>
            <section className="top left">
                <Time timeFormat={12} updateInterval={1000} />
                <Door locked={true} />
            </section>
            <section className="top right">
                <div className="windsun small dimmed"></div><div className="temp"></div><div className="forecast small dimmed"></div>
            </section>
            <section className="lower-third center-hor">
                <div className="compliment light"></div>
            </section>
        </section>
        );
    }
});

module.exports = ConnectedHome;
