/*
LEVELS:
E = Exposure = 0
N = Novice = 1
P = Proficient = 2
J = Journeyman  = 3
*/
function createCategoryObject(name, items) {
    return {
        category: name,
        items: items
    }
}

function createStandardObject(name, level, sample1, sample2, sample3) {
    return {
        name: name,
        level: level,
        sample1: sample1,
        sample2: sample2,
        sample3: sample3
    }
}

function getExperienceFromLetter(letter) {
    switch (letter.toString().toLowerCase()) {
        case "e":
            return "Exposed";
        case "n":
            return "Novice";
        case "p":
            return "Proficient";
        case "j":
            return "Journeyman";
        default:
            return letter;
    }
}

function getLinkForProject(project) {
    switch (project.toString().toLowerCase()) {

        default:
            return "#";
    }
}

function collapseStandardSection(index, forDesktop = true) {
    var e;
    if (forDesktop)
        e = standards.desktop;
    else
        e = standards.web;


}

function expandStandardSection(index, forDesktop = true) {
    var e;
    if (forDesktop)
        e = standards.desktop;
    else
        e = standards.web;
}

function getProjectNameFromAcronym(ac) {
    switch (ac.toString().toLowerCase()) {
        case "a":
            return "Advance";
        case "p5":
            return "Project 5";
        case "swt":
            return "Student Work Tracker";
        case "ng":
            return "Nerd Gaming";
        case:"qh":
            return "Quacker Hunter";
        default:
            return ac.toString();
    }
}



/*
        createCategoryObject("", [
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT")
        ]),
*/

