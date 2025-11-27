const places = [
    { name: "Горхи-Тэрэлж", distance: 70, province: "Төв аймаг", cost: 0 },
    { name: "Хархорин", distance: 370, province: "Өвөрхангай", cost: 0 },
    { name: "Хөвсгөл", distance: 780, province: "Хөвсгөл", cost: 0 },
    { name: "Элсэн Тасархай", distance: 280, province: "Өвөрхангай", cost: 0 },
    { name: "Увс Нуур", distance: 1500, province: "Увс аймаг", cost: 0 }
];

window.onload = function () {
    const list = document.getElementById("travel-list");
    places.forEach(p => {
        list.innerHTML += `
            <div class='card'>
                <h3>${p.name}</h3>
                <p><b>Зай:</b> ${p.distance} км</p>
                <p><b>Аймаг:</b> ${p.province}</p>
            </div>`;
    });
};

function calculate() {
    const rate = Number(document.getElementById("rate").value);
    const perkm = Number(document.getElementById("perkm").value);
    const daily = Number(document.getElementById("daily").value);

    let totalKm = places.reduce((sum, p) => sum + p.distance, 0);
    let travelCost = totalKm * perkm;
    let dayCost = 5 * daily;

    let usd = (travelCost + dayCost) / rate;

    document.getElementById("result").innerHTML = `
        <h3>Нийт зардал:</h3>
        <p><b>${(travelCost + dayCost).toLocaleString()} ₮</b></p>
        <p><b>${usd.toFixed(1)} USD</b></p>
    `;
}
