import React from 'react';

function NoMatch() {
  return (
    <div>
      <h2>Niczego tu nie ma!</h2>
      <p>
        <Link to='/'>Wróć na stronę główną</Link>
      </p>
    </div>
  );
}

export default NoMatch;
