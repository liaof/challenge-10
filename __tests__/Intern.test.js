const Intern = require('../lib/Intern');

test('creates a manager object',()=>{
    const intern = new Intern('Davis','77777777','davis@davismail.davis','Hogwarts');

    expect(intern.name).toBe('Davis');
    expect(intern.id).toBe('77777777');
    expect(intern.email).toBe('davis@davismail.davis');
    expect(intern.school).toBe('Hogwarts');
});

test('gets manager info',()=>{
    const intern = new Intern('Davis','77777777','davis@davismail.davis','Hogwarts');

    expect(intern.getInfo()).toHaveProperty('name');
    expect(intern.getInfo()).toHaveProperty('id');
    expect(intern.getInfo()).toHaveProperty('email');
    expect(intern.getInfo()).toHaveProperty('school');
})

test('gets manager role',()=>{
    const intern = new Intern();

    expect('Intern');
})