// an interface it's like a contract, it only has a declaration of a property and a type.
export interface Car {
    color:string;
    gas: "gasoline" | "electric";
    year: number;
    description: string;
    price: number;
}