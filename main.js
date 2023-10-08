const fetchButton = document.getElementById("fetchButton");
  const pokemonContainer = document.getElementById("pokemonContainer");

  fetchButton.addEventListener("click", () => {
    for (let i = 1; i <= 36; i++) {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;

      fetch(apiUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const pokemon = data;

          const pokemonNumber = data.id;
          const pokemonName = data.name;
          const pokemonImage = data.sprites.front_default;
          const pokemonTypes = data.types.map(type => type.type.name);

          // Membuat div untuk setiap Pokemon
          const pokemonDiv = document.createElement("div");
          pokemonDiv.classList.add("pokemon");

          // Menambahkan kelas CSS berdasarkan tipe Pokemon
          pokemonTypes.forEach(type => {
            pokemonDiv.classList.add(type);
          });

          // Menampilkan informasi Pokemon di dalam div
          pokemonDiv.innerHTML = `
            <h2>${pokemonName}</h2>
            <p>Number: ${pokemonNumber}</p>
            <p>Types: ${pokemonTypes.join(', ')}</p>
            <img src="${pokemonImage}" alt="${pokemonName}">
          `;

          // Menambahkan div Pokemon ke dalam container
          pokemonContainer.appendChild(pokemonDiv);
        })   
    }
  });