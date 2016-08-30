var React = require('react');

var DeadlinesHeader = React.createClass({
    displayName: 'DeadlinesHeader',
    render() {
        return (
        	<div className="deadlineRow header">
        		<div className="column-25">Name <i className="fa fa-sort"></i></div>
        		<div className="column-25">Due date <i className="fa fa-sort"></i></div>
        		<div className="column-25">Days left <i className="fa fa-refresh"></i> <i className="fa fa-sort"></i></div>
        		<div className="column-25">Status <i className="fa fa-sort"></i></div>
        	</div>
        );
    }
});

module.exports = DeadlinesHeader;