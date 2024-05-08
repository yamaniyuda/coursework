function updateNetworkStatus() {
  const body = document.querySelector('body')
  const element = document.createElement("div");
  element.style.position = "fixed";
  element.style.bottom = "0";
  element.style.margin = "2em"
  element.style.right = "0";
  element.style.padding = "1em 2em";
  element.style.background = "#FF7B00";
  element.style.color = "white"
  element.style.borderRadius = "10px"
  element.style.boxShadow = "0px 10px 15px -3px rgba(0,0,0,0.1)"
  element.id = 'alert-internet'

  if (navigator.onLine) {
    element.textContent = "Anda online";
    body.append(element)
  } else {
    element.textContent = "Anda offline, aktifkan internet"
  }

  setTimeout(() => {
    const el = document.querySelector('#alert-internet')
    el.remove()
  }, 5000)

  setTimeout(() => {
    element.classList.add('show');
  }, 1000);
}

window.addEventListener("online", updateNetworkStatus);
window.addEventListener("offline", updateNetworkStatus);
updateNetworkStatus();