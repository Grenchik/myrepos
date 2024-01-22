var massive = ["cat", "dog", "parrot", "horse"];
var index;
for(let x = 0;x < massive.length;x++){
    if (massive[x] == "parrot"){
        index = x;
    }
}
console.log(index);