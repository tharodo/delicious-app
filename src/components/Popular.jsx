import React, { useEffect, useState } from 'react'
import { Card } from 'antd';

const { Meta } = Card;
function Popular() {

    const [popular, setPopular] = useState([]);
    useEffect(() => {
        getPopular();
    }, [])
    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();
        console.log(data);
        setPopular(data.recipes);
    }

    return (
        <div>
            <h3>Popular Picks</h3>
            {popular.map((recipe) => {
                return (

                    <div key={recipe.id}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt={recipe.title} src={recipe.image} />}
                        >
                            <Meta title={recipe.title} />
                        </Card>
                    </div>
                )
            })}
        </div>
    )


}

export default Popular