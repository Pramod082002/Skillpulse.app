var TestModulesHistory = {
    m1 : {
        s1 : {
            subjectName : "C/C++",
            entryTest : false,
            exitTest : false,
        },
        s2 : {
            subjectName : "JAVA",
            entryTest : false,
            exitTest : false,
        },
        s3 : {
            subjectName : "OOPS",
            entryTest : false,
            exitTest : false,
        },
        s4 : {
            subjectName : "DSA",
            entryTest : false,
            exitTest : false,
        }
    },
    m2 : {
        s1 : {
            subjectName : "DBMS",
            entryTest : false,
            exitTest : false,
        },
        s2 : {
            subjectName : "CN",
            entryTest : true,
            exitTest : false,
        },
        s3 : {
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
                datatypes: -1,
                functions: -1,
                switch: -1,
                loops: -1,
                pointers: -1,
                totalMarks: -1,
            },
            java: {
                inheritance: -1,
                polymorphism: -1,
                encapsulation: -1,
                abstraction: -1,
                interfaces: -1,
                totalMarks: -1,
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
                totalMarks: -1,
            },
        },
        m2: {
            cn: {
                "Application Level Concepts": -1,
                "Hardware Concepts": -1,
                "Generic Questions": -1,
                "Data Transportation": -1,
                "understanding of Basic terminologies": -1,
                totalMarks: -1,
            },
            dbms: {
                normalization: -1,
                indexing: -1,
                transactions: -1,
                sql: -1,
                erDiagrams: -1,
                totalMarks: -1,
            },
            os: {
                processes: -1,
                memoryManagement: -1,
                fileSystems: -1,
                scheduling: -1,
                synchronization: -1,
                totalMarks: -1,
            },
        },
    },
    exitTest : {
        m1: {
            "c/c++": {
                datatypes: -1,
                functions: -1,
                switch: -1,
                loops: -1,
                pointers: -1,
                totalMarks: -1,
            },
            java: {
                inheritance: -1,
                polymorphism: -1,
                encapsulation: -1,
                abstraction: -1,
                interfaces: -1,
                totalMarks: -1,
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
                totalMarks: -1,
            },
        },
        m2: {
            cn: {
                "Application Level Concepts": -1,
                "Hardware Concepts": -1,
                "Generic Questions": -1,
                "Data Transportation": -1,
                "understanding of Basic terminologies": -1,
                totalMarks: -1,
            },
            dbms: {
                normalization: -1,
                indexing: -1,
                transactions: -1,
                sql: -1,
                erDiagrams: -1,
                totalMarks: -1,
            },
            os: {
                processes: -1,
                memoryManagement: -1,
                fileSystems: -1,
                scheduling: -1,
                synchronization: -1,
                totalMarks: -1,
            },
        },
    }
};


//for graph
var TestTotalMarks = {
    m1 : {
        "C/C++" : 7, 
        "JAVA" : -1,
        "OOPS" : 9,
        "DSA" : 9,
    },
    m2 : {
        "CN" : 0, 
        "DBMS" : 9,
        "OS" : -1,
    },
}

export {TestModulesHistory,TestTotalMarks}