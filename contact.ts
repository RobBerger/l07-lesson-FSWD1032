class Contact {
    firstName: string;
    lastName: string

    constructor(first: string, last: string) {
        this.firstName = first;
        this.lastName = last;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

export { Contact as Person }