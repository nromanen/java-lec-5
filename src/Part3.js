import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, List, Hash, Layers } from 'lucide-react';

const CollectionsPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Collections Framework",
      subtitle: "Потужні структури даних Java",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="text-6xl mb-4">📦</div>
            <h2 className="text-4xl font-bold text-green-600 mb-4">Java Collections Framework</h2>
            <p className="text-xl text-gray-600">Єдина архітектура для роботи з групами об'єктів</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <p className="text-lg text-gray-700">
              <strong>Collections Framework</strong> - це набір інтерфейсів та класів для зберігання, 
              маніпуляції та доступу до груп об'єктів як до єдиного цілого.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <List className="mx-auto mb-2 text-blue-600" size={32} />
              <p className="font-semibold">List</p>
              <p className="text-sm text-gray-600">Упорядковані колекції</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <Hash className="mx-auto mb-2 text-purple-600" size={32} />
              <p className="font-semibold">Set</p>
              <p className="text-sm text-gray-600">Унікальні елементи</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <Layers className="mx-auto mb-2 text-orange-600" size={32} />
              <p className="font-semibold">Map</p>
              <p className="text-sm text-gray-600">Пари ключ-значення</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Ієрархія Collections Framework",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">Структура інтерфейсів</h3>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="font-mono text-sm space-y-1">
              <div className="font-bold text-blue-600">{"Iterable<E>"}</div>
              <div className="ml-4">↓</div>
              <div className="ml-4 font-bold text-green-600">{"Collection<E>"}</div>
              <div className="ml-8">├── <span className="font-bold text-purple-600">{"List<E>"}</span> <span className="text-gray-500">(упорядкована колекція, дозволяє дублікати)</span></div>
              <div className="ml-12">│   ├── {"ArrayList<E>"}</div>
              <div className="ml-12">│   ├── {"LinkedList<E>"}</div>
              <div className="ml-12">│   └── {"Vector<E>"} (застарілий)</div>
              <div className="ml-8">├── <span className="font-bold text-orange-600">{"Set<E>"}</span> <span className="text-gray-500">(унікальні елементи)</span></div>
              <div className="ml-12">│   ├── {"HashSet<E>"}</div>
              <div className="ml-12">│   ├── {"LinkedHashSet<E>"}</div>
              <div className="ml-12">│   └── <span className="font-bold text-red-600">{"SortedSet<E>"}</span></div>
              <div className="ml-16">│       └── {"TreeSet<E>"}</div>
              <div className="ml-8">└── <span className="font-bold text-yellow-600">{"Queue<E>"}</span> <span className="text-gray-500">(FIFO, обробка елементів)</span></div>
              <div className="ml-12">    ├── {"PriorityQueue<E>"}</div>
              <div className="ml-12">    └── <span className="font-bold text-pink-600">{"Deque<E>"}</span></div>
              <div className="ml-16">        ├── {"ArrayDeque<E>"}</div>
              <div className="ml-16">        └── {"LinkedList<E>"}</div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="font-mono text-sm space-y-1">
              <div className="font-bold text-blue-600">{"Map<K,V>"}</div>
              <div className="ml-4 text-gray-500">(окрема ієрархія, не extends Collection)</div>
              <div className="ml-4">├── {"HashMap<K,V>"}</div>
              <div className="ml-4">├── {"LinkedHashMap<K,V>"}</div>
              <div className="ml-4">├── {"Hashtable<K,V>"} (застарілий)</div>
              <div className="ml-4">└── <span className="font-bold text-red-600">{"SortedMap<K,V>"}</span></div>
              <div className="ml-8">    └── {"TreeMap<K,V>"}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Основні інтерфейси",
      content: (
        <div className="space-y-5">
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700 mb-3">{"Collection<E>"}</h4>
            <p className="text-gray-700 mb-3">Кореневий інтерфейс для всіх колекцій (крім Map)</p>
            <div className="bg-white p-3 rounded font-mono text-sm">
              <code className="text-gray-800">
                <div>boolean add(E e);</div>
                <div>{"boolean addAll(Collection<? extends E> c);"}</div>
                <div>boolean remove(Object o);</div>
                <div>{"boolean removeIf(Predicate<? super E> filter);"}</div>
                <div>boolean contains(Object o);</div>
                <div>{"boolean containsAll(Collection<?> c);"}</div>
                <div>int size();</div>
                <div>void clear();</div>
                <div>{"Iterator<E> iterator();"}</div>
              </code>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 mb-2">{"List<E>"}</h4>
              <p className="text-sm text-gray-700 mb-2">Впорядкована колекція з доступом за індексом</p>
              <div className="bg-white p-2 rounded font-mono text-xs">
                <code>
                  <div>E get(int index);</div>
                  <div>E set(int index, E element);</div>
                  <div>void add(int index, E element);</div>
                  <div>int indexOf(Object o);</div>
                  <div>E remove(int index);</div>
                </code>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 mb-2">{"Set<E>"}</h4>
              <p className="text-sm text-gray-700 mb-2">Колекція унікальних елементів</p>
              <div className="bg-white p-2 rounded font-mono text-xs">
                <code>
                  <div className="text-gray-500 text-xs mt-1">{'// Ті ж методи що й Collection'}</div>
                  <div className="text-gray-500 text-xs">{'// але дублікати не додаються'}</div>
                </code>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-2">{"Queue<E>"}</h4>
              <p className="text-sm text-gray-700 mb-2">Черга для обробки елементів. Кожна операція має два варіанти: з винятком і зі спеціальним значенням</p>
              <div className="bg-white p-2 rounded font-mono text-xs">
                <code>
                  <div className="text-blue-600">{'// insert'}</div>
                  <div>boolean add(E e); <span className="text-gray-700">{'// throws'}</span></div>
                  <div>boolean offer(E e); <span className="text-gray-700">{'// false'}</span></div>
                  <div className="text-blue-600">{'// remove head'}</div>
                  <div>E remove(); <span className="text-gray-700">{'// throws'}</span></div>
                  <div>E poll(); <span className="text-gray-700">{'// null'}</span></div>
                  <div className="text-blue-600">{'// inspect head'}</div>
                  <div>E element(); <span className="text-gray-700">{'// throws'}</span></div>
                  <div>E peek(); <span className="text-gray-700">{'// null'}</span></div>
                </code>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-2">{"Map<K,V>"}</h4>
              <p className="text-sm text-gray-700 mb-2">Пари ключ-значення</p>
              <div className="bg-white p-2 rounded font-mono text-xs">
                <code>
                  <div>V put(K key, V value);</div>
                  <div>V get(Object key);</div>
                  <div>V remove(Object key);</div>
                  <div>boolean containsKey(Object key);</div>
                  <div>{"Set<K> keySet();"}</div>
                  <div>{"Collection<V> values();"}</div>
                  <div>{"Set<Map.Entry<K,V>> entrySet();"}</div>
                  <div className="text-blue-600 mt-1">{'// Java 8+'}</div>
                  <div>V getOrDefault(Object key, V def);</div>
                  <div>V putIfAbsent(K key, V value);</div>
                  <div>{"V computeIfAbsent(K key, Function<...> fn);"}</div>
                  <div>{"V merge(K key, V value, BiFunction<...> fn);"}</div>
                  <div>{"void forEach(BiConsumer<...> action);"}</div>
                </code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
  title: "ArrayList vs LinkedList",
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg">
        <h3 className="text-2xl font-bold">List: Реалізації</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-bold text-blue-700 mb-3 text-xl">ArrayList</h4>
          <p className="text-gray-700 mb-3">Динамічний масив. Швидкий доступ за індексом.</p>

          <div className="bg-white p-3 rounded mb-3">
            <p className="font-semibold text-gray-700 mb-2">Внутрішня структура:</p>
            <div className="font-mono text-xs text-gray-600">Object[] elementData;</div>
            <p className="text-sm text-gray-600 mt-2">Зберігає елементи в масиві, збільшує розмір при потребі</p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="bg-green-50 p-2 rounded">
              <strong className="text-green-700">✓ Швидко:</strong>
              <div className="text-gray-700">• Доступ за індексом O(1)</div>
              <div className="text-gray-700">• Додавання в кінець O(1) амортизовано</div>
            </div>
            <div className="bg-red-50 p-2 rounded">
              <strong className="text-red-700">✗ Повільно:</strong>
              <div className="text-gray-700">• Вставка/видалення з середини O(n) — зсув елементів</div>
              <div className="text-gray-700">• Вставка/видалення на початку O(n)</div>
              <div className="text-gray-700">• Пошук за значенням O(n)</div>
            </div>
          </div>

          <div className="bg-white p-3 rounded mt-3 font-mono text-xs">
            <div>{"List<String> list = new ArrayList<>();"}</div>
            <div>list.add("Java");</div>
            <div>{"String s = list.get(0);   // O(1)"}</div>
            <div>{'list.add(0, "Hi");       // O(n)'}</div>
          </div>
        </div>

        <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
          <h4 className="font-bold text-purple-700 mb-3 text-xl">LinkedList</h4>
          <p className="text-gray-700 mb-3">Двозв'язний список. Швидка вставка/видалення на кінцях.</p>

          <div className="bg-white p-3 rounded mb-3">
            <p className="font-semibold text-gray-700 mb-2">Внутрішня структура:</p>
            <div className="font-mono text-xs text-gray-600">
              <div>Node: item, next, prev</div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Кожен елемент - окремий об'єкт з посиланнями</p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="bg-green-50 p-2 rounded">
              <strong className="text-green-700">✓ Швидко:</strong>
              <div className="text-gray-700">• Вставка на початок/кінець O(1)</div>
              <div className="text-gray-700">• Видалення початку/кінця O(1)</div>
              <div className="text-gray-700">• Вставка/видалення через ітератор O(1)</div>
              <div className="text-gray-700">• Реалізує Deque</div>
            </div>
            <div className="bg-red-50 p-2 rounded">
              <strong className="text-red-700">✗ Повільно:</strong>
              <div className="text-gray-700">• Доступ за індексом O(n)</div>
              <div className="text-gray-700">• Вставка/видалення посередині O(n) — треба дійти до позиції</div>
              <div className="text-gray-700">• Пошук за значенням O(n)</div>
              <div className="text-gray-700">• Більше пам'яті (посилання)</div>
            </div>
          </div>

          <div className="bg-white p-3 rounded mt-3 font-mono text-xs">
            <div>{"LinkedList<String> list = new LinkedList<>();"}</div>
            <div>{'list.addFirst("Hi");     // O(1)'}</div>
            <div>{"String s = list.get(100); // O(n)"}</div>
            <div>{"list.removeFirst();      // O(1)"}</div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
        <p className="font-semibold text-gray-800">💡 Коли що використовувати:</p>
        <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
          <div><strong>ArrayList:</strong> вибір за замовчуванням — доступ за індексом, додавання в кінець, обхід</div>
          <div><strong>LinkedList:</strong> часті вставки/видалення на початку/кінці (хоча для черги/стека ArrayDeque зазвичай швидший)</div>
        </div>
        <p className="text-sm text-gray-700 mt-2">
          На практиці ArrayList часто виграє навіть при вставках посередині: зсув елементів у масиві швидший за обхід вузлів, бо дані лежать поруч у пам'яті
        </p>
      </div>
    </div>
  )
},
    {
      title: "HashSet vs TreeSet vs LinkedHashSet",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">Set: Реалізації</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 mb-3 text-xl">HashSet</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 mb-3">Базується на HashMap. Найшвидша реалізація Set.</p>
                  <div className="bg-white p-3 rounded text-sm space-y-1">
                    <div><strong>Продуктивність:</strong></div>
                    <div>• add, remove, contains: O(1)</div>
                    <div><strong>Особливості:</strong></div>
                    <div>• Без порядку елементів</div>
                    <div>• Дозволяє null</div>
                    <div>• Потрібен hashCode() та equals()</div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>{"Set<String> set = new HashSet<>();"}</div>
                  <div>set.add("Java");</div>
                  <div>set.add("Python");</div>
                  <div>set.add("Java");</div>
                  <div className="mt-2 text-gray-500">{'// Порядок непередбачуваний'}</div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3 text-xl">TreeSet</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 mb-3">Базується на TreeMap. Сортований Set.</p>
                  <div className="bg-white p-3 rounded text-sm space-y-1">
                    <div><strong>Продуктивність:</strong></div>
                    <div>• add, remove, contains: O(log n)</div>
                    <div><strong>Особливості:</strong></div>
                    <div>• Відсортовані елементи</div>
                    <div>• НЕ дозволяє null</div>
                    <div>• Потрібен Comparable або Comparator</div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>{"Set<Integer> set = new TreeSet<>();"}</div>
                  <div>set.add(5);</div>
                  <div>set.add(1);</div>
                  <div>set.add(3);</div>
                  <div className="mt-2 text-gray-500">{'// Завжди відсортовано: [1, 3, 5]'}</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 text-xl">LinkedHashSet</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 mb-3">HashSet + зв'язний список. Зберігає порядок вставки.</p>
                  <div className="bg-white p-3 rounded text-sm space-y-1">
                    <div><strong>Продуктивність:</strong></div>
                    <div>• add, remove, contains: O(1)</div>
                    <div><strong>Особливості:</strong></div>
                    <div>• Зберігає порядок вставки</div>
                    <div>• Трохи повільніше за HashSet</div>
                    <div>• Більше пам'яті (посилання)</div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>{"Set<String> set = new LinkedHashSet<>();"}</div>
                  <div>set.add("Java");</div>
                  <div>set.add("Python");</div>
                  <div>set.add("C++");</div>
                  <div className="mt-2 text-gray-500">{'// Порядок: [Java, Python, C++]'}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
            <p className="font-semibold text-gray-800 mb-2">💡 Вибір реалізації Set:</p>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div><strong>HashSet:</strong> найшвидший</div>
              <div><strong>TreeSet:</strong> сортування</div>
              <div><strong>LinkedHashSet:</strong> порядок вставки</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "HashMap vs TreeMap vs LinkedHashMap",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">Map: Реалізації</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 mb-3 text-xl">HashMap</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 mb-3">Хеш-таблиця. Найпопулярніша реалізація Map.</p>
                  <div className="bg-white p-3 rounded text-sm space-y-1">
                    <div><strong>Продуктивність:</strong></div>
                    <div>• get, put, remove: O(1)</div>
                    <div><strong>Особливості:</strong></div>
                    <div>• Без порядку</div>
                    <div>• Один null-ключ</div>
                    <div>• Не синхронізована</div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>{"Map<String, Integer> map = new HashMap<>();"}</div>
                  <div>map.put("Java", 1995);</div>
                  <div>map.put("Python", 1991);</div>
                  <div className="mt-2">Integer year = map.get("Java");</div>
                  <div>map.containsKey("Rust");</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 text-xl">TreeMap</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 mb-3">Red-Black дерево. Відсортована Map.</p>
                  <div className="bg-white p-3 rounded text-sm space-y-1">
                    <div><strong>Продуктивність:</strong></div>
                    <div>• get, put, remove: O(log n)</div>
                    <div><strong>Особливості:</strong></div>
                    <div>• Відсортовані ключі</div>
                    <div>• null-ключ заборонений при природному порядку (NullPointerException), null-значення дозволені</div>
                    <div>• Реалізує NavigableMap: пошук найближчих ключів, діапазони, зворотний порядок</div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>{"NavigableMap<Integer, String> map = new TreeMap<>();"}</div>
                  <div>map.put(3, "Three");</div>
                  <div>map.put(1, "One");</div>
                  <div>map.put(2, "Two");</div>
                  <div className="text-gray-500">{'// Sorted by key: {1=One, 2=Two, 3=Three}'}</div>
            
                  <div className="mt-3 text-blue-600">{'// NavigableMap methods'}</div>
                  <div>map.firstEntry();   <span className="text-gray-500">{'// 1=One'}</span></div>
                  <div>map.floorKey(5);    <span className="text-gray-500">{'// 3: largest key <= 5'}</span></div>
                  <div>map.higherKey(3);   <span className="text-gray-500">{'// null: no greater key'}</span></div>
                  <div>map.headMap(2, true); <span className="text-gray-500">{'// {1=One, 2=Two}'}</span></div>
                  <div>map.descendingMap(); <span className="text-gray-500">{'// {3=Three, 2=Two, 1=One}'}</span></div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3 text-xl">LinkedHashMap</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 mb-3">HashMap + зв'язний список. Зберігає порядок.</p>
                  <div className="bg-white p-3 rounded text-sm space-y-1">
                    <div><strong>Продуктивність:</strong></div>
                    <div>• get, put, remove: O(1)</div>
                    <div><strong>Особливості:</strong></div>
                    <div>• Зберігає порядок вставки</div>
                    <div>• Або порядок доступу</div>
                    <div>• Ідеально для LRU (Least Frequently Used) кешу</div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded font-mono text-xs">
                  <div>{"Map<String, Integer> map = new LinkedHashMap<>();"}</div>
                  <div>map.put("First", 1);</div>
                  <div>map.put("Second", 2);</div>
                  <div>map.put("Third", 3);</div>
                  <div className="mt-2 text-gray-500">{'// Порядок: First=1, Second=2, Third=3'}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
            <p className="font-semibold text-gray-800 mb-2">💡 Вибір реалізації Map:</p>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div><strong>HashMap:</strong> стандартний вибір</div>
              <div><strong>TreeMap:</strong> сортування за ключами</div>
              <div><strong>LinkedHashMap:</strong> порядок вставки</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Queue та Deque",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">Queue: Черги</h3>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-700 mb-3">{"Queue<E> - Інтерфейс черги"}</h4>
            <p className="text-gray-700 mb-3">FIFO (First In First Out) - перший прийшов, перший вийшов</p>
            <div className="bg-white p-4 rounded text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-semibold text-green-600 mb-1">Викидають exception:</div>
                  <div className="font-mono text-xs">boolean add(E e);</div>
                  <div className="font-mono text-xs">E remove();</div>
                  <div className="font-mono text-xs">E element();</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-600 mb-1">Повертають спец. значення:</div>
                  <div className="font-mono text-xs">boolean offer(E e);</div>
                  <div className="font-mono text-xs">E poll();</div>
                  <div className="font-mono text-xs">E peek();</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 mb-3">PriorityQueue</h4>
              <p className="text-gray-700 mb-3">Черга з пріоритетами. Елементи сортуються.</p>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div>{"Queue<Integer> pq = new PriorityQueue<>();"}</div>
                <div>pq.offer(5);</div>
                <div>pq.offer(1);</div>
                <div>pq.offer(3);</div>
                <div className="mt-2">pq.poll(); // 1 (мінімум)</div>
                <div>pq.poll(); // 3</div>
                <div>pq.poll(); // 5</div>
              </div>
              <div className="bg-blue-50 p-2 rounded mt-2 text-xs">
                <div>⏱️ O(log n) для add/poll</div>
                <div>⏱️ O(1) для peek</div>
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3">ArrayDeque</h4>
              <p className="text-gray-700 mb-3">Двостороння черга. Швидша за Stack і LinkedList.</p>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div>{"Deque<String> deque = new ArrayDeque<>();"}</div>
                <div className="mt-2 text-gray-500">{'// Як черга (FIFO):'}</div>
                <div>deque.offerLast("A");</div>
                <div>deque.pollFirst();</div>
                <div className="mt-2 text-gray-500">{'// Як стек (LIFO):'}</div>
                <div>deque.push("B");</div>
                <div>deque.pop();</div>
              </div>
              <div className="bg-green-50 p-2 rounded mt-2 text-xs">
                <div>✅ Рекомендується замість Stack</div>
                <div>⏱️ O(1) для операцій з обох кінців</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Порівняння продуктивності",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">Big O - складність операцій (швидкодія)</h3>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-3">List реалізації</h4>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded text-sm">
                <thead>
                  <tr className="bg-blue-200">
                    <th className="p-2 text-left">Операція</th>
                    <th className="p-2 text-center">ArrayList</th>
                    <th className="p-2 text-center">LinkedList</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">get(index)</td>
                    <td className="p-2 text-center bg-green-50 font-bold">O(1)</td>
                    <td className="p-2 text-center bg-red-50 font-bold">O(n)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">add в кінець</td>
                    <td className="p-2 text-center bg-green-50 font-bold">O(1)*</td>
                    <td className="p-2 text-center bg-green-50 font-bold">O(1)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">add(index, element)</td>
                    <td className="p-2 text-center bg-red-50 font-bold">O(n)</td>
                    <td className="p-2 text-center bg-red-50 font-bold">O(n)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">addFirst</td>
                    <td className="p-2 text-center bg-red-50 font-bold">O(n)</td>
                    <td className="p-2 text-center bg-green-50 font-bold">O(1)</td>
                  </tr>
                  <tr>
                    <td className="p-2">contains</td>
                    <td className="p-2 text-center bg-red-50 font-bold">O(n)</td>
                    <td className="p-2 text-center bg-red-50 font-bold">O(n)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-600 mt-2">* амортизована складність</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-orange-50 p-5 rounded-lg">
              <h4 className="font-bold text-orange-700 mb-3">Set реалізації</h4>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded text-xs">
                  <thead>
                    <tr className="bg-orange-200">
                      <th className="p-2 text-left">Операція</th>
                      <th className="p-2">HashSet</th>
                      <th className="p-2">TreeSet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">add</td>
                      <td className="p-2 text-center bg-green-50">O(1)</td>
                      <td className="p-2 text-center bg-yellow-50">O(log n)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">contains</td>
                      <td className="p-2 text-center bg-green-50">O(1)</td>
                      <td className="p-2 text-center bg-yellow-50">O(log n)</td>
                    </tr>
                    <tr>
                      <td className="p-2">Порядок</td>
                      <td className="p-2 text-center">Немає</td>
                      <td className="p-2 text-center">Сортовані</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg">
              <h4 className="font-bold text-purple-700 mb-3">Map реалізації</h4>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded text-xs">
                  <thead>
                    <tr className="bg-purple-200">
                      <th className="p-2 text-left">Операція</th>
                      <th className="p-2">HashMap</th>
                      <th className="p-2">TreeMap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">get</td>
                      <td className="p-2 text-center bg-green-50">O(1)</td>
                      <td className="p-2 text-center bg-yellow-50">O(log n)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">put</td>
                      <td className="p-2 text-center bg-green-50">O(1)</td>
                      <td className="p-2 text-center bg-yellow-50">O(log n)</td>
                    </tr>
                    <tr>
                      <td className="p-2">Порядок</td>
                      <td className="p-2 text-center">Немає</td>
                      <td className="p-2 text-center">Сортовані</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
            <p className="font-semibold text-gray-800 mb-2">💡 Легенда:</p>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="bg-green-50 p-2 rounded">O(1) - константа</div>
              <div className="bg-yellow-50 p-2 rounded">O(log n) - логарифм</div>
              <div className="bg-red-50 p-2 rounded">O(n) - лінійна</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Utility класи: Collections",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">Collections - статичні утиліти</h3>
          </div>

          <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
            <h4 className="font-bold text-indigo-700 mb-3">Сортування</h4>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <div>{"List<Integer> numbers = Arrays.asList(5, 2, 8, 1, 9);"}</div>
              <div className="mt-2">Collections.sort(numbers);</div>
              <div className="text-gray-500 text-xs">{'// [1, 2, 5, 8, 9]'}</div>
              <div className="mt-2">Collections.sort(numbers, Collections.reverseOrder());</div>
              <div className="text-gray-500 text-xs">{'// [9, 8, 5, 2, 1]'}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3">Пошук</h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div>int index = Collections.binarySearch(list, 5);</div>
                <div className="mt-2">Integer max = Collections.max(list);</div>
                <div>Integer min = Collections.min(list);</div>
                <div className="mt-2">int freq = Collections.frequency(list, 5);</div>
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3">Модифікація</h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div>Collections.shuffle(list);</div>
                <div>Collections.reverse(list);</div>
                <div>Collections.fill(list, 0);</div>
                <div>Collections.copy(dest, src);</div>
                <div>Collections.replaceAll(list, 5, 10);</div>
              </div>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 mb-3">Незмінні колекції</h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div>{"List<String> immutable = Collections.unmodifiableList(list);"}</div>
                <div className="mt-2 text-red-600 text-xs">{'// Спроба змінити викине Exception'}</div>
              </div>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 mb-3">Синхронізовані</h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div>{"List<String> syncList = Collections.synchronizedList(new ArrayList<>());"}</div>
                <div className="mt-2">{"Set<Integer> syncSet = Collections.synchronizedSet(new HashSet<>());"}</div>
              </div>
            </div>
          </div>

          <div className="bg-pink-50 p-5 rounded-lg">
            <h4 className="font-bold text-pink-700 mb-3">Порожні та одноелементні колекції</h4>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <div>{"List<String> empty = Collections.emptyList();"}</div>
              <div>{"Set<Integer> emptySet = Collections.emptySet();"}</div>
              <div className="mt-2">{"List<String> single = Collections.singletonList(\"One\");"}</div>
              <div>{"Set<Integer> singleSet = Collections.singleton(42);"}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Immutable Collections (Java 9+)",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">Незмінні колекції</h3>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700 mb-3">Створення immutable колекцій</h4>
            <div className="bg-white p-4 rounded font-mono text-sm space-y-2">
              <div className="font-bold text-gray-700">List:</div>
              <div>{"List<String> list = List.of(\"Java\", \"Python\", \"C++\");"}</div>
              
              <div className="font-bold text-gray-700 mt-3">Set:</div>
              <div>{"Set<Integer> set = Set.of(1, 2, 3, 4, 5);"}</div>
              
              <div className="font-bold text-gray-700 mt-3">Map:</div>
              <div>{"Map<String, Integer> map = Map.of("}</div>
              <div className="ml-4">    "Java", 1995,</div>
              <div className="ml-4">    "Python", 1991</div>
              <div>{");"}</div>
              
              <div className="font-bold text-gray-700 mt-3">Для великих Map ({">"} 10 елементів):</div>
              <div>{"Map<String, Integer> bigMap = Map.ofEntries("}</div>
              <div className="ml-4">    {'Map.entry("Key1", 1),'}</div>
              <div className="ml-4">    {'Map.entry("Key2", 2)'}</div>
              <div>{");"}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3">✓ Переваги Immutable</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Потокобезпечні</strong> - можна використовувати в багатопотоковості</li>
                <li>• <strong>Оптимізовані</strong> - займають менше пам'яті</li>
                <li>• <strong>Справжня незмінність</strong> - гарантовано не зміняться</li>
                <li>• <strong>Швидкі</strong> - оптимізовані для читання</li>
                <li>• <strong>Безпечні</strong> - можна передавати без копіювання</li>
              </ul>
            </div>

            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 mb-3">✗ Обмеження</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Не дозволяють null</strong> - викине NullPointerException</li>
                <li>• <strong>Не можна модифікувати</strong> - add/remove/clear викинуть UnsupportedOperationException</li>
                <li>• <strong>Тільки Java 9+</strong></li>
                <li>• <strong>Для Map.of()</strong> максимум 10 пар ключ-значення</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-700 mb-3">⚠️ Immutable vs Unmodifiable</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold text-gray-800 mb-2">Unmodifiable (старий спосіб)</p>
                <div className="font-mono text-xs mb-2">
                  <div>{"List<String> original = new ArrayList<>();"}</div>
                  <div>original.add("Java");</div>
                  <div>{"List<String> unmod ="}</div>
                  <div>{"  Collections.unmodifiableList(original);"}</div>
                  <div className="text-red-600 mt-2">original.add("Python");</div>
                  <div className="text-red-600">{'// unmod теж змінився! ❌'}</div>
                </div>
                <p className="text-xs text-gray-600">Це лише обгортка, оригінал можна змінити</p>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold text-gray-800 mb-2">Immutable (Java 9+)</p>
                <div className="font-mono text-xs mb-2">
                  <div>{"List<String> immutable ="}</div>
                  <div>{'  List.of("Java", "Python");'}</div>
                  <div className="text-green-600 mt-2">{'// Справжня незмінність ✓'}</div>
                  <div className="text-green-600">{'// Немає оригіналу'}</div>
                  <div className="text-green-600">{'// Ніхто не може змінити'}</div>
                </div>
                <p className="text-xs text-gray-600">Справжня незмінна колекція</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <h4 className="font-bold text-purple-700 mb-3">Копіювання в immutable</h4>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <div>{"List<String> mutable = new ArrayList<>();"}</div>
              <div>mutable.add("Java");</div>
              <div>mutable.add("Python");</div>
              <div className="mt-2 text-gray-500">{'// Створити immutable копію:'}</div>
              <div>{"List<String> immutable = List.copyOf(mutable);"}</div>
              <div className="mt-2 text-gray-500">{'// Тепер mutable можна змінювати, але immutable залишиться незмінним'}</div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-gray-500">
            <h4 className="font-bold text-gray-700 mb-3">🔧 Внутрішня імплементація (JDK 11+)</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-blue-700 mb-1">List.of() →</p>
                <p className="text-gray-700 font-mono text-xs">ImmutableCollections.List12 / ListN</p>
                <p className="text-gray-600 text-xs mt-1">1–2 елементи: List12 (два поля, без масиву). 0 або 3+: ListN з масивом Object[]</p>
              </div>
          
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-orange-700 mb-1">Set.of() →</p>
                <p className="text-gray-700 font-mono text-xs">ImmutableCollections.Set12 / SetN</p>
                <p className="text-gray-600 text-xs mt-1">SetN використовує хеш-таблицю з відкритою адресацією: пошук O(1)</p>
              </div>
          
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-purple-700 mb-1">Map.of() / Map.ofEntries() →</p>
                <p className="text-gray-700 font-mono text-xs">ImmutableCollections.Map1 / MapN</p>
                <p className="text-gray-600 text-xs mt-1">MapN зберігає у плоскому масиві: [key1, val1, key2, val2, ...]</p>
              </div>
          
              <div className="bg-blue-50 p-2 rounded mt-2">
                <p className="text-xs text-gray-700"><strong>Оптимізація:</strong> 1–2 елементи зберігаються в полях без масиву, а порожня колекція є спільним синглтоном (List.of() == List.of()) = мінімальне використання пам'яті</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg">
            <p className="font-semibold text-indigo-800 mb-2">💡 Коли використовувати:</p>
            <div className="text-sm text-gray-700 space-y-1">
              <div>• Константи та конфігурації</div>
              <div>• Повернення колекцій з методів (запобігає зміні)</div>
              <div>• Багатопотокові застосунки</div>
              <div>• Ключі в Map (гарантує стабільність)</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Підсумок: Collections Framework",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Ключові моменти Collections</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3">List</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• ArrayList - для читання</li>
                <li>• LinkedList - для вставок</li>
                <li>• Дозволяє дублікати</li>
                <li>• Доступ за індексом</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 mb-3">Set</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• HashSet - найшвидший</li>
                <li>• TreeSet - сортовані</li>
                <li>• LinkedHashSet - порядок</li>
                <li>• Тільки унікальні елементи</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 mb-3">Map</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• HashMap - стандарт</li>
                <li>• TreeMap - сортовані ключі</li>
                <li>• LinkedHashMap - порядок</li>
                <li>• Пари ключ-значення</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-400">
            <h4 className="font-bold text-yellow-700 mb-3">Як вибирати колекцію?</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div>🔸 Потрібна впорядкованість? → <strong>List</strong></div>
              <div>🔸 Потрібні унікальні елементи? → <strong>Set</strong></div>
              <div>🔸 Потрібні пари ключ-значення? → <strong>Map</strong></div>
              <div>🔸 Потрібна черга? → <strong>Queue/Deque</strong></div>
              <div>🔸 Потрібне сортування? → <strong>TreeSet/TreeMap</strong></div>
              <div>🔸 Найкраща швидкодія? → <strong>ArrayList/HashSet/HashMap</strong></div>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-lg">
            <h4 className="font-bold text-green-700 mb-3">Пам'ятайте</h4>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Всі колекції використовують Generics для типобезпеки</li>
              <li>✓ HashMap/HashSet найшвидші - O(1) для більшості операцій</li>
              <li>✓ TreeMap/TreeSet сортують автоматично - O(log n)</li>
              <li>✓ ArrayList краще в більшості випадків, крім частих операцій на кінцях або дій через ітератордля (тоді LinkedList)</li>
              <li>✓ Collections та Arrays - корисні utility класи</li>
            </ul>
          </div>

          <div className="text-center bg-blue-100 p-4 rounded-lg">
            <p className="text-lg font-semibold text-blue-800">
              Правильний вибір колекції = висока продуктивність! 🚀
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-12 min-h-[700px] flex flex-col">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{slides[currentSlide].title}</h1>
            {slides[currentSlide].subtitle && (
              <p className="text-lg text-gray-600">{slides[currentSlide].subtitle}</p>
            )}
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded mt-3"></div>
          </div>

          <div className="flex-grow overflow-y-auto">
            {slides[currentSlide].content}
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
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
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
                  title={`Слайд ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
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

export default CollectionsPresentation;
