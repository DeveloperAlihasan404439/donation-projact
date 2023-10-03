const getDonations = ()=>{
    const fatarites = localStorage.getItem('phones')
    if(fatarites){
        return JSON.parse(fatarites)
    }
    return []
}

const setDonations = id => {
    const getPhones = getDonations()
    const chackPhone = getPhones.find(phone => phone === id)
    if(!chackPhone){
        getPhones.push(id)
        localStorage.setItem('phones',JSON.stringify(getPhones))
    }
}
export{getDonations,setDonations}