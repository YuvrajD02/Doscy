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


document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form submitted");
  // const formData = new FormData(e.target);
  // const data = Object.fromEntries(formData.entries());
  // console.log("Form data:", data);
  // try {
  //   const response = await fetch("/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   });

  //   const result = await response.json();
  //   console.log("Success:", result);
  // } catch (error) {
  //   console.error("Error:", error);
  // }
});