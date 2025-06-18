const sanVi =async():Promise<any>=>{
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        const user=await response.json();
        console.log(user);
    }
    catch(e){
        console.error(e);
    }
}
sanVi();