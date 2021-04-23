
const Engineer = require('../lib/Engineer');

test('creates an engineer object', ()=>{
    const engineer = new Engineer('Davy','66','davy@davymail.davy','davygit');

    expect(engineer.name).toBe('Davy');
    expect(engineer.id).toBe('66');
    expect(engineer.email).toBe('davy@davymail.davy');
    expect(engineer.github).toBe('davygit');
})

test('gets engineer info', ()=>{
    const engineer = new Engineer('Davy','66','davy@davymail.davy','davygit');

    expect(engineer.getInfo()).toHaveProperty('name');
    expect(engineer.getInfo()).toHaveProperty('id');
    expect(engineer.getInfo()).toHaveProperty('email');
    expect(engineer.getInfo()).toHaveProperty('github');
    console.log(engineer.getInfo().id);
})

test('gets github',()=>{
    const engineer = new Engineer('Davy','66','davy@davymail.davy','davygit');

    expect(engineer.getGitHub()).toBe('davygit');
})

