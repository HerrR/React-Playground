var React = require('react');
var CourseRow = require('./CourseRow.jsx');

var Sidebar = React.createClass({
    displayName: 'Sidebar',

    render() {

    	var courses = [];
    	for (var i = this.props.courses.length - 1; i >= 0; i--) {
    		courses.push(<CourseRow name={this.props.courses[i]} key={i} displayCourses={this.props.displayCourses} addRemoveCourseDisplay={this.props.addRemoveCourseDisplay}/>)
    	};

        return (
            <div className="sidebar">
            	<h3>Courses</h3>
            	{courses}
            </div>
        );
    }
});

module.exports = Sidebar;