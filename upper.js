var str = "hello  world"
var text;

function change(str){
　　text=str.substring(0,1).toUpperCase()+str.substring(1,5)+str.substring(6,8).toUpperCase()+str.substring(8);
}

change(str);

console.log(text)