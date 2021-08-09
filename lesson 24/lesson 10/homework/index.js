function createComputer(marka, isSsd, ram, color){
    return {
        marka: marka,
        isSsd: isSsd,
        ram: ram,
        color: color
    }
}

let comp1 = createComputer('Dell', true, 8, 'Black');
console.log(comp1);

let comp2 = createComputer('hp', false, 4, 'Gray');
console.log(comp2);