
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

 updatePlayer(Information,Parse,StringListArray);

}
 
 async function updatePlayer(Information,Parse,StringListArray) {
        //Retrieve your Parse Object
	let server = new Parse.Query("UserGame");
	
	server.equalTo("SERVER","SERVER_1");
	
	server.first().then(function(SERVER){

	if(SERVER){
	
	console.log("S");

	//let ObjectId = SERVER.get("objectId");

	//let Username = SERVER.get("username");

	//let Email = SERVER.get("email");

	//let Password = SERVER.get("password");

	SERVER.set('modo_turbo',Information.NoModoTurbo);
		
	SERVER.set('valor_da_aposta',Information.ValorDaAposta);
		
	SERVER.set("Lista_De_Slots",StringListArray);

	SERVER.save();
	

	//console.log(ObjectId+Username);
	
	}else{
	
	console.log("F");

        CreateNewGame(Parse, Information, StringListArray);
	
	}
		
	});

 }

function CreateNewGame(Parse, Information, StringListArray){
	const player = new Parse.Object("UserGame");
	player.set('username',Information.UserName);
        player.set('email', Information.Email);
        player.set('password',Information.Password);
	player.set('modo_turbo',Information.NoModoTurbo);
	player.set('valor_da_aposta',Information.ValorDaAposta);
        player.set("Lista_De_Slots",StringListArray);
	player.set("SERVER","SERVER_1");
	player.save();
}

export function VSOSDUEOMDS(Parse,Information,Response){

	let server = new Parse.Query("UserGame");

	server.equalTo("Lista_De_Slots",Information.L);
	
	server.first().then(function(SERVER){
	
	if(SERVER){

	console.log("A lista de slots do usuário é igual a do servidor");

	let ValorDaAposta = SERVER.get("ValorDaAposta");

	let NoModoTurbo = SERVER.get("NoModoTurbo");
		
	let ServerList = SERVER.get("Lista_De_Slots");
		
	console.log("ServerList:"+ServerList);
		
	console.log("UserList:"+Information.L);

	Separate(ValorDaAposta,NoModoTurbo,ServerList);
		
	Response.send("Obrigado por jogar limpo!");
		
	}else{

	console.log("A lista de slots do usuário não é igual a do servidor");

	Response.send("Sua conta foi banida por cometer uma violação");
		
	}

	});
	
}

function Separate(ValorDaAposta,NoModoTurbo,v){
var array_1 = [];
  var array_2 = [];
  var array_3 = [];
  
  var a = 0;
  var b = 0;
  
  while(b<=v.length){
  
  if(v.substring(b-1,b)==","){

  ParseV(ValorDaAposta,NoModoTurbo,array_1,array_2,array_3,a,b,v);
  
  a=b;
  
  }else{
  
  if(b==v.length){
  
  ParseV(ValorDaAposta,NoModoTurbo,array_1,array_2,array_3,a,b,v);
  
  }
  
  }
  
  b++;
  
  }
}

function ParseV(ValorDaAposta,NoModoTurbo,array_1,array_2,array_3,A,B,C){

 // C=C.replace(",","");
	let MaxCount = 0;
if(NoModoTurbo){
	MaxCount=3;
}else{
	MaxCount=30;
}
	console.log("No Modo Turbo:"+NoModoTurbo);
  
  if(array_1.length!==MaxCount){
  
  AA(array_1,A,B,C);
  
  return;
  }
  
  if(array_2.length!==MaxCount){
  
  BB(array_2,A,B,C);
  
  return;
  }
  
  if(array_3.length!==MaxCount){
  
  CC(array_3,A,B,C);
  
  }
  
  if(array_3.length==MaxCount){
  
  VerificarListaDeSlotsIguais(ValorDaAposta,array_1,array_2,array_3);
  
  }
  
  
}


function AA(array_1,A,B,C){

  array_1.push(C.substring(A,B));

  }
  
  function BB(array_2,A,B,C){

  array_2.push(C.substring(A,B));

  }
  
  function CC(array_3,A,B,C){

  array_3.push(C.substring(A,B));

  }


