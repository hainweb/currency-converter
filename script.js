function convertCurrency() {
    const usdInput = document.getElementById('usd').value;
    const usdToInrRate = 83.40; // Example rate, you may want to fetch this dynamically

    if (usdInput && !isNaN(usdInput)) {
        const inrOutput = (usdInput * usdToInrRate).toFixed(2);
        document.getElementById('inr').value = inrOutput;
    } else {
        alert('Please enter a valid number');
    }
}
