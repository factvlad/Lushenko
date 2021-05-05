"use strict";

// В данной работе и далее под определением набор понимают Set.
// Task 1
// Создайте set s1. Добавьте в него три элемента 'h', 'b', 'o', 'h'. Добавление делайте через add. Выведите в консоль получившийся набор (set) s1.
var s1 = new Set();
s1.add("h");
s1.add("b");
s1.add("o");
console.log(s1); // Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна добавить в набор s2 элементы, которые пользователь вводит в i-2. Функция должна выводить в консоль s2 после каждого добавления элемента.

var s2 = new Set();

var f2 = function f2() {
  s2.add(document.querySelector(".i-2").value);
  console.log(s2);
};

document.querySelector(".b-2").onclick = f2; // Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна удалить из набора s3 строку, которую пользователь вводит в i-3. Функция должна выводить в консоль s3 после каждого удаления элемента.

var s3 = new Set(["one", "two", "four"]); // обратите внимание, как просто можно добавить массив в набор!

var f3 = function f3() {
  s3["delete"](document.querySelector(".i-3").value);
  console.log(s3);
};

document.querySelector(".b-3").onclick = f3; // Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна проверить наличие в наборе s4 строки введенной пользователем в i-4. Если строка есть - то вывести в out-4 true. Если нет - false.

var s4 = new Set(["a", "b", "c", "z"]);

var f4 = function f4() {
  var div = document.querySelector(".out-4");
  var inp = document.querySelector(".i-4").value;
  div.textContent = s4.has(inp);
};

document.querySelector(".b-4").onclick = f4; // Task 5
//  При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 количество элементов в наборе s5.

var s5 = new Set(["a", "b", "c", "z", "a2", "b2", "c2", "z2"]);

var f5 = function f5() {
  document.querySelector(".out-5").innerHTML = s5.size;
};

document.querySelector(".b-5").onclick = f5; // Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 число уникальных элементов в массиве a6. Решение должно использовать set.

var a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];

var f6 = function f6() {
  var b6 = new Set(a6);
  document.querySelector(".out-6").innerHTML = b6.size;
};

document.querySelector(".b-6").onclick = f6; // Task 7
// При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 значение пароля и проверять, чтобы пользователь в строке пароля использовал не повторяющиеся символы. Если символы уникальны, а длина пароля больше ( строго) 6 то выводите в out-7 число 1. Если есть повторяющиеся символы, или длина меньше или равна 6 - то выводите 0. Для проверки уникальности символов используйте Set.

var f7 = function f7() {
  var div = document.querySelector(".out-7");
  var inp = document.querySelector(".i-7").value;
  var s7 = new Set(inp); //   let out = "";

  var out = 0; //   console.log(inp.length, s7.size, inp.length > 6);

  if (inp.length === s7.size && s7.size > 6) {
    out = 1;
  } //   else (
  //       out = 0
  //   )


  div.innerHTML = out;
};

document.querySelector(".b-7").onclick = f7; // Task 8
// При нажатии b-8 выполняете функцию f8. Функция должна перебрать набор s8 и добавить в массив ar8 только числа больше 5. Выведите массив в консоль.

var s8 = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]);
var ar8 = [];

var f8 = function f8() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s8[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item > 5) {
        ar8.push(item);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log(ar8);
};

document.querySelector(".b-8").onclick = f8; // Task 9
//  При нажатии b-9 выполняете функцию f9. Функция должна принимать набор our_set в качестве параметра, преобразовывать его в строку, причем после каждого символа строки должен быть пробел. Функция должна возвращать результирующую строку.
// В нашем примере результат должен быть 9 8 7 6 5

