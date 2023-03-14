let lapscompleted=0

// create a function that incrments the variabel with one
// run it three times

function increment_laps(){
    lapscompleted+=1
}

for(i=0;i<3;i++){
    increment_laps()
}

console.log(lapscompleted)