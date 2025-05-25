
        const countryList = {
    AED: "AE", AFN: "AF", XCD: "AG", ALL: "AL", AMD: "AM", ANG: "AN", AOA: "AO", AQD: "AQ", ARS: "AR", AUD: "AU", 
    AZN: "AZ", BAM: "BA", BBD: "BB", BDT: "BD", XOF: "BE", BGN: "BG", BHD: "BH", BIF: "BI", BMD: "BM", BND: "BN", 
    BOB: "BO", BRL: "BR", BSD: "BS", NOK: "BV", BWP: "BW", BYR: "BY", BZD: "BZ", CAD: "CA", CDF: "CD", XAF: "CF", 
    CHF: "CH", CLP: "CL", CNY: "CN", COP: "CO", CRC: "CR", CUP: "CU", CVE: "CV", CYP: "CY", CZK: "CZ", DJF: "DJ", 
    DKK: "DK", DOP: "DO", DZD: "DZ", ECS: "EC", EEK: "EE", EGP: "EG", ETB: "ET", EUR: "FR", FJD: "FJ", FKP: "FK", 
    GBP: "GB", GEL: "GE", GGP: "GG", GHS: "GH", GIP: "GI", GMD: "GM", GNF: "GN", GTQ: "GT", GYD: "GY", HKD: "HK", 
    HNL: "HN", HRK: "HR", HTG: "HT", HUF: "HU", IDR: "ID", ILS: "IL", INR: "IN", IQD: "IQ", IRR: "IR", ISK: "IS", 
    JMD: "JM", JOD: "JO", JPY: "JP", KES: "KE", KGS: "KG", KHR: "KH", KMF: "KM", KPW: "KP", KRW: "KR", KWD: "KW", 
    KYD: "KY", KZT: "KZ", LAK: "LA", LBP: "LB", LKR: "LK", LRD: "LR", LSL: "LS", LTL: "LT", LVL: "LV", LYD: "LY", 
    MAD: "MA", MDL: "MD", MGA: "MG", MKD: "MK", MMK: "MM", MNT: "MN", MOP: "MO", MRO: "MR", MTL: "MT", MUR: "MU", 
    MVR: "MV", MWK: "MW", MXN: "MX", MYR: "MY", MZN: "MZ", NAD: "NA", XPF: "NC", NGN: "NG", NIO: "NI", NPR: "NP", 
    NZD: "NZ", OMR: "OM", PAB: "PA", PEN: "PE", PGK: "PG", PHP: "PH", PKR: "PK", PLN: "PL", PYG: "PY", QAR: "QA", 
    RON: "RO", RSD: "RS", RUB: "RU", RWF: "RW", SAR: "SA", SBD: "SB", SCR: "SC", SDG: "SD", SEK: "SE", SGD: "SG", 
    SKK: "SK", SLL: "SL", SOS: "SO", SRD: "SR", STD: "ST", SVC: "SV", SYP: "SY", SZL: "SZ", THB: "TH", TJS: "TJ", 
    TMT: "TM", TND: "TN", TOP: "TO", TRY: "TR", TTD: "TT", TWD: "TW", TZS: "TZ", UAH: "UA", UGX: "UG", USD: "US", 
    UYU: "UY", UZS: "UZ", VEF: "VE", VND: "VN", VUV: "VU", YER: "YE", ZAR: "ZA", ZMK: "ZM", ZWD: "ZW"
};


const base_url =
    "https://v6.exchangerate-api.com/v6/e0ede2be49fdf4005a75b19c/pair";
let dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.getElementById("btn");


for (select of dropdowns) {
    for (currency_code in countryList) {

        let option = document.createElement("option");
        option.value = currency_code;
        option.innerText = currency_code;
        select.append(option); // appending options to select;

        //setting the defaults value;
        if (select.name === "from" && currency_code === "USD") {
            option.selected = true;
        }
        else if (select.name === "to" && currency_code === "PKR") {
            option.selected = true;
        }

        

    }
    select.addEventListener("change",(evt)=>{
        update_Flag(evt.target);
    });
}

const update_Flag = (element)=>{
    let curr_code = element.value;
    let coun_Code = countryList[curr_code];
    let img = element.parentElement.querySelector("img"); 
    let src = `https://flagsapi.com/${coun_Code}/shiny/64.png`;
    img.src = src;
    
};

btn.addEventListener("click", async (event)=>{
    event.preventDefault();

    let amount = document.getElementById("amount");
    let amv = amount.value;
    let from = document.querySelector(".from select").value.toLowerCase();
    let to = document.querySelector(".to select").value.toLowerCase();

    let url = `https://v6.exchangerate-api.com/v6/e0ede2be49fdf4005a75b19c/pair/${from}/${to}`;

    if(amv === "" || amv <1){
        amount.value = "1";
        amv = 1;
    }

    // let response = await fetch(url);
    // let data = await response.json();
    // let final_value = amv*data.conversion_rate;

    // document.getElementById("msg").innerText = `${amv} ${from.toUpperCase()} = ${final_value} ${to.toUpperCase()}`;

     try {
        let response = await fetch(url);
        let data = await response.json();
        
         if(data.result === "error") {
            document.getElementById("msg").innerText = `Error: ${data['error-type']}`;
            return;
        }
        
        let final_value = amv*data.conversion_rate;
        document.getElementById("msg").innerText = `${amv} ${from.toUpperCase()} = ${final_value} ${to.toUpperCase()}`;
    } catch (error) {
        document.getElementById("msg").innerText = "Error fetching exchange rate";
        console.error(error);
    }
});