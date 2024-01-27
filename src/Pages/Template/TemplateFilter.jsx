import React from 'react'
// import TempFilterApi from '../../Components/TempFilterApi.js';

const TemplateFilter = ({ filterItem, filterData }) => {
    // const [templateData, settemplateData] = useState(TempFilterApi)

    // const filterItem = (category) => {
    //     const updatedList = TempFilterApi.filter((curElem) => {
    //       return curElem.category === category;

    //     });
    //     settemplateData(updatedList);
    //   }

    return (
        <>
            <nav className="tempFilter_Nab">
                <div className="btn-group">


                    {/* <button className="btn-items" onClick={() => settemplateData(TempFilterApi)}>All</button> */}



                    {filterData.map((curElem) => {
                        return <>

                            <button className="btn-items" onClick={() => filterItem(curElem)}>{curElem}</button>
                        </>
                    })}

{/* 
                    <button className="btn-items" onClick={() => filterItem("restaurant")}>Reastaurants</button>
                    <button className="btn-items" onClick={() => filterItem("portfolio")}>Portfolio</button>
                    <button className="btn-items" onClick={() => filterItem("construction")}>Construction</button>
                    <button className="btn-items" onClick={() => filterItem("ecommerce")}>Ecommerce</button> */}
                </div>

            </nav>
        </>
    )
}

export default TemplateFilter
