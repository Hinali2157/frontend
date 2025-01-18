/* Javascript Object Notation */


/* JSON */

{
    let obj={
        name:"anjali",
        age:"25",
        gender:"female"
    }
}
  
  // javascript fetch
  
  {
    async function profileData(){
      let res = await fetch('http://localhost:3000/profile')
      let data  = await res.json()
      console.log(data[0].name);
      console.log(data[0].gender);
      console.log(data[0].age);
      console.log(data[0].Details[0].eye);
    }
  
    profileData()
  }
  