var React = require('react');

var DeadlinesHeader = React.createClass({
    displayName: 'DeadlinesHeader',

    headerClass(type){
        if(this.props.orderedBy === null){
            return "fa fa-sort";
        } else {
            if(type === this.props.orderedBy.type){
                return "fa fa-sort-"+this.props.orderedBy.direction;
            } else {
                return "fa fa-sort";
            }
        }

    },

    render() {
        return (
            <tr>
                <th>
                    Course <i className={this.headerClass("course")+" cursor"} onClick={this.props.updateOrder.bind(null, "course")}></i>
                </th>
                <th>
                    Name <i className={this.headerClass("name")+" cursor"} onClick={this.props.updateOrder.bind(null, "name")}></i>
                </th>
                <th colSpan="2">
                    Due date <i className={this.headerClass("due")+" cursor"} onClick={this.props.updateOrder.bind(null, "due")}></i>
                </th>
                <th>
                    Status <i className={this.headerClass("status")+" cursor"} onClick={this.props.updateOrder.bind(null, "status")}></i>
                </th>
            </tr>
        	
        );
    }
});

module.exports = DeadlinesHeader;