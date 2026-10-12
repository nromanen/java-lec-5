import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, XCircle } from 'lucide-react';

const GenericsPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Generics (Узагальнення)",
      subtitle: "Типобезпечний код без явних приведень",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🔷</div>
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Java Generics</h2>
            <p className="text-xl text-gray-600">Параметризація типів для безпечного та гнучкого коду</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg text-gray-700">
              <strong>Generics</strong> дозволяють класам, інтерфейсам та методам працювати з різними типами даних, 
              зберігаючи типобезпеку на етапі компіляції.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Що таке Generics?",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Визначення</h3>
            <p className="text-lg">Механізм параметризації типів, введений у Java 5</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle size={20} />
                Основні переваги
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Перевірка типів на етапі компіляції</li>
                <li>✓ Відсутність явних приведень типів (casting)</li>
                <li>✓ Можливість написати універсальний код</li>
                <li>✓ Виявлення помилок до запуску програми</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3">Приклад використання</h4>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <code className="text-gray-800">
                  <div>List&lt;String&gt; list = </div>
                  <div className="ml-4">new ArrayList&lt;&gt;();</div>
                  <div className="mt-2">list.add("Java");</div>
                  <div>String s = list.get(0);</div>
                  <div className="text-green-600 mt-2">{'// Без casting!'}</div>
                </code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Проблема без Generics",
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
              <XCircle size={20} />
              До Java 5 (без Generics)
            </h4>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <code className="text-gray-800">
                <div className="text-blue-600">{'// Використання Object для зберігання будь-якого типу'}</div>
                <div>List list = new ArrayList();</div>
                <div>list.add("Hello");</div>
                <div>list.add(123); <span className="text-green-600">{'// Можна додати що завгодно!'}</span></div>
                <div className="mt-2"></div>
                <div className="text-red-600">{'// Потрібен явний casting'}</div>
                <div>String s = (String) list.get(0);</div>
                <div className="mt-2"></div>
                <div className="text-red-600">{'// Runtime помилка! ClassCastException'}</div>
                <div>String error = (String) list.get(1);</div>
              </code>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
              <CheckCircle size={20} />
              З Generics (Java 5+)
            </h4>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <code className="text-gray-800">
                <div className="text-blue-600">{'// Типобезпека на етапі компіляції'}</div>
                <div>List&lt;String&gt; list = new ArrayList&lt;&gt;();</div>
                <div>list.add("Hello");</div>
                <div>list.add(123); <span className="text-red-600">{'// Помилка компіляції!'}</span></div>
                <div className="mt-2"></div>
                <div className="text-green-600">{'// Без casting'}</div>
                <div>String s = list.get(0);</div>
              </code>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
            <p className="text-gray-700 font-semibold">
              💡 Помилка на етапі компіляції краще, ніж Runtime Exception у продакшені!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Основний синтаксис: Generic класи",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-3">Створення generic класу</h4>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <code className="text-gray-800">
                <div className="text-blue-600">{'// T - параметр типу (Type parameter)'}</div>
                <div>public class Box&lt;T&gt; {'{'}</div>
                <div className="ml-4">private T content;</div>
                <div className="mt-2 ml-4">public void set(T content) {'{'}</div>
                <div className="ml-8">this.content = content;</div>
                <div className="ml-4">{'}'}</div>
                <div className="mt-2 ml-4">public T get() {'{'}</div>
                <div className="ml-8">return content;</div>
                <div className="ml-4">{'}'}</div>
                <div>{'}'}</div>
              </code>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-lg">
            <h4 className="font-bold text-green-700 mb-3">Використання</h4>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <code className="text-gray-800">
                <div className="text-blue-600">{'// Створення об\'єктів з різними типами'}</div>
                <div>Box&lt;String&gt; stringBox = new Box&lt;&gt;();</div>
                <div>stringBox.set("Hello");</div>
                <div>String str = stringBox.get(); <span className="text-green-600">{'// Без casting'}</span></div>
                <div className="mt-2"></div>
                <div>Box&lt;Integer&gt; intBox = new Box&lt;&gt;();</div>
                <div>intBox.set(123);</div>
                <div>Integer num = intBox.get();</div>
                <div className="mt-2"></div>
                <div>Box&lt;User&gt; userBox = new Box&lt;&gt;();</div>
                <div>userBox.set(new User("John"));</div>
              </code>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-purple-700 mb-2">Конвенції назв параметрів типу</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div><strong>T</strong> - Type (загальний тип)</div>
              <div><strong>E</strong> - Element (елемент колекції)</div>
              <div><strong>K</strong> - Key (ключ)</div>
              <div><strong>V</strong> - Value (значення)</div>
              <div><strong>N</strong> - Number (число)</div>
              <div><strong>S, U</strong> - додаткові типи</div>
            </div>
          </div>
        </div>
      )
    },
    {
  title: "Generic методи",
  content: (
    <div className="space-y-6">
      <div className="bg-blue-50 p-5 rounded-lg">
        <h4 className="font-bold text-blue-700 mb-3">Синтаксис generic методу</h4>
        <div className="bg-white p-4 rounded font-mono text-sm">
          <code className="text-gray-800">
            <div className="text-blue-600">{'// <T> goes before the return type'}</div>
            <div>public class Utils {'{'}</div>
            <div className="ml-4 mt-2">public static &lt;T&gt; void printArray(T[] array) {'{'}</div>
            <div className="ml-8">for (T element : array) {'{'}</div>
            <div className="ml-12">System.out.println(element);</div>
            <div className="ml-8">{'}'}</div>
            <div className="ml-4">{'}'}</div>
            <div className="mt-2 ml-4 text-blue-600">{'// T links the parameter and the return type'}</div>
            <div className="ml-4">public static &lt;T&gt; T getFirst(List&lt;T&gt; list) {'{'}</div>
            <div className="ml-8">return list.isEmpty() ? null : list.get(0);</div>
            <div className="ml-4">{'}'}</div>
            <div>{'}'}</div>
          </code>
        </div>
      </div>

      <div className="bg-green-50 p-5 rounded-lg">
        <h4 className="font-bold text-green-700 mb-3">Виклик generic методів</h4>
        <div className="bg-white p-4 rounded font-mono text-sm">
          <code className="text-gray-800">
            <div className="text-blue-600">{'// Type is inferred automatically'}</div>
            <div>Integer[] numbers = {'{'}1, 2, 3{'}'};</div>
            <div>Utils.printArray(numbers); <span className="text-green-600">{'// T = Integer'}</span></div>
            <div className="mt-2"></div>
            <div>String[] words = {"{"}"Hello", "World"{"}"};</div>
            <div>Utils.printArray(words); <span className="text-green-600">{'// T = String'}</span></div>
            <div className="mt-2"></div>
            <div className="text-blue-600">{'// Explicit type (rarely needed)'}</div>
            <div>Utils.&lt;String&gt;printArray(words);</div>
            <div className="mt-2"></div>
            <div>List&lt;String&gt; list = Arrays.asList("a", "b");</div>
            <div>String first = Utils.getFirst(list); <span className="text-green-600">{'// T = String, no cast needed'}</span></div>
          </code>
        </div>
      </div>

      <div className="bg-blue-50 p-5 rounded-lg">
        <h4 className="font-bold text-blue-700 mb-3">💡 Коли &lt;T&gt; справді потрібен</h4>
        <p className="text-gray-800 mb-3">
          Якщо T використовується в сигнатурі лише один раз, його можна замінити: List&lt;T&gt; → List&lt;?&gt;, T[] → Object[].
          &lt;T&gt; потрібен, коли він пов'язує кілька місць — наприклад, параметр і тип повернення:
        </p>
        <div className="bg-white p-4 rounded font-mono text-sm">
          <code className="text-gray-800">
            <div>String a = Utils.getFirst(list); <span className="text-green-600">{'// ✅ with <T>'}</span></div>
            <div>String b = (String) getFirstObject(list); <span className="text-green-600">{'// without <T>: cast required'}</span></div>
          </code>
        </div>
      </div>
    </div>
  )
},
    {
      title: "Generic інтерфейси",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-3">Визначення generic інтерфейсу</h4>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <code className="text-gray-800">
                <div>public interface Comparable&lt;T&gt; {'{'}</div>
                <div className="ml-4">int compareTo(T other);</div>
                <div>{'}'}</div>
                <div className="mt-3"></div>
                <div>public interface Repository&lt;T, ID&gt; {'{'}</div>
                <div className="ml-4">T findById(ID id);</div>
                <div className="ml-4">void save(T entity);</div>
                <div className="ml-4">void delete(ID id);</div>
                <div>{'}'}</div>
              </code>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-lg">
            <h4 className="font-bold text-green-700 mb-3">Реалізація generic інтерфейсу</h4>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <code className="text-gray-800">
                <div className="text-blue-600">{'// Варіант 1: Вказуємо конкретний тип'}</div>
                <div>public class User implements Comparable&lt;User&gt; {'{'}</div>
                <div className="ml-4">@Override</div>
                <div className="ml-4">public int compareTo(User other) {'{'}</div>
                <div className="ml-8">return this.name.compareTo(other.name);</div>
                <div className="ml-4">{'}'}</div>
                <div>{'}'}</div>
                <div className="mt-3"></div>
                <div className="text-blue-600">{'// Варіант 2: Залишаємо клас generic'}</div>
                <div>public class UserRepository&lt;T, ID&gt; </div>
                <div className="ml-8">implements Repository&lt;T, ID&gt; {'{'}</div>
                <div className="ml-4">@Override</div>
                <div className="ml-4">public T findById(ID id) {'{'}</div>
                <div className="ml-8">{'// реалізація'}</div>
                <div className="ml-4">{'}'}</div>
                <div>{'}'}</div>
              </code>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Bounded Type Parameters",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700 mb-3">Обмеження типів (Upper Bounds)</h4>
            <p className="text-gray-700 mb-3">Дозволяє обмежити параметр типу певним класом або інтерфейсом</p>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <code className="text-gray-800">
                <div className="text-blue-600">{'// T має бути Number або його підкласом'}</div>
                <div>public class Calculator&lt;T extends Number&gt; {'{'}</div>
                <div className="ml-4">private T value;</div>
                <div className="mt-2 ml-4">public double getDoubleValue() {'{'}</div>
                <div className="ml-8">return value.doubleValue(); <span className="text-green-600">{'// Можемо викликати методи Number'}</span></div>
                <div className="ml-4">{'}'}</div>
                <div>{'}'}</div>
                <div className="mt-3"></div>
                <div className="text-blue-600">{'// Використання'}</div>
                <div>Calculator&lt;Integer&gt; calc1 = new Calculator&lt;&gt;(); <span className="text-green-600">{'// OK'}</span></div>
                <div>Calculator&lt;Double&gt; calc2 = new Calculator&lt;&gt;(); <span className="text-green-600">{'// OK'}</span></div>
                <div>Calculator&lt;String&gt; calc3 = new Calculator&lt;&gt;(); <span className="text-red-600">{'// Помилка!'}</span></div>
              </code>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-3">Multiple Bounds (Множинні обмеження)</h4>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <code className="text-gray-800">
                <div className="text-blue-600">{'// T має реалізовувати обидва інтерфейси'}</div>
                <div>public class Processor&lt;T extends Runnable & Closeable&gt; {'{'}</div>
                <div className="ml-4">public void process(T item) {'{'}</div>
                <div className="ml-8">item.run(); <span className="text-green-600">{'// Можемо викликати методи обох інтерфейсів'}</span></div>
                <div className="ml-8">item.close();</div>
                <div className="ml-4">{'}'}</div>
                <div>{'}'}</div>
                <div className="mt-3"></div>
                <div className="text-blue-600">{'// Клас + інтерфейси (клас має бути першим!)'}</div>
                <div>public &lt;T extends Number & Comparable&lt;T&gt;&gt; </div>
                <div className="ml-4">T max(T a, T b) {'{'}</div>
                <div className="ml-8">return a.compareTo(b) &gt; 0 ? a : b;</div>
                <div className="ml-4">{'}'}</div>
              </code>
            </div>
          </div>
        </div>
      )
    },
    {
  title: "Wildcards: Unbounded",
  content: (
    <div className="space-y-6">
      <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
        <h4 className="font-bold text-yellow-700 mb-3">Wildcards - що це?</h4>
        <p className="text-gray-700">
          Wildcards (<code>?</code>) використовуються, коли ми не знаємо або нам не важливо, який саме тип буде використаний
        </p>
      </div>

      <div className="bg-blue-50 p-5 rounded-lg">
        <h4 className="font-bold text-blue-700 mb-3">Unbounded Wildcard: &lt;?&gt;</h4>
        <div className="bg-white p-4 rounded font-mono text-sm">
          <code className="text-gray-800">
            <div className="text-blue-600">{'// Accepts a List of any type'}</div>
            <div>public static void printList(List&lt;?&gt; list) {'{'}</div>
            <div className="ml-4">for (Object item : list) {'{'}</div>
            <div className="ml-8">System.out.println(item);</div>
            <div className="ml-4">{'}'}</div>
            <div>{'}'}</div>
            <div className="mt-3"></div>
            <div className="text-blue-600">{'// Any List can be passed'}</div>
            <div>List&lt;String&gt; strings = Arrays.asList("a", "b");</div>
            <div>List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3);</div>
            <div>printList(strings); <span className="text-green-600">{'// OK'}</span></div>
            <div>printList(numbers); <span className="text-green-600">{'// OK'}</span></div>
          </code>
        </div>
      </div>

      <div className="bg-red-50 p-5 rounded-lg">
        <h4 className="font-bold text-red-700 mb-3">Обмеження з &lt;?&gt;</h4>

        <div className="mb-4">
          <p className="font-semibold text-red-800 mb-2">1. Не можна передати значення типу T (крім null)</p>
          <p className="text-gray-700 mb-2">
            Стосується будь-якого generic-типу, а не лише колекцій: <code>add(E)</code> у List, <code>accept(T)</code> у Consumer, <code>set(T)</code> у власному Box&lt;T&gt;
          </p>
          <div className="bg-white p-4 rounded font-mono text-sm">
            <code className="text-gray-800">
              <div>public static void process(List&lt;?&gt; list, Consumer&lt;?&gt; consumer) {'{'}</div>
              <div className="ml-4">list.add("Hello"); <span className="text-red-600">{'// ❌ compile error'}</span></div>
              <div className="ml-4">consumer.accept(123); <span className="text-red-600">{'// ❌ same restriction'}</span></div>
              <div className="ml-4">list.add(null); <span className="text-green-600">{'// ✅ only null'}</span></div>
              <div>{'}'}</div>
            </code>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-semibold text-red-800 mb-2">2. Читання тільки як Object</p>
          <div className="bg-white p-4 rounded font-mono text-sm">
            <code className="text-gray-800">
              <div>List&lt;?&gt; list = List.of("a", "b");</div>
              <div>Object item = list.get(0); <span className="text-green-600">{'// ✅ OK'}</span></div>
              <div>String str = list.get(0); <span className="text-red-600">{'// ❌ compile error'}</span></div>
            </code>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-semibold text-red-800 mb-2">3. Не можна створити екземпляр з &lt;?&gt;</p>
          <div className="bg-white p-4 rounded font-mono text-sm">
            <code className="text-gray-800">
              <div>List&lt;?&gt; a = new ArrayList&lt;?&gt;(); <span className="text-red-600">{'// ❌ compile error'}</span></div>
              <div>List&lt;?&gt; b = new ArrayList&lt;&gt;(); <span className="text-green-600">{'// ✅ infers ArrayList<Object>'}</span></div>
            </code>
          </div>
        </div>

        <div>
          <p className="font-semibold text-red-800 mb-2">4. Працюють методи, які не приймають T</p>
          <div className="bg-white p-4 rounded font-mono text-sm">
            <code className="text-gray-800">
              <div>void process(List&lt;?&gt; list) {'{'}</div>
              <div className="ml-4">list.size(); <span className="text-green-600">{'// ✅'}</span></div>
              <div className="ml-4">list.isEmpty(); <span className="text-green-600">{'// ✅'}</span></div>
              <div className="ml-4">list.contains("a"); <span className="text-green-600">{'// ✅ takes Object'}</span></div>
              <div className="ml-4">list.remove("a"); <span className="text-green-600">{'// ✅ takes Object'}</span></div>
              <div className="ml-4">list.clear(); <span className="text-green-600">{'// ✅ no T in signature'}</span></div>
              <div className="ml-4">list.addAll(List.of("a")); <span className="text-red-600">{'// ❌ takes Collection<? extends E>'}</span></div>
              <div>{'}'}</div>
            </code>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-700 mb-2">💡 Коли використовувати &lt;?&gt;</h4>
        <ul className="text-gray-700 space-y-1 ml-4">
          <li>• Коли метод має приймати Box&lt;String&gt;, Box&lt;Integer&gt; тощо — Box&lt;Object&gt; їх не прийме, бо generics інваріантні</li>
          <li>• Коли достатньо отримувати значення як Object</li>
          <li>• Коли метод використовує лише операції, що не залежать від T (наприклад, size, isEmpty, clear у колекціях)</li>
          <li>• Якщо потрібно читати з конкретним типом — використовуйте <code>&lt;? extends T&gt;</code></li>
        </ul>
      </div>
    </div>
  )
},
    {
      title: "Wildcards: Upper Bounded",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 mb-3">Upper Bounded: &lt;? extends Type&gt;</h4>
            <p className="text-gray-700 mb-3">Приймає Type або будь-який його підклас (Producer - читання)</p>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <code className="text-gray-800">
                <div className="text-blue-600">{'// Працює з Number та всіма підкласами'}</div>
                <div>public static double sum(List&lt;? extends Number&gt; list) {'{'}</div>
                <div className="ml-4">double total = 0;</div>
                <div className="ml-4">for (Number num : list) {'{'}</div>
                <div className="ml-8">total += num.doubleValue();</div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-4">return total;</div>
                <div>{'}'}</div>
                <div className="mt-3"></div>
                <div className="text-blue-600">{'// Можна передати різні типи'}</div>
                <div>List&lt;Integer&gt; integers = Arrays.asList(1, 2, 3);</div>
                <div>List&lt;Double&gt; doubles = Arrays.asList(1.1, 2.2);</div>
                <div>sum(integers); <span className="text-green-600">{'// OK: Integer extends Number'}</span></div>
                <div>sum(doubles); <span className="text-green-600">{'// OK: Double extends Number'}</span></div>
              </code>
            </div>
          </div>

          <div className="bg-red-50 p-5 rounded-lg">
            <h4 className="font-bold text-red-700 mb-3">Обмеження: не можна писати</h4>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <code className="text-gray-800">
                <div>public static void addNumbers(</div>
                <div className="ml-8">List&lt;? extends Number&gt; list) {'{'}</div>
                <div className="ml-4">list.add(1); <span className="text-red-600">{'// Помилка!'}</span></div>
                <div className="ml-4">list.add(1.5); <span className="text-red-600">{'// Помилка!'}</span></div>
                <div className="ml-4">list.add(null); <span className="text-green-600">{'// Тільки null'}</span></div>
                <div className="mt-2"></div>
                <div className="text-blue-600">{'// Можна тільки читати'}</div>
                <div>Number num = list.get(0); <span className="text-green-600">{'// OK'}</span></div>
                <div>{'}'}</div>
              </code>
            </div>
          </div>
        </div>
      )
    },
    {
  title: "Wildcards: Lower Bounded",
  content: (
    <div className="space-y-6">
      <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-700 mb-3">Lower Bounded: &lt;? super Type&gt;</h4>
        <p className="text-gray-700 mb-3">Приймає Type або будь-який його суперклас (Consumer - запис)</p>
        <div className="bg-white p-4 rounded font-mono text-sm">
          <code className="text-gray-800">
            <div className="text-blue-600">{'// Can add Integer values'}</div>
            <div>public static void addIntegers(</div>
            <div className="ml-8">List&lt;? super Integer&gt; list) {'{'}</div>
            <div className="ml-4">list.add(1); <span className="text-green-600">{'// ✅ OK'}</span></div>
            <div className="ml-4">list.add(100); <span className="text-green-600">{'// ✅ OK'}</span></div>
            <div>{'}'}</div>
            <div className="mt-3"></div>
            <div className="text-blue-600">{'// Can pass List<Integer>, List<Number>, List<Object>'}</div>
            <div>List&lt;Integer&gt; integers = new ArrayList&lt;&gt;();</div>
            <div>List&lt;Number&gt; numbers = new ArrayList&lt;&gt;();</div>
            <div>List&lt;Object&gt; objects = new ArrayList&lt;&gt;();</div>
            <div>List&lt;Double&gt; doubles = new ArrayList&lt;&gt;();</div>
            <div className="mt-2"></div>
            <div>addIntegers(integers); <span className="text-green-600">{'// ✅ OK'}</span></div>
            <div>addIntegers(numbers); <span className="text-green-600">{'// ✅ OK'}</span></div>
            <div>addIntegers(objects); <span className="text-green-600">{'// ✅ OK'}</span></div>
            <div>addIntegers(doubles); <span className="text-red-600">{'// ❌ Double is not a supertype of Integer'}</span></div>
          </code>
        </div>
      </div>

      <div className="bg-orange-50 p-5 rounded-lg">
        <h4 className="font-bold text-orange-700 mb-3">Обмеження: читання тільки як Object</h4>
        <div className="bg-white p-4 rounded font-mono text-sm">
          <code className="text-gray-800">
            <div>public static void process(</div>
            <div className="ml-8">List&lt;? super Integer&gt; list) {'{'}</div>
            <div className="ml-4">Object obj = list.get(0); <span className="text-green-600">{'// ✅ only as Object'}</span></div>
            <div className="ml-4">Integer num = list.get(0); <span className="text-red-600">{'// ❌ compile error'}</span></div>
            <div className="mt-2"></div>
            <div className="ml-4 text-blue-600">{'// list may be List<Number> or List<Object>,'}</div>
            <div className="ml-4 text-blue-600">{'// so the element is not guaranteed to be Integer'}</div>
            <div>{'}'}</div>
          </code>
        </div>
      </div>
    </div>
  )
},
    {
      title: "PECS принцип",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg">
            <h3 className="text-3xl font-bold mb-2">PECS Principle</h3>
            <p className="text-xl">Producer Extends, Consumer Super</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3">Producer Extends</h4>
              <p className="text-gray-700 mb-3">Якщо ви <strong>читаєте</strong> дані з колекції</p>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <code className="text-gray-800">
                  <div className="text-blue-600">{'// Producer - віддає дані'}</div>
                  <div>&lt;? extends T&gt;</div>
                  <div className="mt-2"></div>
                  <div>public void copy(</div>
                  <div className="ml-4">List&lt;? extends Number&gt; src,</div>
                  <div className="ml-4">List&lt;Number&gt; dest) {'{'}</div>
                  <div className="ml-6">for (Number n : src) {'{'}</div>
                  <div className="ml-10">dest.add(n);</div>
                  <div className="ml-6">{'}'}</div>
                  <div>{'}'}</div>
                </code>
              </div>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 mb-3">Consumer Super</h4>
              <p className="text-gray-700 mb-3">Якщо ви <strong>записуєте</strong> дані в колекцію</p>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <code className="text-gray-800">
                  <div className="text-blue-600">{'// Consumer - приймає дані'}</div>
                  <div>&lt;? super T&gt;</div>
                  <div className="mt-2"></div>
                  <div>public void fill(</div>
                  <div className="ml-4">List&lt;? super Integer&gt; list) {'{'}</div>
                  <div className="ml-6">list.add(1);</div>
                  <div className="ml-6">list.add(2);</div>
                  <div>{'}'}</div>
                </code>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-3">Практичний приклад: Collections.copy()</h4>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <code className="text-gray-800">
                <div className="text-blue-600">{'// Реальний метод з Java API'}</div>
                <div>public static &lt;T&gt; void copy(</div>
                <div className="ml-4">List&lt;? super T&gt; dest, <span className="text-purple-600">{'// Consumer - записуємо'}</span></div>
                <div className="ml-4">List&lt;? extends T&gt; src <span className="text-green-600">{'// Producer - читаємо'}</span></div>
                <div>) {'{'}</div>
                <div className="ml-4">for (T item : src) {'{'}</div>
                <div className="ml-8">dest.add(item);</div>
                <div className="ml-4">{'}'}</div>
                <div>{'}'}</div>
              </code>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
            <p className="text-gray-700 font-semibold">
              💡 Запам'ятайте: Producer = extends (читаємо), Consumer = super (пишемо)
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Type Erasure",
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-700 mb-3">Що таке Type Erasure?</h4>
            <p className="text-gray-700">
              Під час компіляції вся інформація про generic типи видаляється (стирається). 
              Це робиться для зворотної сумісності з Java версій до 5.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-3">Що відбувається під час компіляції</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-700 mb-2">Ваш код:</p>
                <div className="bg-white p-3 rounded font-mono text-sm">
                  <code className="text-gray-800">
                    <div>List&lt;String&gt; list = </div>
                    <div className="ml-4">new ArrayList&lt;&gt;();</div>
                    <div>list.add("Hello");</div>
                    <div>String s = list.get(0);</div>
                  </code>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-2">Після компіляції:</p>
                <div className="bg-white p-3 rounded font-mono text-sm">
                  <code className="text-gray-800">
                    <div>List list = </div>
                    <div className="ml-4">new ArrayList();</div>
                    <div>list.add("Hello");</div>
                    <div>String s = (String)list.get(0);</div>
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <h4 className="font-bold text-purple-700 mb-3">Заміна параметрів типу</h4>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <code className="text-gray-800">
                <div className="text-blue-600">{'// Необмежений параметр → Object'}</div>
                <div>class Box&lt;T&gt; {'{'} T value; {'}'}</div>
                <div className="text-gray-500">↓ компілюється в</div>
                <div>class Box {'{'} Object value; {'}'}</div>
                <div className="mt-3"></div>
                <div className="text-blue-600">{'// Bounded параметр → його bound'}</div>
                <div>class Box&lt;T extends Number&gt; {'{'} T value; {'}'}</div>
                <div className="text-gray-500">↓ компілюється в</div>
                <div>class Box {'{'} Number value; {'}'}</div>
              </code>
            </div>
          </div>

          <div className="bg-red-50 p-5 rounded-lg">
            <h4 className="font-bold text-red-700 mb-3">Наслідки Type Erasure</h4>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <code className="text-gray-800">
                <div className="text-red-600">{'// Не можна визначити тип в runtime'}</div>
                <div>List&lt;String&gt; list = new ArrayList&lt;&gt;();</div>
                <div>list instanceof List&lt;String&gt; <span className="text-red-600">{'// Помилка компіляції!'}</span></div>
                <div>list instanceof List <span className="text-green-600">{'// OK'}</span></div>
                <div className="mt-2"></div>
                <div className="text-red-600">{'// Не можна створити instance параметра типу'}</div>
                <div>public &lt;T&gt; void create() {'{'}</div>
                <div className="ml-4">T obj = new T(); <span className="text-red-600">{'// Помилка!'}</span></div>
                <div>{'}'}</div>
              </code>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Обмеження Generics",
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
              <XCircle size={20} />
              Що НЕ можна робити з Generics
            </h4>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h5 className="font-bold text-gray-800 mb-2">1. Не можна використовувати primitive types</h5>
              <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                <code className="text-gray-800">
                  <div>List&lt;int&gt; list; <span className="text-red-600">{'// Помилка!'}</span></div>
                  <div>List&lt;Integer&gt; list; <span className="text-green-600">{'// Правильно'}</span></div>
                </code>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h5 className="font-bold text-gray-800 mb-2">2. Не можна створювати масиви generic типів</h5>
              <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                <code className="text-gray-800">
                  <div>List&lt;String&gt;[] array = new List&lt;String&gt;[10]; <span className="text-red-600">{'// Помилка!'}</span></div>
                  <div>List&lt;?&gt;[] array = new List&lt;?&gt;[10]; <span className="text-green-600">{'// OK'}</span></div>
                  <div>List&lt;String&gt;[] array = new ArrayList[10]; <span className="text-green-600">{'// OK (з warning)'}</span></div>
                </code>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h5 className="font-bold text-gray-800 mb-2">3. Не можна створювати instance параметра типу</h5>
              <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                <code className="text-gray-800">
                  <div>public &lt;T&gt; void method() {'{'}</div>
                  <div className="ml-4">T obj = new T(); <span className="text-red-600">{'// Помилка!'}</span></div>
                  <div>{'}'}</div>
                  <div className="mt-2 text-blue-600">{'// Рішення: передати Class<T>'}</div>
                  <div>public &lt;T&gt; T create(Class&lt;T&gt; clazz) {'{'}</div>
                  <div className="ml-4">return clazz.newInstance();</div>
                  <div>{'}'}</div>
                </code>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h5 className="font-bold text-gray-800 mb-2">4. Не можна мати static поля параметра типу</h5>
              <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                <code className="text-gray-800">
                  <div>public class Box&lt;T&gt; {'{'}</div>
                  <div className="ml-4">private static T value; <span className="text-red-600">{'// Помилка!'}</span></div>
                  <div>{'}'}</div>
                </code>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h5 className="font-bold text-gray-800 mb-2">5. Не можна перевантажувати методи тільки за параметром типу</h5>
              <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                <code className="text-gray-800">
                  <div>public void print(List&lt;String&gt; list) {'{ }'}</div>
                  <div>public void print(List&lt;Integer&gt; list) {'{ }'} <span className="text-red-600">{'// Помилка!'}</span></div>
                  <div className="text-blue-600">{'// Після Type Erasure обидва методи однакові'}</div>
                </code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Підсумок: Generics",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Ключові моменти Generics</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle size={20} />
                Переваги
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Типобезпека на етапі компіляції</li>
                <li>✓ Відсутність casting</li>
                <li>✓ Універсальний код</li>
                <li>✓ Краща читабельність</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3">Основні концепції</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Generic класи, методи, інтерфейси</li>
                <li>• Bounded types (&lt;T extends&gt;)</li>
                <li>• Wildcards (?, extends, super)</li>
                <li>• PECS принцип</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-400">
            <h4 className="font-bold text-yellow-700 mb-3">Пам'ятайте</h4>
            <ul className="space-y-2 text-gray-700">
              <li>🔸 Type Erasure - інформація про типи видаляється під час компіляції</li>
              <li>🔸 PECS: Producer Extends, Consumer Super</li>
              <li>🔸 Не можна: primitive types, масиви generic типів, static поля</li>
              <li>🔸 Використовуйте bounded types для обмеження типів</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <h4 className="font-bold text-purple-700 mb-3">Коли використовувати</h4>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
              <div>✓ Колекції та структури даних</div>
              <div>✓ Utility класи та методи</div>
              <div>✓ Repositories та DAO</div>
              <div>✓ Builder patterns</div>
            </div>
          </div>

          <div className="text-center bg-blue-100 p-4 rounded-lg">
            <p className="text-lg font-semibold text-blue-800">
              Generics - основа для розуміння Collections Framework! 🚀
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-12 min-h-[700px] flex flex-col">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{slides[currentSlide].title}</h1>
            {slides[currentSlide].subtitle && (
              <p className="text-lg text-gray-600">{slides[currentSlide].subtitle}</p>
            )}
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded mt-3"></div>
          </div>

          <div className="flex-grow overflow-y-auto">
            {slides[currentSlide].content}
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
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
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
                  title={`Слайд ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
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

export default GenericsPresentation;
