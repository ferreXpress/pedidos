const whatsappBase = "https://wa.me/56971075720?text=Hola, quiero más información sobre ";

const productos = [
    {
        nombre: "Pernos",
        descripcion: "Pernos de alta resistencia para construcción y fijaciones seguras",
        imagen: "img/pernos.jpg",
        categorias: ["ferreteria"],
        whatsapp: whatsappBase + encodeURIComponent("Pernos")
    },
    {
        nombre: "Planchas de acero",
        descripcion: "Planchas de acero para estructuras y trabajos de soldadura",
        imagen: "img/planchas.jpg",
        categorias: ["ferreteria"],
        whatsapp: whatsappBase + encodeURIComponent("Planchas de acero")
    },
    {
        nombre: "Mochila Outdoor",
        descripcion: "Mochila ergonómica de gran capacidad para trekking y camping.",
        imagen: "img/mochila.jpg",
        categorias: ["outdoor"],
        whatsapp: whatsappBase + encodeURIComponent("Mochila Outdoor")
    }
];
