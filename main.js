const container = document.getElementById("productos-container");

function displayProducts(filteredProducts) {
    container.innerHTML = '';
    filteredProducts.forEach(p => {
        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <a class="buy-btn" href="${p.whatsapp}" target="_blank">Pedir info</a>`;
        container.appendChild(card);
    });
}

function filterProducts(categoria) {
    if (categoria === "all") {
        displayProducts(productos);
    } else {
        displayProducts(productos.filter(p => p.categorias.includes(categoria)));
    }
}

// Mostrar todos al inicio
displayProducts(productos);
