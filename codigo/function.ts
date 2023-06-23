function  addTwo(num: number):number{
    return num + 2;
}
addTwo(5);

function getUpper(val: string){
    return val.toUpperCase;
}

function signUpUser(name: string,email:string,isPaid: boolean){

}
let loginUser = (name: string, email:string, isPaid: boolean) => {

};

function getValue(myVal: number){
    if(myVal > 5){
        return true;
    }
    return "200 OK"
}

const getHello = ():string => {
    return "";
}
const heros = ["thoe","spiderman","batman"]

heros.map((hero):string => {
    return `hero is ${hero}`;
})

function consoleError(errmsg: string):void{
    console.log(errmsg);
}
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}


