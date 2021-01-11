export class Client {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    nationality?: string;
    birthDate?: string;

    get formattedBirthDate() {
        return this.birthDate ? (new Date(this.birthDate)).toLocaleDateString() : 'Unknown';
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
