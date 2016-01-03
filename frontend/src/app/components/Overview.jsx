var React = require('react');
var Door = require('./Door');
var Time = require('./Time')
var HouseTemp = require('./HouseTemperature');

var Overview = React.createClass({
  render() {
    return (
        <section>
            <section className="top left">
                <Time timeFormat={12} updateInterval={1000} />
                <Door locked={false} />
                <HouseTemp temperature={72} />
            </section>
            <section className="top right">
                <div className="windsun small dimmed"></div><div className="temp"></div><div className="forecast small dimmed"></div>
            </section>
            <section className="bottom center-hor">
                <div className="compliment light"></div>
            </section>
        </section>
        );
    }
});

module.exports = Overview;
