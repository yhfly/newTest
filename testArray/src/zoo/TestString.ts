/*
* name;
*/
class TestString{
    constructor(str:string){
        this.setup(str);
        // console.log(this.array)
    }
    private str1:string=" ;s;tri;ng";
    // private array:Array<string> = this.str.split(";");
    private setup(str:string)
    {
        var arr:Array<string> = this.str1.split(str);
        console.log(arr)
    }
}