let a = 10;
function outer(){
    let b=20;
    function inner() {
        let c=30;
        if(b<c){
            console.log(a);
            console.log(b);
            console.log(c);
        }
    }
    inner();
}
outer();

for(let i=1;i<=4;i++){
    let message="Inside Message";
    console.log(message);
}