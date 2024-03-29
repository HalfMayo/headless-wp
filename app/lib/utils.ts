function convertMonth(month:string) {
    switch (month) {
        case "01": return 'January'
        case "02": return 'February'
        case "03": return 'March'
        case "04": return 'April'
        case "05": return 'May'
        case "06": return 'June'
        case "07": return 'July'
        case "08": return 'August'
        case "09": return 'September'
        case "10": return 'October'
        case "11": return 'November'
        case "12": return 'December'
        default: return 'Month is not valid'
    }
}

export function convertMonthArr(month:number) {
    switch (month) {
        case 0: return 'January'
        case 1: return 'February'
        case 2: return 'March'
        case 3: return 'April'
        case 4: return 'May'
        case 5: return 'June'
        case 6: return 'July'
        case 7: return 'August'
        case 8: return 'September'
        case 9: return 'October'
        case 10: return 'November'
        case 11: return 'December'
        default: return 'Month is not valid'
    }
}

export function toDate(iso:string) {
    const date = iso.split(/\D+/);
    return `${convertMonth(date[1])} ${date[2]}, ${date[0]}`
}