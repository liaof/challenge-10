const Employee = require('../lib/Employee');

test('creates an employee object',()=>{
    const employee = new Employee('Dave','1334','dave@davemail.dave');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('1334');
    expect(employee.email).toBe('dave@davemail.dave');
})

test('gets employee info',()=>{
    const employee = new Employee('Dave','1334','dave@davemail.dave');

    expect(employee.getInfo()).toHaveProperty('name');
    expect(employee.getInfo()).toHaveProperty('id');
    expect(employee.getInfo()).toHaveProperty('email'); 
})

test('gets employee role',()=>{
    const employee = new Employee();

    expect('Employee');
})
