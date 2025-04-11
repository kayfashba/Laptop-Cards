const tovars = [
    {
    button: "APPLE",
    names: "Mackbook",
    brend: "Apple",
    rasm: "https://www.freeiconspng.com/uploads/apple-brand-macbook-photo-20.png",
    narx: "1200$"
    },
    {
    button: "LENOVO",
    names: "Lenovo",
    brend: "Lenovo",
    rasm: "https://p3-ofp.static.pub/fes/cms/2023/05/03/edub8fcw5sgprqqbph6ehzp742ab0u790028.png",
    narx: "600$"
    },
    {
    button: "ACER",
    names: "Acer",
    brend: "Aspire",
    rasm: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1728567585/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306921_0_vfiklm.png",
    narx: "700$"
    },
    {
    button: "ASUS",
    names: "Asus",
    brend: "Asus",
    rasm: "https://dlcdnimgs.asus.com/websites/global/products/rZRNVfYdymO3rpit/img/00/fg.png",
    narx: "1400$"
    },
    {
    button: "ACER",
    names: "Acer",
    brend: "Predator",
    rasm: "https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/jh85AOibCRT46xkb45qPXpyvwLK8tTzcYITVhZBt.png",
    narx: "1300$"
    }
];
let cards = document.querySelector(".cards");

tovars.forEach((tovar) => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <div class = "div1">
    <button class = "btn1">${tovar.button}</button>
    <img src = "${tovar.rasm}">
    <div class = "p1">
    <span>Noutbuk brendi: ${tovar.brend}</span>
    <p>Nomi: ${tovar.names}</p>
    <p>Narxi: ${tovar.narx}</p> 
    </div>
    <button class = "btn2">ADD TO CART</button>
    </div>`
    cards.appendChild(card);
});