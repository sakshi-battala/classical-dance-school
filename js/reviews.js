const reviewsContainer = document.getElementById("reviewsContainer");

// LOAD REVIEWS

window.addEventListener("DOMContentLoaded", () => {
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

  savedReviews.forEach((review) => {
    createReviewCard(review.name, review.text);
  });
});

// ADD REVIEW

function addReview() {
  const username = document.getElementById("username").value;
  const userReview = document.getElementById("userReview").value;

  if (username === "" || userReview === "") {
    alert("Please fill all fields");
    return;
  }

  createReviewCard(username, userReview);

  // STORE IN LOCAL STORAGE

  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

  savedReviews.push({
    name: username,
    text: userReview,
  });

  localStorage.setItem("reviews", JSON.stringify(savedReviews));

  // CLEAR INPUTS

  document.getElementById("username").value = "";
  document.getElementById("userReview").value = "";
}

// CREATE CARD

function createReviewCard(name, text) {
  const card = document.createElement("div");

  card.classList.add("review-card");

  card.innerHTML = `
      <h3>${name}</h3>
      <p>${text}</p>
    `;

  reviewsContainer.appendChild(card);
}
