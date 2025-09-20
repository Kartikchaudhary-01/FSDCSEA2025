// console.log("hello");

const student={
    name:"Ram",
    age: 20,
    branch: "CSE-A",
    language: [{
        lang1: "python",
        lang2: "cpp"
    },
    {
        db1: "oracle",
        db2: "mysql",
        db3: "mongodb"
    },
    {
        framework1: "hibernate",
        framework2: "spring",
    }
]
}

student.college="abes engineering college";
delete student.age;
console.log(student);