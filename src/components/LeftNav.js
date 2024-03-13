import React from 'react';

function LeftNav() {
    const names = ["Nav 101", "Nav 201", "Nav 301"];
    return (
    <nav style={{ width: '200px', float: 'left' }}>
        <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
        </ul>
    </nav>
    );
}

export default LeftNav;
