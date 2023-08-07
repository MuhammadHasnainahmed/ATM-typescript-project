
import inquirer from "inquirer";


(async   () => {
    
    const userinput = await inquirer.prompt([
        {
    name: "userid",
    message: "enter your user id",
    type: "input",
  },

  {
    name: "userpin",
    message: "enter your user pin",
    type: "password",
},
]);

const userdata ={
    userid: userinput.userid,
    userpin : userinput.userpin,
    amount : Math.floor(Math.random() * 100000 + 1)
}


const seleopt = await inquirer.prompt([
   {
    name:"option",
    message:"select any options",
    type:"list",
    choices:["cash withdraw" , "exits"],
    }
])

if (seleopt.option === "cash withdraw") {
    console.log("your current amount:",  userdata.amount);

    const enteramount =  await inquirer.prompt([
        {
            message:"enter your amount",
            name:"amount",
            type:"number",
            validate: (input) =>{
                if (input > userdata.amount) {
                    console.log("balances");
                }else{
                   return true
                    
                }

            }
            
        
            
        }

        
    ])
    userdata.amount -= enteramount.amount
    console.log("your Balances is:" , userdata.amount);
    


}

}

)()