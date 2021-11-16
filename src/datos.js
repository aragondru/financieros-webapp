let activos_balance_y1 = [{
    "cajasbancos": 266874.3,
    "reportes": 6216.4,
    "inversionesF": 173026.0,
    "carteraP": 882915.2,
    "bienesR": 7822.1,
    "inversionesA": 114.3,
    "diversos": 7704.0,
    "bienesM": 16997.6
}];
let pasivos_balance_y1 = [{
    "depositosC": 1059104.8,
    "prestamosB": 38033.7,
    "prestamosO": 79372.0,
    "reportos": 0,
    "diversos1": 35856.9,
    "cuentasP": 6822.7,
    "provisiones": 3829.0,
    "diversos2": 7132.4
}]

let capital_balance_y1 = [{
    "capitalP": 73434.3,
    "reserva": 58084.1
}];
export let balance_year1 = new Array(activos_balance_y1, pasivos_balance_y1, capital_balance_y1);


let ingresos_er_y1 = [{}];

let costos_er_y1 = [{}];

let reservas_er_y1 = [{}];

let er_year1 = new Array(ingresos_er_y1, costos_er_y1, reservas_er_y1);

export let year1 = new Array(balance_year1, er_year1);

/*******************************year 2********************************** */

let activos_balance_y2 = [{
    "cajasbancos": 208977.3,
    "reportes": 1476.8,
    "inversionesF": 77948.5,
    "carteraP": 790729.8,
    "bienesR": 5217.2,
    "inversionesA": 114.3,
    "diversos": 5874.7,
    "bienesM": 16613.8
}];
let pasivos_balance_y2 = [{
    "depositosC": 796996.9,
    "prestamosB": 54228.9,
    "prestamosO": 72778.7,
    "reportos": 13511.4,
    "diversos1": 29031.4,
    "cuentasP": 8359.7,
    "provisiones": 3852.6,
    "diversos2": 6239.4
}]

let capital_balance_y2 = [{
    "capitalP": 45029.5,
    "reserva": 76923.9
}];
export let balance_year2 = new Array(activos_balance_y2, pasivos_balance_y2, capital_balance_y2);


let ingresos_er_y2 = [{}];

let costos_er_y2 = [{}];

let reservas_er_y2 = [{}];

let er_year2 = new Array(ingresos_er_y2, costos_er_y2, reservas_er_y2);

export let year2 = new Array(balance_year2, er_year2);

/*******************************year 3********************************** */

let activos_balance_y3 = [{
    "cajasbancos": 266874.3,
    "reportes": 6216.4,
    "inversionesF": 173026.0,
    "carteraP": 882915.2,
    "bienesR": 7822.1,
    "inversionesA": 114.3,
    "diversos": 7704.0,
    "bienesM": 16997.6
}];
let pasivos_balance_y3 = [{
    "depositosC": 1059104.8,
    "prestamosB": 38033.7,
    "prestamosO": 79372.0,
    "reportos": 0,
    "diversos1": 35856.9,
    "cuentasP": 6822.7,
    "provisiones": 3829.0,
    "diversos2": 7132.4
}]

let capital_balance_y3 = [{
    "capitalP": 73434.3,
    "reserva": 58084.1
}];
export let balance_year3 = new Array(activos_balance_y3, pasivos_balance_y3, capital_balance_y3);


let ingresos_er_y3 = [{}];

let costos_er_y3 = [{}];

let reservas_er_y3 = [{}];

let er_year3 = new Array(ingresos_er_y3, costos_er_y3, reservas_er_y3);

export let year3 = new Array(balance_year3, er_year3);
/********************************************************************************************************************** */
/*const estadosF = {
    year1: {
        balance: {
            activos: {
                cajasbancos: 266874.3,
                reportes: 6216.4,
                inversionesF: 173026.0,
                carteraP: 882915.2,
                bienesR: 7822.1,
                inversionesA: 114.3,
                diversos: 7704.0,
                bienesM: 16997.6
            },
            pasivos: {
                depositosC: 1059104.8,
                prestamosB: 38033.7,
                prestamosO: 79372.0,
                reportos: 0,
                diversos1: 35856.9,
                cuentasP: 6822.7,
                provisiones: 3829.0,
                diversos2: 7132.4
            },
            capital: {
                capitalP: 73434.3,
                reserva: 58084.1
            }
        },
        er: {
            ingresos: {},
            costos: {},
            reservas: {},
        }
    },
    year2: {
        balance: {
            activos: {
                cajasbancos: 208977.3,
                reportes: 1476.8,
                inversionesF: 77948.5,
                carteraP: 790729.8,
                bienesR: 5217.2,
                inversionesA: 114.3,
                diversos: 5874.7,
                bienesM: 16613.8
            },
            pasivos: {
                depositosC: 796996.9,
                prestamosB: 54228.9,
                prestamosO: 72778.7,
                reportos: 13511.4,
                diversos1: 29031.4,
                cuentasP: 8359.7,
                provisiones: 3852.6,
                diversos2: 6239.4
            },
            capital: {
                capitalP: 45029.5,
                reserva: 76923.9
            }
        },
        er: {
            ingresos: {},
            costos: {},
            reservas: {},
        }
    },
    year3: {
        balance: {
            activos: {
                cajasbancos: 266874.3,
                reportes: 6216.4,
                inversionesF: 173026.0,
                carteraP: 882915.2,
                bienesR: 7822.1,
                inversionesA: 114.3,
                diversos: 7704.0,
                bienesM: 16997.6
            },
            pasivos: {
                depositosC: 1059104.8,
                prestamosB: 38033.7,
                prestamosO: 79372.0,
                reportos: 0,
                diversos1: 35856.9,
                cuentasP: 6822.7,
                provisiones: 3829.0,
                diversos2: 7132.4
            },
            capital: {
                capitalP: 73434.3,
                reserva: 58084.1
            }
        },
        er: {
            ingresos: {},
            costos: {},
            reservas: {},
        }
    },
}*/


//export default year1;