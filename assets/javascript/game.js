

   	//Initialise variables
      var wordArray = ["Cersei Lannister", "Twyin Lannister", "Jaime Lannister", "Tyrion Lannister", "Khal Drogo", "Viserys Targaryen", "Aemon Targaryen", "Daenerys Targaryen", "Missandei", "Rhaegar Targaryen", "Eddard Stark", "Rickon Stark", "Catelyn Stark", "Brandon Stark", "Benjen Stark", "Sandor Clegane", "Gregor Clegane", "Jon Snow", "Ramsay Bolton", "Roose Bolton", "Theon Greyjoy", "Asha Greyjoy", "Robert Baratheon", "Tommen Baratheon", "Joffrey Baratheon", "Myrcella Baratheon", "Renly Baratheon", "Margaery Tyrell", "Loras Tyrell", "Stannis Baratheon", "Oberyn Martell", "Ellaria Sand", "Doran Martell", "Jorah Mormont", "Jaqen Hghar", "Davos Seaworth", "Melisandre", "Daario Naharis", "Samwell Tarly", "Brienne of Tarth"];
      var word = "";
      var keyValue = "";
      var res = [];
      var underScore = document.getElementById("pickedName");
      var losses = 0;
      var wins = 0;
      var attempts = 6;
      var guessed = [];
   
      //Functions
    function randWord() {
			
		word = wordArray[Math.floor(Math.random() * wordArray.length)]
		res = word.split("");
		res.forEach(function(itm, idx, arr) {
				if(arr[idx] !== " ") {
					arr[idx]="_";
				} else {
					arr[idx] = "&nbsp;";
				}
		});
		
		underScore.innerHTML="";
		res.forEach(function(itm, idx, arr) {
			underScore.innerHTML += arr[idx] + " ";
		});
		
	}		
	
	

	function match(keyValue) {
		// debug only
		console.log(keyValue);
		console.log(res);
		for(i = 0; i < res.length; i++){
			if(word.charAt(i) === keyValue){
				res[i] = keyValue;
				console.log(res);}
		}
		for(var i = 0; i < underScore.length; i++) {
			if(keyValue === underScore.charAt(i)) {
				res[i] = keyValue;
			}
		}
		underScore.innerHTML="";
		res.forEach(function(itm, idx, arr) {
			underScore.innerHTML += arr[idx] + " ";
		});
	};
	document.addEventListener("keyup", function(keyRegister) {
		// debug only
		console.log(word);
		keyValue = keyRegister.keyCode;
		if(keyValue >= 65 && keyValue <= 90) {
			keyValue = keyRegister.key.toLowerCase();
				if (word.includes(keyValue))  {
					match(keyValue);
				}
				
					keyValue = keyValue.toUpperCase();
					if (word.includes(keyValue)) {
						match(keyValue);

					}	
		}	
	});		
			
			
				
	

	randWord();
	



