const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can start employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Can set name", () => {
        const name = "Mike";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Can set id", () => {
        const testValue = 100;
        const e = new Employee("Mike", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Can set email", () => {
        const testValue = "test@test.com";
        const e = new Employee("Mike", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Mike";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 100;
            const e = new Employee("Mike", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email", () => {
            const testValue = "test@test.com";
            const e = new Employee("Mike", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole should return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Mike", 1, "test@test.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});