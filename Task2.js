function SolveThis(obj) {
    var res = {};

    for (var key in obj) {
        var values = obj[key]; 

        if (key === "sum") {
            var total = 0;
            for (var i = 0; i < values.length; i++) {
                total = total + values[i];
            }
            res[key] = total;
        }
        else if (key === "min") {
            var m = values[0];
            for (var i = 1; i < values.length; i++) {
                if (values[i] < m) {
                    m = values[i];
                }
            }
            res[key] = m;
        }
        else if (key === "max") {
            var mx = values[0];
            for (var i = 1; i < values.length; i++) {
                if (values[i] > mx) {
                    mx = values[i];
                }
            }
            res[key] = mx;
        }
        else if (key === "abs") {
            var resultArr = [];
            for (var i = 0; i < values.length; i++) {
                resultArr.push(Math.abs(values[i]));
            }
            res[key] = resultArr;
        }
        else if (key === "floor") {
            var resultArr = [];
            for (var i = 0; i < values.length; i++) {
                resultArr.push(Math.floor(values[i]));
            }
            res[key] = resultArr;
        }
        else if (key === "ceil") {
            var resultArr = [];
            for (var i = 0; i < values.length; i++) {
                resultArr.push(Math.ceil(values[i]));
            }
            res[key] = resultArr;
        }
        else if (key === "round") {
            var resultArr = [];
            for (var i = 0; i < values.length; i++) {
                resultArr.push(Math.round(values[i]));
            }
            res[key] = resultArr;
        }
        else if (key === "random") {
            res[key] = Math.random();
        }
        else {
            res[key] = "Not supported";
        }
    }

    return res;
}

console.log(
    SolveThis({
        sum: [3, 2, 4],
        max: [2, 4, 3, 5],
        min: [5, 3, 4, 3],
        abs: [-2, -5, 6],
        floor: [3.6, 7.9],
        ceil: [2.1, 5.7],
        round: [4.4, 4.6],
        random: []
    })
);
