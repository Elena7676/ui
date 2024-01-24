import { useState } from 'react';
import { Accordion } from './Accordion/Accordion';
import './App.css';
import { Tabs } from './Tabs/Tabs';
import TabInfoOne from './Tabs/TabInfoOne';
import TabInfoTwo from './Tabs/TabInfoTwo';
import TabInfoThree from './Tabs/TabInfoThree';
import Modal from './Modal/Modal';
import Content from './Modal/Content';


function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className='container'>
      <div className='containerModal'>
        <div className='btnOpenWrap'>
        <button onClick={()=> setIsOpenModal(true)} className='btnOpen'>
            <span className='open'></span>
            <span className='open'></span>
            <span className='open'></span>
          </button>
        </div>
          {isOpenModal && 
          <Modal setIsOpenModal={setIsOpenModal}>
          <Content setIsOpenModal={setIsOpenModal}/>
          </Modal>
          }
      </div>
      <div className='containerTabs'>
        <Tabs setActiveTab={setActiveTab} />
        {activeTab === 0 && <TabInfoOne/> }
        {activeTab === 1 && <TabInfoTwo/> }
        {activeTab === 2 && <TabInfoThree/>}
      </div>
      <div className='containerAccordion'>
      <Accordion/>
      </div>
    </div>
  );
}

export default App;
