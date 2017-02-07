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
            console.log("EXPERIENCE LETTER UNKNOWN: " + letter);
            return letter;
    }
}

function getLinkForProject(project) {
    switch (project.toString().toLowerCase()) {
        case "box-model":
            return "http://braydond.smtchs.org/junior/box-model/box-model.html";
        case "foothills physical therapy":
            return "http://braydond.smtchs.org/junior/FoothillsPhysicalTherapy/";
        case "new alliance":
            return "http://braydond.smtchs.org/junior/new_alliance/";
        case "portfolio":
            return "http://braydond.smtchs.org/portfolio/";
        case "advance":
            return "https://advance.armgasys.com/";
        case "student work tracker":
            return "http://braydond.smtchs.org/file_reader.php?url=work_tracker/index.php";
        case "project 5":
            return "https://github.com/braydondavis/cs121-projects/tree/master/Project-5";
        case "any project":
            return "https://github.com/braydondavis/cs121-projects";
        case "nerd gaming":
            return "https://github.com/braydondavis/Nerd-Gaming-Public";
        case "quacker hunter":
            return "https://github.com/braydondavis/quacker-hunter";
        default:
            return "#";
    }
}

function getProjectNameFromAcronym(ac) {
    switch (ac.toString().trim().toLowerCase()) {
        case "a":
        case "advance":
            return "Advance";
        case "p5":
        case "project 5":
            return "Project 5";
        case "swt":
        case "student work tracker":
            return "Student Work Tracker";
        case "ng":
        case "nerd gaming":
            return "Nerd Gaming";
        case "qh":
        case "quacker hunter":
            return "Quacker Hunter";
        case "http":
        case "how to technical procedures":
            return "How To Technical Procedures";
        case "aosa":
        case "a one step away":
            return "A One Step Away";
        case "any project":
            return "Any Project";
        default:
            return ac.toString();
    }
}



