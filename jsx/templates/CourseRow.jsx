var React = require('react');

var CourseRow = React.createClass({
    displayName: 'CourseRow',

    render() {
    	var name = this.props.name;
    	var checked = false;

    	if(this.props.displayCourses.indexOf(name) != -1){
    		checked = true;
    	}

        return (
            <div>
            	<input type="checkbox" checked={checked} onClick={this.props.addRemoveCourseDisplay.bind(null, name)}/> {name}
            </div>
        );
    }
});

module.exports = CourseRow;