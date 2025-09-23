document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Just use temporary username and password
  if (username === "datalaidback" && password === "akucintadata") {
    alert("Login successful!");
    window.location.href = "./homepage.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
