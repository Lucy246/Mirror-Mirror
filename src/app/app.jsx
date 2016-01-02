var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require('react-tap-event-plugin');
var Mirror = require('./components/Mirror');
var ConnectedHome = require('./components/ConnectedHome');
var ReactRouter = require('react-router');
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;


//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var App = React.createClass({
  render() {
    return (
      <div className="MirrorReactApp">
        {this.props.children}
      </div>
    )
  }
});

ReactDOM.render(
  <Router>
        <Route name="root" path="/" component={App}>
            <IndexRoute component={Mirror} />
            <Route path="/connectedhome" component={ConnectedHome} />
        </Route>
  </Router>,
  document.getElementById('react-container')
)


// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
//
