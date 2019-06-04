class Hello
{
    private helloString : string = "World";
    constructor()
    {
        this.sayHello();
    }
    private sayHello() : void 
    {
        console.log("Hello " + this.helloString + " !")  
    }
    
}