const formData = {
  email: "",
  message: ""
}

const date = new Date();

console.log(date);
const localStorageKey = "feedback-form-state";

const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

console.log(promise); // Об'єкт промісу


const formEl = document.querySelector(".feedback-form")
const storedData = localStorage.getItem(localStorageKey)

if (storedData) {
  const parsedData = JSON.parse(storedData)

  formData.email = parsedData.email ?? ""
  formData.message = parsedData.message ?? ""

  formEl.elements.email.value = formData.email;
  formEl.elements.message.value = formData.message;
}


const handleFormInput = (event) => {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(localStorageKey, JSON.stringify(formData))
}

const handleFormSubmit = (event) => {
  event.preventDefault()

  if (!formData.email || !formData.message) {
    alert("Fill please all fields")
    return
  }

  localStorage.removeItem(localStorageKey);

  formData.email = ""
  formData.message = ""

  formEl.reset();
}

formEl.addEventListener("input", handleFormInput)
formEl.addEventListener("submit", handleFormSubmit)
