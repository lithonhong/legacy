const params = new URLSearchParams(window.location.search)
if (param.has("page")) {
    pageCount = param.get("page");
} else {
    pageCount = 0;
}

function changePage(pageNo) {
  document.getElementById("experiment").src = `archive/${pageNo}.txt`;
  document.getElementById("expNo") = pageNo;
}