function VerificarListaDeSlotsIguais(ValorDaAposta,array_1,array_2,array_3){
  
  //let AlinhamentoDeSlotsCount = 0;
  let ValorApostado = ValorDaAposta;

	console.log(""+ValorApostado);
  
  let Valor1 = 0;
  
  let Valor2 = 0;
  
  let Valor3 = 0;
  
  let Valor4 = 0;
  
  let Valor5 = 0;
  
  
  let array_1_length = array_1.length;
  
  let array_2_length = array_2.length;
  
  let array_3_length = array_3.length;
  
  
  let LISTA_1_POS_3 = array_1[array_1_length-1];
  
  let LISTA_1_POS_2 = array_1[array_1_length-2];
  
  let LISTA_1_POS_1 = array_1[array_1_length-3];
  
  
  let LISTA_2_POS_3 = array_2[array_2_length-1];
  
  let LISTA_2_POS_2 = array_2[array_2_length-2];
  
  let LISTA_2_POS_1 = array_2[array_2_length-3];
  
  
  let LISTA_3_POS_3 = array_3[array_3_length-1];
  
  let LISTA_3_POS_2 = array_3[array_3_length-2];
  
  let LISTA_3_POS_1 = array_3[array_3_length-3];
  
  
  
  LISTA_1_POS_1=LISTA_1_POS_1.replace(",","");
  LISTA_2_POS_1=LISTA_2_POS_1.replace(",","");
  LISTA_3_POS_1=LISTA_3_POS_1.replace(",","");
  
//  alert(LISTA_1_POS_1+LISTA_2_POS_1+LISTA_3_POS_1);
  
  LISTA_1_POS_2=LISTA_1_POS_2.replace(",","");
  LISTA_2_POS_2=LISTA_2_POS_2.replace(",","");
  LISTA_3_POS_2=LISTA_3_POS_2.replace(",","");
  
//  alert(LISTA_1_POS_2+LISTA_2_POS_2+LISTA_3_POS_2);
  
  LISTA_1_POS_3=LISTA_1_POS_3.replace(",","");
  LISTA_2_POS_3=LISTA_2_POS_3.replace(",","");
  LISTA_3_POS_3=LISTA_3_POS_3.replace(",","");
  
 // alert(LISTA_1_POS_3+LISTA_2_POS_3+LISTA_3_POS_3);
  
  
  if(LISTA_1_POS_1==LISTA_2_POS_1&&LISTA_2_POS_1==LISTA_3_POS_1){
  console.log("Completou a primeira lista na horrizontal");
  Valor1 = VerificarPersonagemDoSlotAlinhado(LISTA_1_POS_1,ValorApostado);
  }
  
  if(LISTA_1_POS_2==LISTA_2_POS_2&&LISTA_2_POS_2==LISTA_3_POS_2){
  console.log("Completou a segunda lista na horrizontal");
  Valor2 = VerificarPersonagemDoSlotAlinhado(LISTA_1_POS_2,ValorApostado);
  }
  
  if(LISTA_1_POS_3==LISTA_2_POS_3&&LISTA_2_POS_3==LISTA_3_POS_3){
  console.log("Completou a terceira lista na horrizontal");
  Valor3 = VerificarPersonagemDoSlotAlinhado(LISTA_1_POS_3,ValorApostado);
  }
  
  
  
  if(LISTA_1_POS_1==LISTA_2_POS_2&&LISTA_2_POS_2==LISTA_3_POS_3){
  //AlinhamentoDeSlotsCount=AlinhamentoDeSlotsCount+1;
  Valor4 = VerificarPersonagemDoSlotAlinhado(LISTA_1_POS_1,ValorApostado);
  }
  
  if(LISTA_3_POS_1==LISTA_2_POS_2&&LISTA_2_POS_2==LISTA_1_POS_3){
  //AlinhamentoDeSlotsCount=AlinhamentoDeSlotsCount+1;
  Valor5 = VerificarPersonagemDoSlotAlinhado(LISTA_3_POS_1,ValorApostado);
  }
  
  let ValorTotal = ValorApostado+Valor1+Valor2+Valor3;
  
  let formated = GetNumberFormat().format(""+ValorTotal);
  
  //alert(formated);
  console.log(formated);
  
  }
  
  function VerificarPersonagemDoSlotAlinhado(Personagem,ValorApostado){
  
  //let duplication = 0;
  if(Personagem.includes("manopla.png")){
  
  return 9*ValorApostado;
  }
	  
  if(Personagem.includes("po.png")){
  
  return 8*ValorApostado;
  }
  
  if(Personagem.includes("oogway.png")){
 
  return 7*ValorApostado;
  }
  
  if(Personagem.includes("mestre_shifu.png")){
 
  return 6*ValorApostado;
  }

  if(Personagem.includes("tigressa.png")){
  
  return 5*ValorApostado;
  }
  
  if(Personagem.includes("mestre_macaco.png")){
 
  return 4*ValorApostado;
  }
  
  if(Personagem.includes("garca.png.png")){
 
  return 3*ValorApostado;
  }

  if(Personagem.includes("louva_deus.png")){
 
  return 2*ValorApostado;
  }
  
  if(Personagem.includes("mestre_vibora.png")){
 
  return 1*ValorApostado;
  }
  
  
  }
  
  
  function GetNumberFormat(){
  const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  });

  return formatter;
  
  }
  /*
        const player = new Parse.Object("UserGame");

        //set the object
	// if(player.get('objectId')!=null){
        // console.log('object id não é null');
        // player.set('objectId',player.get('objectId'));
	// }

	//player.set('objectId',Information.UserName+","+Information.Email+","+Information.Password);
	 
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
	}*/
  //  } 
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
