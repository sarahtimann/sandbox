const songs = ["Kender Ham Ikk", "Forever", "What Do You Means", "Believe", "hva så", "Jaded", "Hold My Hand", "Giv Mig Alt", "Under Din Sne", "Vi Uendelige"];

const playlist = document.querySelector("#playlist"); // Tilføj "#" for at hente ID'et korrekt

songs.map((song) => {
  const listItem = document.createElement("li"); // Opret et nyt <li>-element
  listItem.textContent = song; // Indstil tekstindholdet til sangens navn
  playlist.appendChild(listItem); // Tilføj <li> til <ul>
});
