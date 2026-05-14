import { useState, useEffect } from "react"
import currencyexchange from "./Currencyinfo"

function MainPage() {

    const [CurrencyInput, setCurrencyInput] = useState(0)
    const [Currencies, setCurrencies] = useState([])
    const [CurrentCurrency, setCurrentCurrency] = useState("")
    const [TargetCurrency, setTargetCurrency] = useState("")
    const [ResultCurrency, setResultCurrency] = useState(0)

    const Swap = async () => {
        const data = await currencyexchange({ CurrentCurrency, TargetCurrency })
        console.log("CurrentCurrency:", CurrentCurrency)
        console.log("TargetCurrency:", TargetCurrency)
        // console.log("result for api currerncy")
        // console.log(data)
        setResultCurrency(data);
    }

    useEffect(() => {
        const loadcurrencies = async () => {
            const res = await fetch("https://api.frankfurter.dev/v2/currencies");
            const data = await res.json();
            // const currencies = Object.entries(data).map(([code, info]) => ({
            //     code,
            //     name: info.name
            // }))
            const currencies = Object.values(data).map((info) => ({
                code: info.iso_code,
                name: info.name
            }))
            // console.log(data)
            setCurrencies(currencies)
        }

        loadcurrencies();
    }, [])


    // const currencies = ["USD", "INR", "RNB", "HKD", "EUR"];

    const handleCurrentCurrency = (e) => {
        setCurrentCurrency(e.target.value);
    }

    const handleTargetCurrency = (e) => {
        setTargetCurrency(e.target.value);
    }



    return (
        <>

            <div className="absolute inset-0 -z-10 h-full w-full bg-[#1e1e1e] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-size-[14px_24px] px-90 py-30 text-[#C3C2B7] min-h-screen">

                <div className="bg-[#2C2C2A] flex flex-col justify-center items-center h-130 gap-16 rounded-3xl shadow-xl/30 px-40">

                    <h1 className="align-middle font-semibold text-3xl">Currency Converter</h1>

                    <section className="flex flex-col gap-10">
                        <form action="align" className="flex flex-col gap-8 justify-center items-center">

                            <input type="text" placeholder="Enter the Amount" onChange={(e) => setCurrencyInput(e.target.value)} className="border border-[#3b3b39] mx-40 rounded-md p-2 bg-white text-black bg-neutral-secondary-medium  border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-3 shadow-xs placeholder:text-body " />

                            <div className="flex gap-28">
                                <label htmlFor="currentCurrency" className="text-2xl" >Choose Currency:</label>
                                <select name="currency" value={CurrentCurrency} onChange={handleCurrentCurrency} id="currentcurrency" className="select-box border border-[#3b3b39] text-[#C3C2B7] bg-transparent 0 rounded-md px-2 ">
                                    
                                    <option value="" >Select Currency</option>

                                    {Currencies.map((currency) => {
                                        return (<option key={currency.code} value={currency.code}>
                                            {currency.code} - {currency.name}
                                        </option>)
                                    })}

                                </select>
                            </div>

                            <div className="flex gap-10">
                                <label htmlFor="targetCurrency" className="text-2xl">Choose Target Currency:</label>
                                <select name="currency" value={TargetCurrency} onChange={handleTargetCurrency} id="targetcurrency" className="select-box border border-[#3b3b39] text-[#C3C2B7] bg-transparent  rounded-md px-2">

                                    <option value="">Select Currency</option>
                                    {Currencies.map((currency) => {
                                        return (<option key={currency.code} value={currency.code}>
                                            {currency.code} - {currency.name}
                                        </option>)
                                    })}

                                </select>
                            </div>
                            <div className="flex gap-50 ">

                                <div className="flex gap-5 text-2xl  py-2">

                                    {TargetCurrency ?  <span>Value of {TargetCurrency} :</span> :  <span>Currency Value :</span>}
                                    
                                    <span>{ResultCurrency * Number(CurrencyInput)}</span>
                                </div>
                                <div>
                                    <button type="button" onClick={Swap} className="custom-button">Convert</button>
                                </div>

                            </div>
                        </form>
                    </section>
                </div>

            </div>


        </>
    )

}

export default MainPage
