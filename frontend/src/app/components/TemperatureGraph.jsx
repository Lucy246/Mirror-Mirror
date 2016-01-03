var React = require('react');
var LineChart = require("react-chartjs").Line;

var TemperatureGraph = React.createClass({
    componentDidMount() {
        Chart.defaults.global.responsive = true;
    },

    getInitialState() {
        var rand = function(min, max, num) {
            var rtn = [];
            while (rtn.length < num) {
                rtn.push((Math.random() * (max - min)) + min);
            }
            return rtn;
        }

        var chartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.1)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: rand(32, 100, 30)
                }
            ]
        };

        return {
            chartData: chartData
        }
    },
    render() {
        var rand = function(min, max, num) {
            var rtn = [];
            while (rtn.length < num) {
                rtn.push((Math.random() * (max - min)) + min);
            }
            return rtn;
        }

        setInterval(function () {
            var data = rand(32, 100, 30);
            var chartData = this.state.chartData;
            chartData.datasets[0].data = data;
            this.setState({
                chartData: chartData
            })
        }.bind(this), 10000);

        var chartOptions = {
            pointDot : true
        };

        return (
            <section style={{textAlign: 'center'}}>
                <h3>Temperature over time</h3>
                <LineChart data={this.state.chartData} options={chartOptions}  height="150" width="1000px" style={{width: '90vw', margin: '0 auto', display: 'block'}}/>
                <div className="HouseTempMessage" style={{marginTop: 30}}>
                    <small>Swipe to the left to view your dashboard.</small>
                </div>
            </section>
        );
    }
});

module.exports = TemperatureGraph;