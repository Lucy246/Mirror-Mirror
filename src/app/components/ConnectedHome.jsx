var React = require('react');
var Door = require('./Door');
var Time = require('./Time')

var ConnectedHome = React.createClass({
  render() {
    return (
        <section>
            <section className="top left">
                <h1>Connected Home</h1>
                <Door />
            </section>
            <section className="top right">
                <Time timeFormat={12} updateInterval={1000} />
            </section>
        </section>
        );
    }
});

module.exports = ConnectedHome;
