import Card from './Card'
import './Cards.css'


const Cards = ({result, category}) => {

    const getCourses = () => {

        if(category === 'All')
        {
            let allCourses = []
    
            if (!result) {
                return [];
            }
    
            Object.values(result).forEach((courseCategory) => {
                if (Array.isArray(courseCategory)) {
                    courseCategory.forEach((course) => {
                        allCourses.push(course);
                    }) 
                }
            })
            return allCourses;
        }
        else
            return result[category];
    }


    return (
        <div className="cards-container">
            {getCourses().map((course) => (
                <Card key={course.id} course={course} />
            ))}
        </div>
    )

}

export default Cards;