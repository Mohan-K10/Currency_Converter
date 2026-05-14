import { useState, useEffect } from "react";

async function currencyexchange({ CurrentCurrency, TargetCurrency }) {
    let url = `https://api.frankfurter.dev/v2/rate/${CurrentCurrency}/${TargetCurrency}`
    const currency = await fetch(url);
    const data = await currency.json();
    // console.log("currency exchange api")
    // console.log(data)
    return data.rate
}

export default currencyexchange