import React from 'react';
import TableauEmbed from './TableauEmbed';
import './DataAnalytics.css';

const DataAnalytics = () => {
  return (
    <div className="data-analytics">
      <section className="section">
        <h1>Data Analysis Projects</h1>

        <div className="project">
          <h2>
            <a href="https://medium.com/@j.edwardwells/unveiling-flood-dynamics-a-data-driven-odyssey-for-emergency-resilience-in-texas-566950e61f86" target="_blank" rel="noopener noreferrer">
            Texas Flooding Analysis: A Data-Driven Capstone Project
            </a>
          </h2>
          <p>
          This visual explores flood patterns across Texas’s nine largest counties from 2019 to 2023, 
          focusing on the frequency and impact of floods, flash floods, and coastal floods. 
          Our goal is to identify trends, assess damage, and develop strategies for better flood management and preparedness.
          </p>
          <TableauEmbed
            url="https://public.tableau.com/views/CapstoneProject-TexasFlooding/TexasFloods"
            id="tableau-project-1"
            width="100%"
            height="700px"
          />
          <h3>
          Key Insights:
          </h3>
          <p>Trend Analysis: Evaluate yearly and seasonal flood trends to inform emergency planning.</p>
          <p>Cost Analysis: Examine damage costs to prioritize risk management and mitigation efforts.</p>
          <p>County Comparison: Compare flood occurrences and damage across counties to target interventions.</p>
          <p>Risk Assessment: Identify high-risk areas and recommend proactive measures to reduce impact.</p><br></br>
          <h3>This analysis aims to guide policy and strategy to enhance community resilience against flooding in Texas.</h3>
        </div>
      </section>
    </div>
  );
};

export default DataAnalytics;
