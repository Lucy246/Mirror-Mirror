var React = require('react');
var RaisedButton = require('material-ui/lib/raised-button');
var Dialog = require('material-ui/lib/dialog');
var DatePicker = require('material-ui/lib/date-picker/date-picker');
var DatePickerDialog = require('material-ui/lib/date-picker/date-picker-dialog');
var TextField = require('material-ui/lib/text-field');
var DropDownMenu = require('material-ui/lib/drop-down-menu');
var CircularProgress = require('material-ui/lib/circular-progress');

var NotFound = React.createClass({
  render() {
    return (
      <h1>404 Not Found</h1>
    );
  }
});

module.exports = NotFound;
