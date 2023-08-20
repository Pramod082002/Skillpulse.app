var TestModulesHistory = {
    m1 : {
        "c/c++" : {
            subjectName : "C/C++",
            entryTest : false,
            exitTest : false,
        },
        "java" : {
            subjectName : "JAVA",
            entryTest : false,
            exitTest : false,
        },
        "oops" : {
            subjectName : "OOPS",
            entryTest : false,
            exitTest : false,
        },
        "dsa" : {
            subjectName : "DSA",
            entryTest : false,
            exitTest : false,
        }
    },
    m2 : {
        "dbms" : {
            subjectName : "DBMS",
            entryTest : false,
            exitTest : false,
        },
        "cn" : {
            subjectName : "CN",
            entryTest : true,
            exitTest : false,
        },
        "os" : {
            subjectName : "OS",
            entryTest : false,
            exitTest : false,
        },
    }
}


//for rating bar
var TestTotalMarks = {
    entryTest : {
        m1: {
            "c/c++": {
                "Basic Syntax and Language Fundamentals": -1,
                "Functions and Scope": -1,
                "Arrays and Pointers": -1,
                "Object-Oriented Programming (C++)": -1,
                "File Handling and Input/Output": -1,
                totalMarks: -1,
            },
            java: {
                inheritance: -1,
                polymorphism: -1,
                encapsulation: -1,
                abstraction: -1,
                interfaces: -1,
                totalMarks: 5,
            },  
            oops: {
                classes: -1,
                objects: -1,
                constructors: -1,
                methods: -1,
                inheritance: -1,
                totalMarks: 7,
            },
            dsa: {
                arrays: -1,
                linkedLists: -1,
                stacks: -1,
                queues: -1,
                trees: -1,
                totalMarks: -1,
            },
        },
        m2: {
            cn: {
                "Introduction and Physical layer": -1,
                "Data link layer and LAN": -1,
                "Network and Routing": -1,
                "Transport layer": -1,
                "Application layer": -1,
                totalMarks: 3,
            },
            dbms: {
                "Relational Databases": -1,
                "Database Design": -1,
                "Transactions and Concurrency": -1,
                "Data Storage and Querying": -1,
                "Advanced topics": -1,
                totalMarks: -1,
            },
            os: {
                "Operating System Overview": -1,
                "Process Management": -1,
                "Storage Management and File System": -1,
                "I/O Systems": -1,
                "Case Study": -1,
                totalMarks: 4,
            },
        },
    },
    exitTest : {
        m1: {
            "c/c++": {
                "Basic Syntax and Language Fundamentals": -1,
                "Functions and Scope": -1,
                "Arrays and Pointers": -1,
                "Object-Oriented Programming (C++)": -1,
                "File Handling and Input/Output": -1,
                totalMarks: -1,
            },
            java: {
                inheritance: -1,
                polymorphism: -1,
                encapsulation: -1,
                abstraction: -1,
                interfaces: -1,
                totalMarks: 4,
            },  
            oops: {
                classes: -1,
                objects: -1,
                constructors: -1,
                methods: -1,
                inheritance: -1,
                totalMarks: -1,
            },
            dsa: {
                arrays: -1,
                linkedLists: -1,
                stacks: -1,
                queues: -1,
                trees: -1,
                totalMarks: 5,
            },
        },
        m2: {
            cn: {
                "Introduction and Physical layer": -1,
                "Data link layer and LAN": -1,
                "Network and Routing": -1,
                "Transport layer": -1,
                "Application layer": -1,
                totalMarks: -1,
            },
            dbms: {
                "Relational Databases": -1,
                "Database Design": -1,
                "Transactions and Concurrency": -1,
                "Data Storage and Querying": -1,
                "Advanced topics": -1,
                totalMarks: -1,
            },
            os: {
                "Operating System Overview": -1,
                "Process Management": -1,
                "Storage Management and File System": -1,
                "I/O Systems": -1,
                "Case Study": -1,
                totalMarks: -1,
            },
        },
    },
};


//for graph
// var TestTotalMarks = {
//     m1 : {
//         "c/c++" : 7, 
//         "java" : -1,
//         "oops" : 9,
//         "dsa" : 9,
//     },
//     m2 : {
//         "cn" : 0, 
//         "dbms" : 9,
//         "os" : -1,
//     },
// }

export {TestModulesHistory,TestTotalMarks}