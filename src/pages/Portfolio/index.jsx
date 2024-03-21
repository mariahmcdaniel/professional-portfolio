import React, { useState } from 'react';
import './style.css';
import BUILT_APPS from './Built_Apps';
import CLIENT_PROJECTS from './Client_Projects';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const MyPortfolioTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Tabs selectedIndex={activeIndex} onSelect={index => setActiveIndex(index)}>
      <TabList>
        <Tab>Web App Gallery</Tab>
        <Tab>Branding & UI Development</Tab>
      </TabList>
      <TabPanel>
        <div>
          <BUILT_APPS />
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <CLIENT_PROJECTS />
        </div>
      </TabPanel>
    </Tabs>
  );
};


export default MyPortfolioTabs;
