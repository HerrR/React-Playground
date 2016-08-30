var React = require('react');
var Header = require('./Header.jsx');
var Body = require('./Body.jsx');

var App = React.createClass({
    displayName: 'App',

    getInitialState() {
    	var deadlines = [
    		{
    			name: "Deadline 1", 
    			due: new Date('2016-08-30'), 
    			status: 'Started'
    		},
    		{
    			name: "Deadline 2", 
    			due: new Date('2016-09-04'), 
    			status: 'Incomplete'
    		}
    	]; 
        return {
        	message: "Hello World!",
        	deadlines: deadlines
        };
    },

    render() {
    	var message = this.state.message;
    	var deadlines = this.state.deadlines;
        return (
        	<div className="wrapper">
            	<div><Header /></div>
            	<div><Body message={message} deadlines={deadlines}/></div>
            </div>
        );
    }
});

module.exports = App;

ReactDOM.render(
	<App />,
	document.getElementById('app')
)