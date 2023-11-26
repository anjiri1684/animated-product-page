const generator = document.getElementById("generator");
const result = document.querySelector("#result input");
const copy = document.getElementById("copy");
const showDiv = document.getElementById("result");

generator.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = e.target.title.value;
  const slug = title.toLowerCase().split(" ").join("-").replace(/[:.,?!]/gi, "");

  if (result) {
    result.value = slug;
    e.target.title.value = "";
    showDiv.style.visibility = "visible";
  } else {
    console.error("Sth wrong...");
  }
});

function copy2clipboard() {
  let custom_code = result.select();
    document.execCommand('copy');
}

copy.addEventListener("click", copy2clipboard);