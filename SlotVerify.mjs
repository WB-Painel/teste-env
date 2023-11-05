
export function Verify(ArrayDeSlots,Information){
 
  import Parse from "parse/node.js";
  
  let StringListArray = "";
  let Lista1 = ArrayDeSlots[0];
  let Lista2 = ArrayDeSlots[1];
  let Lista3 = ArrayDeSlots[2];

  let a1 = 0;
  while(a1<Lista1.length){
   // console.log(Lista1[a1]);
    StringListArray = StringListArray+Lista1[a1]+",";
    a1++;
  }

  let a2 = 0;
  while(a2<Lista2.length){
   // console.log(Lista2[a2]);
    StringListArray = StringListArray+Lista2[a2]+",";
    a2++;
  }

  let a3 = 0;
  while(a3<Lista3.length){
   // console.log(Lista3[a3]);
    if(a3!=Lista3.length-1){
    StringListArray = StringListArray+Lista3[a3]+",";
    }else{
    StringListArray = StringListArray+Lista3[a3]
    }
    a3++;
  }

  console.log(StringListArray);

  const player = new Parse.Query("User");

  player.equalTo("password",Information.Password);

  player.first().then(function(Player){
  //set the object
  player.set('password',Information.Password);
  //define the new values
  player.set("username",Information.UserName);
  
  player.set("email",Information.Email);

  player.set("lista_de_slots",StringListArray);
  
  try{
  //Save the Object
  let result = await player.save();
  console.log("Sucesso ao atualizar objeto");
  }catch(error){
  console.log("Erro ao atualizar objeto");
  }

  });
  
  
}
