(function(){
	var button = document.getElementById('button');
	var div_with_phrase = document.getElementById('div_with_phrase');
	var phraseCollector = [];
	var myAdjectives = [];
	var myNouns = [];
	$.ajax({
			url: "https://fathomless-everglades-3680.herokuapp.com/api/dictionary",
			success: function(data){
									myAdjectives = data.adjectives;
									myNouns=data.nouns;
								}
	 });
	var count = 0;
	function clickCounter(){
        	return count++;
        }

button.addEventListener('click', function(event){
	clickCounter();
	var adjRand;
	var nounRand;
	var phrase;

	function phraseMaker(){
		adjRand = Math.floor(Math.random() * myAdjectives.length);
		nounRand = Math.floor(Math.random() * myNouns.length);
       	phrase = myAdjectives[adjRand][0].toUpperCase() + myAdjectives[adjRand].slice(1) + " " + 
       	myNouns[nounRand][0].toUpperCase() + myNouns[nounRand].slice(1);
        }
    function phrasePusher(){
    	if(phraseCollector.length<10){
    		phraseCollector.push(phrase);
    	}else{
    		phraseCollector.splice(0,1);
    		phraseCollector.push(phrase);
    	}
   	}
    phraseMaker();

	var checker = phraseCollector.indexOf(phrase);
	if(checker!==-1){
		phraseMaker();
	}else{
		phrasePusher();
	}
    div_with_phrase.innerHTML = count + " " + phrase;
});
})();