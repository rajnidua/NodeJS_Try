const Intern = require("../lib/Intern");




  describe("Intern class",() =>{
    describe("constructor function should set the school name for Intern",()=>{
        it("constructor function should set the school name for Intern",() =>{
            
            const school = "Uni Adelaide";
            const employee = new Intern("Rajni", 1, "rajni.dua14@gmail.com", school);
            expect(employee.school).toBe(school);
        });
    });
    describe("getRole function should return the value of role as intern",()=>{
        it("getRole function should return the value of role as intern",() =>{
            
            const role = "Intern";
    const employee = new Intern("Rajni", 1, "rajni.dua14@gmail.com", "Uni Adelaide");
    expect(employee.getRole()).toBe(role);
        });
    });
    })