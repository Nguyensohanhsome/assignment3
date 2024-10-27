const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateEmail() {
  const email = document.getElementById("email").value;
  const resultElement = document.getElementById("result");
  var content = document.getElementById("content");

  if (regex.test(email)) {
    resultElement.textContent = "Email hợp lệ!";
    resultElement.style.color = "green";
    content.classList.remove("d-none");
    content.classList.add("d-block");
  } else {
    resultElement.textContent = "Email không hợp lệ!";
    resultElement.style.color = "red";
    content.classList.remove("d-block");
    content.classList.add("d-none");
  }
}
function viewMore() {
  var content = document.getElementById("content1");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
function viewMore1() {
  var content = document.getElementById("content2");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
function viewMore2() {
  var content = document.getElementById("content3");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
function viewMore3() {
  var content = document.getElementById("content4");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
function viewMore4() {
  var content = document.getElementById("content5");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
function viewMore5() {
  var content = document.getElementById("content6");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
