const p = document.querySelector("#root");
fetch("http://192.168.2.18:3000/")
  .then(res => res.json())
  .then(res => (p.innerText = res.text));
