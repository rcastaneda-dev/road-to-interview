interface Address {
    street: string;
    state: string;
    zip: string;
    country: string;
    city?: string;
}

let myAddress: Address = {
    street: '123 Main St',
    state: 'CA',
    zip: '12345',
    country: 'USA'
    // city: 'San Francisco'
}
console.log(myAddress);

// Read only properties
interface AIAgent {
    readonly name: string;
    readonly version: number;
    readonly skills: string[]; 
    // To truly forbid both reassignment and mutation of skills, use:
    // readonly skills: readonly string[];
}

let agent: AIAgent = {
    name: 'Sonnet',
    version: 2.0,
    skills: ['data analysis', 'data visualization', 'data engineering']
}

console.log(agent);

// agent.name = 'OpenAI X-1'; // Error: Cannot assign to 'name' because it is a read-only property.
agent.skills.push('AI'); // this is allowed because it mutates the original array, not replacing it
console.log(agent);

// Extending interfaces
interface Skill extends AIAgent {
    readonly description: string;
}

let skill: Skill = {
    name: 'Sonnet',
    version: 2.0,
    skills: ['data analysis', 'data visualization', 'data engineering'],
    description: 'AIAgent with data analysis, data visualization, and data engineering skills'
}

console.log(skill);

export {};