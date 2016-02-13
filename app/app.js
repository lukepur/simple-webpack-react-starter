var React = require('react');

var Header = require('./components/header');
var Content = require('./components/content');
var Favicon = require('react-favicon');

var faviconUrl = require('./assets/favicon.ico');

module.exports = React.createClass({
  displayName: 'App',

  render: function () {
    return (<div>
              <Header/>
              <Content/>
              <Favicon url={ faviconUrl }/>
            </div>)
  }

});
