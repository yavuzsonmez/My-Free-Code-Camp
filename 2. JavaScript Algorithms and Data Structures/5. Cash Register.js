// MY OWN CODE

function checkCashRegister(price, cash, cid) {
    var moneyreturn = cash - price;
    var obj = {};
    var i = 0;
    var x = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    var sum =
        Object.values(cid)
        .flat()
        .filter(x => typeof x === "number")
        .reduce(reducer);

    if (sum > moneyreturn) {
        obj.status = "OPEN";
        obj.change = [];
        let i = 0;
        if (moneyreturn >= 100) {
            while (cid[8][1] - i >= 100 && x <= moneyreturn - 100) {
                i += 100;
                x += 100;
            }
            if (i != 0)
                obj.change.push(["ONE HUNDRED", i]);
            i = 0;
        }
        if (moneyreturn >= 20) {
            while (cid[7][1] - i >= 20 && x <= moneyreturn - 20) {
                i += 20;
                x += 20;
            }
            if (i != 0)
                obj.change.push(["TWENTY", i]);
            i = 0;
        }
        if (moneyreturn >= 10) {
            while (cid[6][1] - i >= 10 && x <= moneyreturn - 10) {
                i += 10;
                x += 10;
            }
            if (i != 0)
                obj.change.push(["TEN", i]);
            i = 0;
        }
        if (moneyreturn >= 5) {
            while (cid[5][1] - i >= 5 && x <= moneyreturn - 5) {
                i += 5;
                x += 5;
            }
            if (i != 0)
                obj.change.push(["FIVE", i]);
            i = 0;
        }
        if (moneyreturn >= 1) {
            while (cid[4][1] - i >= 1 && x <= moneyreturn - 1) {
                i += 1;
                x += 1;
            }
            if (i != 0)
                obj.change.push(["ONE", i]);
            i = 0;
        }

        if (moneyreturn >= 0.25) {
            while (cid[3][1] - i >= 0.25 && x <= moneyreturn - 0.25) {
                i += 0.25;
                x += 0.25;
            }
            if (i != 0)
                obj.change.push(["QUARTER", i]);
            i = 0;
        }
        if (moneyreturn >= 0.1 && x !== moneyreturn) {
            while (cid[2][1] - i >= 0.1 && x <= moneyreturn - 0.1) {
                i += 0.1;
                x += 0.1;
            }
            if (i != 0)
                obj.change.push(["DIME", i]);
            i = 0;
        }
        if (moneyreturn >= 0.05 && x !== moneyreturn) {
            while (cid[1][1] - i >= 0.05 && x <= moneyreturn - 0.05) {
                i += 0.05;
                x += 0.05;
            }
            if (i != 0)
                obj.change.push(["NICKEL", i]);
            i = 0;
        }

        if (moneyreturn >= 0.01 && x !== moneyreturn) {
            while (cid[0][1] - i >= 0.01 && Math.round(x * 100) / 100 < moneyreturn) {
                i += 0.01;
                x += 0.01;
            }
            x = Math.round(x * 100) / 100;
            if (i != 0)
                obj.change.push(["PENNY", i]);
            i = 0;
        }
        if (x === moneyreturn) {
            return obj;
        } else {
            obj.status = "INSUFFICIENT_FUNDS";
            obj.change = [];
            return obj;
        }
    } else if (sum === moneyreturn) {
        obj.status = "CLOSED";
        obj.change = cid;
        return obj;
    } else {
        obj.status = "INSUFFICIENT_FUNDS";
        obj.change = [];
        return obj;
    }
}

console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));

// EXEMPLE SOLUTION

// Create an array of objects which hold the denominations and their values
var denom = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
    var output = { status: null, change: [] };
    var change = cash - price;

    // Transform CID array into drawer object
    var register = cid.reduce(
        function(acc, curr) {
            acc.total += curr[1];
            acc[curr[0]] = curr[1];
            return acc;
        }, { total: 0 }
    );

    // Handle exact change
    if (register.total === change) {
        output.status = "CLOSED";
        output.change = cid;
        return output;
    }

    // Handle obvious insufficient funds
    if (register.total < change) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    // Loop through the denomination array
    var change_arr = denom.reduce(function(acc, curr) {
        var value = 0;
        // While there is still money of this type in the drawer
        // And while the denomination is larger than the change remaining
        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;

            // Round change to the nearest hundreth deals with precision errors
            change = Math.round(change * 100) / 100;
        }
        // Add this denomination to the output only if any was used.
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc; // Return the current change_arr
    }, []); // Initial value of empty array for reduce

    // If there are no elements in change_arr or we have leftover change, return
    // the string "Insufficient Funds"
    if (change_arr.length < 1 || change > 0) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    // Here is your change, ma'am.
    output.status = "OPEN";
    output.change = change_arr;
    return output;
}

// test here
checkCashRegister(19.5, 20.0, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDRED", 100.0]
]);