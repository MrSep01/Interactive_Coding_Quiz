const questions = [
    {
        question: 'What is the correct way to declare a variable in JavaScript?',
        answers: ['var name;', 'variable name;', 'v name;', 'var = name;'],
        correct: 0
    },
   
        {
            question: 'What is the correct way to declare a variable in JavaScript?',
            answers: ['var name;', 'variable name;', 'v name;', 'var = name;'],
            correct: 0
        },
        {
            question: 'Which of the following is not a reserved word in JavaScript?',
            answers: ['interface', 'throws', 'program', 'short'],
            correct: 2
        },
        {
            question: 'How do you write "Hello World" in an alert box?',
            answers: ['alert("Hello World");', 'msg("Hello World");', 'msgBox("Hello World");', 'alertBox("Hello World");'],
            correct: 0
        },
      
        {
            question: 'What will the code "Boolean(3 < 7)" return?',
            answers: ['true', 'false', 'NaN', 'undefined'],
            correct: 0
        },
        {
            question: 'What is the correct syntax for referring to an external script called "script.js"?',
            answers: ['<script src="script.js">', '<script href="script.js">', '<script link="script.js">', '<script name="script.js">'],
            correct: 0
        },
        {
            question: 'How do you create a function in JavaScript?',
            answers: ['function myFunction()', 'function = myFunction()', 'function : myFunction()', 'function :: myFunction()'],
            correct: 0
        },
        {
            question: 'How do you call a function named "myFunction"?',
            answers: ['call myFunction()', 'myFunction()', 'call function myFunction()', 'Call.myFunction()'],
            correct: 1
        },
        {
            question: 'How to write an IF statement in JavaScript?',
            answers: ['if i = 5', 'if i == 5 then', 'if (i == 5)', 'if i = 5 then'],
            correct: 2
        },
        {
            question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
            answers: ['if (i != 5)', 'if i <> 5', 'if (i <> 5)', 'if i =! 5 then'],
            correct: 0
        },
        {
            question: 'How does a WHILE loop start?',
            answers: ['while (i <= 10)', 'while (i <= 10; i++)', 'while i = 1 to 10', 'while (i <= 10; i += 1)'],
            correct: 0
        },
        {
            question: 'How does a FOR loop start?',
            answers: ['for (i = 0; i <= 5)', 'for i = 1 to 5', 'for (i = 0; i <= 5; i++)', 'for (i <= 5; i++)'],
            correct: 2
        },
        {
            question: 'What is the correct way to write a JavaScript array?',
            answers: ['var colors = "red", "green", "blue"', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = ["red", "green", "blue"]'],
            correct: 3
        },
        {
            question: 'How do you find the number with the highest value of x and y?',
            answers: ['Math.ceil(x, y)', 'Math.max(x, y)', 'top(x, y)', 'ceil(x, y)'],
            correct: 1
        },
        {
            question: 'What is the correct JavaScript syntax for opening a new window called "windowName"?',
            answers: ['window.open(name, "windowName")', 'window.new("windowName")', 'new window("windowName")', 'window.open("windowName")'],
            correct: 3
        },
        {
            question: 'JavaScript is the same as Java.',
            answers: ['True', 'False'],
            correct: 1
        },
        {
            question: 'How can you detect the client\'s browser name?',
            answers: ['navigator.appName', 'browser.name', 'client.navName', 'navigator.browserName'],
            correct: 0
        },
        {
            question: 'Which event occurs when the user clicks on an HTML element?',
            answers: ['onmouseclick', 'onmouseover', 'onclick', 'onchange'],
            correct: 2
        },
        {
            question: 'How do you declare a JavaScript variable?',
            answers: ['variable carName;', 'v carName;', 'var carName;', 'var name carName;'],
            correct: 2
        },
        {
            question: 'Which operator is used to assign a value to a variable?',
            answers: ['-', '*', '=', 'x'],
            correct: 2
        },
        {
            question: 'What will the following code return: Boolean(10 > 9)',
            answers: ['true', 'false', 'NaN', 'undefined'],
            correct: 0
        },
        {
            question: 'Is JavaScript case-sensitive?',
            answers: ['Yes', 'No'],
            correct: 0
        },
        {
            question: 'Which method of an Array object adds and/or removes elements from an array?',
            answers: ['toSource()', 'sort()', 'splice()', 'unshift()'],
            correct: 2
        },
        {
            question: 'What will the code "Number(1) + 1" return?',
            answers: ['11', '2', 'NaN', 'undefined'],
            correct: 1
        },
        {
            question: 'What will the code "String(1) + 1" return?',
            answers: ['11', '2', 'NaN', 'undefined'],
            correct: 0
        },
        {
            question: 'How do you write a comment in JavaScript?',
            answers: ['<!--This is a comment-->', '//This is a comment', '/*This is a comment*/', 'Both //This is a comment and /*This is a comment*/'],
            correct: 3
        },
        {
            question: 'What is the correct way to create a JavaScript object?',
            answers: ['var obj = new Object()', 'var obj = Object()', 'var obj = {}', 'All of the above'],
            correct: 3
        },
        {
            question: 'How can you get the type of a variable in JavaScript?',
            answers: ['typeof variable', 'variable.type', 'getType(variable)', 'varType(variable)'],
            correct: 0
        },
        {
            question: 'What is the correct way to check if a variable is an array in JavaScript?',
            answers: ['if (variable.isArray())', 'if (Array.isArray(variable))', 'if (variable === [])', 'if (variable.type === "array")'],
            correct: 1
        },
       
    
];      