/*
* name;
*/

class Animal
{
   protected eye;
   private head;
   public name: string;
    constructor(name: string)
    {
        this.name = name;
    }

    public say (words: string): void
    {
        console.log(this.name +" says:" + words);
    }

    public sun(): void
    {
        console.log("我是" + this.name + " 在晒太阳");
    }
}

