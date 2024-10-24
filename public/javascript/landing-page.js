document.querySelector(".search-btn").addEventListener("click", async (e) => {
  e.preventDefault();

  const searchBox = document.querySelector("#search-input").value;

  location.href = `http://127.0.0.1:8000/api/products/?searchword=${searchBox}`;

  console.log(data);
  console.log(searchBox);
});
