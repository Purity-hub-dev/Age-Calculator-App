
const inputContainer = document.querySelector(".input-container");
const Button = document.querySelector(".calculate-btn");
Button.addEventListener("click", calculateAge);

// create error message

function createText(text) {
  const errormsg = document.createElement("p");
  errormsg.classList.add("error");
  errormsg.textContent = `${text}`;

  return errormsg;
}
// age calculation

function calculateAge() {
  const dayInput = document.querySelector("#day-input").value,
    monthInput = document.querySelector("#month-input").value,
    yearInput = document.querySelector("#year-input").value;

  (dayOutput = document.querySelector(".dayOutput")),
    (monthOutput = document.querySelector(".monthOutput")),
    (yearOutput = document.querySelector(".yearOutput"));

  if (dayInput === "" || monthInput === "" || yearInput === "") {
    const labels = document.getElementsByTagName("label");
    inputContainer.classList.add("error");
    //  console.log(labels.classList)
    // console.log(inputContainer.classList)
    Array.from(labels).forEach((label) => {
      const errormsg = createText("This field is required");
      label.appendChild(errormsg);

      setTimeout(function () {
        inputContainer.classList.remove("error");
        label.removeChild(errormsg);
      }, 2000);
    });
  }
  if (monthInput > 12) {
    const labels = document.getElementsByTagName("label");
    inputContainer.classList.add("error");
    const errormsg = createText("This must be a valid month");
    labels[1].appendChild(errormsg);

    setTimeout(() => {
      inputContainer.classList.remove("error");
      labels[1].removeChild(errormsg);
    }, 2000);
  }

  const currentDate = new Date(),
    currentYear = currentDate.getFullYear(),
    currentMonth = currentDate.getMonth() + 1,
    currentDay = currentDate.getDate();

  const lastDayOfCurrentMonth = new Date(
    currentYear,
    currentMonth - 1,
    0
  ).getDate();

  const lastDayOfUserInputMonth = new Date(
    currentYear,
    currentMonth,
    0
  ).getDate();

  if (dayInput > lastDayOfUserInputMonth) {
    const labels = document.getElementsByTagName("label");
    inputContainer.classList.add("error");

    const errormsg = createText("This must be a valid day");
    labels[0].appendChild(errormsg);

    setTimeout(function () {
      inputContainer.classList.remove("error");
      labels[0].removeChild(errormsg);
    }, 2000);
  }

  if (yearInput > currentYear) {
    const labels = document.getElementsByTagName("label");
    inputContainer.classList.add("error");

    const errormsg = createText("Must be in the past");
    labels[2].appendChild(errormsg);

    setTimeout(function () {
      inputContainer.classList.remove("error");
      labels[2].removeChild(errormsg);
    }, 2000);
  }

  let ageDay = currentDay - dayInput,
    ageMonth = currentMonth - monthInput,
    ageYear = currentYear - yearInput;

  if (ageDay < 0) {
    ageMonth--;
    ageDay = ageDay + lastDayOfCurrentMonth;
  }
  if (ageMonth < 0) {
    ageYear--;
    ageMonth = ageMonth + 12;
  }
  if (
    dayInput !== "" &&
    dayInput <= lastDayOfUserInputMonth &&
    monthInput !== "" &&
    monthInput >= 1 &&
    monthInput <= 12 &&
    yearInput !== "" &&
    yearInput <= currentYear
  ) {
    dayOutput.innerHTML = ageDay;
    monthOutput.innerHTML = ageMonth;
    yearOutput.innerHTML = ageYear;
  }
}

// const button = document.querySelector(".arrowIcon");
// let errorMessage = document.querySelector(".errormsg");
// Button.addEventListener("click", getResult);

// function getResult() {
//   const dayInput = document.querySelector("#day-input");
//   const monthInput = document.querySelector("#month-input");
//   const yearInput = document.querySelector("#year-input");

//   if (
//     dayInput.value === "" &&
//     monthInput.value === "" &&
//     yearInput.value === ""
//   ) {
//     document.getElementById("dayerrormsg").style.display = "block";
//     document.getElementById("montherrormsg").style.display = "block";
//     document.getElementById("yearerrormsg").style.display = "block";
//   } else if (dayInput.value === "" || dayInput.value === isNaN) {
//     document.getElementById("dayerrormsg").style.display = "block";
//     document.getElementById("montherrormsg").style.display = "none";
//     document.getElementById("yearerrormsg").style.display = "none";

//     console.log(alert("close page"));
//   } else if (monthInput.value === "" || monthInput.value === isNaN) {
//     document.getElementById("dayerrormsg").style.display = "none";
//     document.getElementById("montherrormsg").style.display = "block";
//     document.getElementById("yearerrormsg").style.display = "none";
//   } else if (yearInput.value === "" || monthInput.value === isNaN) {
//     document.getElementById("dayerrormsg").style.display = "none";
//     document.getElementById("montherrormsg").style.display = "none";
//     document.getElementById("yearerrormsg").style.display = "block";
//   } else {
//     document.getElementById("dayerrormsg").style.display = "none";
//     document.getElementById("montherrormsg").style.display = "none";
//     document.getElementById("yearerrormsg").style.display = "none";
//   }

//   const age = currentyear - `${yearInput.value}`;
//   let currentdate = new Date();

//   if (dayInput.value === "" || dayInput.value === isNaN) {
//     e.target.textContent = "This field is required";
//     e.target.style.color = "red";
//   } else {
//     e.target.textContent = "";
//   }
//   if (monthInput.value === "") {
//     errorMessage.textContent = "This field is required";
//   } else {
//     errorMessage.textContent = "This field is required";
//   }
// }
