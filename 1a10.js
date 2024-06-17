let tabuada;
console.log("Digite qual tabuada você deseja saber do 1 ao 10");
process.stdin.on("data", function(data){
    let insert = data.toString().trim();
    if(!isNaN(insert)){
        console.log("A tabuada é:");
        for(i=0;i<=10;i++){
            console.log(insert + "x" + i + "=" + insert*i);
        }
    }
    process.exit;
});