class Contractor {
    static EmptyNameError = new Error("You can't have an empty name for a contractor!");
    static TechStackIsNotArray = new Error("Their tech stack should be an array!");

    constructor(name, role = "Contractor", techStack = []) {
        if (typeof name !== "string" || !name) {
            throw Contractor.EmptyNameError;
        }
        if (!(Array.isArray(techStack))) {
            throw Contractor.TechStackIsNotArray;
        }
        Object.defineProperty(this, "name", {
            get() {
                return name;
            }
        });
        Object.defineProperty(this, "role", {
            get() {
                return role;
            }
        });
        Object.defineProperty(this, "techStack", {
            get() {
                return techStack;
            }
        });
    };

    introduce() {
        console.log(`${this.name} says: Hello!`);
        console.log(`They are a ${this.role}.`);
        console.log(this.getTechStack());
    };
    getTechStack() {
        if (this.techStack.length === 0) {
            return `They haven't mentioned their best abilities yet. Stay tuned~`;
        } else if (this.techStack.length === 1) {
            return `They are good at ${this.techStack[0]}`;
        } else if (this.techStack.length === 2) {
            return `They are good at ${this.techStack[0]} and ${this.techStack[1]}`;
        } else {
            return `They are good at ${this.techStack.slice(0, -1).join(", ")} and ${this.techStack[this.techStack.length - 1]}.`;
        }
    }
}

console.log(Contractor.prototype);

class WebDeveloper extends Contractor {
    constructor(name, role = "Web Developer", techStack) {
        super(name, role, techStack);
    }
}

class FrontEndDev extends WebDeveloper {
    constructor(name, techStack) {
        super(name, "Frontend Developer", techStack);
    }
}

class BackEndDev extends WebDeveloper {
    constructor(name, techStack) {
        super(name, "Backend Developer", techStack);
    }
}

class Designer extends Contractor {
    constructor(name, techStack) {
        super(name, "Designer", techStack);
    }
}


const tommie = new FrontEndDev("Tommie", ["HTML", 'CSS', "JavaScript", "ReactJS"]);
tommie.introduce();