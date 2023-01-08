import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import InputsApp from './Components/Inputs/InputsApp';
import DatadisplayApp from './Components/Datadisplay/DatadisplayApp';
import FeedbackApp from './Components/Feedback/FeedbackApp';
import LayoutApp from './Components/Layout/LayoutApp';
import SurfacesApp from './Components/Surfaces/SurfacesApp';
import UtilsApp from './Components/Utils/UtilsApp';
import NavigationApp from './Components/Navigation/NavigationApp';
import DateAndTimeApp from './Components/DateAndTime/DateAndTimeApp';


const root = document.getElementById('root');
ReactDom.render(
  <>
    <InputsApp />
    <DatadisplayApp />
    <FeedbackApp />
    <LayoutApp />
    <SurfacesApp />
    <UtilsApp />
    <NavigationApp />
    <DateAndTimeApp />
  </>,
  root
);
