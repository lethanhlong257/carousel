import React from 'react';
import ArrowCarousel from './components/arrow/arrowCarousel.component.jsx';
import './assets/scss/carousel.scss';

function App() {
  return (
    <div className="carousel-wraper">
      <ArrowCarousel arrowType='left' />
      <ArrowCarousel arrowType='right' />
    </div>
  );
}

export default App;
