import TitleImg1 from '../../../assets/assets/1.png'
// import TitleImg2 from '../../../assets/assets/2.png'
// import TitleImg3 from '../../../assets/assets/3.png'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';


const LeftSideContent = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/public/categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className="space-y-8">
            {/* All categories section starts from  */}
            <h2 className="text-2xl">All Categories</h2>
            {
                categories.map(category => <Link className="block ml-4 text-xl font-medium"
                    key={category.id}
                    to={`/category/${category.id}`}>
                    {category.name}</Link>)
            }
            {/* all categories ends with dynamic  */}


            {/* title & img section start  */}
            <div className='border'>
                <div className=" bg-base-100">
                    <div className="space-y-2">
                        <figure><img src={TitleImg1} alt="" /></figure>
                        <h2 className="card-title">{categories.name}</h2>
                        <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <div>
                            <p>Sports</p>
                            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideContent;