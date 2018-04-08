var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

console.log("It is", minuteHand(MINUTE,HOUR),timeofday(PERIOD));

function timeofday(time){
    if (time == "AM"){
        return "in the morning.";
    } else {
        return "in the evening.";
    }
}

function minuteHand(MINUTE,HOUR){
    switch (MINUTE){
        case 5: // 5 after
            return "5 after " + HOUR;
            break;
        case 10: // 10 after
            return "10 after " + HOUR;
            break;
        case 15: // quarter past
            return "quarter past " + HOUR;
            break;
        case 30: // half past
            return "half past " + HOUR;
            break;
        case 45: // quarter til
            return "quarter til " + (HOUR + 1);
            break;
        case 50: // ten til
            return "ten til " + (HOUR + 1);
            break;
        case 55: // 5 till
            return "5 til " + (HOUR + 1);
            break;
        default:
            return MINUTE + " after"
            break;
    }
}
