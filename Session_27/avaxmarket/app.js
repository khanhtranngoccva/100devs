HTMLElement.prototype.hide = function () {
    this.style.display = "none";
};

HTMLElement.prototype.show = function() {
    this.style.display = "block";
};


async function get_json(urlName) {
    return (await fetch(urlName)).json();
}

function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

function addPriceBar(value, timestamp, price) {
    const newBar = document.createElement("div");
    newBar.classList.add("priceBar");
    const toolTip = document.createElement("div");
    toolTip.classList.add("toolTip");
    const toolTipDate = document.createElement("time");
    toolTipDate.innerText = `${new Date(timestamp).toLocaleString()}`;
    const toolTipPrice = document.createElement("span");
    toolTipPrice.innerText = `\$${price.toFixed(2)}`;
    toolTip.append(toolTipDate, toolTipPrice);
    newBar.append(toolTip)
    newBar.style.height = value;
    newBar.addEventListener("mouseover", function() {
        toolTip.show();
    });
    newBar.addEventListener("mouseout", function() {
        toolTip.hide();
    });
    return newBar;
}

function update(priceData) {
    const pricesArray = priceData["prices"];
    const priceFluctuations = pricesArray.map(item=>item[1]);
    const maxPrice = Math.max(...priceFluctuations);
    const minPrice = Math.min(...priceFluctuations);
    console.log(maxPrice, minPrice);
    const priceRelativeCoordinates = priceFluctuations.map(price=> 1 + 98 * (price - minPrice) / (maxPrice - minPrice) + "%");
    console.log(priceRelativeCoordinates);
    const priceBarFragment = document.createDocumentFragment();
    for (let i = 0; i < priceFluctuations.length; i++) {
        const relativePriceValue = priceRelativeCoordinates[i];
        const [timestamp, price] = pricesArray[i];
        priceBarFragment.append(addPriceBar(relativePriceValue, timestamp, price));
    }
    document.querySelector(".priceChart").append(priceBarFragment);
}

async function mainScript() {
    await delay(5);
    const result = await get_json("https://api.coingecko.com/api/v3/coins/avalanche-2/market_chart?vs_currency=usd&days=1");
    // console.log(result);
    update(result);
}

mainScript();