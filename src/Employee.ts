import { Person } from "./Person";

export class Employee
{
    public employeeName: string;
    public employeeId: number;
    public area: string;
    public person: Person;

    constructor()
    {
        this.person = new Person();
    }

    public getName(): string
    {
        return this.employeeName
    }
    public getID(): number
    {
        return this.employeeId;
    }
    public getArea(): string
    {
        return this.area
    }
    public getPerson(): Person
    {
        return this.person
    }
}