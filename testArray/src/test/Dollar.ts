/*
* name;
*/
class Dollar extends Money{
   
    constructor()
    {
        super();
    }
    protected initial() : void
    {
        this.type = "Dollar";
        this.rate = 7.68;
    }
}