console.log('Hello');

function myFunction1() {
   var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search-bar-1");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL-1");
  li = ul.getElementsByTagName("li");
  
    for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function myFunction2() {
   var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search-bar-2");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL-2");
  li = ul.getElementsByTagName("li");
  
    for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function myFunction3() {
   var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search-bar-3");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL-3");
  li = ul.getElementsByTagName("li");
  
    for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}