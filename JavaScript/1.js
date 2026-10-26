const movies = [];
let editingIndex = -1;

const form = document.querySelector("#movie-form");
const nameInput = document.querySelector("#movie-name");
const ratingInput = document.querySelector("#movie-rating");
const movieList = document.querySelector("#movie-list");
const saveButton = document.querySelector("#save-button");
const cancelButton = document.querySelector("#cancel-button");

function renderMovies() {
    movieList.replaceChildren();

    movies.forEach((movie, index) => {
        const item = document.createElement("li");
        const details = document.createElement("span");
        details.textContent = `${movie.name} - ${movie.rating}/10`;

        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => startEditing(index));

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteMovie(index));

        item.append(details, " ", editButton, " ", deleteButton);
        movieList.append(item);
    });
}

function resetForm() {
    form.reset();
    editingIndex = -1;
    saveButton.textContent = "Add movie";
    cancelButton.hidden = true;
}

function startEditing(index) {
    const movie = movies[index];
    nameInput.value = movie.name;
    ratingInput.value = movie.rating;
    editingIndex = index;
    saveButton.textContent = "Update movie";
    cancelButton.hidden = false;
    nameInput.focus();
}

function deleteMovie(index) {
    movies.splice(index, 1);
    if (editingIndex === index) {
        resetForm();
    } else if (editingIndex > index) {
        editingIndex -= 1;
    }
    renderMovies();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const movie = {
        name: nameInput.value.trim(),
        rating: Number(ratingInput.value)
    };

    if (editingIndex === -1) {
        movies.push(movie);
    } else {
        movies[editingIndex] = movie;
    }

    resetForm();
    renderMovies();
});

cancelButton.addEventListener("click", resetForm);

renderMovies();