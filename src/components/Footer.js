import React from 'react';
import { Card, Footer } from 'react-bootstrap';

const Foot = () => {

  var footerStyles = {
    color: 'black',
    width: '100%',
    position: 'absolute',
    bottom: '0',
    background: 'black'
  }

  var headerStyles = {
    background: '#bb0a1e'
  }

  return (
    <div style={footerStyles}>
      <Card>
        <Card.Header style={headerStyles}>Gross</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              Unlike mosquitoes, ticks do not grab a blood meal and go on their way. Ticks have beak-like projections that plunge into the skin of their host. Depending on its type, a tick may feed on the host’s blood for hours, days, or even weeks. Tick-borne diseases include Lyme disease, babesiosis, ehrlichiosis, Rocky Mountain Spotted Fever, anaplasmosis, Southern Tick-Associated Rash Illness, Tick-Borne Relapsing Fever, and tularemia. {' '}
            </p>
            
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Foot;