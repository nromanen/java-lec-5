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
                                <div>public interface Calculator {'{'}</div>
                                <div className="ml-4">int calculate(int a, int b);</div>
                                <div>{'}'}</div>
                            </div>
                        </div>

                        <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                            <h4 className="font-bold text-red-700 mb-3">НЕ Functional Interface</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-red-600">{'// Два методи - помилка!'}</div>
                                <div>@FunctionalInterface</div>
                                <div>public interface Wrong {'{'}</div>
                                <div className="ml-4">int method1();</div>
                                <div className="ml-4">int method2();</div>
                                <div>{'}'}</div>
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
        
                    <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                        <h4 className="font-bold text-purple-700 mb-3">Що таке lambda?</h4>
                        <p className="text-gray-700 mb-3">
                            Lambda — це скорочений запис реалізації функціонального інтерфейсу, тобто інтерфейсу з одним абстрактним методом.
                            Зліва від -&gt; параметри цього методу, справа його тіло. Назву методу писати не треба: він у інтерфейсі один
                        </p>
                        <div className="bg-white p-4 rounded font-mono text-xs">
                            <div className="text-blue-600">{'// Functional interface: exactly one abstract method'}</div>
                            <div>interface Calculator {'{'}</div>
                            <div className="ml-4">int apply(int a, int b);</div>
                            <div>{'}'}</div>
                            <div className="mt-3 text-blue-600">{'// Anonymous class: the same thing, 5 lines'}</div>
                            <div>Calculator add = new Calculator() {'{'}</div>
                            <div className="ml-4">@Override public int apply(int a, int b) {'{'}</div>
                            <div className="ml-8">return a + b;</div>
                            <div className="ml-4">{'}'}</div>
                            <div>{'};'}</div>
                            <div className="mt-3 text-blue-600">{'// Lambda: parameter types and method name are inferred'}</div>
                            <div>Calculator add = (a, b) -&gt; a + b;</div>
                            <div className="mt-3">add.apply(2, 3); <span className="text-green-600">{'// 5 — still an ordinary method call'}</span></div>
                        </div>
                        <p className="text-gray-700 mt-3">
                            Типи параметрів компілятор бере з сигнатури методу інтерфейсу — це target typing.
                            Той самий запис (a, b) -&gt; a + b означатиме інше, якщо змінна матиме інший тип
                        </p>
                    </div>

                    <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
                        <h4 className="font-bold text-yellow-700 mb-3">Lambda ≠ анонімний клас</h4>
                        <p className="text-gray-700 mb-3">
                            Lambda виглядає як скорочений анонімний клас, але це різні речі
                        </p>
                        <div className="bg-white p-4 rounded font-mono text-xs">
                            <div className="text-blue-600">{'// this: lambda has no own instance'}</div>
                            <div>class Service {'{'}</div>
                            <div className="ml-4">String name = "Service";</div>
                            <div className="ml-4 mt-2">void run() {'{'}</div>
                            <div className="ml-8">Runnable lambda = () -&gt; System.out.println(this.name);</div>
                            <div className="ml-8 text-green-600">{'// ✅ this = Service'}</div>
                            <div className="ml-8 mt-2">Runnable anon = new Runnable() {'{'}</div>
                            <div className="ml-12">@Override public void run() {'{'}</div>
                            <div className="ml-16">System.out.println(this.name); <span className="text-red-600">{'// ❌ this = Runnable'}</span></div>
                            <div className="ml-12">{'}'}</div>
                            <div className="ml-8">{'};'}</div>
                            <div className="ml-4">{'}'}</div>
                            <div>{'}'}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-3 text-sm">
                            <div className="bg-white p-3 rounded">
                                <div className="font-bold text-gray-800 mb-1">Lambda</div>
                                <div className="text-gray-700">• Тільки функціональний інтерфейс</div>
                                <div className="text-gray-700">• Не має стану (полів)</div>
                                <div className="text-gray-700">• this = зовнішній клас</div>
                                <div className="text-gray-700">• Окремого .class-файлу немає</div>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <div className="font-bold text-gray-800 mb-1">Анонімний клас</div>
                                <div className="text-gray-700">• Будь-який інтерфейс або клас</div>
                                <div className="text-gray-700">• Може мати поля і кілька методів</div>
                                <div className="text-gray-700">• this = сам анонімний об'єкт</div>
                                <div className="text-gray-700">• Окремий файл Service$1.class</div>
                            </div>
                        </div>
                    </div>
        
                    <div className="bg-blue-50 p-5 rounded-lg">
                        <h4 className="font-bold text-blue-700 mb-3">Базовий синтаксис</h4>
                        <div className="bg-white p-4 rounded text-sm space-y-2">
                            <div className="text-blue-600">{'// Без параметрів'}</div>
                            <div className="font-mono">() -&gt; System.out.println("Hello")</div>
        
                            <div className="mt-3 text-blue-600">{'// Один параметр (дужки можна опустити)'}</div>
                            <div className="font-mono">x -&gt; x * x</div>
        
                            <div className="mt-3 text-blue-600">{'// Кілька параметрів - один вираз'}</div>
                            <div className="font-mono">(x, y) -&gt; x + y</div>
        
                            <div className="mt-3 text-blue-600">{'// Кілька параметрів - один вираз з return'}</div>
                            <div className="font-mono">(x, y) -&gt; {'{ return x + y; }'}</div>
        
                            <div className="mt-3 text-blue-600">{'// Блок коду з фігурними дужками'}</div>
                            <div className="font-mono">(x, y) -&gt; {'{'}</div>
                            <div className="font-mono ml-4">int result = x + y;</div>
                            <div className="font-mono ml-4">System.out.println("Результат: " + result);</div>
                            <div className="font-mono ml-4">return result;</div>
                            <div className="font-mono">{'}'}</div>
        
                            <div className="mt-3 text-blue-600">{'// Типи параметрів можна вказати явно (рідко потрібно)'}</div>
                            <div className="font-mono">(int x, int y) -&gt; x + y</div>
                        </div>
                    </div>
        
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
                            <h4 className="font-bold text-orange-700 mb-3">До Lambda (Java 7)</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div>List&lt;String&gt; list = ...</div>
                                <div className="mt-2">for (String s : list) {'{'}</div>
                                <div className="ml-4">System.out.println(s);</div>
                                <div>{'}'}</div>
                                <div className="mt-2 text-blue-600">{'// or an anonymous class:'}</div>
                                <div>Collections.sort(list, new Comparator&lt;String&gt;() {'{'}</div>
                                <div className="ml-4">@Override public int compare(String a, String b) {'{'}</div>
                                <div className="ml-8">return a.compareTo(b);</div>
                                <div className="ml-4">{'}'}</div>
                                <div>{'});'}</div>
                            </div>
                        </div>
        
                        <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                            <h4 className="font-bold text-green-700 mb-3">З Lambda (Java 8+)</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div>List&lt;String&gt; list = ...</div>
                                <div className="mt-2">list.forEach(s -&gt; System.out.println(s));</div>
                                <div>list.forEach(System.out::println);</div>
                                <div className="mt-2 text-blue-600">{'// the same sorting:'}</div>
                                <div>list.sort((a, b) -&gt; a.compareTo(b));</div>
                                <div>list.sort(Comparator.naturalOrder());</div>
                                <div className="mt-2 text-green-600">{'// one line instead of five'}</div>
                            </div>
                        </div>
                    </div>
        
                    <div className="bg-purple-50 p-5 rounded-lg">
                        <h4 className="font-bold text-purple-700 mb-3">Приклади використання</h4>
                        <div className="bg-white p-4 rounded font-mono text-xs space-y-2">
                            <div className="text-blue-600">{'// Comparator'}</div>
                            <div>names.sort((a, b) -&gt; a.compareTo(b));</div>
        
                            <div className="mt-3 text-blue-600">{'// Runnable'}</div>
                            <div>new Thread(() -&gt; System.out.println("Hello")).start();</div>
        
                            <div className="mt-3 text-blue-600">{'// Predicate'}</div>
                            <div>list.removeIf(s -&gt; s.isBlank());</div>
        
                            <div className="mt-3 text-blue-600">{'// Власний функціональний інтерфейс'}</div>
                            <div>Calculator add = (a, b) -&gt; a + b;</div>
                        </div>
                    </div>
        
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
                        <h4 className="font-bold text-yellow-700 mb-3">⚠️ Lambda та змінні: final або effectively final</h4>
                        <div className="text-sm text-gray-700 mb-2">
                            Lambda може використовувати лише змінні, які <strong>не змінюються</strong> після ініціалізації.
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-green-50 p-2 rounded border border-green-300">
                                <div className="text-green-600 font-bold text-xs mb-1">✓ Працює</div>
                                <div className="bg-white p-2 rounded font-mono text-xs">
                                    <div>Set&lt;String&gt; seen = new HashSet&lt;&gt;();</div>
                                    <div>list.removeIf(s -&gt; !seen.add(s));</div>
                                    <div className="text-gray-500 mt-1">{'// seen не перезаписується'}</div>
                                </div>
                            </div>
                            <div className="bg-red-50 p-2 rounded border border-red-300">
                                <div className="text-red-600 font-bold text-xs mb-1">✗ Не працює</div>
                                <div className="bg-white p-2 rounded font-mono text-xs">
                                    <div>int counter = 0;</div>
                                    <div>list.forEach(s -&gt; counter++);</div>
                                    <div className="text-gray-500 mt-1">{'// counter змінюється!'}</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 text-xs text-gray-600">
                            💡 Можна змінювати <strong>вміст</strong> об'єкта (seen.add()), але не саму змінну (seen = ...)
                        </div>
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
                                <div>Function&lt;String, Integer&gt; parser = </div>
                                <div className="ml-4">s -&gt; Integer.parseInt(s);</div>
                                <div className="mt-2 text-green-600">{'// Method reference'}</div>
                                <div>Function&lt;String, Integer&gt; parser = </div>
                                <div className="ml-4">Integer::parseInt;</div>
                            </div>
                        </div>

                        <div className="bg-green-50 p-5 rounded-lg">
                            <h4 className="font-bold text-green-700 mb-3">2. Instance method reference</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-red-600">{'// Lambda'}</div>
                                <div>Consumer&lt;String&gt; printer = </div>
                                <div className="ml-4">s -&gt; System.out.println(s);</div>
                                <div className="mt-2 text-green-600">{'// Method reference'}</div>
                                <div>Consumer&lt;String&gt; printer = </div>
                                <div className="ml-4">System.out::println;</div>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-5 rounded-lg">
                            <h4 className="font-bold text-purple-700 mb-3">3. Instance method на параметрі</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-red-600">{'// Lambda'}</div>
                                <div>Function&lt;String, Integer&gt; length = </div>
                                <div className="ml-4">s -&gt; s.length();</div>
                                <div className="mt-2 text-green-600">{'// Method reference'}</div>
                                <div>Function&lt;String, Integer&gt; length = </div>
                                <div className="ml-4">String::length;</div>
                                <div className="mt-3">Predicate&lt;String&gt; isEmpty = </div>
                                <div className="ml-4">String::isEmpty;</div>
                            </div>
                        </div>

                        <div className="bg-orange-50 p-5 rounded-lg">
                            <h4 className="font-bold text-orange-700 mb-3">4. Constructor reference</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// Без параметрів - Supplier'}</div>
                                <div className="text-red-600">{'// Lambda'}</div>
                                <div>Supplier&lt;List&lt;String&gt;&gt; listSupplier = </div>
                                <div className="ml-4">() -&gt; new ArrayList&lt;&gt;();</div>
                                <div className="text-green-600">{'// Constructor reference'}</div>
                                <div>Supplier&lt;List&lt;String&gt;&gt; listSupplier = </div>
                                <div className="ml-4">ArrayList::new;</div>
                                
                                <div className="mt-3 text-blue-600">{'// 1 параметр - Function'}</div>
                                <div className="text-red-600">{'// Lambda'}</div>
                                <div>Function&lt;String, User&gt; userCreator = </div>
                                <div className="ml-4">name -&gt; new User(name);</div>
                                <div className="text-green-600">{'// Constructor reference'}</div>
                                <div>Function&lt;String, User&gt; userCreator = </div>
                                <div className="ml-4">User::new;</div>
                                
                                <div className="mt-3 text-blue-600">{'// 2 параметри - BiFunction'}</div>
                                <div className="text-red-600">{'// Lambda'}</div>
                                <div>BiFunction&lt;String, Integer, User&gt; creator = </div>
                                <div className="ml-4">(name, age) -&gt; new User(name, age);</div>
                                <div className="text-green-600">{'// Constructor reference'}</div>
                                <div>BiFunction&lt;String, Integer, User&gt; creator = </div>
                                <div className="ml-4">User::new;</div>
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
            title: "Consumer<T>",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-lg">
                        <h3 className="text-2xl font-bold">Consumer&lt;T&gt;</h3>
                        <p className="text-sm mt-1">Споживає (приймає) значення, нічого не повертає</p>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-bold text-green-700 mb-3">Визначення</h4>
                        <div className="bg-white p-4 rounded font-mono text-sm">
                            <div>@FunctionalInterface</div>
                            <div>public interface Consumer&lt;T&gt; {'{'}</div>
                            <div className="ml-4">void accept(T t);</div>
                            <div className="mt-2 ml-4 text-gray-500">{'// Метод для ланцюжка'}</div>
                            <div className="ml-4">default Consumer&lt;T&gt; andThen(...)</div>
                            <div>{'}'}</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-5 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-3">Базове використання</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// Виведення в консоль'}</div>
                                <div>Consumer&lt;String&gt; printer = </div>
                                <div className="ml-4">s -&gt; System.out.println(s);</div>
                                <div>printer.accept("Hello");</div>
                                <div className="mt-3 text-blue-600">{'// Method reference'}</div>
                                <div>Consumer&lt;String&gt; printer2 = </div>
                                <div className="ml-4">System.out::println;</div>
                                <div className="mt-3 text-blue-600">{'// З forEach'}</div>
                                <div>List&lt;String&gt; list = ...</div>
                                <div>list.forEach(System.out::println);</div>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-5 rounded-lg">
                            <h4 className="font-bold text-purple-700 mb-3">Ланцюжок Consumer</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// Композиція через andThen'}</div>
                                <div>Consumer&lt;String&gt; c1 = </div>
                                <div className="ml-4">s -&gt; System.out.print(s);</div>
                                <div>Consumer&lt;String&gt; c2 = </div>
                                <div className="ml-4">s -&gt; System.out.print(" - ");</div>
                                <div>Consumer&lt;String&gt; c3 = </div>
                                <div className="ml-4">s -&gt; System.out.println(s.length());</div>
                                <div className="mt-2">Consumer&lt;String&gt; chain = </div>
                                <div className="ml-4">c1.andThen(c2).andThen(c3);</div>
                                <div className="mt-2">chain.accept("Hello");</div>
                                <div className="text-gray-500">{'// Виведе: Hello - 5'}</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-50 p-5 rounded-lg">
                        <h4 className="font-bold text-orange-700 mb-3">BiConsumer&lt;T,U&gt; - два параметри</h4>
                        <div className="bg-white p-4 rounded font-mono text-xs">
                            <div className="text-blue-600">{'// Приймає два параметри'}</div>
                            <div>BiConsumer&lt;String, Integer&gt; printer = </div>
                            <div className="ml-4">(name, age) -&gt; println(name + " is " + age);</div>
                            <div>printer.accept("John", 25);</div>
                            <div className="mt-3 text-blue-600">{'// Використання з Map'}</div>
                            <div>Map&lt;String, Integer&gt; map = ...</div>
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
            title: "Supplier<T>",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-lg">
                        <h3 className="text-2xl font-bold">Supplier&lt;T&gt;</h3>
                        <p className="text-sm mt-1">Постачає (створює) значення, нічого не приймає</p>
                    </div>

                    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-bold text-blue-700 mb-3">Визначення</h4>
                        <div className="bg-white p-4 rounded font-mono text-sm">
                            <div>@FunctionalInterface</div>
                            <div>public interface Supplier&lt;T&gt; {'{'}</div>
                            <div className="ml-4">T get();</div>
                            <div>{'}'}</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-5 rounded-lg">
                            <h4 className="font-bold text-green-700 mb-3">Базове використання</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// Генерація значень'}</div>
                                <div>Supplier&lt;Double&gt; randomSupplier = </div>
                                <div className="ml-4">() -&gt; Math.random();</div>
                                <div>Double value = randomSupplier.get();</div>
                                <div className="mt-3 text-blue-600">{'// Постачання об\'єктів'}</div>
                                <div>Supplier&lt;String&gt; stringSupplier = </div>
                                <div className="ml-4">() -&gt; "Hello World";</div>
                                <div className="mt-3 text-blue-600">{'// Method reference'}</div>
                                <div>Supplier&lt;List&lt;String&gt;&gt; listSupplier = </div>
                                <div className="ml-4">ArrayList::new;</div>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-5 rounded-lg">
                            <h4 className="font-bold text-purple-700 mb-3">Lazy обчислення</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// Відкладені обчислення'}</div>
                                <div>public String expensiveOperation() {'{'}</div>
                                <div className="ml-4">System.out.println("Expensive!");</div>
                                <div className="ml-4">return "Result";</div>
                                <div>{'}'}</div>
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
                            <div>class UserFactory {'{'}</div>
                            <div className="ml-4">public static Supplier&lt;User&gt; adminSupplier = </div>
                            <div className="ml-8">() -&gt; new User("admin", Role.ADMIN);</div>
                            <div>{'}'}</div>
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
            title: "Lazy обчислення: Практичні приклади",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4 rounded-lg">
                        <h3 className="text-2xl font-bold">Supplier&lt;T&gt; для Lazy Evaluation</h3>
                        <p className="text-sm mt-1">Відкладене виконання до моменту, коли дійсно потрібно!</p>
                    </div>

                    <div className="bg-teal-50 p-5 rounded-lg border-l-4 border-teal-500">
                        <h4 className="font-bold text-teal-700 mb-3">Що таке Lazy обчислення?</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-red-50 p-3 rounded border border-red-300">
                                <strong className="text-red-600">❌ Eager (жадібне)</strong>
                                <div className="text-sm text-gray-700 mt-1">Виконується ЗАВЖДИ одразу</div>
                            </div>
                            <div className="bg-green-50 p-3 rounded border border-green-300">
                                <strong className="text-green-600">✓ Lazy (ледаче)</strong>
                                <div className="text-sm text-gray-700 mt-1">Виконується ТІЛЬКИ коли потрібно</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-5 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-3">1. Відкладена ініціалізація</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// З\'єднання створюється пізніше'}</div>
                                <div>class DatabaseConnection {'{'}</div>
                                <div className="ml-4">private Connection conn;</div>
                                <div className="ml-4">private Supplier&lt;Connection&gt; supplier;</div>
                                <div className="mt-2 ml-4">public Connection getConnection() {'{'}</div>
                                <div className="ml-8">if (conn == null) {'{'}</div>
                                <div className="ml-12 text-green-600">{'// Тільки тут створюється!'}</div>
                                <div className="ml-12">conn = supplier.get();</div>
                                <div className="ml-8">{'}'}</div>
                                <div className="ml-8">return conn;</div>
                                <div className="ml-4">{'}'}</div>
                                <div>{'}'}</div>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-5 rounded-lg">
                            <h4 className="font-bold text-purple-700 mb-3">2. Optional з lazy default</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-red-600">{'// ❌ Завжди створює User'}</div>
                                <div>User user = repo.findById(id)</div>
                                <div className="ml-4">.orElse(createDefaultUser());</div>
                                <div className="mt-3 text-green-600">{'// ✓ Створює тільки якщо потрібно'}</div>
                                <div>User user = repo.findById(id)</div>
                                <div className="ml-4">.orElseGet(() -&gt; </div>
                                <div className="ml-8">createDefaultUser());</div>
                                <div className="mt-2 text-gray-500">{'// Якщо Optional не порожній,'}</div>
                                <div className="text-gray-500">{'// createDefaultUser() НЕ викличеться!'}</div>
                            </div>
                        </div>

                        <div className="bg-orange-50 p-5 rounded-lg">
                            <h4 className="font-bold text-orange-700 mb-3">3. UI з можливістю скасування</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div>class ReportGenerator {'{'}</div>
                                <div className="ml-4">void showReport(</div>
                                <div className="ml-8">Supplier&lt;String&gt; reportSupplier) {'{'}</div>
                                <div className="ml-4 mt-2">showLoadingSpinner();</div>
                                <div className="ml-4 mt-2">if (userClickedCancel()) {'{'}</div>
                                <div className="ml-8 text-green-600">{'// Звіт НЕ генерується!'}</div>
                                <div className="ml-8">return;</div>
                                <div className="ml-4">{'}'}</div>
                                <div className="ml-4 mt-2 text-green-600">{'// Тільки тут генерується'}</div>
                                <div className="ml-4">String report = reportSupplier.get();</div>
                                <div className="ml-4">displayReport(report);</div>
                                <div>{'}'}</div>
                            </div>
                        </div>

                        <div className="bg-green-50 p-5 rounded-lg">
                            <h4 className="font-bold text-green-700 mb-3">4. Фабрика об'єктів</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div>class GameObjectFactory {'{'}</div>
                                <div className="ml-4">Map&lt;String, Supplier&lt;GameObject&gt;&gt;</div>
                                <div className="ml-8">creators = new HashMap&lt;&gt;();</div>
                                <div className="mt-2 ml-4">public GameObjectFactory() {'{'}</div>
                                <div className="ml-8 text-gray-500">{'// Реєструємо, НЕ створюємо'}</div>
                                <div className="ml-8">creators.put("enemy", </div>
                                <div className="ml-12">() -&gt; new Enemy());</div>
                                <div className="ml-8">creators.put("coin", </div>
                                <div className="ml-12">() -&gt; new Coin());</div>
                                <div className="ml-4">{'}'}</div>
                                <div className="mt-2 ml-4">GameObject create(String type) {'{'}</div>
                                <div className="ml-8 text-green-600">{'// Створюється тільки тут!'}</div>
                                <div className="ml-8">return creators.get(type).get();</div>
                                <div className="ml-4">{'}'}</div>
                                <div>{'}'}</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-indigo-50 p-5 rounded-lg">
                        <h4 className="font-bold text-indigo-700 mb-3">5. Stream з нескінченними послідовностями</h4>
                        <div className="bg-white p-4 rounded font-mono text-xs">
                            <div className="text-blue-600">{'// Генератор Фібоначчі - без Supplier неможливо!'}</div>
                            <div>Stream&lt;Integer&gt; fibonacci = Stream.generate(new Supplier&lt;Integer&gt;() {'{'}</div>
                            <div className="ml-4">private int prev = 0, current = 1;</div>
                            <div className="ml-4">public Integer get() {'{'}</div>
                            <div className="ml-8">int next = prev + current;</div>
                            <div className="ml-8">prev = current;</div>
                            <div className="ml-8">current = next;</div>
                            <div className="ml-8">return prev;</div>
                            <div className="ml-4">{'}'}</div>
                            <div>{'}).'}</div>
                            <div className="mt-2 text-gray-500">{'// Числа генеруються ТІЛЬКИ коли їх беруть'}</div>
                            <div>fibonacci.limit(10).forEach(System.out::println);</div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
                        <h4 className="font-bold text-yellow-700 mb-2">💡 Коли використовувати Lazy?</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li>✓ Операція дорога (повільна, багато пам'яті)</li>
                            <li>✓ Може не знадобитися (умовне виконання)</li>
                            <li>✓ Відкладена ініціалізація ресурсів</li>
                            <li>✓ Нескінченні послідовності в Stream</li>
                            <li>✓ Економія ресурсів та продуктивності!</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Function<T,R>",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">
                        <h3 className="text-2xl font-bold">Function&lt;T,R&gt;</h3>
                        <p className="text-sm mt-1">Приймає T, повертає R - перетворення типів</p>
                    </div>

                    <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                        <h4 className="font-bold text-purple-700 mb-3">Визначення</h4>
                        <div className="bg-white p-4 rounded font-mono text-sm">
                            <div>@FunctionalInterface</div>
                            <div>public interface Function&lt;T, R&gt; {'{'}</div>
                            <div className="ml-4">R apply(T t);</div>
                            <div className="mt-2 ml-4 text-gray-500">{'// Композиція функцій'}</div>
                            <div className="ml-4">default Function&lt;T,R&gt; andThen(...)</div>
                            <div className="ml-4">default Function&lt;T,R&gt; compose(...)</div>
                            <div>{'}'}</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-5 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-3">Базове використання</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// String -> Integer'}</div>
                                <div>Function&lt;String, Integer&gt; strLength = </div>
                                <div className="ml-4">s -&gt; s.length();</div>
                                <div>Function&lt;String, Integer&gt; strLength2 = </div>
                                <div className="ml-4">String::length;</div>
                                <div>Integer len = strLength.apply("Hello");</div>
                                <div className="text-gray-500">{'// 5'}</div>
                                <div className="mt-3 text-blue-600">{'// Integer -> String'}</div>
                                <div>Function&lt;Integer, String&gt; intToStr = </div>
                                <div className="ml-4">i -&gt; "Number: " + i;</div>
                            </div>
                        </div>

                        <div className="bg-green-50 p-5 rounded-lg">
                            <h4 className="font-bold text-green-700 mb-3">andThen - "а потім"</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// andThen: f.andThen(g) = g(f(x))'}</div>
                                <div className="text-blue-600">{'// Виконання зліва направо →'}</div>
                                <div>Function&lt;Integer, Integer&gt; multiplyBy2 = </div>
                                <div className="ml-4">x -&gt; x * 2;</div>
                                <div>Function&lt;Integer, Integer&gt; add3 = </div>
                                <div className="ml-4">x -&gt; x + 3;</div>
                                <div className="mt-2">Function&lt;Integer, Integer&gt; combined = </div>
                                <div className="ml-4">multiplyBy2.andThen(add3);</div>
                                <div>combined.apply(5);</div>
                                <div className="text-gray-500">{'// Спочатку *2, потім +3'}</div>
                                <div className="text-gray-500">{'// (5*2)+3 = 13'}</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-5 rounded-lg mt-4">
                        <h4 className="font-bold text-purple-700 mb-3">andThen vs compose - різниця в порядку!</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-green-600 font-bold mb-2">{'// andThen: зліва → направо'}</div>
                                <div>Function&lt;Integer, Integer&gt; f = </div>
                                <div className="ml-4">multiplyBy2.andThen(add3);</div>
                                <div className="mt-2">f.apply(5);</div>
                                <div className="text-gray-500">{'// 5 → *2 → +3'}</div>
                                <div className="text-gray-500">{'// 5 → 10 → 13'}</div>
                                <div className="mt-2 text-green-600">{'// g(f(x))'}</div>
                            </div>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-orange-600 font-bold mb-2">{'// compose: справа ← наліво'}</div>
                                <div>Function&lt;Integer, Integer&gt; f = </div>
                                <div className="ml-4">multiplyBy2.compose(add3);</div>
                                <div className="mt-2">f.apply(5);</div>
                                <div className="text-gray-500">{'// 5 → +3 → *2'}</div>
                                <div className="text-gray-500">{'// 5 → 8 → 16'}</div>
                                <div className="mt-2 text-orange-600">{'// f(g(x))'}</div>
                            </div>
                        </div>
                        <div className="mt-3 p-3 bg-yellow-50 rounded border border-yellow-300">
                            <p className="text-sm text-gray-700">
                                <strong>andThen</strong> читається природно (зліва направо), 
                                <strong> compose</strong> - математична нотація (справа наліво). 
                                На практиці <strong>andThen</strong> використовується частіше!
                            </p>
                        </div>
                    </div>

                    <div className="bg-orange-50 p-5 rounded-lg">
                        <h4 className="font-bold text-orange-700 mb-3">BiFunction&lt;T,U,R&gt; - два параметри</h4>
                        <div className="bg-white p-4 rounded font-mono text-xs">
                            <div className="text-blue-600">{'// Приймає два параметри, повертає результат'}</div>
                            <div>BiFunction&lt;Integer, Integer, Integer&gt; add = </div>
                            <div className="ml-4">(a, b) -&gt; a + b;</div>
                            <div>Integer sum = add.apply(5, 3);</div>
                            <div className="text-gray-500">{'// 8'}</div>
                        </div>
                    </div>

                    <div className="bg-indigo-50 p-5 rounded-lg">
                        <h4 className="font-bold text-indigo-700 mb-3">UnaryOperator&lt;T&gt; та BinaryOperator&lt;T&gt;</h4>
                        <div className="bg-white p-4 rounded font-mono text-xs">
                            <div className="text-blue-600">{'// UnaryOperator: T -> T'}</div>
                            <div>UnaryOperator&lt;Integer&gt; square = x -&gt; x * x;</div>
                            <div>Integer result = square.apply(5);</div>
                            <div className="text-gray-500">{'// 25'}</div>
                            <div className="mt-3 text-blue-600">{'// BinaryOperator: (T,T) -> T'}</div>
                            <div>BinaryOperator&lt;Integer&gt; max = </div>
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
            title: "Predicate<T>",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg">
                        <h3 className="text-2xl font-bold">Predicate&lt;T&gt;</h3>
                        <p className="text-sm mt-1">Приймає T, повертає boolean - умови та фільтрація</p>
                    </div>

                    <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
                        <h4 className="font-bold text-orange-700 mb-3">Визначення</h4>
                        <div className="bg-white p-4 rounded font-mono text-sm">
                            <div>@FunctionalInterface</div>
                            <div>public interface Predicate&lt;T&gt; {'{'}</div>
                            <div className="ml-4">boolean test(T t);</div>
                            <div className="mt-2 ml-4 text-gray-500">{'// Логічні операції'}</div>
                            <div className="ml-4">default Predicate&lt;T&gt; and(...)</div>
                            <div className="ml-4">default Predicate&lt;T&gt; or(...)</div>
                            <div className="ml-4">default Predicate&lt;T&gt; negate()</div>
                            <div>{'}'}</div>
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
                                <div className="mt-3">Predicate&lt;String&gt; isEmpty = </div>
                                <div className="ml-4">String::isEmpty;</div>
                                <div className="mt-3 text-blue-600">{'// Фільтрація колекцій'}</div>
                                <div>List&lt;Integer&gt; numbers = ...</div>
                                <div>numbers.removeIf(x -&gt; x &lt; 0);</div>
                                <div className="text-gray-500">{'// Видалить негативні'}</div>
                            </div>
                        </div>

                        <div className="bg-green-50 p-5 rounded-lg">
                            <h4 className="font-bold text-green-700 mb-3">Логічні операції</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div className="text-blue-600">{'// AND - обидві умови'}</div>
                                <div>Predicate&lt;Integer&gt; isPositive = </div>
                                <div className="ml-4">x -&gt; x &gt; 0;</div>
                                <div>Predicate&lt;Integer&gt; isEven = </div>
                                <div className="ml-4">x -&gt; x % 2 == 0;</div>
                                <div className="mt-2">Predicate&lt;Integer&gt; positiveEven = </div>
                                <div className="ml-4">isPositive.and(isEven);</div>
                                <div>positiveEven.test(4);</div>
                                <div className="text-gray-500">{'// true'}</div>
                                <div className="mt-3 text-blue-600">{'// OR - будь-яка'}</div>
                                <div>Predicate&lt;Integer&gt; positiveOrEven = </div>
                                <div className="ml-4">isPositive.or(isEven);</div>
                                <div className="mt-3 text-blue-600">{'// NEGATE - інверсія'}</div>
                                <div>Predicate&lt;Integer&gt; isNegative = </div>
                                <div className="ml-4">isPositive.negate();</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-5 rounded-lg">
                        <h4 className="font-bold text-purple-700 mb-3">Практичні приклади</h4>
                        <div className="bg-white p-4 rounded font-mono text-xs">
                            <div className="text-blue-600">{'// Валідація'}</div>
                            <div>class UserValidator {'{'}</div>
                            <div className="ml-4">Predicate&lt;User&gt; hasValidEmail = </div>
                            <div className="ml-8">u -&gt; u.getEmail().contains("@");</div>
                            <div className="ml-4">Predicate&lt;User&gt; isAdult = </div>
                            <div className="ml-8">u -&gt; u.getAge() &gt;= 18;</div>
                            <div className="ml-4">Predicate&lt;User&gt; isValidUser = </div>
                            <div className="ml-8">hasValidEmail.and(isAdult);</div>
                            <div>{'}'}</div>
                        </div>
                    </div>

                    <div className="bg-pink-50 p-5 rounded-lg">
                        <h4 className="font-bold text-pink-700 mb-3">BiPredicate&lt;T,U&gt;</h4>
                        <div className="bg-white p-4 rounded font-mono text-xs">
                            <div className="text-blue-600">{'// Два параметри, повертає boolean'}</div>
                            <div>BiPredicate&lt;String, Integer&gt; lengthEquals = </div>
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
            title: "Інтеграція: Collections + Functional Interface",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-500 to-purple-500 text-white p-4 rounded-lg">
                        <h3 className="text-2xl font-bold">Робота з колекціями через Functional Interface</h3>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-bold text-green-700 mb-3">forEach() - Consumer</h4>
                        <div className="bg-white p-4 rounded font-mono text-sm">
                            <div>List&lt;String&gt; list = Arrays.asList("Java", "Python", "C++");</div>
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
                                <div>List&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();</div>
                                <div className="mt-2 text-blue-600">{'// Видалити негативні'}</div>
                                <div>numbers.removeIf(x -&gt; x &lt; 0);</div>
                                <div className="mt-3">List&lt;String&gt; names = new ArrayList&lt;&gt;();</div>
                                <div className="mt-2 text-blue-600">{'// Видалити порожні'}</div>
                                <div>names.removeIf(String::isEmpty);</div>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-5 rounded-lg">
                            <h4 className="font-bold text-purple-700 mb-3">replaceAll() - UnaryOperator</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div>List&lt;String&gt; words = new ArrayList&lt;&gt;();</div>
                                <div className="mt-2 text-blue-600">{'// Uppercase'}</div>
                                <div>words.replaceAll(s -&gt; s.toUpperCase());</div>
                                <div>words.replaceAll(String::toUpperCase);</div>
                                <div className="mt-3">List&lt;Integer&gt; nums = new ArrayList&lt;&gt;();</div>
                                <div>nums.replaceAll(x -&gt; x * x);</div>
                            </div>
                        </div>

                        <div className="bg-orange-50 p-5 rounded-lg">
                            <h4 className="font-bold text-orange-700 mb-3">sort() - Comparator</h4>
                            <div className="bg-white p-3 rounded font-mono text-xs">
                                <div>List&lt;String&gt; names = ...</div>
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
                                <div>Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();</div>
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
                            <div>List&lt;User&gt; users = getUserList();</div>
                            <div className="mt-2 text-blue-600">{'// Сортування за датою народження'}</div>
                            <div>users.sort(Comparator.comparing(User::getDateOfBirth));</div>
                            
                            <div className="mt-3 text-blue-600">{'// Зворотне сортування (найстарші спочатку)'}</div>
                            <div>users.sort(Comparator.comparing(</div>
                            <div className="ml-4">User::getDateOfBirth).reversed());</div>
                            
                            <div className="mt-3 text-blue-600">{'// Складне: дата народження, потім ім\'я'}</div>
                            <div>users.sort(Comparator.comparing(User::getDateOfBirth)</div>
                            <div className="ml-8">.thenComparing(User::getName));</div>
                            
                            <div className="mt-3 text-blue-600">{'// Null-safe сортування'}</div>
                            <div>users.sort(Comparator.comparing(</div>
                            <div className="ml-4">User::getDateOfBirth, </div>
                            <div className="ml-4">Comparator.nullsLast(</div>
                            <div className="ml-8">Comparator.naturalOrder())));</div>
                            
                            <div className="mt-3 text-blue-600">{'// За довжиною імені, потім за ім\'ям'}</div>
                            <div>users.sort(Comparator.comparingInt(</div>
                            <div className="ml-8">u -&gt; u.getName().length())</div>
                            <div className="ml-4">.thenComparing(User::getName));</div>
                        </div>
                        <div className="mt-3 p-3 bg-blue-50 rounded">
                            <p className="text-sm text-gray-700 font-semibold mb-2">Корисні методи Comparator:</p>
                            <div className="text-xs space-y-1 text-gray-700">
                                <div>• <strong>comparing()</strong> - сортування за полем</div>
                                <div>• <strong>comparingInt/Long/Double()</strong> - оптимізовані для примітивів</div>
                                <div>• <strong>reversed()</strong> - зворотний порядок</div>
                                <div>• <strong>thenComparing()</strong> - додатковий критерій</div>
                                <div>• <strong>nullsFirst/Last()</strong> - обробка null</div>
                                <div>• <strong>naturalOrder()</strong> - природний порядок</div>
                            </div>
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
                                <li>• <strong>Consumer&lt;T&gt;</strong> - приймає, не повертає</li>
                                <li>• <strong>Supplier&lt;T&gt;</strong> - не приймає, повертає</li>
                                <li>• <strong>Function&lt;T,R&gt;</strong> - перетворює T в R</li>
                                <li>• <strong>Predicate&lt;T&gt;</strong> - перевіряє умову</li>
                                <li>• <strong>UnaryOperator&lt;T&gt;</strong> - T → T</li>
                                <li>• <strong>BinaryOperator&lt;T&gt;</strong> - (T,T) → T</li>
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
