async function disPlay(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        const user=await response.json();
        console.log(user);
    }
    catch(er){
        console.log("Error here");
    }
}
disPlay();