var f9 = function f9(our_set) {
  out = "";
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = our_set[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var item = _step2.value;
      out += "".concat(item, " ");
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return out;
};

document.querySelector(".b-9").onclick = function () {
  var s9 = new Set([9, 8, 7, 6, 5]);
  document.querySelector(".out-9").innerHTML = f9(s9);
}; // const f9 = () => {
//   let s9 = new Set([9, 8, 7, 6, 5]);
//   out = "";
//   for (let item of s9) {
//     out += `${item} `;
//   }
//   document.querySelector(".out-9").innerHTML = out
// };
// document.querySelector(".b-9").onclick = f9;
// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна принимать набор set в качестве параметра и выводить его в указанный элемент. Элемент указывается как второй параметр функции f10. Вывод значений - через пробел.


var f10 = function f10(out_set, elem) {
  var out = " ";
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = out_set[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var item = _step3.value;
      out += "".concat(item, " ");
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  document.querySelector(elem).innerHTML = out;
};

document.querySelector(".b-10").onclick = function () {
  var a10 = new Set(["4", "5", "6"]);
  f10(a10, ".out-10");
}; // Task 11
//  При нажатии b-11 выполняете функцию f11. Функция должна преобразовать массив a11 в набор. И выводить в консоль. Изучите вывод получившегося набора. Разберитесь почему так происходит.
// Да, эта задача решена! Просто разберитесь.


var f11 = function f11() {
  var s = new Set();
  s.add([1]);
  s.add([1]);
  console.log(s);
};

document.querySelector(".b-11").onclick = f11; // Task 12
//   При нажатии b-12 выполняете функцию f12. Функция должна преобразовать строку str12 в массив, так, что каждая буква - отдельный элемент массива. Потом создать набор на основе массива и возвратить его.

var str12 = "The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children";

var f12 = function f12() {
  var ar12 = str12.split("");
  var s12 = new Set(ar12); // console.log(ar12);
  // console.log(s12);

  return s12;
};

document.querySelector(".b-12").onclick = function () {
  console.log(f12());
}; // Task 13
//  При нажатии b-13 выполняете функцию f13. Функция должна преобразовать строку str13 в массив, причем каждая буква - отдельный элемент массива. Потом создать набор на основе массива. Затем, перебирая набор поэлементам, найти сколько раз каждый символ встречается в исходном массиве. Результат - в виде объекта типа { символ : количество, символ : количество } вывести в консоль и возвратить.
// пример результата для строки 'Hello ho'
// { "H" : 1, 'e' : 1, 'l' : 2, "o" : 2, " ": 1}


var str13 = "The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children";

var f13 = function f13() {
  //   let newObj = {};
  //   let ar13 = str13.split("");
  //   let s13 = new Set(ar13);
  //   let count = 0;
  //   for (let iterator of s13) {
  //     for (let i = 0; i < ar13.length; i++) {
  //       if (iterator === ar13[i]) {
  //         count++;
  //       }
  //     }
  //     newObj[iterator] = count;
  //     count = 0;
  //   }
  //   return newObj;
  // };
  var result = {};
  var chars = str13.split("");
  var count = 0;

  for (var i = 0; i < chars.length; i++) {
    count = result[chars[i]] ? result[chars[i]] : 0;
    result[chars[i]] = count + 1;
  }

  return result;
};

document.querySelector(".b-13").onclick = function () {
  console.log(f13());
}; // https://codepen.io/vvv7220/pen/qBOgxyZ?editors=1111
// let stroka = "1234545"; // основная строка
// function f() {
//   let myset = new Set(stroka); // set = 12345
//   let bukvi = {}; // ассоциативный массив = объект счетчик
//   for (let item of myset) {
//     /* перебираем set */
//     let counter = 0; /* счетчик символов */
//     for (let i = 0; i < stroka.length; i++) {
//       /* каждый раз пребираем всю строку */
//       if (stroka[i] === item) {
//         counter++; // крутим счет если есть такой символ
//       }
//     }
//     bukvi[item] = counter; /* добвляем результат [ символ ] = кол-во */
//   }
//   alert(bukvi[item]); // символы и их количество
// }
// document.querySelector(".b").onclick = () => {
//   console.log(f());
// };