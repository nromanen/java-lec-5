import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Java: Generics, Collections, Functional Interface",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Основи сучасної Java</h2>
            <p className="text-xl text-gray-600">Три фундаментальні концепції для ефективного програмування</p>
          </div>
        </div>
      )
    },
    {
      title: "Огляд тем",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">🔷 Generics (Узагальнення)</h3>
            <p className="text-gray-700">Типобезпечний код без явних приведень типів</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-700 mb-3">📦 Collections Framework</h3>
            <p className="text-gray-700">Потужні структури даних для зберігання та обробки об'єктів</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-700 mb-3">⚡ Functional Interface</h3>
            <p className="text-gray-700">Функціональний підхід та lambda-вирази</p>
          </div>
        </div>
      )
    },
    {
      title: "Взаємозв'язок концепцій",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">🔷</span>
              <ChevronRight className="text-gray-400" />
              <span className="text-3xl">📦</span>
            </div>
            <p className="text-gray-700 font-semibold">Generics → Collections</p>
            <p className="text-gray-600">Collections використовують Generics для типобезпеки</p>
            <code className="block mt-2 bg-white p-2 rounded text-sm">
              List&lt;String&gt; list = new ArrayList&lt;&gt;();
            </code>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-purple-50 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">📦</span>
              <ChevronRight className="text-gray-400" />
              <span className="text-3xl">⚡</span>
            </div>
            <p className="text-gray-700 font-semibold">Collections → Functional Interface</p>
            <p className="text-gray-600">Методи колекцій приймають функціональні інтерфейси</p>
            <code className="block mt-2 bg-white p-2 rounded text-sm">
              list.forEach(item -&gt; System.out.println(item));
            </code>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">🔷</span>
              <ChevronRight className="text-gray-400" />
              <span className="text-3xl">⚡</span>
            </div>
            <p className="text-gray-700 font-semibold">Generics → Functional Interface</p>
            <p className="text-gray-600">Функціональні інтерфейси параметризовані через Generics</p>
            <code className="block mt-2 bg-white p-2 rounded text-sm">
              Function&lt;String, Integer&gt; converter = String::length;
            </code>
          </div>
        </div>
      )
    },
    {
      title: "Чому ці концепції важливі?",
      content: (
        <div className="space-y-5">
          <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-400">
            <h4 className="font-bold text-red-700 mb-2">🛡️ Безпека типів (Type Safety)</h4>
            <p className="text-gray-700">Помилки виявляються на етапі компіляції, а не в runtime</p>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-400">
            <h4 className="font-bold text-orange-700 mb-2">🔄 Повторне використання коду</h4>
            <p className="text-gray-700">Один generic клас працює з різними типами даних</p>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
            <h4 className="font-bold text-yellow-700 mb-2">📈 Продуктивність</h4>
            <p className="text-gray-700">Правильний вибір колекції покращує швидкодію в рази</p>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-400">
            <h4 className="font-bold text-green-700 mb-2">✨ Читабельність коду</h4>
            <p className="text-gray-700">Lambda-вирази роблять код лаконічнішим та зрозумілішим</p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400">
            <h4 className="font-bold text-blue-700 mb-2">🏗️ Основа сучасної Java</h4>
            <p className="text-gray-700">Необхідні для роботи з Java 8+ та всіма сучасними фреймворками</p>
          </div>
        </div>
      )
    },
    {
      title: "Практичне значення",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Без цих концепцій неможливо:</h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
              <p className="font-semibold text-gray-800">✓ Працювати з Spring Framework</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
              <p className="font-semibold text-gray-800">✓ Використовувати Hibernate та JPA</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
              <p className="font-semibold text-gray-800">✓ Ефективно обробляти дані</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
              <p className="font-semibold text-gray-800">✓ Писати сучасний та підтримуваний код</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-red-500">
              <p className="font-semibold text-gray-800">✓ Розуміти код інших розробників</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300 mt-6">
            <p className="text-center text-gray-700 font-semibold">
              💡 Ці концепції - це не просто теорія, а щоденний інструментарій Java-розробника
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-12 min-h-[600px] flex flex-col">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{slides[currentSlide].title}</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
          </div>

          <div className="flex-grow overflow-y-auto">
            {slides[currentSlide].content}
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
              Назад
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-blue-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Вперед
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="text-center mt-4 text-sm text-gray-500">
            Слайд {currentSlide + 1} з {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;