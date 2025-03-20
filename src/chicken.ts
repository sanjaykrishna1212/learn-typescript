export interface IchickenType
{
    name: string,
    weight:number
}

export class Chicken
{
    public name: string;
    public age: number;
    public city: string;
    constructor()
    {
        this.name = "";
        this.age = 0;
        this.city=""
    }
}