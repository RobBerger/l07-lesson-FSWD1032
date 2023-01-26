namespace numberExample {
    function isNumber(value: any): boolean {
        return !isNaN(value);
    };

    export function isOddOrEven(value: any): string {
        if (!isNumber(value)) {
            return "Not a Number";
        }
        if (value % 2 === 0) {
            return "Even Number";
        }
        else {
            return "Odd Number";
        }
    };
}

export default numberExample;