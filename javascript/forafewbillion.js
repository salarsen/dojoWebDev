var reward = 0.01;
for(var i = 1; i <= 30; i++){
    reward = reward + reward;
    console.log(i + ") " + reward);
}
console.log(reward);

reward = 0.01;
var days = 1;
while(reward < 10000){
    reward = reward + reward;
    days++;
}
console.log(days + " days to reach $10,000");

reward = 0.01;
days = 1;
while(reward < 1000000000){
    reward = reward + reward;
    days++;
}

console.log(days + " days to reach 1 billion");

reward = 0.01;
days = 1;
while (reward < Infinity){
    reward = reward + reward;
    days++;
}

console.log(days + " days to reach infinity");
