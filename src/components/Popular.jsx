import React, { useEffect, useState } from 'react'
import { Card, Pagination } from 'antd';

const { Meta } = Card;
function Popular() {
    const [dataSource, setDataSource] = useState([]);
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        getPopular();
    }, [])
    const getPopular = async () => {

        const check = localStorage.getItem('popular')

        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();
        console.log(data.recipes);
        setPopular(data.recipes);
    }

    const contentStyle = {
        width: '240px',
    };

    const wrapper = {
        display: 'flex',
        justifyContent: 'space-between'
    }
    return (
        <div >
            <h3>Popular Picks</h3>
            <div style={wrapper}>
                {popular.map((recipe) => {
                    return (
                        <div key={recipe.id}>
                            <Card
                                style={contentStyle}
                                hoverable
                                cover={<img alt={recipe.title} src={recipe.image} />}
                            >
                                <Meta title={recipe.title} />
                            </Card>
                        </div>
                    )
                })}
            </div>
            <Pagination pageSize={5} />
        </div>
    )


}

export default Popular