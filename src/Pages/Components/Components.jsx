import React from 'react'
import '../../Style/Components.css'
import Accordian from './Accordian'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

const Components = () => {
  const [key, setKey] = useState('home');
  const sidebarData = [
    { name: 'Accordian', link: <Accordian /> },
    { name: 'Buttons', link: '/components/buttons' },
    { name: 'Card', link: '/components/card' },
    { name: 'Carousel', link: '/components/carousel' },
    { name: 'Forms', link: '/components/forms' },
    { name: 'Toggle switches', link: '/components/toggleswitches' },
    { name: 'Loaders', link: '/components/loaders' },
    { name: 'Inputs', link: '/components/inputs' },
  ]
  return (
    <>

      <Tab.Container id="left-tabs-example" defaultActiveKey="Accordian">
        <Row>
          {sidebarData.map((data) => {
            return (
              <>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey={data.name}>{data.name}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey={data.name}>{data.link}</Tab.Pane>
                  </Tab.Content>
                </Col>

              </>
            )
          })}

        </Row>
      </Tab.Container>
    </>
  )
}

export default Components
