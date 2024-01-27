import React from 'react'
import Sidebar from './Sidebar'
import '../../Style/Components.css'
import AsideAdd from './AsideAdd'

// import { Tab, Tabs } from 'react-bootstrap';


// const SidebarTabs = ({ data }) => {
//   return (
//     <Tabs defaultActiveKey={0} id="sidebar-tabs">
//       {data.map((tab, index) => (
//         <Tab key={index} eventKey={index} title={tab.name}>
//           <p>This is the content for {tab.name}</p>
//         </Tab>
//       ))}
//     </Tabs>
//   );
// };



const Components = () => {

  const sidebarData = [
    { name: 'Accordian', link: '/components/accordians' },
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

      <div className="components-wrapper">
        <div class="row component-inner">
          <div class="col-2 sidebar-wrapper">
            {sidebarData.map((data) => {
              return (<Sidebar link={data.link} name={data.name} />)
            })}
          </div>
          <div class="col-8">
            Column
          </div>


          {/* <div className="col-10 component-sidebar">
            <SidebarTabs data={sidebarData} />
          </div> */}

          <div className="col-10">

         
          </div>
          <div class="col-2 components-adds">
            <AsideAdd />
          </div>
        </div>
      </div>
    </>
  )
}

export default Components
