const whatsappBase = "https://wa.me/56971075720?text=Hola, quiero más información sobre ";

const productos = [
    {
        nombre: "Pernos",
        descripcion: "Pernos de alta resistencia para construcción y fijaciones seguras",
        imagen: "img/pernos.jpg",
        categorias: ["ferreteria", "industrial"],
        whatsapp: whatsappBase + encodeURIComponent("Pernos")
    },
    {
        nombre: "Planchas de acero",
        descripcion: "Planchas de acero para estructuras y trabajos de soldadura",
        imagen: "img/planchas.jpg",
        categorias: ["ferreteria", "industrial"],
        whatsapp: whatsappBase + encodeURIComponent("Planchas de acero")
    },
    {
        nombre: "Perfiles",
        descripcion: "Perfiles de acero, galvanizados, metalcom",
        imagen: "img/perfiles.jpg",
        categorias: ["ferreteria", "industrial"],
        whatsapp: whatsappBase + encodeURIComponent("Perfiles")
    }
];
