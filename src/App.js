import React, { useState } from 'react';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3'
import Part4 from './Part4'
import Part5 from './Part5'
import Part6 from './Part6'

function App() {
  const [currentPart, setCurrentPart] = useState(1);

  return (
    <div>
      <div className="bg-gray-800 p-4 flex justify-center gap-4">
        <button
          onClick={() => setCurrentPart(1)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Частина 1: Вступ
        </button>
        <button
          onClick={() => setCurrentPart(2)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Частина 2:  Generics
        </button>

        <button
          onClick={() => setCurrentPart(3)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Частина 3: Java Generics
        </button>

        <button
          onClick={() => setCurrentPart(4)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Частина 4: Functional Interface
        </button>

        <button
          onClick={() => setCurrentPart(5)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Частина 5: Практичні приклади
        </button>

        <button
          onClick={() => setCurrentPart(6)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Частина 6: Best practices
        </button>

      </div>

      {currentPart === 1 && <Part1 />}
      {currentPart === 2 && <Part2 />}
      {currentPart === 3 && <Part3 />}
      {currentPart === 4 && <Part4 />}
      {currentPart === 5 && <Part5 />}
      {currentPart === 6 && <Part6 />}
    </div>
  );
}

export default App;

