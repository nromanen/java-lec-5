import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const BestPracticesPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Best Practices",
      subtitle: "Найкращі практики та типові помилки",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="text-6xl mb-4">✨</div>
            <h2 className="text-4xl font-bold text-emerald-600 mb-4">Best Practices</h2>
            <p className="text-xl text-gray-600">Як писати якісний Java код</p>
          </div>
          
          <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
            <p className="text-lg text-gray-700">
              Знання теорії - це добре, але знання як правильно застосовувати її на практиці - це ще краще!
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <CheckCircle className="mx-auto mb-2 text-green-600" size={32} />
              <p className="font-semibold">Що робити</p>
              <p className="text-sm text-gray-600">Правильні підходи</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <XCircle className="mx-auto mb-2 text-red-600" size={32} />
              <p className="font-semibold">Чого уникати</p>
              <p className="text-sm text-gray-600">Типові помилки</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <AlertTriangle className="mx-auto mb-2 text-yellow-600" size={32} />
              <p className="font-semibold">Підводні камені</p>
              <p className="text-sm text-gray-600">На що звернути увагу</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Вибір колекцій: List",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">Коли використовувати ArrayList vs LinkedList</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle size={20} />
                Використовуйте ArrayList
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ Коли потрібен швидкий доступ за індексом</li>
                <li>✅ Коли переважно читаєте дані</li>
                <li>✅ Коли додаєте елементи в кінець</li>
                <li>✅ Коли пам'ять обмежена (менше overhead)</li>
                <li>✅ У 99% випадків - це стандартний вибір</li>
              </ul>
              <div className="bg-white p-3 rounded font-mono text-xs mt-3">
                <div className="text-green-600">{'// Правильно ✓'}</div>
                <div>List&lt;String&gt; list = new ArrayList&lt;&gt;();</div>
                <div>list.add("item"); <span className="text-gray-500">{'// O(1)'}</span></div>
                <div>String s = list.get(0); <span className="text-gray-500">{'// O(1)'}</span></div>
              </div>
            </div>

            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                <XCircle size={20} />
                Використовуйте LinkedList
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>⚠️ Тільки якщо часто вставляєте на початок</li>
                <li>⚠️ Тільки якщо реалізуєте Queue/Deque</li>
                <li>⚠️ НЕ для загального використання</li>
                <li>❌ НЕ для доступу за індексом</li>
                <li>❌ Більше пам'яті (об'єкти Node)</li>
              </ul>
              <div className="bg-white p-3 rounded font-mono text-xs mt-3">
                <div className="text-red-600">{'// Зазвичай погано ✗'}</div>
                <div>List&lt;String&gt; list = new LinkedList&lt;&gt;();</div>
                <div>String s = list.get(100); <span className="text-gray-500">{'// O(n) - повільно!'}</span></div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-3">Коли використовувати LinkedList</h4>
            <div className="bg-white p-4 rounded font-mono text-xs">
              <div className="text-blue-600">{'// Як Queue/Deque - добре ✓'}</div>
              <div>Deque&lt;String&gt; queue = new LinkedList&lt;&gt;();</div>
              <div>queue.addFirst("first"); <span className="text-gray-500">{'// O(1)'}</span></div>
              <div>queue.addLast("last"); <span className="text-gray-500">{'// O(1)'}</span></div>
              <div>String first = queue.pollFirst(); <span className="text-gray-500">{'// O(1)'}</span></div>
              <div className="mt-3 text-blue-600">{'// Але краще ArrayDeque!'}</div>
              <div>Deque&lt;String&gt; betterQueue = new ArrayDeque&lt;&gt;();</div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
            <p className="font-semibold text-gray-800 mb-2">💡 Золоте правило:</p>
            <div className="text-gray-700">
              <strong>ArrayList</strong> - завжди, якщо немає специфічної причини для іншого.
              <strong>LinkedList</strong> - рідко, тільки для черг (але краще ArrayDeque).
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Вибір колекцій: Set та Map",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">Який Set або Map вибрати?</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 mb-3">Set: HashSet vs TreeSet vs LinkedHashSet</h4>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="bg-white p-3 rounded">
                  <strong className="text-orange-600">HashSet</strong>
                  <div className="text-xs text-gray-600 mt-1">⚡ Найшвидший O(1)</div>
                  <div className="text-xs text-gray-600">❌ Немає порядку</div>
                  <div className="text-xs mt-2 text-green-600">✓ Використовуйте за замовчуванням</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <strong className="text-red-600">TreeSet</strong>
                  <div className="text-xs text-gray-600 mt-1">🐢 Повільніший O(log n)</div>
                  <div className="text-xs text-gray-600">✓ Відсортовані</div>
                  <div className="text-xs mt-2 text-blue-600">→ Тільки якщо потрібне сортування</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <strong className="text-blue-600">LinkedHashSet</strong>
                  <div className="text-xs text-gray-600 mt-1">⚡ Швидкий O(1)</div>
                  <div className="text-xs text-gray-600">✓ Порядок вставки</div>
                  <div className="text-xs mt-2 text-blue-600">→ Якщо важливий порядок</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 mb-3">Map: HashMap vs TreeMap vs LinkedHashMap</h4>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="bg-white p-3 rounded">
                  <strong className="text-purple-600">HashMap</strong>
                  <div className="text-xs text-gray-600 mt-1">⚡ Найшвидший O(1)</div>
                  <div className="text-xs text-gray-600">❌ Немає порядку</div>
                  <div className="text-xs mt-2 text-green-600">✓ Використовуйте за замовчуванням</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <strong className="text-green-600">TreeMap</strong>
                  <div className="text-xs text-gray-600 mt-1">🐢 Повільніший O(log n)</div>
                  <div className="text-xs text-gray-600">✓ Відсортовані ключі</div>
                  <div className="text-xs mt-2 text-blue-600">→ Для range queries</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <strong className="text-blue-600">LinkedHashMap</strong>
                  <div className="text-xs text-gray-600 mt-1">⚡ Швидкий O(1)</div>
                  <div className="text-xs text-gray-600">✓ Порядок вставки</div>
                  <div className="text-xs mt-2 text-blue-600">→ Для LRU cache</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-5 rounded-lg">
              <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle size={20} />
                Правильно
              </h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div className="text-green-600">{'// Стандартні випадки'}</div>
                <div>Set&lt;String&gt; set = new HashSet&lt;&gt;();</div>
                <div>Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();</div>
                <div className="mt-3 text-green-600">{'// Коли потрібне сортування'}</div>
                <div>Set&lt;Integer&gt; sorted = new TreeSet&lt;&gt;();</div>
                <div className="mt-3 text-green-600">{'// Для LRU cache'}</div>
                <div>Map&lt;K, V&gt; lru = new LinkedHashMap&lt;&gt;(</div>
                <div className="ml-4">16, 0.75f, true);</div>
              </div>
            </div>

            <div className="bg-red-50 p-5 rounded-lg">
              <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                <XCircle size={20} />
                Неправильно
              </h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div className="text-red-600">{'// Непотрібна складність'}</div>
                <div>Set&lt;String&gt; set = new TreeSet&lt;&gt;();</div>
                <div className="text-gray-500">{'// Якщо не потрібне сортування'}</div>
                <div className="mt-3 text-red-600">{'// Зайва пам\'ять'}</div>
                <div>Map&lt;String, Integer&gt; map = </div>
                <div className="ml-4">new LinkedHashMap&lt;&gt;();</div>
                <div className="text-gray-500">{'// Якщо порядок не важливий'}</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
            <p className="font-semibold text-gray-800 mb-2">💡 Правило:</p>
            <div className="space-y-1 text-sm text-gray-700">
              <div>🔸 За замовчуванням: <strong>HashMap/HashSet</strong></div>
              <div>🔸 Потрібне сортування: <strong>TreeMap/TreeSet</strong></div>
              <div>🔸 Важливий порядок вставки: <strong>LinkedHashMap/LinkedHashSet</strong></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Типові помилки з Generics #1",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">Raw Types та Type Erasure</h3>
          </div>

          <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
              <XCircle size={20} />
              Помилка #1: Використання Raw Types
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-red-600 font-semibold mb-2">❌ Погано:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div className="text-red-600">{'// Raw type - НЕ використовуйте!'}</div>
                  <div>List list = new ArrayList();</div>
                  <div>list.add("String");</div>
                  <div>list.add(123); <span className="text-gray-500">{'// Компілюється!'}</span></div>
                  <div className="mt-2">String s = (String) list.get(1);</div>
                  <div className="text-red-600">{'// Runtime Exception!'}</div>
                </div>
              </div>
              <div>
                <div className="text-green-600 font-semibold mb-2">✅ Добре:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div className="text-green-600">{'// З Generics'}</div>
                  <div>List&lt;String&gt; list = new ArrayList&lt;&gt;();</div>
                  <div>list.add("String");</div>
                  <div>list.add(123); <span className="text-red-600">{'// Помилка компіляції!'}</span></div>
                  <div className="mt-2">String s = list.get(0);</div>
                  <div className="text-green-600">{'// Безпечно і без casting'}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-700 mb-3 flex items-center gap-2">
              <XCircle size={20} />
              Помилка #2: Ігнорування warnings
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-red-600 font-semibold mb-2">❌ Погано:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>@SuppressWarnings("unchecked")</div>
                  <div>public void badMethod() &#123;</div>
                  <div className="ml-4">List list = getList();</div>
                  <div className="ml-4 text-red-600">{'// Ховаємо проблему!'}</div>
                  <div>&#125;</div>
                </div>
              </div>
              <div>
                <div className="text-green-600 font-semibold mb-2">✅ Добре:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>public void goodMethod() &#123;</div>
                  <div className="ml-4">List&lt;String&gt; list = getList();</div>
                  <div className="ml-4 text-green-600">{'// Типобезпечно'}</div>
                  <div>&#125;</div>
                  <div className="mt-2">public List&lt;String&gt; getList() &#123;</div>
                  <div className="ml-4">return new ArrayList&lt;&gt;();</div>
                  <div>&#125;</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-700 mb-3 flex items-center gap-2">
              <AlertTriangle size={20} />
              Помилка #3: Type Erasure confusion
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-red-600 font-semibold mb-2">❌ Не працює:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div className="text-red-600">{'// Type erasure - інформація втрачається'}</div>
                  <div>if (list instanceof List&lt;String&gt;) &#123;</div>
                  <div className="ml-4 text-red-600">{'// Помилка компіляції!'}</div>
                  <div>&#125;</div>
                  <div className="mt-3">new ArrayList&lt;String&gt;()[10];</div>
                  <div className="text-red-600">{'// Не можна створити масив generic'}</div>
                  <div className="mt-3">T obj = new T();</div>
                  <div className="text-red-600">{'// Не можна створити instance'}</div>
                </div>
              </div>
              <div>
                <div className="text-green-600 font-semibold mb-2">✅ Правильно:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>if (list instanceof List) &#123;</div>
                  <div className="ml-4 text-green-600">{'// Без параметра типу'}</div>
                  <div>&#125;</div>
                  <div className="mt-3">List&lt;String&gt;[] arr = new List[10];</div>
                  <div className="text-green-600">{'// Створити масив без параметра'}</div>
                  <div className="mt-3">public T create(Class&lt;T&gt; clazz) &#123;</div>
                  <div className="ml-4">return clazz.newInstance();</div>
                  <div>&#125;</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-semibold text-gray-800 mb-2">💡 Пам'ятайте:</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>✓ Завжди вказуйте параметри типу</li>
              <li>✓ Не ігноруйте compiler warnings</li>
              <li>✓ Розумійте обмеження Type Erasure</li>
              <li>✓ Використовуйте diamond operator &lt;&gt;</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Типові помилки з Generics #2",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">Wildcards та PECS</h3>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
              <XCircle size={20} />
              Помилка #4: Плутанина з wildcards
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-red-600 font-semibold mb-2">❌ Не працює:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>List&lt;?&gt; list = new ArrayList&lt;&gt;();</div>
                  <div>list.add("Hello");</div>
                  <div className="text-red-600">{'// Помилка! Не можна додавати'}</div>
                  <div className="mt-3">List&lt;? extends Number&gt; nums = ...</div>
                  <div>nums.add(1);</div>
                  <div className="text-red-600">{'// Помилка! Producer - тільки читання'}</div>
                </div>
              </div>
              <div>
                <div className="text-green-600 font-semibold mb-2">✅ Правильно:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>List&lt;String&gt; list = new ArrayList&lt;&gt;();</div>
                  <div>list.add("Hello");</div>
                  <div className="text-green-600">{'// OK - конкретний тип'}</div>
                  <div className="mt-3">List&lt;? super Integer&gt; nums = ...</div>
                  <div>nums.add(1);</div>
                  <div className="text-green-600">{'// OK - Consumer може приймати'}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700 mb-3">PECS: Producer Extends, Consumer Super</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded">
                <div className="text-blue-600 font-semibold mb-2">Producer - читаємо дані</div>
                <div className="font-mono text-xs">
                  <div>public void process(</div>
                  <div className="ml-4">List&lt;? extends Number&gt; numbers) &#123;</div>
                  <div className="ml-8 text-green-600">{'// Можна читати'}</div>
                  <div className="ml-8">Number n = numbers.get(0);</div>
                  <div className="ml-8 text-red-600">{'// НЕ можна писати'}</div>
                  <div className="ml-8 text-red-600">{'// numbers.add(1); ✗'}</div>
                  <div className="ml-4">&#125;</div>
                </div>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="text-purple-600 font-semibold mb-2">Consumer - пишемо дані</div>
                <div className="font-mono text-xs">
                  <div>public void add(</div>
                  <div className="ml-4">List&lt;? super Integer&gt; numbers) &#123;</div>
                  <div className="ml-8 text-green-600">{'// Можна писати'}</div>
                  <div className="ml-8">numbers.add(1);</div>
                  <div className="ml-8 text-red-600">{'// Читання тільки як Object'}</div>
                  <div className="ml-8">Object o = numbers.get(0);</div>
                  <div className="ml-4">&#125;</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-lg">
            <h4 className="font-bold text-green-700 mb-3">Приклад з Collections.copy()</h4>
            <div className="bg-white p-4 rounded font-mono text-xs">
              <div className="text-blue-600">{'// Правильне використання PECS'}</div>
              <div>public static &lt;T&gt; void copy(</div>
              <div className="ml-4">List&lt;? super T&gt; dest, <span className="text-purple-600">{'// Consumer - записуємо'}</span></div>
              <div className="ml-4">List&lt;? extends T&gt; src <span className="text-green-600">{'// Producer - читаємо'}</span></div>
              <div>) &#123;</div>
              <div className="ml-4">for (T item : src) &#123; <span className="text-gray-500">{'// Читаємо з src'}</span></div>
              <div className="ml-8">dest.add(item); <span className="text-gray-500">{'// Пишемо в dest'}</span></div>
              <div className="ml-4">&#125;</div>
              <div>&#125;</div>
              <div className="mt-3 text-blue-600">{'// Використання'}</div>
              <div>List&lt;Integer&gt; src = Arrays.asList(1, 2, 3);</div>
              <div>List&lt;Number&gt; dest = new ArrayList&lt;&gt;();</div>
              <div>copy(dest, src); <span className="text-green-600">{'// Працює!'}</span></div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
            <p className="font-semibold text-gray-800 mb-2">💡 Як запам'ятати PECS:</p>
            <div className="space-y-1 text-sm text-gray-700">
              <div>📤 Якщо метод <strong>віддає</strong> дані з колекції → extends (Producer)</div>
              <div>📥 Якщо метод <strong>приймає</strong> дані в колекцію → super (Consumer)</div>
              <div>🔄 Якщо і читає, і пише → не використовуйте wildcards</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Ефективне використання Functional Interface",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">Best Practices для Lambda та FI</h3>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
              <CheckCircle size={20} />
              Практика #1: Використовуйте method references
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-orange-600 font-semibold mb-2">⚠️ Можна краще:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>list.forEach(item -&gt; </div>
                  <div className="ml-4">System.out.println(item));</div>
                  <div className="mt-2">list.sort((a, b) -&gt; </div>
                  <div className="ml-4">a.compareTo(b));</div>
                  <div className="mt-2">list.replaceAll(s -&gt; </div>
                  <div className="ml-4">s.toUpperCase());</div>
                </div>
              </div>
              <div>
                <div className="text-green-600 font-semibold mb-2">✅ Краще:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>list.forEach(</div>
                  <div className="ml-4">System.out::println);</div>
                  <div className="mt-2">list.sort(</div>
                  <div className="ml-4">String::compareTo);</div>
                  <div className="mt-2">list.replaceAll(</div>
                  <div className="ml-4">String::toUpperCase);</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
              <CheckCircle size={20} />
              Практика #2: Тримайте lambda короткими
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-red-600 font-semibold mb-2">❌ Погано - довга lambda:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>users.forEach(user -&gt; &#123;</div>
                  <div className="ml-4">String name = user.getName();</div>
                  <div className="ml-4">String email = user.getEmail();</div>
                  <div className="ml-4">if (email != null) &#123;</div>
                  <div className="ml-8">String normalized = email</div>
                  <div className="ml-12">.trim().toLowerCase();</div>
                  <div className="ml-8">sendEmail(normalized, name);</div>
                  <div className="ml-4">&#125;</div>
                  <div className="ml-4 text-red-600">{'// Занадто багато логіки!'}</div>
                  <div>&#125;);</div>
                </div>
              </div>
              <div>
                <div className="text-green-600 font-semibold mb-2">✅ Добре - винести в метод:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>users.forEach(this::processUser);</div>
                  <div className="mt-3">private void processUser(User user) &#123;</div>
                  <div className="ml-4">String name = user.getName();</div>
                  <div className="ml-4">String email = user.getEmail();</div>
                  <div className="ml-4">if (email != null) &#123;</div>
                  <div className="ml-8">String normalized = email</div>
                  <div className="ml-12">.trim().toLowerCase();</div>
                  <div className="ml-8">sendEmail(normalized, name);</div>
                  <div className="ml-4">&#125;</div>
                  <div>&#125;</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
              <CheckCircle size={20} />
              Практика #3: Використовуйте стандартні FI
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-red-600 font-semibold mb-2">❌ Непотрібний власний FI:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>@FunctionalInterface</div>
                  <div>interface StringProcessor &#123;</div>
                  <div className="ml-4">String process(String s);</div>
                  <div>&#125;</div>
                  <div className="mt-2 text-red-600">{'// Це ж Function&lt;String,String&gt;!'}</div>
                  <div className="mt-2">@FunctionalInterface</div>
                  <div>interface Checker &#123;</div>
                  <div className="ml-4">boolean check(String s);</div>
                  <div>&#125;</div>
                  <div className="text-red-600">{'// Це ж Predicate&lt;String&gt;!'}</div>
                </div>
              </div>
              <div>
                <div className="text-green-600 font-semibold mb-2">✅ Використовуйте стандартні:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div className="text-green-600">{'// Замість StringProcessor'}</div>
                  <div>Function&lt;String, String&gt; processor = </div>
                  <div className="ml-4">String::toUpperCase;</div>
                  <div className="mt-3 text-green-600">{'// Замість Checker'}</div>
                  <div>Predicate&lt;String&gt; checker = </div>
                  <div className="ml-4">String::isEmpty;</div>
                  <div className="mt-3 text-blue-600">{'// Стандартні FI:'}</div>
                  <div>Consumer, Supplier, Function,</div>
                  <div>Predicate, UnaryOperator,</div>
                  <div>BinaryOperator</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg">
            <h4 className="font-bold text-orange-700 mb-3 flex items-center gap-2">
              <AlertTriangle size={20} />
              Практика #4: Обережно з checked exceptions
            </h4>
            <div className="bg-white p-4 rounded font-mono text-xs">
              <div className="text-red-600">{'// Lambda не може викидати checked exceptions'}</div>
              <div>list.forEach(item -&gt; &#123;</div>
              <div className="ml-4 text-red-600">{'// processItem(item); // Помилка якщо throws IOException'}</div>
              <div>&#125;);</div>
              <div className="mt-3 text-green-600">{'// Рішення 1: Обернути в unchecked'}</div>
              <div>list.forEach(item -&gt; &#123;</div>
              <div className="ml-4">try &#123;</div>
              <div className="ml-8">processItem(item);</div>
              <div className="ml-4">&#125; catch (IOException e) &#123;</div>
              <div className="ml-8">throw new RuntimeException(e);</div>
              <div className="ml-4">&#125;</div>
              <div>&#125;);</div>
              <div className="mt-3 text-green-600">{'// Рішення 2: Створити wrapper метод'}</div>
              <div>list.forEach(this::processItemSafely);</div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
            <p className="font-semibold text-gray-800 mb-2">💡 Золоті правила:</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>✓ Method references краще за lambda</li>
              <li>✓ Lambda мають бути короткими (1-3 рядки)</li>
              <li>✓ Використовуйте стандартні FI з java.util.function</li>
              <li>✓ Не робіть складну логіку в lambda</li>
              <li>✓ Обережно з side effects</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Performance: Продуктивність колекцій",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">Оптимізація продуктивності</h3>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-700 mb-3">Встановлення початкової ємності</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-red-600 font-semibold mb-2">❌ Неоптимально:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div className="text-red-600">{'// Багато reallocation'}</div>
                  <div>List&lt;String&gt; list = new ArrayList&lt;&gt;();</div>
                  <div>for (int i = 0; i &lt; 10000; i++) &#123;</div>
                  <div className="ml-4">list.add("item" + i);</div>
                  <div>&#125;</div>
                  <div className="mt-2 text-red-600">{'// HashMap буде resize кілька разів'}</div>
                  <div>Map&lt;K,V&gt; map = new HashMap&lt;&gt;();</div>
                </div>
              </div>
              <div>
                <div className="text-green-600 font-semibold mb-2">✅ Оптимально:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div className="text-green-600">{'// Одразу потрібний розмір'}</div>
                  <div>List&lt;String&gt; list = </div>
                  <div className="ml-4">new ArrayList&lt;&gt;(10000);</div>
                  <div>for (int i = 0; i &lt; 10000; i++) &#123;</div>
                  <div className="ml-4">list.add("item" + i);</div>
                  <div>&#125;</div>
                  <div className="mt-2 text-green-600">{'// Початкова ємність для Map'}</div>
                  <div>Map&lt;K,V&gt; map = new HashMap&lt;&gt;(1000);</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-700 mb-3">Вибір правильної колекції</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-red-600 font-semibold mb-2">❌ Повільно:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div className="text-red-600">{'// contains() на List - O(n)'}</div>
                  <div>List&lt;String&gt; visited = new ArrayList&lt;&gt;();</div>
                  <div>for (String item : items) &#123;</div>
                  <div className="ml-4">if (!visited.contains(item)) &#123;</div>
                  <div className="ml-8 text-red-600">{'// O(n) кожен раз!'}</div>
                  <div className="ml-8">visited.add(item);</div>
                  <div className="ml-4">&#125;</div>
                  <div>&#125;</div>
                </div>
              </div>
              <div>
                <div className="text-green-600 font-semibold mb-2">✅ Швидко:</div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div className="text-green-600">{'// contains() на Set - O(1)'}</div>
                  <div>Set&lt;String&gt; visited = new HashSet&lt;&gt;();</div>
                  <div>for (String item : items) &#123;</div>
                  <div className="ml-4">if (!visited.contains(item)) &#123;</div>
                  <div className="ml-8 text-green-600">{'// O(1) - швидко!'}</div>
                  <div className="ml-8">visited.add(item);</div>
                  <div className="ml-4">&#125;</div>
                  <div>&#125;</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-3">Таблиця продуктивності</h4>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded text-xs">
                <thead>
                  <tr className="bg-blue-200">
                    <th className="p-2 text-left">Операція</th>
                    <th className="p-2">ArrayList</th>
                    <th className="p-2">LinkedList</th>
                    <th className="p-2">HashSet</th>
                    <th className="p-2">TreeSet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">add в кінець</td>
                    <td className="p-2 text-center bg-green-50">O(1)*</td>
                    <td className="p-2 text-center bg-green-50">O(1)</td>
                    <td className="p-2 text-center bg-green-50">O(1)</td>
                    <td className="p-2 text-center bg-yellow-50">O(log n)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">get(index)</td>
                    <td className="p-2 text-center bg-green-50">O(1)</td>
                    <td className="p-2 text-center bg-red-50">O(n)</td>
                    <td className="p-2 text-center">N/A</td>
                    <td className="p-2 text-center">N/A</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">contains</td>
                    <td className="p-2 text-center bg-red-50">O(n)</td>
                    <td className="p-2 text-center bg-red-50">O(n)</td>
                    <td className="p-2 text-center bg-green-50">O(1)</td>
                    <td className="p-2 text-center bg-yellow-50">O(log n)</td>
                  </tr>
                  <tr>
                    <td className="p-2">remove(index)</td>
                    <td className="p-2 text-center bg-red-50">O(n)</td>
                    <td className="p-2 text-center bg-red-50">O(n)</td>
                    <td className="p-2 text-center bg-green-50">O(1)</td>
                    <td className="p-2 text-center bg-yellow-50">O(log n)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <h4 className="font-bold text-purple-700 mb-3">Коли оптимізувати?</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div>🔸 <strong>Великі колекції:</strong> &gt; 10,000 елементів</div>
              <div>🔸 <strong>Часті операції:</strong> в циклах або hot path</div>
              <div>🔸 <strong>Performance-critical код:</strong> API endpoints, обробка даних</div>
              <div>🔸 <strong>НЕ оптимізуйте передчасно:</strong> спочатку виміряйте!</div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <p className="font-semibold text-gray-800 mb-2">💡 Швидка довідка:</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>✓ Швидкий пошук → <strong>HashSet/HashMap</strong></div>
              <div>✓ Швидкий доступ за індексом → <strong>ArrayList</strong></div>
              <div>✓ Часто contains() → <strong>Set замість List</strong></div>
              <div>✓ Велика колекція → встановіть початковий розмір</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Підсумок: Best Practices",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Головні правила</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3">Collections</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ ArrayList - за замовчуванням для List</li>
                <li>✓ HashMap/HashSet - за замовчуванням</li>
                <li>✓ TreeMap/TreeSet - тільки для сортування</li>
                <li>✓ Початковий розмір для великих колекцій</li>
                <li>✓ Set для пошуку, List для доступу за індексом</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 mb-3">Generics</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Завжди вказуйте параметри типу</li>
                <li>✓ Ніколи не використовуйте raw types</li>
                <li>✓ PECS: Producer Extends, Consumer Super</li>
                <li>✓ Diamond operator &lt;&gt;</li>
                <li>✓ Розумійте Type Erasure</li>
              </ul>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3">Functional Interface</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Method references &gt; lambda</li>
                <li>✓ Короткі lambda (1-3 рядки)</li>
                <li>✓ Стандартні FI з java.util.function</li>
                <li>✓ Виносити складну логіку в методи</li>
                <li>✓ Обережно з side effects</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
              <XCircle size={20} />
              ТОП-5 помилок, яких слід уникати
            </h4>
            <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
              <li><strong>Raw types</strong> - завжди використовуйте Generics</li>
              <li><strong>LinkedList замість ArrayList</strong> - майже завжди ArrayList краще</li>
              <li><strong>List для пошуку</strong> - використовуйте Set для contains()</li>
              <li><strong>Ігнорування compiler warnings</strong> - вони попереджають про проблеми</li>
              <li><strong>Довгі lambda</strong> - виносьте логіку в окремі методи</li>
            </ol>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-400">
            <h4 className="font-bold text-yellow-700 mb-3">Чек-лист перед commit</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>☑️ Всі колекції з Generics?</div>
              <div>☑️ Немає raw types?</div>
              <div>☑️ ArrayList замість LinkedList?</div>
              <div>☑️ Set замість List для пошуку?</div>
              <div>☑️ Lambda короткі і зрозумілі?</div>
              <div>☑️ Method references де можливо?</div>
              <div>☑️ Початковий розмір для великих колекцій?</div>
              <div>☑️ Немає compiler warnings?</div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-lg">
            <p className="text-xl font-bold text-gray-800 mb-2">
              Дотримуйтесь цих правил і ваш код буде:
            </p>
            <div className="flex justify-center gap-6 mt-4 text-lg font-semibold">
              <div className="text-blue-600">✓ Швидким</div>
              <div className="text-green-600">✓ Безпечним</div>
              <div className="text-purple-600">✓ Читабельним</div>
              <div className="text-orange-600">✓ Підтримуваним</div>
            </div>
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-12 min-h-[700px] flex flex-col">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{slides[currentSlide].title}</h1>
            {slides[currentSlide].subtitle && (
              <p className="text-lg text-gray-600">{slides[currentSlide].subtitle}</p>
            )}
            <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded mt-3"></div>
          </div>

          <div className="flex-grow overflow-y-auto">
            {slides[currentSlide].content}
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
            >
              <ChevronLeft size={20} />
              Назад
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
                  title={`Слайд ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
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

export default BestPracticesPresentation;