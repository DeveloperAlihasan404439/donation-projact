import { useEffect, useState } from "react"

export const useDonationFetch =(fetchUrl)=>{
    const [donetion, setDonation] = useState([])
    useEffect(()=>{
        async function donetions(){
            const res = await fetch(fetchUrl)
            const data = await res.json()
            setDonation(data)
        }
        donetions()
    },[fetchUrl])
    return donetion
}
