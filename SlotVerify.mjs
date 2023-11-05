
export function Verify(ArrayDeSlots,Information,Parse){
 
  //import Parse from "parse/node.js";
  
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

 updatePlayer(Information,StringListArray);
 
 async function updatePlayer(Information,StringListArray) {
        //Retrieve your Parse Object
  
        const player = new Parse.Object("UserGame");

        //set the object
	 if(player.get('objectId')!=null){
         console.log('object id não é null');
         player.set('objectId',player.get('objectId'));
	 }
	 
        player.set('username',Information.UserName);
        player.set('email', Information.Email);
        player.set('password',Information.Password);
        player.set("Lista_De_Slots",StringListArray);
  
        try{
            //Save the Object
            let result = await player.save();
            console.log('Object updated with objectId: ' + result.id);
        }catch(error){
            console.log('Failed to update object, with error code: ' + error.message);
	}
    } 
/*
const User = Parse.Object.extend('User'); //instead of const User = new Parse.User();
const query = new Parse.Query(User);

query.equalTo("username", 'gabriel');
query.get("email").then((userObj) => {
    // Updates the data we want
    userObj.set('ListaDeSlots', StringListArray);

    // Saves the user with the updated data
    userObj.save(null, {useMasterKey: true}).then((response) => {
        console.log('Updated user', response);
    }).catch((error) => {
        console.error('Error while updating user', error);
    });
});*/
  
  
//}
