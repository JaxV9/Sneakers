import { Card } from "./components/Card"

export const Store = () => {
    const mockTab = [1,2,3,4,5,6,7,8,9]
    return (
        <div className="grid-container">
            {mockTab.map((index)=> <Card key={index}/>)}
        </div>
    )
}