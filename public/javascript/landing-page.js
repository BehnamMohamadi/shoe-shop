document.querySelector(".search-btn").addEventListener("click", async (e) => {
  const searchBox = document.querySelector("#search-input").value;

  const response = await fetch(
    `http://127.0.0.1:8000/api/products/?searchword=${searchBox}`
  );
  const data = response.json();

  console.log(data);
  e.preventDefault();
  console.log(searchBox);
});
