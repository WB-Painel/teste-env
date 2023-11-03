let count = 3;
export function getEmoji(ModoTurbo){
	if(ModoTurbo){
		count=3;
	}else{
		count=30;
	}
	//return count;

	let list = [];
	
	let list_1 = [];
	let list_2 = [];
	let list_3 = [];
	
	let a1 = 0;
	while(a1<count){
		list_1.push(Emoji());
		a1++;
	}
	
	let a2 = 0;
	while(a2<count){
		list_2.push(Emoji());
		a2++;
	}
	
	let a3 = 0;
	while(a3<count){
		list_3.push(Emoji());
		a3++;
	}

	list.push(list_1);
	list.push(list_2);
	list.push(list_3);
	
	return list;
}

function Emoji(){
	let minimo = 1;
	let maximo = 10;
	
	let randomnumber = 
	Math.floor(
	Math.random()
	* 
	(maximo - minimo +1)
	) 
	+ 
	minimo;
	
	if(randomnumber==1){
	  return "image/po.png";
	  }
	  if(randomnumber==2){
	  return "image/tai_lung.png";
	  }
	  if(randomnumber==3){
	  return "image/mestre_shifu.png";
	  }
	  if(randomnumber==4){
	  return "image/tigressa.png";
	  }
	  if(randomnumber==5){
	  return "image/louva_deus.png";
	  }
	  if(randomnumber==6){
	  return "image/oogway.png";
	  }
	  if(randomnumber==7){
	  return "image/mestre_macaco.png";
	  }
	  if(randomnumber==8){
	  return "image/garca.png";
	  }
	  if(randomnumber==9){
	  return "image/mestre_vibora.png";
	  }
	  
	  if(randomnumber==10){
	  return "image/manopla.png";
	  }
}
