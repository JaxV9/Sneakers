import { useEffect, useState } from "react"
import { Card } from "./components/Card"
import { ShoesType } from "../../model/shoes"


export const Store = () => {

    const [shoes, setShoes] = useState<ShoesType[]>([])

    const fetchShoes = async () => {
        try {
            let response = await fetch(`http://localhost:8000/api/v1/shoes/`, { cache: 'force-cache' })
            let data = await response.json()
            setShoes(data)
        } catch {
            console.log("error")
        }
    }

    useEffect(() => {
        fetchShoes()
    }, [])


    return (
        <div className="cardsListContainer">
            {
                shoes.length > 0 ?
                shoes.map((shoe, index) => (
                    <div key={index}>
                    <Card />
                    </div>
                ))
            :
                    null
            }
        </div>
    )
}