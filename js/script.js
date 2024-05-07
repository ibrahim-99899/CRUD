var name1 = document.getElementById("productName");
var category = document.getElementById("productCategory");
var price = document.getElementById("productPrice");
var description = document.getElementById("productDescription");

var arr = [];
if (localStorage.getItem("product") != null) {
  arr = JSON.parse(localStorage.getItem("product"));
}

function newProduect() {
  var obj = {
    nameValue: name1.value,
    categoryValue: category.value,
    priceValue: price.value,
    descriptionValue: description.value,
  };
  arr.push(obj);
  localStorage.setItem("product", JSON.stringify(arr));
  showProduct();
  clearInput();
}

function showProduct() {
  var x = ``;
  for (var i = 0; i < arr.length; i++) {
    x += `<tr>
    <td>${i}</td>
    <td>${arr[i].nameValue}</td>
    <td>${arr[i].categoryValue}</td>
    <td>${arr[i].priceValue}</td>
    <td><button class="btn btn-danger rounded-4" onclick="deleteProduct(${i})">Delete</button></td>
    <td><button class="btn btn-success rounded-4" onclick="deleteProduct(${i})">Update</button></td>
    </tr>`;
  }
  document.getElementById("tbody").innerHTML = x;
}

showProduct();

function clearInput() {
  name1.value = "";
  category.value = "";
  price.value = "";
  description.value = "";
}

function deleteProduct(numberOfProduct) {
  arr.splice(numberOfProduct, 1);
  localStorage.setItem("product", JSON.stringify(arr));
  showProduct();
}

function search() {
  var searchInput = document.getElementById("searchInput").value;
  box = ``;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].nameValue.toLowerCase().includes(searchInput.toLowerCase())) {
      box += `<tr>
      <td>${i}</td>
      <td>${arr[i].nameValue.replace(searchInput,"<span>"+searchInput+"</span>")}</td>
      <td>${arr[i].categoryValue}</td>
      <td>${arr[i].priceValue}</td>
      <td><button class="btn btn-danger rounded-4" onclick="deleteProduct(${i})">Delete</button></td>
      <td><button class="btn btn-success rounded-4" onclick="deleteProduct(${i})">Update</button></td>
      </tr>`;
    }
    document.getElementById("tbody").innerHTML =box
  }
  console.log(searchInput);
}
