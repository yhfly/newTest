/*
* name;
*/
class Rectangle
{
    private length : number;
    private width : number;
 
    constructor(lengthNum, widthNum)
    {
        this.length = lengthNum;
        this.width = widthNum;
        this.calArea();
    }
    private calArea() : void
    {
        var area = this.length * this.width;
        console.log(area)
    }

}