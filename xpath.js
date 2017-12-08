function xpath(search) {
	// We verify the presence and the type of search
	if(search === undefined || typeof search !== "string"  ){
		console.log("veuillez rentrer un texte");

	}else {
		// We doing the querySelectorAll on a try/catch
		// If search is a bad formula (e.g "name=product" without []) we display a message
		try {	
			var elements = document.querySelectorAll(search)
			// If we have 0 elements find, we display a message
			if(elements.length === 0) {
				console.log("Aucuns éléments trouvé");
			}else {
				// else we display the list of elements
				console.log(elements);
			}
		} catch( e) {
			console.log("Une erreur est survenue.\n Vérifier le format de votre demande")
		}
	}
}