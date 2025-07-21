document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const nameQuery = document.getElementById("searchName").value.toLowerCase().trim();
  const specialtyQuery = document.getElementById("searchSpecialty").value.toLowerCase().trim();
  const cards = document.querySelectorAll(".card");
  let found = false;

  cards.forEach(card => {
    const name = card.querySelector(".doctor-name").innerText.toLowerCase();
    const specialty = card.querySelector(".doctor-specialty").innerText.toLowerCase();

    const matchesName = name.includes(nameQuery) || nameQuery === "";
    const matchesSpecialty = specialty.includes(specialtyQuery) || specialtyQuery === "";

    if (matchesName && matchesSpecialty) {
      card.parentElement.style.display = "block";
      found = true;
    } else {
      card.parentElement.style.display = "none";
    }
  });

  document.getElementById("notFound").style.display = found ? "none" : "block";
});
