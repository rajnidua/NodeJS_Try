const Engineer = require("../lib/Engineer");




  describe("Engineer class",() =>{
    describe("constructor function should set the github name for engineer",()=>{
        it("constructor function should set the github name for engineer",() =>{
            
            const github = "rajnidua";
            const employee = new Engineer("Rajni", 1, "rajni.dua14@gmail.com", github);
            expect(employee.github).toBe(github);
        });
    });
    describe("getRole function should return the value of role as engineer",()=>{
        it("getRole function should return the value of role as engineer",() =>{
            
            const role = "Engineer";
    const employee = new Engineer("Rajni", 1, "rajni.dua14@gmail.com", "rajnidua");
    expect(employee.getRole()).toBe(role);
        });
    });
    })