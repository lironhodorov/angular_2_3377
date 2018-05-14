interface Country {
    name?: number;  //? is for optional
    fullName: string;
    capital: string;
}

abstract class BasicCountry implements Country {
    fullName: string;
    capital: string;

    abstract func(num1: number): number;

    constructor() { }
}

class FullCountry extends BasicCountry {
  func(num1: number): number {
        return 3;

    }
}

let obj: Country = {
    "fullName": "Israel",
    "capital": "Jerusalem"
};