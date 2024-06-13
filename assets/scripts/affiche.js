function displayBasicUserData(userData) {
  document.getElementById("userFirstName").innerText = userData[0].firstName;
  document.getElementById("userLastName").innerText = userData[0].lastName;
  document.getElementById("userFirstName1").innerText = userData[0].firstName;
  document.getElementById("userLastName1").innerText = userData[0].lastName;
  document.getElementById("login").innerText = userData[0].login;
  document.getElementById("email").innerText = userData[0].email
  document.getElementById("campus").innerText = userData[0].campus;
  document.getElementById("auditRatio").innerText = userData[0].auditRatio;
 
  let dateStr = userData[0].createdAt;
  let date = new Date(dateStr);
  let formattedDate =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0");
  document.getElementById("createdAt").innerText = formattedDate;
}

function displayData(id, xpAmount) {
  document.getElementById(id).innerText = xpAmount;
}

export { displayBasicUserData, displayData };
