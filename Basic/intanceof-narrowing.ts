class Dog
{
    bark(){
        console.log("Barking!!");
    }
}
class Cat
{
    meow(){
        console.log("Meowing!!");
    }
}

function specificAnimal(animal: Dog | Cat){
    if(animal instanceof Dog){
        animal.bark();
    }
    else{
        animal.meow();
    }
}

let myDog=new Dog();
let myCat=new Cat();
specificAnimal(myCat);
