import React from 'react'
import { Link } from 'react-router-dom';
import { connect, useSelector} from "react-redux";

function Portfolio() {
  const page = useSelector((state: any) => state.page)
  return (
    <div className='portfolio'>
      <h2 className='page-title'>Portfolio</h2>
      <div className="portfolio-card">
        <Link to="/portfolio/superior-react-table">
          <h3>• Superior React Table</h3>
          <p>A multilanguage, editable, addable, removable, sortable, detailed searchable, responsive table component for react.</p>
          <p>Live Demo</p>
          <p>#React, #Typescript</p>
        </Link>
      </div>
      <div className="portfolio-card">
        <a href="https://github.com/halidunal/halidunal.github.io">
          <h3>• Github.io</h3>
          <p>Personel web site with github.io</p>
          <p>#React, #Redux, #Typescript</p>
        </a>
      </div>
      <div className="portfolio-card">
        <a href="https://github.com/halidunal/react-ecommerce-app">
          <h3>• React E-commerce App</h3>
          <p>Sample ecommerce, shop app with react</p>
          <p>#React, #Redux, #Tailwind, #FakeStoreAPI</p>
        </a>
      </div>
      <div className="portfolio-card">
        <a href="https://github.com/halidunal/angular-ecommerce-app">
          <h3>• Angular E-commerce App</h3>
          <p>Sample ecommerce, shop app with angular</p>
          <p>#Angular, #Rxjs, #Ngrx, #Firebase, #Bootstrap, #FakeStoreAPI</p>
        </a>
      </div>
      <div className="portfolio-card">
        <a href="https://github.com/halidunal/pokemon-app">
          <h3>• Pokemon App</h3>
          <p>Sample react app</p>
          <p>#React, #PokeAPI</p>
        </a>
      </div>
    </div>
  )
}

export default Portfolio
