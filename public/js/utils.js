

function print_search() {
  var val = document.getElementById("compen-search").value
  if (val !== "") {
    console.log(val);
    document.getElementById("compen-search").value = "";
  }
}
