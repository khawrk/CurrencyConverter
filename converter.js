const amount = document.getElementById('amount');
const convertBtn = document.getElementById('converter');
const result = document.getElementById('result');
const startingCurrency = document.getElementById('currency-starting');
const endingCurrency = document.getElementById('currency-ending');

const apiKey = "wU+tbfk9ozFagsjkqBwTCQ==rOBnpuEZjhGDV9gl";
const apiUrl = "https://api.api-ninjas.com/v1/convertcurrency?";

convertBtn.addEventListener('click', async () => {
    try {
        console.log('hi')
        const amountInput = amount.value;
        const startCurrency = startingCurrency.value;
        const endCurrency = endingCurrency.value;
        const url = apiUrl + `want=${endCurrency}&have=${startCurrency}&amount=${amountInput}`;

        const response = await fetch(url, {
            headers: {
                'X-API-KEY': apiKey
            }
        })
        const data = await response.json();
        const resultAmount = data.new_amount;
        if (resultAmount) {
            result.innerHTML = `<h2> ${amountInput} ${startCurrency} = ${resultAmount} ${endCurrency}</h2>`
        } else {
            result.innerHTML(`<h2>Please add the amount</h2>`)
        }

    } catch (e) {
        console.error("Request Failed:", error);
        result.innerHTML = "An error occured please try again later";
    }
})