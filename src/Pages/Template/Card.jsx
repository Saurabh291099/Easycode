import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ templateData }) => {
    // console.log(templateData)
    return (

        <>

            {templateData.map((curElem) => {
                const { id, image, heading, description, price } = curElem;

                return (
                    <>
                        <div class="card tem_card" key={id} style={{ width: '18rem', height: 'auto' }}>
                            <img src={image} class="card-img-top card_img" alt="Template_img" />
                            <div class="card-body">
                                <span>{id}</span>
                                <h5 class="card-title">{heading}</h5>
                                <p class="card-text">{description}</p>
                                <p class="card-text">{price}</p>

                                <div className='cardbtn'>
                                    <Link exact to="/templates/preview" class="btn btn-primary">Preview</Link>
                                    <Link href="/" class="btn btn-primary text-end">Buy</Link>
                                </div>

                            </div>
                        </div>
                    </>
                )
            })

            }

        </>
    )
}

export default Card
