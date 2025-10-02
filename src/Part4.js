import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Code, ArrowRight } from 'lucide-react';

const FunctionalPresentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Functional Interface",
            subtitle: "Функціональне програмування в Java",
            content: (
                <div className="space-y-8">
                    <div className="text-center">
                        <div className="text-6xl mb-4">⚡</div>
                        <h2 className="text-4xl font-bold text-purple-600 mb-4">Functional Interface</h2>
                        <p className="text-xl text-gray-600">Lambda-вирази та функціональний підхід</p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                        <p className="text-lg text-gray-700">
                            <strong>Functional Interface</strong> - це інтерфейс з ОДНИМ абстрактним методом (SAM - Single Abstract Method).
                            Дозволяє використовувати lambda-вирази та method references.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <Code className="mx-auto mb-2 text-blue-600" size={32} />
                            <p className="font-semibold">Lambda-вирази</p>
                            <p className="text-sm text-gray-600">Компактний синтаксис</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg text-center">
                            <ArrowRight className="mx-auto mb-2 text-green-600" size={32} />
                            <p className="font-semibold">Method References</p>
                            <p className="text-sm text-gray-600">Ще коротше</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Що таке Functional Interface?",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">
                        <h3 className="text-2xl font-bold">Визначення</h3>
                    </div>

                    <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                        <h4 className="font-bold text-purple-700 mb-3">Правила Functional Interface</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li>✓ ОДИН абстрактний метод (Single Abstract Method)</li>
                            <li>✓ Може мати default методи (будь-яка кількість)</li>
                            <li>✓ Може мати static методи (будь-яка кількість)</li>
                            <li>✓ Може мати методи з Object (equals, toString, hashCode)</li>
                            <li>✓ Рекомендується анотація @FunctionalInterface</li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                            <h4 className="font-bold text-green-700 mb-3">Приклад власного FI</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div>@FunctionalInterface</div>
                                <div>public interface Calculator &#123;</div>
                                <div className="ml-4">int calculate(int a, int b);</div>
                                <div>&#125;</div>
                            </div>
                        </div>

                        <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                            <h4 className="font-bold text-red-700 mb-3">НЕ Functional Interface</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-red-600">{'// Два методи - помилка!'}</div>
                                <div>@FunctionalInterface</div>
                                <div>public interface Wrong&#123;</div>
                                <div className="ml-4">int method1();</div>
                                <div className="ml-4">int method2();</div>
                                <div>&#125;</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
                        <p className="font-semibold text-gray-800">
                            💡 @FunctionalInterface - необов'язкова, але рекомендована анотація.
                            Вона гарантує, що інтерфейс залишиться функціональним.
                        </p>
                    </div>
                </div>
            )
        },
        {
            title: "Lambda-вирази: Синтаксис",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-lg">
                        <h3 className="text-2xl font-bold">Lambda: (параметри) -&gt; тіло</h3>
                    </div>

                    <div className="bg-blue-50 p-5 rounded-lg">
                        <h4 className="font-bold text-blue-700 mb-3">Базовий синтаксис</h4>
                        <div className="bg-white p-4 rounded text-sm space-y-2">
                            <div className="text-blue-600">{'// Без параметрів'}</div>
                            <div className="font-mono">() -&gt; System.out.println("Hello")</div>
                            <div className="mt-3 text-blue-600">{'// Один параметр'}</div>
                            <div className="font-mono">x -&gt; x * x</div>
                            <div className="mt-3 text-blue-600">{'// Кілька параметрів'}</div>
                            <div className="font-mono">(x, y) -&gt; x + y</div>
                            <div className="mt-3 text-blue-600">{'// Блок коду'}</div>
                            <div className="font-mono">(x, y) -&gt; return x + y;</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
                            <h4 className="font-bold text-orange-700 mb-3">До Lambda (Java 7)</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div>List&lt;String&gt; list = ...</div>
                                <div className="mt-2">list.forEach(new Consumer() )</div>
                                <div className="mt-2 text-red-600">{'// 7 рядків коду!'}</div>
                            </div>
                        </div>

                        <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                            <h4 className="font-bold text-green-700 mb-3">З Lambda (Java 8+)</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div>List&lt;String&gt; list = ...</div>
                                <div className="mt-2">list.forEach(s -&gt; println(s));</div>
                                <div className="mt-2">list.forEach(System.out::println);</div>
                                <div className="mt-2 text-green-600">{'// Всього 1 рядок!'}</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-5 rounded-lg">
                        <h4 className="font-bold text-purple-700 mb-3">Приклади використання</h4>
                        <div className="bg-white p-4 rounded font-mono text-xs space-y-2">
                            <div className="text-blue-600">{'// Сортування'}</div>
                            <div>names.sort((a, b) -&gt; a.compareTo(b));</div>
                            <div className="mt-3 text-blue-600">{'// Runnable'}</div>
                            <div>new Thread(() -&gt; println("Hello")).start();</div>
                            <div className="mt-3 text-blue-600">{'// Власний FI'}</div>
                            <div>Calculator add = (a, b) -&gt; a + b;</div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Вбудовані Functional Interface",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-lg">
                        <h3 className="text-2xl font-bold">java.util.function</h3>
                        <p className="text-sm mt-1">Стандартні функціональні інтерфейси</p>
                    </div>

                    <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
                        <h4 className="font-bold text-indigo-700 mb-3">Основні категорії</h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="bg-white p-3 rounded">
                                <strong className="text-indigo-600">Consumer&lt;T&gt;</strong>
                                <div className="text-gray-600">Приймає T, нічого не повертає</div>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <strong className="text-green-600">Supplier&lt;T&gt;</strong>
                                <div className="text-gray-600">Не приймає, повертає T</div>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <strong className="text-blue-600">Function&lt;T,R&gt;</strong>
                                <div className="text-gray-600">Приймає T, повертає R</div>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <strong className="text-purple-600">Predicate&lt;T&gt;</strong>
                                <div className="text-gray-600">Приймає T, повертає boolean</div>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <strong className="text-orange-600">UnaryOperator&lt;T&gt;</strong>
                                <div className="text-gray-600">Приймає T, повертає T</div>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <strong className="text-red-600">BinaryOperator&lt;T&gt;</strong>
                                <div className="text-gray-600">Приймає 2×T, повертає T</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
                        <h4 className="font-bold text-yellow-700 mb-2">Схема вибору інтерфейсу</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                            <div>🔸 Потрібно ПРИЙНЯТИ значення? → <strong>Consumer</strong></div>
                            <div>🔸 Потрібно СТВОРИТИ значення? → <strong>Supplier</strong></div>
                            <div>🔸 Потрібно ПЕРЕТВОРИТИ тип? → <strong>Function</strong></div>
                            <div>🔸 Потрібно ПЕРЕВІРИТИ умову? → <strong>Predicate</strong></div>
                            <div>🔸 Потрібно ОПЕРАЦІЯ над значенням? → <strong>UnaryOperator</strong></div>
                            <div>🔸 Потрібно ОПЕРАЦІЯ над двома? → <strong>BinaryOperator</strong></div>
                        </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold text-green-700 mb-2">Варіанти з двома параметрами</h4>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="bg-white p-2 rounded">BiConsumer&lt;T,U&gt;</div>
                            <div className="bg-white p-2 rounded">BiFunction&lt;T,U,R&gt;</div>
                            <div className="bg-white p-2 rounded">BiPredicate&lt;T,U&gt;</div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Consumer T",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-lg">
                        <h3 className="text-2xl font-bold">Consumer T</h3>
                        <p className="text-sm mt-1">Споживає (приймає) значення, нічого не повертає</p>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-bold text-green-700 mb-3">Визначення</h4>
                        <div className="bg-white p-4 rounded font-mono text-sm">
                            <div>@FunctionalInterface</div>
                            <div>public interface Consumer T</div>
                            <div className="ml-4">void accept(T t);</div>
                            <div className="mt-2 ml-4 text-gray-500">{'// Метод для ланцюжка'}</div>
                            <div className="ml-4">default Consumer andThen(...)</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-5 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-3">Базове використання</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// Виведення в консоль'}</div>
                                <div>Consumer String printer = </div>
                                <div className="ml-4">s -&gt; System.out.println(s);</div>
                                <div>printer.accept("Hello");</div>
                                <div className="mt-3 text-blue-600">{'// Method reference'}</div>
                                <div>Consumer String printer2 = </div>
                                <div className="ml-4">System.out::println;</div>
                                <div className="mt-3 text-blue-600">{'// З forEach'}</div>
                                <div>List String list = ...</div>
                                <div>list.forEach(System.out::println);</div>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-5 rounded-lg">
                            <h4 className="font-bold text-purple-700 mb-3">Ланцюжок Consumer</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// Композиція через andThen'}</div>
                                <div>Consumer String c1 = </div>
                                <div className="ml-4">s -&gt; System.out.print(s);</div>
                                <div>Consumer String c2 = </div>
                                <div className="ml-4">s -&gt; System.out.print(" - ");</div>
                                <div>Consumer String c3 = </div>
                                <div className="ml-4">s -&gt; System.out.println(s.length());</div>
                                <div className="mt-2">Consumer String chain = </div>
                                <div className="ml-4">c1.andThen(c2).andThen(c3);</div>
                                <div className="mt-2">chain.accept("Hello");</div>
                                <div className="text-gray-500">{'// Виведе: Hello - 5'}</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-50 p-5 rounded-lg">
                        <h4 className="font-bold text-orange-700 mb-3">BiConsumer T,U - два параметри</h4>
                        <div className="bg-white p-4 rounded font-mono text-xs">
                            <div className="text-blue-600">{'// Приймає два параметри'}</div>
                            <div>BiConsumer String, Integer printer = </div>
                            <div className="ml-4">(name, age) -&gt; println(name + " is " + age);</div>
                            <div>printer.accept("John", 25);</div>
                            <div className="mt-3 text-blue-600">{'// Використання з Map'}</div>
                            <div>Map String, Integer map = ...</div>
                            <div>map.forEach((lang, year) -&gt; </div>
                            <div className="ml-4">println(lang + ": " + year));</div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
                        <p className="font-semibold text-gray-800">
                            💡 Consumer використовується коли потрібно виконати дію над даними без повернення результату
                        </p>
                    </div>
                </div>
            )
        },
        {
            title: "Supplier T",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-lg">
                        <h3 className="text-2xl font-bold">Supplier T</h3>
                        <p className="text-sm mt-1">Постачає (створює) значення, нічого не приймає</p>
                    </div>

                    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-bold text-blue-700 mb-3">Визначення</h4>
                        <div className="bg-white p-4 rounded font-mono text-sm">
                            <div>@FunctionalInterface</div>
                            <div>public interface Supplier T</div>
                            <div className="ml-4">T get();</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-5 rounded-lg">
                            <h4 className="font-bold text-green-700 mb-3">Базове використання</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// Генерація значень'}</div>
                                <div>Supplier Double randomSupplier = </div>
                                <div className="ml-4">() -&gt; Math.random();</div>
                                <div>Double value = randomSupplier.get();</div>
                                <div className="mt-3 text-blue-600">{'// Постачання об\'єктів'}</div>
                                <div>Supplier String stringSupplier = </div>
                                <div className="ml-4">() -&gt; "Hello World";</div>
                                <div className="mt-3 text-blue-600">{'// Method reference'}</div>
                                <div>Supplier List listSupplier = </div>
                                <div className="ml-4">ArrayList::new;</div>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-5 rounded-lg">
                            <h4 className="font-bold text-purple-700 mb-3">Lazy обчислення</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// Відкладені обчислення'}</div>
                                <div>public String expensiveOperation()</div>
                                <div className="ml-4">System.out.println("Expensive!");</div>
                                <div className="ml-4">return "Result";</div>
                                <div className="mt-2 text-blue-600">{'// Без Supplier - завжди'}</div>
                                <div>logger.log(expensiveOperation());</div>
                                <div className="mt-2 text-blue-600">{'// З Supplier - тільки якщо потрібно'}</div>
                                <div>logger.log(() -&gt; expensiveOperation());</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-50 p-5 rounded-lg">
                        <h4 className="font-bold text-orange-700 mb-3">Практичні приклади</h4>
                        <div className="bg-white p-4 rounded font-mono text-xs">
                            <div className="text-blue-600">{'// Factory pattern'}</div>
                            <div>class UserFactory</div>
                            <div className="ml-4">public static Supplier User adminSupplier = </div>
                            <div className="ml-8">() -&gt; new User("admin", Role.ADMIN);</div>
                            <div className="mt-2">User admin = UserFactory.adminSupplier.get();</div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
                        <p className="font-semibold text-gray-800">
                            💡 Supplier - для створення/генерації значень без вхідних параметрів. Ідеально для factory методів.
                        </p>
                    </div>
                </div>
            )
        },
        {
            title: "Function T,R",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">
                        <h3 className="text-2xl font-bold">Function T,R</h3>
                        <p className="text-sm mt-1">Приймає T, повертає R - перетворення типів</p>
                    </div>

                    <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                        <h4 className="font-bold text-purple-700 mb-3">Визначення</h4>
                        <div className="bg-white p-4 rounded font-mono text-sm">
                            <div>@FunctionalInterface</div>
                            <div>public interface Function T, R</div>
                            <div className="ml-4">R apply(T t);</div>
                            <div className="mt-2 ml-4 text-gray-500">{'// Композиція функцій'}</div>
                            <div className="ml-4">default Function andThen(...)</div>
                            <div className="ml-4">default Function compose(...)</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-5 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-3">Базове використання</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// String -&gt; Integer'}</div>
                                <div>Function String, Integer strLength = </div>
                                <div className="ml-4">s -&gt; s.length();</div>
                                <div>Function String, Integer strLength2 = </div>
                                <div className="ml-4">String::length;</div>
                                <div>Integer len = strLength.apply("Hello");</div>
                                <div className="text-gray-500">{'// 5'}</div>
                                <div className="mt-3 text-blue-600">{'// Integer -&gt; String'}</div>
                                <div>Function Integer, String intToStr = </div>
                                <div className="ml-4">i -&gt; "Number: " + i;</div>
                            </div>
                        </div>

                        <div className="bg-green-50 p-5 rounded-lg">
                            <h4 className="font-bold text-green-700 mb-3">Композиція функцій</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// andThen: f.andThen(g) = g(f(x))'}</div>
                                <div>Function Integer, Integer multiplyBy2 = </div>
                                <div className="ml-4">x -&gt; x * 2;</div>
                                <div>Function Integer, Integer add3 = </div>
                                <div className="ml-4">x -&gt; x + 3;</div>
                                <div className="mt-2">Function Integer, Integer combined = </div>
                                <div className="ml-4">multiplyBy2.andThen(add3);</div>
                                <div>combined.apply(5);</div>
                                <div className="text-gray-500">{'// (5*2)+3 = 13'}</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-50 p-5 rounded-lg">
                        <h4 className="font-bold text-orange-700 mb-3">BiFunction T,U,R - два параметри</h4>
                        <div className="bg-white p-4 rounded font-mono text-xs">
                            <div className="text-blue-600">{'// Приймає два параметри, повертає результат'}</div>
                            <div>BiFunction Integer, Integer, Integer add = </div>
                            <div className="ml-4">(a, b) -&gt; a + b;</div>
                            <div>Integer sum = add.apply(5, 3);</div>
                            <div className="text-gray-500">{'// 8'}</div>
                        </div>
                    </div>

                    <div className="bg-indigo-50 p-5 rounded-lg">
                        <h4 className="font-bold text-indigo-700 mb-3">UnaryOperator T та BinaryOperator T</h4>
                        <div className="bg-white p-4 rounded font-mono text-xs">
                            <div className="text-blue-600">{'// UnaryOperator: T -&gt; T'}</div>
                            <div>UnaryOperator Integer square = x -&gt; x * x;</div>
                            <div>Integer result = square.apply(5);</div>
                            <div className="text-gray-500">{'// 25'}</div>
                            <div className="mt-3 text-blue-600">{'// BinaryOperator: (T,T) -&gt; T'}</div>
                            <div>BinaryOperator Integer max = </div>
                            <div className="ml-4">(a, b) -&gt; a &gt; b ? a : b;</div>
                            <div>Integer maxVal = max.apply(10, 20);</div>
                            <div className="text-gray-500">{'// 20'}</div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
                        <p className="font-semibold text-gray-800">
                            💡 Function - для трансформації даних. UnaryOperator/BinaryOperator - коли вхід і вихід одного типу.
                        </p>
                    </div>
                </div>
            )
        },
        {
            title: "Predicate T",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg">
                        <h3 className="text-2xl font-bold">Predicate T</h3>
                        <p className="text-sm mt-1">Приймає T, повертає boolean - умови та фільтрація</p>
                    </div>

                    <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
                        <h4 className="font-bold text-orange-700 mb-3">Визначення</h4>
                        <div className="bg-white p-4 rounded font-mono text-sm">
                            <div>@FunctionalInterface</div>
                            <div>public interface Predicate T</div>
                            <div className="ml-4">boolean test(T t);</div>
                            <div className="mt-2 ml-4 text-gray-500">{'// Логічні операції'}</div>
                            <div className="ml-4">default Predicate and(...)</div>
                            <div className="ml-4">default Predicate or(...)</div>
                            <div className="ml-4">default Predicate negate()</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-5 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-3">Базове використання</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// Перевірка умов'}</div>
                                <div>Predicate&lt;Integer&gt; isPositive = </div>
                                <div className="ml-4">x -&gt; x &gt; 0;</div>
                                <div>isPositive.test(5);</div>
                                <div className="text-gray-500">{'// true'}</div>
                                <div>isPositive.test(-3);</div>
                                <div className="text-gray-500">{'// false'}</div>
                                <div className="mt-3">Predicate String isEmpty = </div>
                                <div className="ml-4">String::isEmpty;</div>
                                <div className="mt-3 text-blue-600">{'// Фільтрація колекцій'}</div>
                                <div>List Integer numbers = ...</div>
                                <div>numbers.removeIf(x -&gt; x &lt; 0);</div>
                                <div className="text-gray-500">{'// Видалить негативні'}</div>
                            </div>
                        </div>

                        <div className="bg-green-50 p-5 rounded-lg">
                            <h4 className="font-bold text-green-700 mb-3">Логічні операції</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// AND - обидві умови'}</div>
                                <div>Predicate Integer isPositive = </div>
                                <div className="ml-4">x -&gt; x &gt; 0;</div>
                                <div>Predicate Integer isEven = </div>
                                <div className="ml-4">x -&gt; x % 2 == 0;</div>
                                <div className="mt-2">Predicate Integer positiveEven = </div>
                                <div className="ml-4">isPositive.and(isEven);</div>
                                <div>positiveEven.test(4);</div>
                                <div className="text-gray-500">{'// true'}</div>
                                <div className="mt-3 text-blue-600">{'// OR - будь-яка'}</div>
                                <div>Predicate Integer positiveOrEven = </div>
                                <div className="ml-4">isPositive.or(isEven);</div>
                                <div className="mt-3 text-blue-600">{'// NEGATE - інверсія'}</div>
                                <div>Predicate Integer isNegative = </div>
                                <div className="ml-4">isPositive.negate();</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-5 rounded-lg">
                        <h4 className="font-bold text-purple-700 mb-3">Практичні приклади</h4>
                        <div className="bg-white p-4 rounded font-mono text-xs">
                            <div className="text-blue-600">{'// Валідація'}</div>
                            <div>class UserValidator</div>
                            <div className="ml-4">Predicate User hasValidEmail = </div>
                            <div className="ml-8">u -&gt; u.getEmail().contains("@");</div>
                            <div className="ml-4">Predicate User isAdult = </div>
                            <div className="ml-8">u -&gt; u.getAge() &gt;= 18;</div>
                            <div className="ml-4">Predicate User isValidUser = </div>
                            <div className="ml-8">hasValidEmail.and(isAdult);</div>
                        </div>
                    </div>

                    <div className="bg-pink-50 p-5 rounded-lg">
                        <h4 className="font-bold text-pink-700 mb-3">BiPredicate T,U</h4>
                        <div className="bg-white p-4 rounded font-mono text-xs">
                            <div className="text-blue-600">{'// Два параметри, повертає boolean'}</div>
                            <div>BiPredicate String, Integer lengthEquals = </div>
                            <div className="ml-4">(s, len) -&gt; s.length() == len;</div>
                            <div>lengthEquals.test("Hello", 5);</div>
                            <div className="text-gray-500">{'// true'}</div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
                        <p className="font-semibold text-gray-800">
                            💡 Predicate - для перевірки умов, валідації та фільтрації. Підтримує логічні операції and/or/negate.
                        </p>
                    </div>
                </div>
            )
        },
        {
            title: "Method References",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-lg">
                        <h3 className="text-2xl font-bold">Method References</h3>
                        <p className="text-sm mt-1">Ще коротший синтаксис замість lambda</p>
                    </div>

                    <div className="bg-cyan-50 p-5 rounded-lg border-l-4 border-cyan-500">
                        <h4 className="font-bold text-cyan-700 mb-3">4 типи Method References</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white p-3 rounded">
                                <strong className="text-blue-600">1. Static method</strong>
                                <div className="font-mono text-xs mt-1">ClassName::staticMethod</div>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <strong className="text-green-600">2. Instance method</strong>
                                <div className="font-mono text-xs mt-1">object::instanceMethod</div>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <strong className="text-purple-600">3. Instance method на параметрі</strong>
                                <div className="font-mono text-xs mt-1">ClassName::instanceMethod</div>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <strong className="text-orange-600">4. Constructor</strong>
                                <div className="font-mono text-xs mt-1">ClassName::new</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-5 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-3">1. Static method reference</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-red-600">{'// Lambda'}</div>
                                <div>Function String, Integer parser = </div>
                                <div className="ml-4">s -&gt; Integer.parseInt(s);</div>
                                <div className="mt-2 text-green-600">{'// Method reference'}</div>
                                <div>Function String, Integer parser = </div>
                                <div className="ml-4">Integer::parseInt;</div>
                            </div>
                        </div>

                        <div className="bg-green-50 p-5 rounded-lg">
                            <h4 className="font-bold text-green-700 mb-3">2. Instance method reference</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-red-600">{'// Lambda'}</div>
                                <div>Consumer String printer = </div>
                                <div className="ml-4">s -&gt; System.out.println(s);</div>
                                <div className="mt-2 text-green-600">{'// Method reference'}</div>
                                <div>Consumer String printer = </div>
                                <div className="ml-4">System.out::println;</div>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-5 rounded-lg">
                            <h4 className="font-bold text-purple-700 mb-3">3. Instance method на параметрі</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-red-600">{'// Lambda'}</div>
                                <div>Function String, Integer length = </div>
                                <div className="ml-4">s -&gt; s.length();</div>
                                <div className="mt-2 text-green-600">{'// Method reference'}</div>
                                <div>Function String, Integer length = </div>
                                <div className="ml-4">String::length;</div>
                                <div className="mt-3">Predicate String isEmpty = </div>
                                <div className="ml-4">String::isEmpty;</div>
                            </div>
                        </div>

                        <div className="bg-orange-50 p-5 rounded-lg">
                            <h4 className="font-bold text-orange-700 mb-3">4. Constructor reference</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-red-600">{'// Lambda'}</div>
                                <div>Supplier List listSupplier = </div>
                                <div className="ml-4">() -&gt; new ArrayList();</div>
                                <div className="mt-2 text-green-600">{'// Method reference'}</div>
                                <div>Supplier List listSupplier = </div>
                                <div className="ml-4">ArrayList::new;</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
                        <p className="font-semibold text-gray-800 mb-2">💡 Коли використовувати Method Reference?</p>
                        <div className="text-sm text-gray-700">
                            Якщо lambda просто викликає існуючий метод - використовуйте method reference. Це робить код коротшим та читабельнішим.
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Інтеграція: Collections + Functional Interface",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-500 to-purple-500 text-white p-4 rounded-lg">
                        <h3 className="text-2xl font-bold">Робота з колекціями через Functional Interface</h3>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-bold text-green-700 mb-3">forEach() - Consumer</h4>
                        <div className="bg-white p-4 rounded font-mono text-sm">
                            <div>List String list = Arrays.asList("Java", "Python", "C++");</div>
                            <div className="mt-2 text-blue-600">{'// З lambda'}</div>
                            <div>list.forEach(item -&gt; System.out.println(item));</div>
                            <div className="mt-2 text-blue-600">{'// З method reference'}</div>
                            <div>list.forEach(System.out::println);</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-5 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-3">removeIf() - Predicate</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div>List Integer numbers = new ArrayList();</div>
                                <div className="mt-2 text-blue-600">{'// Видалити негативні'}</div>
                                <div>numbers.removeIf(x -&gt; x &lt; 0);</div>
                                <div className="mt-3">List String names = new ArrayList();</div>
                                <div className="mt-2 text-blue-600">{'// Видалити порожні'}</div>
                                <div>names.removeIf(String::isEmpty);</div>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-5 rounded-lg">
                            <h4 className="font-bold text-purple-700 mb-3">replaceAll() - UnaryOperator</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div>List String words = new ArrayList();</div>
                                <div className="mt-2 text-blue-600">{'// Uppercase'}</div>
                                <div>words.replaceAll(s -&gt; s.toUpperCase());</div>
                                <div>words.replaceAll(String::toUpperCase);</div>
                                <div className="mt-3">List Integer nums = new ArrayList();</div>
                                <div>nums.replaceAll(x -&gt; x * x);</div>
                            </div>
                        </div>

                        <div className="bg-orange-50 p-5 rounded-lg">
                            <h4 className="font-bold text-orange-700 mb-3">sort() - Comparator</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div>List String names = ...</div>
                                <div className="mt-2 text-blue-600">{'// Природне сортування'}</div>
                                <div>names.sort(String::compareTo);</div>
                                <div>names.sort(Comparator.naturalOrder());</div>
                                <div className="mt-3 text-blue-600">{'// За довжиною'}</div>
                                <div>names.sort(Comparator.comparing(</div>
                                <div className="ml-4">String::length));</div>
                            </div>
                        </div>

                        <div className="bg-pink-50 p-5 rounded-lg">
                            <h4 className="font-bold text-pink-700 mb-3">Map operations</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div>Map String, Integer map = new HashMap();</div>
                                <div className="mt-2 text-blue-600">{'// forEach - BiConsumer'}</div>
                                <div>map.forEach((k, v) -&gt; </div>
                                <div className="ml-4">println(k + "=" + v));</div>
                                <div className="mt-3 text-blue-600">{'// computeIfAbsent - Function'}</div>
                                <div>map.computeIfAbsent("C", </div>
                                <div className="ml-4">k -&gt; k.length());</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-400">
                        <h4 className="font-bold text-yellow-700 mb-3">Comparator - потужні можливості</h4>
                        <div className="bg-white p-4 rounded font-mono text-xs">
                            <div>List User users = getUserList();</div>
                            <div className="mt-2 text-blue-600">{'// Сортування за віком'}</div>
                            <div>users.sort(Comparator.comparing(User::getAge));</div>
                            <div className="mt-2 text-blue-600">{'// Зворотне сортування'}</div>
                            <div>users.sort(Comparator.comparing(User::getName).reversed());</div>
                            <div className="mt-2 text-blue-600">{'// Складне: вік, потім ім\'я'}</div>
                            <div>users.sort(Comparator.comparing(User::getAge)</div>
                            <div className="ml-8">.thenComparing(User::getName));</div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Підсумок: Functional Interface",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
                        <h3 className="text-3xl font-bold mb-4">Ключові моменти Functional Interface</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                            <h4 className="font-bold text-purple-700 mb-3">Основні FI з java.util.function</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• <strong>Consumer T</strong> - приймає, не повертає</li>
                                <li>• <strong>Supplier T</strong> - не приймає, повертає</li>
                                <li>• <strong>Function T,R</strong> - перетворює T в R</li>
                                <li>• <strong>Predicate T</strong> - перевіряє умову</li>
                                <li>• <strong>UnaryOperator T</strong> - T → T</li>
                                <li>• <strong>BinaryOperator T</strong> - (T,T) → T</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                            <h4 className="font-bold text-blue-700 mb-3">Lambda та Method References</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• Lambda: (params) -&gt; expression</li>
                                <li>• Static: ClassName::method</li>
                                <li>• Instance: object::method</li>
                                <li>• На параметрі: ClassName::method</li>
                                <li>• Constructor: ClassName::new</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg">
                        <h4 className="font-bold text-green-700 mb-3">Методи колекцій з FI</h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="bg-white p-3 rounded">
                                <strong>forEach(Consumer)</strong>
                                <div className="text-gray-600 text-xs">Ітерація по елементах</div>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <strong>removeIf(Predicate)</strong>
                                <div className="text-gray-600 text-xs">Видалення за умовою</div>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <strong>replaceAll(UnaryOperator)</strong>
                                <div className="text-gray-600 text-xs">Заміна всіх елементів</div>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <strong>sort(Comparator)</strong>
                                <div className="text-gray-600 text-xs">Сортування</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-400">
                        <h4 className="font-bold text-yellow-700 mb-3">Пам'ятайте</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li>✓ Functional Interface має ОДИН абстрактний метод</li>
                            <li>✓ Lambda роблять код компактнішим та виразнішим</li>
                            <li>✓ Method references ще коротші за lambda</li>
                            <li>✓ Використовуйте вбудовані FI замість власних</li>
                            <li>✓ Композиція функцій через andThen/compose</li>
                        </ul>
                    </div>

                    <div className="text-center bg-purple-100 p-4 rounded-lg">
                        <p className="text-lg font-semibold text-purple-800">
                            Functional Interface + Lambda = сучасний та елегантний Java код! 🚀
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
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl p-12 min-h-[700px] flex flex-col">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">{slides[currentSlide].title}</h1>
                        {slides[currentSlide].subtitle && (
                            <p className="text-lg text-gray-600">{slides[currentSlide].subtitle}</p>
                        )}
                        <div className="h-1 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded mt-3"></div>
                    </div>

                    <div className="flex-grow overflow-y-auto">
                        {slides[currentSlide].content}
                    </div>

                    <div className="flex justify-between items-center mt-8 pt-6 border-t">
                        <button
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                        >
                            <ChevronLeft size={20} />
                            Назад
                        </button>

                        <div className="flex gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-3 rounded-full transition-all ${index === currentSlide
                                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8'
                                            : 'bg-gray-300 hover:bg-gray-400 w-3'
                                        }`}
                                    title={`Слайд ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            disabled={currentSlide === slides.length - 1}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
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

export default FunctionalPresentation;