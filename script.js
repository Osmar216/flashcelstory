const produtos = [
  { nome: "Headset Gamer", categoria: "Fones", preco: 249.90, img: "https://m.media-amazon.com/images/I/61nPiOOv9BL._AC_SL1500_.jpg" },
  { nome: "Mouse Gamer", categoria: "Acessorios", preco: 139.90, img: "https://m.media-amazon.com/images/I/61v3Zq0+O+L._AC_SL1500_.jpg" },
  { nome: "Teclado Mecânico", categoria: "Teclados", preco: 329.90, img: "https://m.media-amazon.com/images/I/71Kr3jV6htL._AC_SL1500_.jpg" }
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const categoryFilter = document.getElementById("filter-category");

let total = 0;

function renderProducts(category = "all") {
  productList.innerHTML = "";
  produtos.forEach(produto => {
    if (category === "all" || produto.categoria === category) {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${produto.img}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>Categoria: ${produto.categoria}</p>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button class="btn" onclick="addToCart(${produto.preco})">Adicionar</button>
      `;
      productList.appendChild(div);
    }
  });
}

function addToCart(preco) {
  const item = document.createElement("li");
  item.textContent = `Item - R$ ${preco.toFixed(2)}`;
  cartItems.appendChild(item);
  total += preco;
  cartTotal.textContent = total.toFixed(2);
}

categoryFilter.addEventListener("change", () => {
  renderProducts(categoryFilter.value);
});

renderProducts();
