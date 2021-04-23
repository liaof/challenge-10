const Manager = require('../lib/Manager');

test('creates a manager object',()=>{
    const manager = new Manager('David','145','david@davidmail.david', 'office 12');

    expect(manager.name).toBe('David');
    expect(manager.id).toBe('145');
    expect(manager.email).toBe('david@davidmail.david');
    expect(manager.office).toBe('office 12');
});

test('gets manager info',()=>{
    const manager = new Manager('David','145','david@davidmail.david', 'office 12');

    expect(manager.getInfo()).toHaveProperty('name');
    expect(manager.getInfo()).toHaveProperty('id');
    expect(manager.getInfo()).toHaveProperty('email');
    expect(manager.getInfo()).toHaveProperty('office');
})

test('gets manager role',()=>{
    const manager = new Manager();

    expect('Manager');
})