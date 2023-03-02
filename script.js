  /* DEBUT Maintenant, nous devons écrire la fonction "searchCars" en JavaScript. Cette fonction va récupérer les valeurs des champs de recherche et filtrer les annonces de voiture en fonction de ces valeurs. Voici un exemple de code JavaScript pour cette fonction : */

function searchCars() {
    // Récupérer les valeurs des champs de recherche
    const brand = document.getElementById("brand").value.toUpperCase();
    const model = document.getElementById("model").value.toUpperCase();
    const year = document.getElementById("year").value;
  
    // Filtrer les annonces en fonction des valeurs des champs de recherche
    const filteredCars = cars.filter(car => {
      return car.make.toUpperCase().includes(brand)
        && car.model.toUpperCase().includes(model)
        && (year === "" || car.year == year);
    });
  
    // Afficher les annonces filtrées
    displayCars(filteredCars);
  }
  /* FIN Dans ce code, nous avons récupéré les valeurs des champs de recherche en utilisant la méthode "getElementById" de l'objet "document". Nous avons ensuite filtré les annonces de voiture en utilisant la méthode "filter" de l'objet "Array". Enfin, nous avons appelé une fonction nommée "displayCars" pour afficher les annonces filtrées. */


  /* DEBUT Il ne nous reste plus qu'à ajouter la fonction "displayCars" pour afficher les annonces de voiture sur la page. Voici un exemple de code JavaScript pour cette fonction :*/

  function displayCars(cars) {
    const container = document.getElementById("cars-container");
    container.innerHTML = "";
  
    cars.forEach(car => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const image = document.createElement("img");
      image.src = car.image_url;
      card.appendChild(image);
  
      const details = document.createElement("div");
      details.classList.add("details");
  
      const makeModel = document.createElement("h2");
      makeModel.textContent = `${car.make} ${car.model}`;
      details.appendChild(makeModel);
  
      const year = document.createElement("p");
      year.textContent = `Année : ${car.year}`;
      details.appendChild(year);
  
      const price = document.createElement("p");
      price.textContent = `Prix : ${car.price} €`;
      details.appendChild(price);
  
      const description = document.createElement("p");
      description.textContent = car.description.substring(0, 100) + "...";
      details.appendChild(description);
  
      card.appendChild(details);
      container.appendChild(card);
    });
  }
  /* FIN fonction "displayCars" pour afficher les annonces de voiture sur la page. Voici un exemple de code JavaScript pour cette fonction */

  /* DEBUT code JavaScript pour envoyer le formulaire d'ajout d'annonce à un serveur */

  const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const response = await fetch('/api/add-car', {
    method: 'POST',
    body: formData
  });
  if (response.ok) {
    alert('Annonce ajoutée avec succès !');
    form.reset();
  } else {
    alert('Une erreur est survenue lors de l\'ajout de l\'annonce.');
  }
});
  /* FIN code JavaScript pour envoyer le formulaire d'ajout d'annonce à un serveur */
