var React = require('react');
var DeadlineRow = require('./DeadlineRow.jsx');
var DeadlinesHeader = require('./DeadlinesHeader.jsx');

var Body = React.createClass({
    displayName: 'Body',
    render() {

    	var DeadlineRows = [];
    	this.props.deadlines.forEach(
    		function(deadline, index){
    			deadline.todaysDate = new Date();
    			DeadlineRows.push(<DeadlineRow index={index} info={deadline} key={index}/>)

    		}
    	);

        return (
        	<div>
        		<DeadlinesHeader />
            	{DeadlineRows}
            </div>
        );
    }
});

module.exports = Body;