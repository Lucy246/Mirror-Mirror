var React = require('react');
var TemperatureGraph = require('./TemperatureGraph');

var ConnectedHome = React.createClass({
  render() {
    return (
        <section>
            <section>
                <TemperatureGraph />
            </section>
        </section>
        );
    }
});

module.exports = ConnectedHome;
