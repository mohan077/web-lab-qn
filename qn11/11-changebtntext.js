const form = document.querySelector("form");
const button = document.querySelector("button");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  button.innerText = "Submitted!";
  const formData = new FormData(form);
  const text = formData.get("text");
  alert(text);
});
