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
		var timeToDeadline = this.props.info.due.getTime() - this.props.info.todaysDate.getTime();
    	var daysToDeadline = Math.ceil(timeToDeadline / (1000 * 3600 * 24));

        var dueMessage = daysToDeadline+" days left"
        
        if(daysToDeadline >= 7){
            var dueUrgency = "urgencyIndicator chill";
        } else if ((7 > daysToDeadline) && (daysToDeadline >= 3)) {
            var dueUrgency = "urgencyIndicator medium";
        } else if((3 > daysToDeadline) && (daysToDeadline >= 0)){
            var dueUrgency = "urgencyIndicator stress";
        } else {
            if(this.props.info.status === "Finished"){
                dueMessage = "Finished";
                var dueUrgency = "urgencyIndicator chill";
            } else {
                dueMessage = "DL passed!";
                var dueUrgency = "urgencyIndicator stress";
            }
        }

        return (
            <tr>
                <td>{this.props.info.course}</td>
                <td>{this.props.info.name}</td>
                <td>{this.renderDate()}</td>
                <td className={dueUrgency}>{dueMessage}</td>
                <td className={"status "+this.props.info.status.toLowerCase()}>
                    {this.props.info.status}
                </td>
            </tr>
        );
    }
});
                    // <select name="options">
                    //     <option value="Finished">Finished</option>
                    //     <option value="Started">Started</option>
                    //     <option value="Untouched">Untouched</option>
                    // </select>

module.exports = DeadlineRow;