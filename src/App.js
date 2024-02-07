import { useEffect, useState } from 'react';
import { Accordion } from './Accordion/Accordion';
import './App.css';
import { Tabs } from './Tabs/Tabs';
import TabInfoOne from './Tabs/TabInfoOne';
import TabInfoTwo from './Tabs/TabInfoTwo';
import TabInfoThree from './Tabs/TabInfoThree';
import Modal from './Modal/Modal';
import Content from './Modal/Content';
import LoaderPage from './Loader/LoaderPage';
import React from "react";




function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [stateLoader, setStateLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 1000);
    return () => clearTimeout(timer)
  }, [])
  return (
    <div>
      <div className='containerLoader'>
        {stateLoader && <LoaderPage />}
      </div>
      <div className='container'>
        <div className='containerModal'>
          <div className='btnOpenWrap'>
            <button onClick={() => setIsOpenModal(true)} className='btnOpen'>
              <span className='open'></span>
              <span className='open'></span>
              <span className='open'></span>
            </button>
          </div>
          {isOpenModal &&
            <Modal setIsOpenModal={setIsOpenModal}>
              <Content setIsOpenModal={setIsOpenModal} />
            </Modal>
          }
        </div>
        <div className='containerTabs'>
          <Tabs 
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          />
          {activeTab === 0 && <TabInfoOne />}
          {activeTab === 1 && <TabInfoTwo />}
          {activeTab === 2 && <TabInfoThree />}
        </div>
        <div className='containerAccordion'>
          <Accordion />
        </div>
      </div>
    </div>

  );
}

export default App;