var standards = {
    desktop: [
        createCategoryObject("Understanding Programming Principles", [
            createStandardObject("Applying basic programming principles", "J", "Advance", "Project 5", "SWT"),
            createStandardObject("Describe the difference between procedural and OOP", "J", "Advance", "SWT"),
            createStandardObject("Apply the features of OOP", "J", "Advance", "Project 5"),
            createStandardObject("Write a program that produces output", "J", "Advance", "Project 5", "SWT"),
            createStandardObject("Select identifiers to use within programs", "J", "Advance", "SWT"),
            createStandardObject("Improve programs by adding comments", "J", "Advance", "Project 5", "SWT"),
            createStandardObject("Write and run a program", "J", "Any project")
        ]),
        createCategoryObject("Problem Solving Through Programming", [
            createStandardObject("Demonstrate the process of declaring variables", "J", "Any project"),
            createStandardObject("Display variable values", "J", "Advance", "Project 5", " SWT"),
            createStandardObject("Apply integral data types", "J", "Advance", "Project 5", "SWT"),
            createStandardObject("Apply floating-point data types", "J", "Advance", "Project 5", "SWT"),
            createStandardObject("Apply arithmetic operators", "J", "Advance", "Project 5", "SWT"),
            createStandardObject("Apply boolean data type", "J", "Advance", "Project 5", "SWT"),
            createStandardObject("Apply numeric type conversion", "J", "Advance", "Project 5", "SWT"),
            createStandardObject("Apply char data type", "J", "Advance", "Project 5"),
            createStandardObject("Apply string data type", "J", "Advance", "Project 5", "SWT"),
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
            createStandardObject("Explain how to find more information on controls and events", "P", "P5", "SWT")
        ]),
        createCategoryObject("System Planning And Development", [
            createStandardObject("Describe the information systems development life cycle (SDLC)", "N", "A"),
            createStandardObject("Discuss how to evaluate off-the-shelf software", "E", "SWT"),
            createStandardObject("Explain reuse and its role in software development", "P", "A", "P5", "SWT"),
            createStandardObject("Describe the skills required to be an effective product manager", "N", "A", "SWT", "NG"),
            createStandardObject("List and describe the skill and activities of a project manager during project initiation, planning, execution, and close down", "N", "A", "SWT"),
            createStandardObject("Describe the steps for identifying and selecting projects and initiating and planning projects.", "N", "SWT"),
            createStandardObject("Compare various methods for assessing project feasibility", "P", "A", "SWT"),
        ]),
        createCategoryObject("Systems Analysis", [
            createStandardObject("Compare options for designing and conducting interviews to determine system requirements", "N", "A", "SWT"),
            createStandardObject("Develop a plan for conducting an interview to determine system requirements", "N", "A", "SWT"),
            createStandardObject("Explain the advantages and pitfalls of observing workers and analyzing business documnets to determine system requirements", "N", "A", "SWT"),
            createStandardObject("Plan a joint application design session", "E", "A"),
            createStandardObject("Use prototyping during requirements determination", "E", "A"),
            createStandardObject("Select appropriate methods to elicit system requirements", "J", "A", "P5", "SWT"),
            createStandardObject("Describe how requirements determination techniques apply to development of Internet applications", "E", "SWT"),
            createStandardObject("Demonstrate the logical modeling of processes through studying examples of data‐flow diagrams, pseudo code, and flowcharts", "E", "A")
        ]),
        createCategoryObject("Principles of Design", [
            createStandardObject("Explain the process of designing interfaces and dialogues and the deliverables for their creation", "N", "A"),
            createStandardObject("Apply the general guidelines for interface design, including guidelines for layout design, structuring data‐entry fields, providing feedback, and system help", "N", "A", "SWT"),
            createStandardObject("Concisely define each of the following key database design terms: relation, primary key, functional dependency, foreign key, referential integrity, field, data type, null value, demoralization, file organization, index, and secondary key", "N", "A", "SWT"),
            createStandardObject("Explain the role of designing databases in the analysis and design of an information system", "N", "A", "SWT"),
            createStandardObject("Transform an entity‐relation (E‐R) diagram into an equivalent set of well‐structured (normalized) relations", "N", "A", "SWT"),
            createStandardObject("Merge normalized relations from separate user views into a consolidated set of well‐structured relations", "N", "A", "SWT"),
            createStandardObject("Choose storage formats for fields in database tables", "N", "A", "SWT"),
            createStandardObject("Translate well‐structured relations into efficient database tables", "N", "A", "SWT"),
            createStandardObject("Explain when to use different types of file organizations to store computer files", "N", "A", "SWT"),
            createStandardObject("Describe the purpose indexes and the important considerations in selecting attributes to be indexed", "N", "A")
        ]),
        createCategoryObject("Implementation and Support", [
            createStandardObject("Describe the process of coding, testing, and converting an organizational information system", "P", "A", "SWT"),
            createStandardObject("Outline the deliverables and outcomes of an organizational information system", "N", "SWT"),
            createStandardObject("List the deliverables for documenting the system and for training and supporting users", "N", "SWT"),
            createStandardObject("Compare the many modes available for organizational information system training, including self‐training and electronic performance support systems", "N", "SWT"),
            createStandardObject("Discuss the issues of providing support for end users", "N", "A", "SWT"),
            createStandardObject("Explain why application implementation sometimes fails", "P", "A", "SWT"),
            createStandardObject("Describe several factors that influence the cost of maintaining an application", "N", "A")
        ])
    ],

    web: [
        createCategoryObject("Understand Web Page Development", [
            createStandardObject("Use Standards‐Compliant HTML to Create Basic Web Pages", "J", "A", "SWT"),
            createStandardObject("Use Styles to Format Web Pages", "J", "A", "SWT"),
            createStandardObject("Demonstrate an Understanding of Advanced CSS Selectors and Properties ", "J", "A", "SWT"),
        ]),
        createCategoryObject("Understand Web Page Design And Layout", [
            createStandardObject("Understanding of color theory", "N", "A", "SWT"),
            createStandardObject("Enchance web pages with list, images, and background-images", "P", "A", "SWT"),
            createStandardObject("Demonstrate understanding of and use of the box modal", "N", "Box-Model", "SWT"),
            createStandardObject("Demonstrate the ability to effectively design and layout web pages using css", "P", "A", "SWT", "Foothills Physical Therapy")
        ]),
        createCategoryObject("Understand Integration of Web Page Controls", [
            createStandardObject("Appropriately use tables to enhance their web pages", "P", "A", "SWT"),
            createStandardObject("Ability to use design and layout web forms", "P", "A", "SWT", "New Alliance")
        ]),
        createCategoryObject("Understand Web Related Planning And Organizational Standards", [
            createStandardObject("Understanding of website architecture and planning", "P", "A", "SWT"),
            createStandardObject("Understanding of site organization and navigation principles", "N", "A", "SWT", "HTTP"),
            createStandardObject("Understanding of Website Accessibility Standards", "N", "A", "SWT", "AOSA")
        ]),
        createCategoryObject("Understand Web Related Planning And Organizational Standards", [
            createStandardObject("Use mutlimedia on the web", "J", "A", "SWT", "Portfolio"),
            createStandardObject("Demonstrate brand and marketing and traffic analysis", "N", "A", "SWT"),
            createStandardObject("Understand the relationship between the web and social media", "E", "A"),
        ]),
    ]
}

