import React from 'react';
import iedc_committee from '../assets/iedc-2024-executive.jpg';
import iedc_committee1 from '../assets/iedc-2024-executive.jpg'; 
import iedc_committee2 from '../assets/iedc-2024-executive.jpg'; 

const images = [iedc_committee, iedc_committee1, iedc_committee2];

const Home = () => {
  return (
    <div>
      <main className="main-content">
        <h1>Innovative Entrepreneurship Development Center</h1>
        <p>Empowering the next generation of entrepreneurs to create impact and drive innovation at the Central University of Kerala.</p>
        
        <div className="sliding-images">
          {images.map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt={`IEDC Image ${index + 1}`} 
              className="IEDC_CUK_2024-committee" 
            />
          ))}
        </div>
        
        <section className="mission">
          <h2>Our Mission</h2>
          <p>At IEDC, we provide resources, mentorship, and networking opportunities to help budding entrepreneurs bring their innovative ideas to life.</p>
        </section>
      </main>
    </div>
  );
};

export default Home;
