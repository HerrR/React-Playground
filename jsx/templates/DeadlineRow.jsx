var React = require('react');

var DeadlineRow = React.createClass({
    displayName: 'DeadlineRow',

    renderDate: function(dateObj){
    	var year = this.props.info.due.getFullYear();
    	var month = this.props.info.due.getMonth();
    	var day = this.props.info.due.getDate();

    	var month = ("0"+month).slice(-2);
    	var day = ("0"+day).slice(-2);
    	return year + "-" + month + "-" + day;
    },

    render() {
		var timeToDeadline = this.props.info.todaysDate.getTime() - this.props.info.due.getTime();
    	var daysToDeadline = Math.ceil(timeToDeadline / (1000 * 3600 * 24));
    	console.log("Time to deadline: ", timeToDeadline, "Days to deadline: ",daysToDeadline);
    	var rowType = this.props.index%2 == 0 ? "odd" : "even";
        return (
        	<div className={"deadlineRow "+rowType}>
            	<div className="column-25">{this.props.info.name}</div>
            	<div className="column-25">{this.renderDate()}</div>
            	<div className="column-25">{daysToDeadline}</div>
            	<div className="column-25">{this.props.info.status}</div>
            </div>
        );
    }
});

module.exports = DeadlineRow;