/*
        createCategoryObject("", [
            createStandardObject("", "J", "A", "P5", "SWT"),
            createStandardObject("", "J", "A", "SWT"),
        ]),
*/






$(document).ready(function () {
    var desktopHTML = "";
    var webHTML = "";

    // Generate desktop code
    for (var i = 0; i < standards.desktop.length; i++) {
        desktopHTML += "<tr class='standardHeader collapsed'><td colspan=3>" + standards.desktop[i].category + "</td></tr>";
        for (var k = 0; k < standards.desktop[i].items.length; k++) {
            var item = standards.desktop[i].items[k];
            desktopHTML += "<tr class='standardBody'>";
            desktopHTML += "<td>" + item.name + "</td>";
            desktopHTML += "<td>" + getExperienceFromLetter(item.level) + "</td>";

            var projectHTML = "";
            if (item.sample1) projectHTML += "<a href='" + getLinkForProject(getProjectNameFromAcronym(item.sample1)) + "' target=_blank>" + getProjectNameFromAcronym(item.sample1) + "</a>";
            if (item.sample2) projectHTML += (projectHTML == "" ? "" : ", ") + "<a href='" + getLinkForProject(getProjectNameFromAcronym(item.sample2)) + "' target=_blank>" + getProjectNameFromAcronym(item.sample2) + "</a>";
            if (item.sample3) projectHTML += (projectHTML == "" ? "" : ", ") + "<a href='" + getLinkForProject(getProjectNameFromAcronym(item.sample3)) + "' target=_blank>" + getProjectNameFromAcronym(item.sample3) + "</a>";
            if (projectHTML == "") projectHTML = "<em>In Progress</em>";
            desktopHTML += "<td>" + projectHTML + "</td>";
            desktopHTML += "</tr>";
        }
    }
    $("#desktopTabContentTable tbody").html(desktopHTML);


    // Generate web content
    for (var i = 0; i < standards.web.length; i++) {
        webHTML += "<tr class='standardHeader collapsed'><td colspan=3>" + standards.web[i].category + "</td></tr>";
        for (var k = 0; k < standards.web[i].items.length; k++) {
            var item = standards.web[i].items[k];
            webHTML += "<tr class='standardBody'>";
            webHTML += "<td>" + item.name + "</td>";
            webHTML += "<td>" + getExperienceFromLetter(item.level) + "</td>";

            var projectHTML = "";
            if (item.sample1) projectHTML += "<a href='" + getLinkForProject(getProjectNameFromAcronym(item.sample1)) + "' target=_blank>" + getProjectNameFromAcronym(item.sample1) + "</a>";
            if (item.sample2) projectHTML += (projectHTML == "" ? "" : ", ") + "<a href='" + getLinkForProject(getProjectNameFromAcronym(item.sample2)) + "' target=_blank>" + getProjectNameFromAcronym(item.sample2) + "</a>";
            if (item.sample3) projectHTML += (projectHTML == "" ? "" : ", ") + "<a href='" + getLinkForProject(getProjectNameFromAcronym(item.sample3)) + "' target=_blank>" + getProjectNameFromAcronym(item.sample3) + "</a>";
            if (projectHTML == "") projectHTML = "<em>In Progress</em>";
            webHTML += "<td>" + projectHTML + "</td>";
            webHTML += "</tr>";
        }
    }
    $("#webTabContentTable tbody").html(webHTML);
});


