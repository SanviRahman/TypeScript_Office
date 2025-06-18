async function myFunc(){
  try{
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const user=await response.json();
    console.log("Json file is:",user);
  }
  catch(err){
    console.error("Error!",err);
  }
}
myFunc();