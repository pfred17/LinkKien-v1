const itemsPerPage = 3; // Số sản phẩm trên mỗi trang
let currentPage = 1; // Trang hiện tại

function displayProducts() {
  const productList = $("product-items");
  const pagination = document.getElementById("pagination");
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = pcList.slice(startIndex, endIndex);

  productList.innerHTML = "";
  currentProducts.forEach((product) => {
    const div = document.createElement("div");
    li.textContent = product;
    productList.appendChild(li);
  });

  const totalPages = Math.ceil(products.length / itemsPerPage);
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
      currentPage = i;
      displayProducts();
    });
    pagination.appendChild(button);
  }
}
