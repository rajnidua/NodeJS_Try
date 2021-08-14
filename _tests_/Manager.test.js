const Manager = require("../lib/Manager");




  describe("Manager class",() =>{
    describe("constructor function should set the office number for manager",()=>{
        it("constructor function should set the office number for manager",() =>{
            
            const officeNumber = "123456";
            const employee = new Engineer("Rajni", 1, "rajni.dua14@gmail.com", officeNumber);
            expect(employee.officeNumber).toBe(officeNumber);
        });
    });
    describe("getRole function should return the value of role as Manager",()=>{
        it("getRole function should return the value of role as Manager",() =>{
            
            const role = "Manager";
    const employee = new Engineer("Rajni", 1, "rajni.dua14@gmail.com", "123456");
    expect(employee.getRole()).toBe(role);
        });
    });
    })