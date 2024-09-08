import React, { useEffect } from 'react';

const TableauEmbed = ({ url, id, width = '', height = '' }) => {
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

    // Clean up on component unmount
    return () => {
      if (viz) {
        viz.dispose();
      }
    };
  }, [url, id, width, height]);

  return <div id={id} style={{ width: width, height: height }}></div>;
};

export default TableauEmbed;
