var React = require('react');
var DeadlineRow = require('./DeadlineRow.jsx');
var DeadlinesHeader = require('./DeadlinesHeader.jsx');

var Body = React.createClass({
    displayName: 'Body',

    getInitialState() {
        return {
            orderBy: {type: "due", direction:"asc"}  
        };
    },

    generateDeadlineRows(deadlines){
        var orderBy = this.state.orderBy;
        
        function normalComparison(a,b){
            if(a[orderBy.type] < b[orderBy.type]){
                if(orderBy.direction === "desc") {
                    return -1;
                } else {
                    return 1;
                }
            } else if (a[orderBy.type] > b[orderBy.type]){
                if(orderBy.direction === "desc") {
                    return 1;
                } else {
                    return -1;
                }
            } else {
                return 0
            }
        }

        function statusComparison(a,b){
            var statusValues = {"Untouched": -1, "Started":0, "Finished": 1};
            if(statusValues[a[orderBy.type]] < statusValues[b[orderBy.type]]){
                if(orderBy.direction === "desc"){
                    return 1;
                } else {
                    return -1;
                }
            } else if(statusValues[a[orderBy.type]] > statusValues[b[orderBy.type]]) {
                if(orderBy.direction === "desc"){
                    return -1;
                } else {
                    return 1;
                }
            } else {
                return 0;
            }
        }

        if(orderBy.type === "status"){
            deadlines.sort(statusComparison);
        } else {
            deadlines.sort(normalComparison);
        }


        var DeadlineRows = [];
        
        for (var i = deadlines.length - 1; i >= 0; i--) {
            if(this.props.displayCourses.indexOf(deadlines[i].course) != -1){
                deadlines[i].todaysDate = new Date();
                DeadlineRows.push(<DeadlineRow info={ deadlines[i] } key={i}/>);    
            }
        };

        return DeadlineRows;

    },

    orderBy(type){
        if(this.state.orderBy.type === type){
            if(this.state.orderBy.direction === "desc"){
                this.setState({orderBy: {type:this.state.orderBy.type, direction: "asc"}});
            } else {
                this.setState({orderBy: {type:this.state.orderBy.type, direction: "desc"}});
            }
        } else {
            this.setState({orderBy: {type:type, direction: "desc"}});
        }
    },
    
    render() {

        var DeadlineRows = this.generateDeadlineRows(this.props.deadlines);

        return (
            <table className="deadlinesTable" cellSpacing="1" cellPadding="1">
                <DeadlinesHeader updateOrder={this.orderBy} orderedBy={this.state.orderBy}/>
                {DeadlineRows}
            </table>
        );
    }
});

module.exports = Body;