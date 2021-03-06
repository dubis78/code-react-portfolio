import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';
import Top from './components/Top';
import Picture_social from './components/PictureSocial';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Interest from './components/Interest';
import CV from './components/CV';

ReactDOM.render(
  <React.StrictMode>
    <header>
      <Top/>
    </header>
    <main>
      <Picture_social/>
      <Education/>
      <Portfolio/>
      <Interest/>
      <CV/>
    </main>
    <footer>

    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);