var standards = {
    desktop: [
        createCategoryObject("Understanding Programming Principles", [
            createStandardObject("Applying basic programming principles", "J", "Advance", "Project 5", "Student Work Tracker"),
            createStandardObject("Describe the difference between procedural and OOP", "J", "Advance", "Student Work Tracker"),
            createStandardObject("Apply the features of OOP", "J", "Advance", "Project 5"),
            createStandardObject("Write a program that produces output", "J", "Advance", "Project 5", "Student Work Tracker"),
            createStandardObject("Select identifiers to use within programs", "J", "Advance", "Student Work Tracker"),
            createStandardObject("Improve programs by adding comments", "J", "Advance", "Project 5", "Student Work Tracker"),
            createStandardObject("Write and run a program", "J", "Any project")
        ]),

        createCategoryObject("Problem Solving Through Programming", [
            createStandardObject("Demonstrate the process of declaring variables", "J", "Any project"),
            createStandardObject("Display variable values", "J", "Advance", "Project 5", " Student Work Tracker"),
            createStandardObject("Apply integral data types", "J", "Advance", "Project 5", " Student Work Tracker"),
            createStandardObject("Apply floating-point data types", "J", "Advance", "Project 5", " Student Work Tracker"),
            createStandardObject("Apply arithmetic operators", "J", "Advance", "Project 5", " Student Work Tracker"),
            createStandardObject("Apply boolean data type", "J", "Advance", "Project 5", " Student Work Tracker"),
            createStandardObject("Apply numeric type conversion", "J", "Advance", "Project 5", " Student Work Tracker"),
            createStandardObject("Apply char data type", "J", "Advance", "Project 5"),
            createStandardObject("Apply string data type", "J", "Advance", "Project 5", " Student Work Tracker"),
            createStandardObject("Define name constants and enumerations", "J", "Advance", "Project 5", "SWT")
        ]),

        createCategoryObject("Use Logic In Programming", [
            createStandardObject("Demonstrate logic-planning tools and decision-making", "P", "A", "P5", "SWT"),
            createStandardObject("Make decision using the 'if' statement", "J", "Any Project"),
            createStandardObject("Make decisions using the if-else statement", "J", "Any Project"),
            createStandardObject("Apply compound expressions in if statements", "J", "A", "P5", "SWT"),
            createStandardObject("Make decisions using the switch statement", "J", "A", "P5", "SWT"),
            createStandardObject("Apply the conditional operator", "J", "A", "P5", "SWT"),
            createStandardObject("Apply the NOT operator", "J", "A", "P5", "SWT"),
            createStandardObject("Describe how to avoid common errros", "J", "A", "P5", "SWT")
        ]),

        createCategoryObject("Programming And Validation", [
            createStandardObject("Locate a logic error by stepping through code", "J", "A", "P5"),
            createStandardObject("Locate logic errors using breakpoints", "J", "A", "P5"),
            createStandardObject("Fix syntax and logic errors", "J", "A", "P5", "SWT"),
            createStandardObject("Select appropriate test data for an application", "J", "A", "P5", "SWT")
        ]),

        createCategoryObject("Understand Repetition In Programming", [
            createStandardObject("Apply the loop structure", "J", "A", "P5", "SWT"),
            createStandardObject("Create loops using the while statement", "J", "A", "P5", "SWT"),
            createStandardObject("Create loops using the for statement", "J", "A", "P5", "SWT"),
            createStandardObject("Create loops uising the do statement", "J", "A", "P5", "SWT"),
            createStandardObject("Apply nested loops", "J", "A", "P5", "SWT"),
            createStandardObject("Apply accumulators", "J", "A", "P5", "SWT"),
            createStandardObject("Understand and describe how to improve loops performance", "J", "A", "P5", "SWT")
        ]),

        createCategoryObject("Demonstrate Programming Functionality", [
            createStandardObject("Describe methods and implementation hiding", "P", "A", "P5"),
            createStandardObject("Write methods with no params, no return", "J", "A", "P5", "SWT"),
            createStandardObject("Write methods that require a single argument", "J", "A", "P5", "SWT"),
            createStandardObject("Write methods that require multiple arguments", "J", "A", "P5", "SWT"),
            createStandardObject("Write a method that returns a value", "J", "Any Project"),
            createStandardObject("Pass an array to a method", "J", "A", "SWT"),
            createStandardObject("Overload Methods", "J", "A"),
            createStandardObject("Demonstrate how to avoid methods", "J", "A", "P5"),
            createStandardObject("Apply optional parameters", "J", "A", "SWT")
        ]),

        createCategoryObject("Understand Arrays And Structure Concepts", [
            createStandardObject("Declare an array ", "J", "A", "P5", "SWT"),
            createStandardObject("Access array elements", "J", "A", "P5", "SWT"),
            createStandardObject("Search an array using a loop", "J", "A", "P5", "SWT"),
            createStandardObject("Apply multidimensional arrays", "J", "A", "P5", "SWT")
        ]),

        createCategoryObject("Understand Classes In Programming", [
            createStandardObject("Describe and apply class concept", "J", "A", "P5", "SWT"),
            createStandardObject("Create classes from which objects can be instantiated", "J", "A", "P5", "SWT"),
            createStandardObject("Create objects", "J", "A", "P5", "SWT"),
            createStandardObject("Create properties, including auto-implementing properties", "J", "A", "P5", "SWT"),
            createStandardObject("Use public fields and private methods", "J", "A", "P5", "SWT"),
            createStandardObject("Define the 'this' reference", "J", "A", "P5", "SWT"),
            createStandardObject("Write constructors", "J", "A", "P5", "SWT"),
            createStandardObject("Use object initializers", "J", "A", "P5", "SWT"),
            createStandardObject("Overload operators", "J", "A", "P5"),
            createStandardObject("Declare an array of objects", "J", "A", "P5", "SWT"),
            createStandardObject("Use sorting methods with an array of objects", "J", "A", "P5", "SWT"),
            createStandardObject("Write deconstructors", "P", "A"),
            createStandardObject("Describe and demonstrate inheritance", "P", "A", "P5", "SWT"),
            createStandardObject("Extend classes", "J", "A", "SWT"),
            createStandardObject("Override base class methods", "J", "A", "SWT"),
            createStandardObject("Describe how an object is derived from a base class", "J", "A", "P5", "SWT"),
            createStandardObject("Define the object class", "J", "A", "P5", "SWT"),
            createStandardObject("Write abstract classes", "P", "A", "SWT"),
            createStandardObject("Create use interfaces", "N", "SWT"),
            createStandardObject("Apply extension methods", "P", "A", "SWT"),
            createStandardObject("Describe the benefits of inheritance", "P", "A", "P5", "SWT"),
            createStandardObject("Recognize inheritance in GUI applications", "P", "A", "P5", "SWT")
        ]),

        createCategoryObject("Understand Programming And Exceptions", [
            createStandardObject("Compare and demonstrate OOP error-handling methods", "P", "A", "P5", "SWT"),
            createStandardObject("Cast data types", "J", "A", "P5", "SWT"),
            createStandardObject("Catch multiple exceptions", "J", "A"),
            createStandardObject("Apply the finally block", "J", "A"),
            createStandardObject("Handle exceptions thrown from outside methods", "J", "A", "P5"),
            createStandardObject("Trace exceptions through the call stack", "J", "A", "P5"),
            createStandardObject("Create exception classes", "J", "A", "SWT"),
            createStandardObject("Re-throw exceptions", "J", "A")
        ]),

        createCategoryObject("Understand Programming And Events", [
            createStandardObject("Define and apply event handling", "P", "A", "P5", "SWT"),
            createStandardObject("Define and describe delegates", "J", "A", "P5"),
            createStandardObject("Declare own events and handlers", "P", "A", "NG"),
            createStandardObject("Use built-in event handlers", "J", "A", "P5"),
            createStandardObject("Handle control component events", "P", "P5"),
            createStandardObject("Handle mouse and keyboard events", "J", "NG"),
            createStandardObject("Manage multiple controls", "J", "QH", "P5"),
            createStandardObject("Explain how to find more information on controls and events", "P", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "P5", "SWT")
        ]),
    ],

    web: []
}

$(document).ready(function () {
    var desktopHTML = "";
    var webHTML = "";

    for (var i = 0; i < standards.desktop.length; i++) {
        desktopHTML += "<tr class='standardHeader collapsed'><td colspan=3>" + standards.desktop[i].category + "</td></tr>";
        for (var k = 0; k < standards.desktop[i].items.length; k++) {
            var item = standards.desktop[i].items[k];
            desktopHTML += "<tr class='standardBody'>";
            desktopHTML += "<td>" + item.name + "</td>";
            desktopHTML += "<td>" + getExperienceFromLetter(item.level) + "</td>";

            var projectHTML = "";
            if (item.sample1) projectHTML += "<a href='" + getLinkForProject(item.sample1) + "'>" + getProjectNameFromAcronym(item.sample1) + "</a>";
            if (item.sample2) projectHTML += (projectHTML == "" ? "" : ", ") + "<a href='" + getLinkForProject(item.sample2) + "'>" + getProjectNameFromAcronym(item.sample2) + "</a>";
            if (item.sample3) projectHTML += (projectHTML == "" ? "" : ", ") + "<a href='" + getLinkForProject(item.sample3) + "'>" + getProjectNameFromAcronym(item.sample3) + "</a>";
            if (projectHTML == "") projectHTML = "<em>In Progress</em>";
            desktopHTML += "<td>" + projectHTML + "</td>";
            desktopHTML += "</tr>";
        }
    }

    $("#desktopTabContentTable tbody").html(desktopHTML);

});


