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

function collapseStandardSection(index, forDesktop=true) {
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



//createStandardObject("", "", "", "", ""),
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
            createStandardObject("Define name constants and enumerations", "J", "Advance", "Project 5", " Student Work Tracker")
        ])
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
            if (item.sample1) projectHTML += "<a href='" + getLinkForProject(item.sample1) + "'>" + item.sample1 + "</a>";
            if (item.sample2) projectHTML += (projectHTML == "" ? "" : ", ") + "<a href='" + getLinkForProject(item.sample2) + "'>" + item.sample2 + "</a>";
            if (item.sample3) projectHTML += (projectHTML == "" ? "" : ", ") + "<a href='" + getLinkForProject(item.sample3) + "'>" + item.sample3 + "</a>";
            if (projectHTML == "") projectHTML = "<em>In Progress</em>";
            desktopHTML += "<td>" + projectHTML + "</td>";
            desktopHTML += "</tr>";
        }
    }

    $("#desktopTabContentTable tbody").html(desktopHTML);

});


