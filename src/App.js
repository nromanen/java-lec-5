import React, { useState } from 'react';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import Part5 from './Part5';
import Part6 from './Part6';

const parts = [
  { id: 1, title: 'Частина 1: Вступ', component: Part1 },
  { id: 2, title: 'Частина 2: Generics', component: Part2 },
  { id: 3, title: 'Частина 3: Collections Framework', component: Part3 },
  { id: 4, title: 'Частина 4: Functional Interface', component: Part4 },
  { id: 5, title: 'Частина 5: Практичні приклади', component: Part5 },
  { id: 6, title: 'Частина 6: Best practices', component: Part6 },
];

function App() {
  const [currentPart, setCurrentPart] = useState(1);
  const CurrentComponent = parts.find((p) => p.id === currentPart).component;

  return (
    <div>
      <div className="bg-gray-800 p-4 flex justify-center gap-4">
        {parts.map((part) => {
          const isActive = part.id === currentPart;
          return (
            <button
              key={part.id}
              onClick={() => setCurrentPart(part.id)}
              aria-current={isActive ? 'page' : undefined}
              className={
                isActive
                  ? 'px-6 py-2 bg-blue-800 text-white rounded ring-2 ring-white'
                  : 'px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
              }
            >
              {part.title}
            </button>
          );
        })}
      </div>

      <CurrentComponent />
    </div>
  );
}

export default App;
