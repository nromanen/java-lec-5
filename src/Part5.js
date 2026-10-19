import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const IntegrationPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Інтеграція тем",
      subtitle: "Generics + Collections + Functional Interface разом",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🔗</div>
            <h2 className="text-4xl font-bold text-indigo-600 mb-4">Практичні приклади</h2>
            <p className="text-xl text-gray-600">Як всі три концепції працюють разом</p>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <p className="text-lg text-gray-700">
              Generics забезпечують типобезпеку, Collections зберігають дані, 
              а Functional Interface дозволяють елегантно їх обробляти.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🔷</div>
              <p className="font-semibold">Generics</p>
              <p className="text-xs text-gray-600">Типобезпека</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">📦</div>
              <p className="font-semibold">Collections</p>
              <p className="text-xs text-gray-600">Структури даних</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-semibold">Functional Interface</p>
              <p className="text-xs text-gray-600">Обробка даних</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Сортування з Comparator",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">Comparator - Functional Interface для сортування</h3>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700 mb-3">Базове сортування</h4>
            <div className="bg-white p-4 rounded font-mono text-xs">
              <div>List&lt;String&gt; names = new ArrayList&lt;&gt;();</div>
              <div>names.add("John");</div>
              <div>names.add("Alice");</div>
              <div>names.add("Bob");</div>
              <div className="mt-3 text-blue-600">{'// Природне сортування (за алфавітом)'}</div>
              <div>names.sort((a, b) -&gt; a.compareTo(b));</div>
              <div>names.sort(String::compareTo);</div>
              <div>names.sort(Comparator.naturalOrder());</div>
              <div className="text-gray-500">{'// [Alice, Bob, John]'}</div>
              <div className="mt-3 text-blue-600">{'// Зворотне сортування'}</div>
              <div>names.sort(Comparator.reverseOrder());</div>
              <div className="text-gray-500">{'// [John, Bob, Alice]'}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-5 rounded-lg">
              <h4 className="font-bold text-green-700 mb-3">Сортування об'єктів</h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div>class User &#123;</div>
                <div className="ml-4">private String name;</div>
                <div className="ml-4">private int age;</div>
                <div className="ml-4">{'// getters, constructor'}</div>
                <div>&#125;</div>
                <div className="mt-3">List&lt;User&gt; users = Arrays.asList(</div>
                <div className="ml-4">new User("John", 25),</div>
                <div className="ml-4">new User("Alice", 30),</div>
                <div className="ml-4">new User("Bob", 20)</div>
                <div>);</div>
          
                <div className="mt-3 text-blue-600">{'// By name: lambda compares two users'}</div>
                <div>users.sort((a, b) -&gt;</div>
                <div className="ml-4">a.getName().compareTo(b.getName()));</div>
          
                <div className="mt-3 text-blue-600">{'// The same: comparing builds the comparator from a key'}</div>
                <div>users.sort(Comparator.comparing(</div>
                <div className="ml-4">User::getName));</div>
          
                <div className="mt-3 text-red-600">{'// users.sort(User::getName);'}</div>
                <div className="text-red-600">{'// compile error: sort needs (a, b) -> int,'}</div>
                <div className="text-red-600">{'// but getName is u -> String'}</div>
          
                <div className="mt-3 text-blue-600">{'// By age: comparingInt avoids boxing int'}</div>
                <div>users.sort(Comparator.comparingInt(</div>
                <div className="ml-4">User::getAge));</div>
              </div>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg">
              <h4 className="font-bold text-purple-700 mb-3">Складне сортування</h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div className="text-blue-600">{'// Спочатку за віком, потім за іменем'}</div>
                <div>users.sort(</div>
                <div className="ml-4">Comparator.comparing(User::getAge)</div>
                <div className="ml-8">.thenComparing(User::getName)</div>
                <div>);</div>
                <div className="mt-3 text-blue-600">{'// За віком (зворотне), потім за іменем'}</div>
                <div>users.sort(</div>
                <div className="ml-4">Comparator.comparing(User::getAge)</div>
                <div className="ml-8">.reversed()</div>
                <div className="ml-8">.thenComparing(User::getName)</div>
                <div>);</div>
                <div className="mt-3 text-blue-600">{'// З null-safe обробкою'}</div>
                <div>users.sort(Comparator.comparing(</div>
                <div className="ml-4">User::getName,</div>
                <div className="ml-4">Comparator.nullsLast(</div>
                <div className="ml-6">String::compareTo)</div>
                <div>));</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
            <p className="font-semibold text-gray-800">
              💡 Comparator - це Functional Interface з методом compare(). 
              Використовує Generics для типобезпеки та працює з Collections.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "forEach() з Consumer",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">forEach() - ітерація через Consumer</h3>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 mb-3">Базове використання</h4>
            <div className="bg-white p-4 rounded font-mono text-xs">
              <div>List&lt;String&gt; languages = Arrays.asList(</div>
              <div className="ml-4">"Java", "Python", "C++", "JavaScript");</div>
              <div className="mt-3 text-blue-600">{'// Виведення елементів'}</div>
              <div>languages.forEach(lang -&gt; </div>
              <div className="ml-4">System.out.println(lang));</div>
              <div className="mt-3 text-blue-600">{'// З method reference'}</div>
              <div>languages.forEach(System.out::println);</div>
              <div className="mt-3 text-blue-600">{'// З обробкою'}</div>
              <div>languages.forEach(lang -&gt; &#123;</div>
              <div className="ml-4">String upper = lang.toUpperCase();</div>
              <div className="ml-4">System.out.println("Language: " + upper);</div>
              <div>&#125;);</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-bold text-blue-700 mb-3">forEach з Map</h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div>Map&lt;String, Integer&gt; scores = </div>
                <div className="ml-4">new HashMap&lt;&gt;();</div>
                <div>scores.put("Alice", 95);</div>
                <div>scores.put("Bob", 87);</div>
                <div>scores.put("Charlie", 92);</div>
                <div className="mt-3 text-blue-600">{'// BiConsumer для Map'}</div>
                <div>scores.forEach((name, score) -&gt; </div>
                <div className="ml-4">System.out.println(</div>
                <div className="ml-6">name + ": " + score));</div>
                <div className="mt-3 text-blue-600">{'// З умовою'}</div>
                <div>scores.forEach((name, score) -&gt; &#123;</div>
                <div className="ml-4">if (score &gt;= 90) &#123;</div>
                <div className="ml-8">System.out.println(</div>
                <div className="ml-10">name + " - Excellent!");</div>
                <div className="ml-4">&#125;</div>
                <div>&#125;);</div>
              </div>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg">
              <h4 className="font-bold text-purple-700 mb-3">forEach з Set</h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div>Set&lt;Integer&gt; numbers = </div>
                <div className="ml-4">new HashSet&lt;&gt;(Arrays.asList(</div>
                <div className="ml-6">1, 2, 3, 4, 5));</div>
                <div className="mt-3 text-blue-600">{'// Обробка кожного елемента'}</div>
                <div>numbers.forEach(n -&gt; &#123;</div>
                <div className="ml-4">int squared = n * n;</div>
                <div className="ml-4">System.out.println(</div>
                <div className="ml-6">n + " squared = " + squared);</div>
                <div>&#125;);</div>
                <div className="mt-3 text-blue-600">{'// Створення Consumer'}</div>
                <div>Consumer&lt;Integer&gt; printer = </div>
                <div className="ml-4">n -&gt; System.out.println("Value: " + n);</div>
                <div>numbers.forEach(printer);</div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg">
            <h4 className="font-bold text-orange-700 mb-3">Композиція Consumer</h4>
            <div className="bg-white p-4 rounded font-mono text-xs">
              <div>List&lt;String&gt; words = Arrays.asList("hello", "world");</div>
              <div className="mt-2 text-blue-600">{'// Створення окремих Consumer'}</div>
              <div>Consumer&lt;String&gt; printOriginal = </div>
              <div className="ml-4">s -&gt; System.out.print(s);</div>
              <div>Consumer&lt;String&gt; printSeparator = </div>
              <div className="ml-4">s -&gt; System.out.print(" -&gt; ");</div>
              <div>Consumer&lt;String&gt; printUpperCase = </div>
              <div className="ml-4">s -&gt; System.out.println(s.toUpperCase());</div>
              <div className="mt-2 text-blue-600">{'// Композиція через andThen'}</div>
              <div>Consumer&lt;String&gt; combined = printOriginal</div>
              <div className="ml-4">.andThen(printSeparator)</div>
              <div className="ml-4">.andThen(printUpperCase);</div>
              <div className="mt-2">words.forEach(combined);</div>
              <div className="text-gray-500">{'// Виведе: hello -> HELLO'}</div>
              <div className="text-gray-500">{'//         world -> WORLD'}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "removeIf() з Predicate",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">removeIf() - фільтрація через Predicate</h3>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-700 mb-3">Видалення елементів за умовою</h4>
            <div className="bg-white p-4 rounded font-mono text-xs">
              <div>List&lt;Integer&gt; numbers = new ArrayList&lt;&gt;(</div>
              <div className="ml-4">Arrays.asList(1, -2, 3, -4, 5, -6, 7, -8));</div>
              <div className="mt-3 text-blue-600">{'// Видалити негативні числа'}</div>
              <div>numbers.removeIf(n -&gt; n &lt; 0);</div>
              <div>System.out.println(numbers); <span className="text-gray-500">{'// [1, 3, 5, 7]'}</span></div>
              <div className="mt-3 text-blue-600">{'// Видалити парні числа'}</div>
              <div>numbers.removeIf(n -&gt; n % 2 == 0);</div>
              <div className="mt-3 text-blue-600">{'// З method reference'}</div>
              <div>List&lt;String&gt; words = new ArrayList&lt;&gt;(</div>
              <div className="ml-4">Arrays.asList("", "hello", "", "world", ""));</div>
              <div>words.removeIf(String::isEmpty);</div>
              <div>System.out.println(words); <span className="text-gray-500">{'// [hello, world]'}</span></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-bold text-blue-700 mb-3">Складні умови</h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div>List&lt;User&gt; users = getUserList();</div>
                <div className="mt-3 text-blue-600">{'// Створення predicates'}</div>
                <div>Predicate&lt;User&gt; isInactive = </div>
                <div className="ml-4">u -&gt; !u.isActive();</div>
                <div>Predicate&lt;User&gt; isOld = </div>
                <div className="ml-4">u -&gt; u.getAge() &gt; 65;</div>
                <div>Predicate&lt;User&gt; hasNoEmail = </div>
                <div className="ml-4">u -&gt; u.getEmail() == null || </div>
                <div className="ml-8">u.getEmail().isEmpty();</div>
                <div className="mt-3 text-blue-600">{'// Комбінування умов'}</div>
                <div>users.removeIf(</div>
                <div className="ml-4">isInactive.and(isOld)</div>
                <div>);</div>
                <div className="mt-3 text-blue-600">{'// Або видалити за кількома умовами'}</div>
                <div>users.removeIf(</div>
                <div className="ml-4">isInactive.or(hasNoEmail)</div>
                <div>);</div>
              </div>
            </div>

            <div className="bg-green-50 p-5 rounded-lg">
              <h4 className="font-bold text-green-700 mb-3">Predicate як параметр</h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div>public class UserService &#123;</div>
                <div className="ml-4">public void cleanupUsers(</div>
                <div className="ml-8">List&lt;User&gt; users,</div>
                <div className="ml-8">Predicate&lt;User&gt; condition) &#123;</div>
                <div className="ml-12">users.removeIf(condition);</div>
                <div className="ml-4">&#125;</div>
                <div>&#125;</div>
                <div className="mt-3 text-blue-600">{'// Використання'}</div>
                <div>UserService service = new UserService();</div>
                <div>List&lt;User&gt; users = getUserList();</div>
                <div className="mt-2 text-blue-600">{'// Видалити неактивних'}</div>
                <div>service.cleanupUsers(users, </div>
                <div className="ml-4">u -&gt; !u.isActive());</div>
                <div className="mt-2 text-blue-600">{'// Видалити без підписки'}</div>
                <div>service.cleanupUsers(users, </div>
                <div className="ml-4">u -&gt; !u.hasSubscription());</div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <h4 className="font-bold text-purple-700 mb-3">Практичний приклад: очистка даних</h4>
            <div className="bg-white p-4 rounded font-mono text-xs">
              <div>class DataCleaner &#123;</div>
              <div className="ml-4">public static void cleanData(</div>
              <div className="ml-8">List&lt;String&gt; data) &#123;</div>
              <div className="ml-12 text-blue-600">{'// Видалити null'}</div>
              <div className="ml-12">data.removeIf(s -&gt; s == null);</div>
              <div className="ml-12 text-blue-600">{'// Видалити порожні'}</div>
              <div className="ml-12">data.removeIf(String::isEmpty);</div>
              <div className="ml-12 text-blue-600">{'// Видалити пробіли'}</div>
              <div className="ml-12">data.removeIf(s -&gt; s.trim().isEmpty());</div>
              <div className="ml-12 text-blue-600">{'// Видалити дублікати (залишити унікальні)'}</div>
              <div className="ml-12">Set&lt;String&gt; seen = new HashSet&lt;&gt;();</div>
              <div className="ml-12">data.removeIf(s -&gt; !seen.add(s));</div>
              <div className="ml-4">&#125;</div>
              <div>&#125;</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "replaceAll() з UnaryOperator",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">replaceAll() - трансформація через UnaryOperator</h3>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700 mb-3">Базове використання</h4>
            <div className="bg-white p-4 rounded font-mono text-xs">
              <div>List&lt;String&gt; words = new ArrayList&lt;&gt;(</div>
              <div className="ml-4">Arrays.asList("java", "python", "javascript"));</div>
              <div className="mt-3 text-blue-600">{'// Перетворити в uppercase'}</div>
              <div>words.replaceAll(s -&gt; s.toUpperCase());</div>
              <div>words.replaceAll(String::toUpperCase);</div>
              <div>System.out.println(words);</div>
              <div className="text-gray-500">{'// [JAVA, PYTHON, JAVASCRIPT]'}</div>
              <div className="mt-3 text-blue-600">{'// Додати префікс'}</div>
              <div>words.replaceAll(s -&gt; "Language: " + s);</div>
              <div className="mt-3 text-blue-600">{'// Обрізати пробіли'}</div>
              <div>words.replaceAll(String::trim);</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-bold text-blue-700 mb-3">Математичні операції</h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div>List&lt;Integer&gt; numbers = </div>
                <div className="ml-4">new ArrayList&lt;&gt;(Arrays.asList(</div>
                <div className="ml-6">1, 2, 3, 4, 5));</div>
                <div className="mt-3 text-blue-600">{'// Піднести до квадрату'}</div>
                <div>numbers.replaceAll(n -&gt; n * n);</div>
                <div className="text-gray-500">{'// [1, 4, 9, 16, 25]'}</div>
                <div className="mt-3 text-blue-600">{'// Помножити на 10'}</div>
                <div>numbers.replaceAll(n -&gt; n * 10);</div>
                <div className="mt-3 text-blue-600">{'// Створення UnaryOperator'}</div>
                <div>UnaryOperator&lt;Integer&gt; addTen = </div>
                <div className="ml-4">n -&gt; n + 10;</div>
                <div>numbers.replaceAll(addTen);</div>
                <div className="mt-3 text-blue-600">{'// Композиція операторів'}</div>
                <div>UnaryOperator&lt;Integer&gt; double = </div>
                <div className="ml-4">n -&gt; n * 2;</div>
                <div>numbers.replaceAll(</div>
                <div className="ml-4">addTen.andThen(doubleIt));</div>
              </div>
            </div>

            <div className="bg-green-50 p-5 rounded-lg">
              <h4 className="font-bold text-green-700 mb-3">Обробка об'єктів</h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div>List&lt;User&gt; users = getUserList();</div>
                <div className="mt-3 text-blue-600">{'// Оновити статус всіх'}</div>
                <div>users.replaceAll(user -&gt; &#123;</div>
                <div className="ml-4">user.setStatus("VERIFIED");</div>
                <div className="ml-4">return user;</div>
                <div>&#125;);</div>
                <div className="mt-3 text-blue-600">{'// Додати роки до віку'}</div>
                <div>users.replaceAll(user -&gt; &#123;</div>
                <div className="ml-4">user.setAge(user.getAge() + 1);</div>
                <div className="ml-4">return user;</div>
                <div>&#125;);</div>
                <div className="mt-3 text-blue-600">{'// Нормалізувати імена'}</div>
                <div>users.replaceAll(user -&gt; &#123;</div>
                <div className="ml-4">String normalized = user.getName()</div>
                <div className="ml-8">.trim()</div>
                <div className="ml-8">.toLowerCase();</div>
                <div className="ml-4">user.setName(normalized);</div>
                <div className="ml-4">return user;</div>
                <div>&#125;);</div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg">
            <h4 className="font-bold text-orange-700 mb-3">Практичний приклад: нормалізація даних</h4>
            <div className="bg-white p-4 rounded font-mono text-xs">
              <div>class DataNormalizer &#123;</div>
              <div className="ml-4">public static void normalizeEmails(</div>
              <div className="ml-8">List&lt;String&gt; emails) &#123;</div>
              <div className="ml-12 text-blue-600">{'// Всі операції разом'}</div>
              <div className="ml-12">emails.replaceAll(email -&gt; email</div>
              <div className="ml-16">.trim() <span className="text-gray-500">{'// Прибрати пробіли'}</span></div>
              <div className="ml-16">.toLowerCase() <span className="text-gray-500">{'// Lowercase'}</span></div>
              <div className="ml-16">.replaceAll("\\s+", "") <span className="text-gray-500">{'// Видалити пробіли'}</span></div>
              <div className="ml-12">);</div>
              <div className="ml-4">&#125;</div>
              <div className="mt-2 ml-4">public static void formatPhones(</div>
              <div className="ml-8">List&lt;String&gt; phones) &#123;</div>
              <div className="ml-12">phones.replaceAll(phone -&gt;</div>
              <div className="ml-16">phone.replaceAll("[^0-9]", "")</div>
              <div className="ml-12">);</div>
              <div className="ml-4">&#125;</div>
              <div>&#125;</div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
            <p className="font-semibold text-gray-800">
              💡 UnaryOperator&lt;T&gt; - спеціалізація Function&lt;T,T&gt;. 
              Використовується коли вхід і вихід одного типу.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Власні generic колекції з FI",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">Створення власних generic класів</h3>
          </div>
    
          <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
            <h4 className="font-bold text-indigo-700 mb-3">Приклад 1: Generic Repository з Functional Interface</h4>
            <div className="bg-white p-4 rounded font-mono text-xs">
              <div>public class Repository&lt;T&gt; &#123;</div>
              <div className="ml-4">private List&lt;T&gt; items = new ArrayList&lt;&gt;();</div>
              
              <div className="mt-2 ml-4 text-blue-600">{'// Додавання елемента'}</div>
              <div className="ml-4">public void add(T item) &#123;</div>
              <div className="ml-8">items.add(item);</div>
              <div className="ml-4">&#125;</div>
              
              <div className="mt-2 ml-4 text-blue-600">{'// Фільтрація через Predicate'}</div>
              <div className="ml-4">public List&lt;T&gt; findAll(Predicate&lt;T&gt; condition) &#123;</div>
              <div className="ml-8">List&lt;T&gt; result = new ArrayList&lt;&gt;();</div>
              <div className="ml-8">for (T item : items) &#123;</div>
              <div className="ml-12">if (condition.test(item)) &#123;</div>
              <div className="ml-16">result.add(item);</div>
              <div className="ml-12">&#125;</div>
              <div className="ml-8">&#125;</div>
              <div className="ml-8">return result;</div>
              <div className="ml-4">&#125;</div>
              
              <div className="mt-2 ml-4 text-gray-400">{'// Версія з Stream API (вивчимо пізніше):'}</div>
              <div className="ml-4 text-gray-400">{'// return items.stream().filter(condition).toList();'}</div>
              
              <div className="mt-2 ml-4 text-blue-600">{'// Обробка кожного через Consumer'}</div>
              <div className="ml-4">public void forEach(Consumer&lt;T&gt; action) &#123;</div>
              <div className="ml-8">for (T item : items) &#123;</div>
              <div className="ml-12">action.accept(item);</div>
              <div className="ml-8">&#125;</div>
              <div className="ml-4">&#125;</div>
              
              <div className="mt-2 ml-4 text-blue-600">{'// Трансформація через Function'}</div>
              <div className="ml-4">public &lt;R&gt; List&lt;R&gt; map(Function&lt;T, R&gt; mapper) &#123;</div>
              <div className="ml-8">List&lt;R&gt; result = new ArrayList&lt;&gt;();</div>
              <div className="ml-8">for (T item : items) &#123;</div>
              <div className="ml-12">result.add(mapper.apply(item));</div>
              <div className="ml-8">&#125;</div>
              <div className="ml-8">return result;</div>
              <div className="ml-4">&#125;</div>
              <div>&#125;</div>
            </div>
          </div>
    
          <div className="bg-green-50 p-5 rounded-lg">
            <h4 className="font-bold text-green-700 mb-3">Використання Repository</h4>
            <div className="bg-white p-4 rounded font-mono text-xs">
              <div>Repository&lt;User&gt; userRepo = new Repository&lt;&gt;();</div>
              <div>userRepo.add(new User("Alice", 25));</div>
              <div>userRepo.add(new User("Bob", 30));</div>
              <div>userRepo.add(new User("Charlie", 20));</div>
              
              <div className="mt-3 text-blue-600">{'// Знайти користувачів старше 22'}</div>
              <div>List&lt;User&gt; adults = userRepo.findAll(</div>
              <div className="ml-4">u -&gt; u.getAge() &gt; 22</div>
              <div>);</div>
              
              <div className="mt-3 text-blue-600">{'// Вивести всіх користувачів'}</div>
              <div>userRepo.forEach(</div>
              <div className="ml-4">u -&gt; System.out.println(u.getName())</div>
              <div>);</div>
              
              <div className="mt-3 text-blue-600">{'// Отримати список імен'}</div>
              <div>List&lt;String&gt; names = userRepo.map(User::getName);</div>
            </div>
          </div>
    
          <div className="bg-teal-50 p-5 rounded-lg border-l-4 border-teal-500">
            <h4 className="font-bold text-teal-700 mb-3">Приклад 2: Спеціалізований UserRepository</h4>
            <div className="bg-white p-4 rounded font-mono text-xs">
              <div>public class UserRepository extends Repository&lt;User&gt; &#123;</div>
              
              <div className="mt-2 ml-4 text-blue-600">{'// Знайти користувачів старше певного віку'}</div>
              <div className="ml-4">public List&lt;User&gt; getOlderThan(int age) &#123;</div>
              <div className="ml-8">return findAll(u -&gt; u.getAge() &gt; age);</div>
              <div className="ml-4">&#125;</div>
              
              <div className="mt-2 ml-4 text-blue-600">{'// Знайти за іменем'}</div>
              <div className="ml-4">public User findByName(String name) &#123;</div>
              <div className="ml-8">List&lt;User&gt; found = findAll(</div>
              <div className="ml-12">u -&gt; u.getName().equals(name)</div>
              <div className="ml-8">);</div>
              <div className="ml-8">return found.isEmpty() ? null : found.get(0);</div>
              <div className="ml-4">&#125;</div>
              
              <div className="mt-2 ml-4 text-blue-600">{'// Отримати всіх дорослих (18+)'}</div>
              <div className="ml-4">public List&lt;User&gt; getAdults() &#123;</div>
              <div className="ml-8">return findAll(u -&gt; u.getAge() &gt;= 18);</div>
              <div className="ml-4">&#125;</div>
              
              <div className="mt-2 ml-4 text-blue-600">{'// Підрахувати користувачів за умовою'}</div>
              <div className="ml-4">public int countWhere(Predicate&lt;User&gt; condition) &#123;</div>
              <div className="ml-8">return findAll(condition).size();</div>
              <div className="ml-4">&#125;</div>
              <div>&#125;</div>
              
              <div className="mt-4 text-blue-600">{'// Використання:'}</div>
              <div>UserRepository userRepo = new UserRepository();</div>
              <div>userRepo.add(new User("Alice", 25));</div>
              <div>userRepo.add(new User("Bob", 17));</div>
              <div>userRepo.add(new User("Charlie", 30));</div>
              <div className="mt-2">List&lt;User&gt; adults = userRepo.getAdults();</div>
              <div>User alice = userRepo.findByName("Alice");</div>
              <div>int count = userRepo.countWhere(u -&gt; u.getAge() &gt; 20);</div>
            </div>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-bold text-blue-700 mb-3">Приклад 3: Validator</h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div>public class Validator&lt;T&gt; &#123;</div>
                <div className="ml-4">private List&lt;Predicate&lt;T&gt;&gt; rules = </div>
                <div className="ml-8">new ArrayList&lt;&gt;();</div>
                
                <div className="mt-2 ml-4 text-blue-600">{'// Додати правило'}</div>
                <div className="ml-4">public Validator&lt;T&gt; addRule(</div>
                <div className="ml-8">Predicate&lt;T&gt; rule) &#123;</div>
                <div className="ml-12">rules.add(rule);</div>
                <div className="ml-12">return this;</div>
                <div className="ml-4">&#125;</div>
                
                <div className="mt-2 ml-4 text-blue-600">{'// Валідація'}</div>
                <div className="ml-4">public boolean validate(T item) &#123;</div>
                <div className="ml-8">for (Predicate&lt;T&gt; rule : rules) &#123;</div>
                <div className="ml-12">if (!rule.test(item)) &#123;</div>
                <div className="ml-16">return false;</div>
                <div className="ml-12">&#125;</div>
                <div className="ml-8">&#125;</div>
                <div className="ml-8">return true;</div>
                <div className="ml-4">&#125;</div>
                
                <div className="mt-2 ml-4 text-gray-400">{'// Версія з Stream API:'}</div>
                <div className="ml-4 text-gray-400">{'// return rules.stream()'}</div>
                <div className="ml-4 text-gray-400">{'//.allMatch(rule -> rule.test(item));'}</div>
                <div>&#125;</div>
              </div>
            </div>
    
            <div className="bg-purple-50 p-5 rounded-lg">
              <h4 className="font-bold text-purple-700 mb-3">Використання Validator</h4>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <div>Validator&lt;User&gt; userValidator = </div>
                <div className="ml-4">new Validator&lt;&gt;()</div>
                <div className="ml-8">.addRule(u -&gt; u.getAge() &gt;= 18)</div>
                <div className="ml-8">.addRule(u -&gt; u.getEmail() != null)</div>
                <div className="ml-8">.addRule(u -&gt; </div>
                <div className="ml-12">u.getName().length() &gt; 2);</div>
                
                <div className="mt-3">User user = new User("Alice", 25, </div>
                <div className="ml-4">"alice@example.com");</div>
                
                <div className="mt-2">boolean isValid = </div>
                <div className="ml-4">userValidator.validate(user);</div>
                <div>System.out.println(isValid);</div>
                <div className="text-gray-500">{'// true'}</div>
                
                <div className="mt-3">User youngUser = </div>
                <div className="ml-4">new User("Bob", 16, "bob@test.com");</div>
                <div>System.out.println(</div>
                <div className="ml-4">userValidator.validate(youngUser));</div>
                <div className="text-gray-500">{'// false - вік < 18'}</div>
              </div>
            </div>
          </div>
    
          <div className="bg-orange-50 p-5 rounded-lg">
            <h4 className="font-bold text-orange-700 mb-3">Приклад 4: Generic Pipeline</h4>
            <div className="bg-white p-4 rounded font-mono text-xs">
              <div>public class Pipeline&lt;T&gt; &#123;</div>
              <div className="ml-4">private List&lt;Function&lt;T, T&gt;&gt; operations = </div>
              <div className="ml-8">new ArrayList&lt;&gt;();</div>
              
              <div className="mt-2 ml-4">public Pipeline&lt;T&gt; add(Function&lt;T, T&gt; operation) &#123;</div>
              <div className="ml-8">operations.add(operation);</div>
              <div className="ml-8">return this;</div>
              <div className="ml-4">&#125;</div>
              
              <div className="mt-2 ml-4">public T execute(T input) &#123;</div>
              <div className="ml-8">T result = input;</div>
              <div className="ml-8">for (Function&lt;T, T&gt; op : operations) &#123;</div>
              <div className="ml-12">result = op.apply(result);</div>
              <div className="ml-8">&#125;</div>
              <div className="ml-8">return result;</div>
              <div className="ml-4">&#125;</div>
              <div>&#125;</div>
              
              <div className="mt-3 text-blue-600">{'// Використання'}</div>
              <div>Pipeline&lt;String&gt; textPipeline = new Pipeline&lt;&gt;()</div>
              <div className="ml-4">.add(String::trim)</div>
              <div className="ml-4">.add(String::toLowerCase)</div>
              <div className="ml-4">.add(s -&gt; s.replaceAll("\\\\s+", " "));</div>
              
              <div className="mt-2">String result = </div>
              <div className="ml-4">textPipeline.execute("  Hello   World  ");</div>
              <div>System.out.println(result);</div>
              <div className="text-gray-500">{'// "hello world"'}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Підсумок: Інтеграція",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Все разом!</h3>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-3">Generics</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ List&lt;T&gt;</li>
                <li>✓ Repository&lt;T&gt;</li>
                <li>✓ Function&lt;T,R&gt;</li>
                <li>✓ Predicate&lt;T&gt;</li>
                <li>✓ Типобезпека</li>
              </ul>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3">Collections</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ List, Set, Map</li>
                <li>✓ ArrayList, HashSet</li>
                <li>✓ forEach()</li>
                <li>✓ removeIf()</li>
                <li>✓ replaceAll()</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 mb-3">Functional Interface</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Consumer</li>
                <li>✓ Predicate</li>
                <li>✓ Function</li>
                <li>✓ UnaryOperator</li>
                <li>✓ Comparator</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-400">
            <h4 className="font-bold text-yellow-700 mb-3">Основні патерни використання</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div>🔸 <strong>Сортування:</strong> list.sort(Comparator.comparing(...))</div>
              <div>🔸 <strong>Ітерація:</strong> collection.forEach(item -&gt; ...)</div>
              <div>🔸 <strong>Фільтрація:</strong> collection.removeIf(condition)</div>
              <div>🔸 <strong>Трансформація:</strong> list.replaceAll(transformer)</div>
              <div>🔸 <strong>Валідація:</strong> validator.addRule(predicate)</div>
              <div>🔸 <strong>Обробка:</strong> repository.forEach(consumer)</div>
            </div>
          </div>

          <div className="bg-indigo-50 p-5 rounded-lg">
            <h4 className="font-bold text-indigo-700 mb-3">Чому це важливо?</h4>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Код стає коротшим та виразнішим</li>
              <li>✅ Менше помилок завдяки типобезпеці</li>
              <li>✅ Легше читати та підтримувати</li>
              <li>✅ Функціональний підхід до обробки даних</li>
              <li>✅ Підготовка до Stream API</li>
            </ul>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
            <p className="text-xl font-bold text-gray-800 mb-2">
              Generics + Collections + Functional Interface =
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Сучасний Java код! 🚀
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-12 min-h-[700px] flex flex-col">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{slides[currentSlide].title}</h1>
            {slides[currentSlide].subtitle && (
              <p className="text-lg text-gray-600">{slides[currentSlide].subtitle}</p>
            )}
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded mt-3"></div>
          </div>

          <div className="flex-grow overflow-y-auto">
            {slides[currentSlide].content}
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
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
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
                  title={`Слайд ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
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

export default IntegrationPresentation;
