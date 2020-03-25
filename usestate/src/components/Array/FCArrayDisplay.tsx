import React, { useState } from 'react'

interface Item {
  id: number;
  value: number;
}

function FCArrayDisplay() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random()*100)+1 // from 1 to 100
    }]);
  }
  return (
    <div>
      <h1>functional component with hooks</h1>
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>id:{item.id} {item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export {
  FCArrayDisplay
}