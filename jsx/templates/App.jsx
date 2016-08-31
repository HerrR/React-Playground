var React = require('react');
var Header = require('./Header.jsx');
var Body = require('./Body.jsx');
var Sidebar = require('./Sidebar.jsx');

var App = React.createClass({
    displayName: 'App',

    getInitialState() {
        var deadlines = this.props.deadlines;
        var uniqueCourses = [];

        // Filter out unique course codes
        for (var i = deadlines.length - 1; i >= 0; i--) {
            if(uniqueCourses.indexOf(deadlines[i].course) == -1){
                uniqueCourses.push(deadlines[i].course);
            }
        };

        return {
            courses: uniqueCourses.slice(0),
            displayCourses: uniqueCourses.slice(0)
        };
    },

    render() {
        return (
        	<div className="wrapper">
            	<Header />
                <Sidebar courses={this.state.courses} displayCourses={this.state.displayCourses} addRemoveCourseDisplay={this.addRemoveCourseDisplay} />
            	<Body deadlines={this.props.deadlines} displayCourses={this.state.displayCourses} />
            </div>
        );
    },

    addRemoveCourseDisplay(course){

        var courseIndex = this.state.displayCourses.indexOf(course);
        var previousCourses = this.state.displayCourses;
        
        if(courseIndex == -1){
            previousCourses.push(course);
            this.setState({displayCourses: previousCourses});
        } else {
            previousCourses.splice(courseIndex, 1);
            this.setState({displayCourses: previousCourses});
        }
    }
});

module.exports = App;


// Sample data
var sampleData = [
    {
        course: "DM2558",
        name: "A longer name for a deadline", 
        due: new Date('2016-08-30'), 
        status: 'Started'
    },
    {
        course: "DM2571",
        name: "An even longer name for a deadline", 
        due: new Date('2016-09-04'), 
        status: 'Untouched'
    },
    {
        course: "DM2571",
        name: "Deadline 3", 
        due: new Date('2016-09-06'), 
        status: 'Finished'
    },
    {
        course: "DM2558",
        name: "Deadline 4", 
        due: new Date('2016-09-01'), 
        status: 'Untouched'
    },
    {
        course: "DH2413",
        name: "Deadline 5", 
        due: new Date('2016-09-03'), 
        status: 'Started'
    }
];

ReactDOM.render(
	<App deadlines={sampleData}/>,
	document.getElementById('app')
)