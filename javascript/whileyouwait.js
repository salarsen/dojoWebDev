var daysUntilMyBirthDay = 60;

while(daysUntilMyBirthDay != 0){
    if(daysUntilMyBirthDay >= 30){
        console.log(daysUntilMyBirthDay + " days until my birthday... :(");
    } else if (daysUntilMyBirthDay < 30 && daysUntilMyBirthDay > 5){
        console.log(daysUntilMyBirthDay + " days until my birthday!!!");
    } else if (daysUntilMyBirthDay <= 5){
        console.log(daysUntilMyBirthDay + " DAYS UNTIL MY BIRTHDAY!!!");
    }
    daysUntilMyBirthDay--;
}
if(daysUntilMyBirthDay == 0){
   console.log("PARTY TIME");
}
