import Card from './Card'

function Tours({tours, removeTour})
{
    return(
        <div className="flex flex-wrap mt-8">
            
            {
                tours.map( (tour) => {
                    return <Card {...tour} removeTour={removeTour}></Card>
                } )
            }
        </div>
    )
}

export default Tours;