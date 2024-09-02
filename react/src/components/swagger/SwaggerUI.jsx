import React from 'react';
// Swagger
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

function SwaggerApiComponent({ yamlContent }) {
  return (
    <div>
      {yamlContent ? <SwaggerUI spec={yamlContent} /> : <p>Loading...</p>}
    </div>
  );
}

export default SwaggerApiComponent;