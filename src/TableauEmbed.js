import React, { useEffect } from 'react';

const TableauEmbed = ({ url, id, width = '100%', height = '100%' }) => {
  useEffect(() => {
    // Check if Tableau API is loaded
    if (!window.tableau) {
      console.error('Tableau API is not loaded.');
      return;
    }

    // Find the element to embed the Tableau visualization
    const divElement = document.getElementById(id);
    if (!divElement) {
      console.error(`Element with id ${id} not found.`);
      return;
    }

    // Create a new Tableau visualization
    const viz = new window.tableau.Viz(divElement, url, {
      width: width,
      height: height,
      onFirstInteractive: () => {
        console.log('Tableau visualization is ready.');
      }
    });

    // Adjust the height on window resize
    const handleResize = () => {
      divElement.style.height = `${window.innerHeight * 0.8}px`; // Adjust height based on viewport height
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial height

    // Clean up on component unmount
    return () => {
      if (viz) {
        viz.dispose();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [url, id, width, height]);

  return <div id={id} style={{ width: width, height: height, overflow: 'auto' }}></div>;
};

export default TableauEmbed;
