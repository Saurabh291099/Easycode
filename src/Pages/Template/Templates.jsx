import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import pic from '../../Images/photo.jpg'
// import { Button } from 'react-bootstrap';
import Card from '../../Components/Card';
import '../../Style/Templates.css'
import TempFilterApi from '../../Components/TempFilterApi.js';
import TemplateFilter from './TemplateFilter.jsx';



const uniqueList = [ "All",
  ...new Set(TempFilterApi.map((curElem) => {
    return curElem.category;
  })
  ),
];

console.log(uniqueList);

const Templates = (category) => {
  const [templateData, settemplateData] = useState(TempFilterApi)
  const [filterData, setfilterData] = useState(uniqueList)

  const filterItem = (category) => {

    if(category==="All"){
      settemplateData(TempFilterApi)
      return;
    }
    const updatedList = TempFilterApi.filter((curElem) => {
      return curElem.category === category;

    });
    settemplateData(updatedList);
  }
  // console.log(templateData);
  return (
    <div className="templateMain">
      <Container>
        <div className='bnr_hding'>
          <h3 className='text-center my-4'>Design Beautiful Websites Easily with Our Templates</h3>
          <p className='text-center my-4'>Welcome to our template paradise, where creativity knows no bounds. Elevate your projects with our meticulously crafted templates that effortlessly transform your ideas into stunning realities. Whether you're a seasoned designer or just starting your creative journey, our diverse collection promises to inspire and empower, making your design process a breeze.</p>
        </div>


        <TemplateFilter filterItem={filterItem} filterData={filterData} />

        {/* <nav className="tempFilter_Nab">
          <div className="btn-group">

            {}
            <button className="btn-items" onClick={() => settemplateData(TempFilterApi)}>All</button>
            <button className="btn-items" onClick={() => filterItem("hotel")}>Hotel</button>
            <button className="btn-items" onClick={() => filterItem("restaurant")}>Reastaurants</button>
            <button className="btn-items" onClick={() => filterItem("portfolio")}>Portfolio</button>
            <button className="btn-items" onClick={() => filterItem("construction")}>Construction</button>
            <button className="btn-items" onClick={() => filterItem("ecommerce")}>Ecommerce</button>
          </div>

        </nav> */}
        <Row className='pt-4'>
          <Col className='lnd-col'>
            <Card templateData={templateData} setfilterData={setfilterData} />
            {/*             
            <Card title='HTML TEMPLATE' cardimg={pic} text='CodeWithSharmaJi is a programming website.' previewbtn='preview' buybtn='buy' />
            <Card title='HTML TEMPLATE' cardimg={pic} text='CodeWithSharmaJi is a programming website.' previewbtn='preview' buybtn='buy' />
            <Card title='HTML TEMPLATE' cardimg={pic} text='CodeWithSharmaJi is a programming website.' previewbtn='preview' buybtn='buy' />
            <Card title='HTML TEMPLATE' cardimg={pic} text='CodeWithSharmaJi is a programming website.' previewbtn='preview' buybtn='buy' />
            <Card title='HTML TEMPLATE' cardimg={pic} text='CodeWithSharmaJi is a programming website.' previewbtn='preview' buybtn='buy' />
            <Card title='HTML TEMPLATE' cardimg={pic} text='CodeWithSharmaJi is a programming website.' previewbtn='preview' buybtn='buy' />
            <Card title='HTML TEMPLATE' cardimg={pic} text='CodeWithSharmaJi is a programming website.' previewbtn='preview' buybtn='buy' />
            <Card title='HTML TEMPLATE' cardimg={pic} text='CodeWithSharmaJi is a programming website.' previewbtn='preview' buybtn='buy' />
            <Card title='HTML TEMPLATE' cardimg={pic} text='CodeWithSharmaJi is a programming website.' previewbtn='preview' buybtn='buy' />
            <Card title='HTML TEMPLATE' cardimg={pic} text='CodeWithSharmaJi is a programming website.' previewbtn='preview' buybtn='buy' />
            <Card title='HTML TEMPLATE' cardimg={pic} text='CodeWithSharmaJi is a programming website.' previewbtn='preview' buybtn='buy' /> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Templates
