"use strict";

// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение сохраненное под ключем two из массива a1. Возвратите это значение.
// Первая задача дана в качестве примера.
function f1() {
  var a1 = {
    one: 15,
    two: 16,
    five: 20
  };
  document.querySelector(".out-1").innerHTML = a1.two; //return ...
}

document.querySelector(".b-1").onclick = f1; // Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.
// Вывод, как и в предыдущем задании пишем "руками"

function f2() {
  var a2 = {
    one: "hello",
    two: "mahai",
    five: "hi"
  };
  return a2.five;
}

document.querySelector(".b-2").onclick = function () {
  document.querySelector(".out-2").innerHTML = f2();
}; //
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение hi из массива a3. Возвратите это значение. Вывод - через пробел.
// Вывод, как и в предыдущем задании пишем "руками"


function f3() {
  var div = document.querySelector(".out-3");
  var out = "";
  var a3 = {
    one: "hello",
    two: "mahai",
    five: "hi",
    test: 21,
    odd: "hi",
    mix: "mix"
  };
  return "".concat(a3.five, " ").concat(a3.odd);
}

document.querySelector(".b-3").onclick = function () {
  document.querySelector(".out-3").innerHTML = f3();
}; // Task 4
// Давайте напишем функцию f4, которая будет выводить массив a4 в out-4 при нажатии кнопки b-4. Формат вывода - ключ пробел значение перенос строки +' <br>'. Функция должна возвращать строку в указанном формате вывода.
// Обратите внимание на пробел перед br!!!!!!!!!


var a4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix"
};

function f4() {
  var out = " ";

  for (var key in a4) {
    out += "".concat(key, " ").concat(a4[key], " <br>");
  }

  return out;
}

document.querySelector(".b-4").onclick = function () {
  document.querySelector(".out-4").innerHTML = f4();
}; // Task 5
// Функция f4 жестко привязана к массиву a4. Это не удобно. Давайте напишем функцию f5, которая принимает массив как параметр и выводит его в формате указанном в функции в указанный блок (как второй параметр).


function f5(arr, block) {
  var out = "";

  for (var key in arr) {
    out += "".concat(key, " : ").concat(arr[key], " <br>");
  }

  return document.querySelector(block).innerHTML = out;
} // давайте протестируем f5


document.querySelector(".b-5").onclick = function () {
  var a5 = {
    one: 1,
    two: 2
  };
  f5(a5, ".out-5");
}; // Task 6
// Добавьте input .i-61 и i-62. При нажатии b-6 выполняете функцию f6. Функция должна получать из i-61 ключ, а из i-62 значение и добавлять его в массив a6. После этого, с помощью функции f5 выводите массив a6 в out-6.


var a6 = {
  b: 17,
  e: 22
};

function f6() {
  var i61 = document.querySelector(".i-61").value;
  var i62 = document.querySelector(".i-62").value;
  a6[i61] = i62;
  f5(a6, ".out-6");
}

document.querySelector(".b-6").onclick = f6; // Task 7
// Добавьте input .i-7. При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 ключ. Если такой ключ есть в a7 то выводить 1 в out-7, если нет - 0.

var a7 = {
  b: 17,
  e: 22
};

function f7() {
  var div = document.querySelector(".out-7");
  var inp1 = document.querySelector(".i-7").value;
  var out = "";
  a7[inp1] == undefined ? out = 0 : out = 1;
  if (inp in a7) div.innerHTML = out;
}

document.querySelector(".b-7").onclick = f7; // Task 8
// Добавьте input .i-8. При нажатии b-8 выполняете функцию f8. Функция должна выводить значение в out-8, если ключ введенный в i-8 есть в массиве, если нет - 0.

var a8 = {
  b: 17,
  e: 22
};

function f8() {
  // let div = document.querySelector(".out-8");
  // let inp1 = document.querySelector(".i-8").value;
  // let out = "";
  // a8[inp1] !== undefined ? out = a8[inp1] : out = 0;
  // div.innerHTML = out;
  // console.log(a8);
  // console.log(a8[inp1]);
  // let div = document.querySelector(".out-8");
  // let input = document.querySelector(".i-8").value;
  //   if (a8[input] !== key) {
  //     div.innerHTML = a8[input];
  //   }
  //   if (a8[input] == key) {
  //     div.innerHTML = 0;
  //   }
  var div = document.querySelector(".out-8");
  var input = document.querySelector(".i-8").value;

  if (input in a8) {
    div.innerHTML = a8[input];
  } else {
    div.innerHTML = 0;
  }
}

document.querySelector(".b-8").onclick = f8; // Task 9
// Добавьте input .i-9. При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 все ключи массива a9, которые содержат значение, равное значению в input.i-9. Вывод через пробел. Если значений - нет - то выводить пустую строку.

var a9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54
}; // function f9() {
//   let div = document.querySelector(".out-9");
//   let inp1 = +document.querySelector(".i-9").value;
//   let out = "";
//   for (let key in a9) {
//     out += a9[key] === inp1 ? `${key} ` : "";
//   }
//   div.innerHTML = out;
// }

function f9() {
  var input = document.querySelector(".i-9").value;
  var div = "";

  for (var key in a9) {
    if (a9[key] == input) {
      div += [key] + " ";
      console.log([key]);
    } else {
      div += "";
    }
  }

  document.querySelector(".out-9").innerHTML = div;
}

document.querySelector(".b-9").onclick = f9; // Task 10
// Давайте напишем полезную функцию f10, которая проверяет есть ли значение в ассоциативном массиве. Фукнция должна возвращать true если есть, и false если нет. Массив и значение передавать функции в качестве параметров.

function f10(arr, val) {
  var a = false;

  for (var key in arr) {
    if (arr[key] === val) {
      a = true;
    }
  }

  return a;
}

document.querySelector(".b-10").onclick = function () {
  var a10 = {
    k: 22,
    d: 54,
    m: 22
  };
  document.querySelector(".out-10").innerHTML = f10(a10, 23);
}; // Task 11
// При нажатии b-11 выполняете функцию f11. Функция должна получить ключ из i-11 и удалить запись из массива a11 с таким ключем. После этого вывести массив в out-11. Для вывода используйте функцию f5.


var a11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54
};

function f11() {
  var inp1 = document.querySelector(".i-11").value;
  delete a11[inp1];
  f5(a11, ".out-11");
}

document.querySelector(".b-11").onclick = f11; // Task 12
//  При нажатии b-12 выполняете функцию f12. Функция должна получить значение из i-12 и удалить запись из массива a12 с таким значением. После этого вывести массив в out-12. Для вывода используйте функцию f5.

var a12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17
};

function f12() {
  var inp1 = document.querySelector(".i-12").value;

  for (var key in a12) {
    // a12[key] === inp1 ? delete a12[key] : a12;
    if (a12[key] == inp1) {
      return delete a12[key];
    }
  }

  f5(a12, ".out-12");
}

document.querySelector(".b-12").onclick = f12; // Task 13
// При нажатии b-13 выполняете функцию f13. Функция должна в out-13 выводить сумму значений массива a13 (только числа).

var a13 = {
  prim: "hello",
  one: 4,
  testt: "vodoley",
  ivan: 6
};

function f13() {
  // let div = document.querySelector(".out-13");
  // let out = "";
  // for (let key in a13) {
  //   out = a13.one + a13.ivan;
  // }
  var out = 0;

  for (var key in a13) {
    typeof a13[key] === "number" ? out += a13[key] : "";
  }

  div.innerHTML = out;
}

document.querySelector(".b-13").onclick = f13; // Task 14
// При нажатии b-14 выполняете функцию f14. Функция должна в out-14 выводить нулевые (по индексу)  элементы вложенных массивов в a14. Вывод через пробел.
// Ожидаемый вывод - 1 3 6 9

var a14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  testt: [6, 7, 8],
  ivan: [9, 10]
};

function f14() {
  var div = document.querySelector(".out-14");
  var out = "";

  for (var key in a14) {
    out += "".concat(a14[key][0], " ");
  }

  div.innerHTML = out;
}

document.querySelector(".b-14").onclick = f14; // Task 15
// При нажатии b-15 выполняете функцию f15. Функция должна в out-15 выводить элементы вложенных массивов в a15. Вывод через пробел.
// т.е ожидаем 1 2 23 3 5 6 7 8 9 10

var a15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  ivan: [9, 10]
};

function f15() {
  var div = document.querySelector(".out-15");
  var out = "";

  for (var key in a15) {
    for (var _i = 0; _i < a15[key].length; _i++) {
      out += "".concat(a15[key][_i], " ");
    }
  }

  console.log(out);
  div.innerHTML = out;
}

document.querySelector(".b-15").onclick = f15; // Task 16
// При нажатии b-16 выполняете функцию f16. Функция должна в out-16 выводить элементы name вложенных массивов в a16. Вывод через пробел.

var a16 = {
  iis8sj: {
    name: "Ivan",
    age: 27
  },
  iiss7j: {
    name: "Petr",
    age: 26
  },
  s3s8sj: {
    name: "Serg",
    age: 47
  }
};

function f16() {
  // let div = document.querySelector(".out-16");
  // let out = "";
  // for (let key in a16) {
  //   for (let key2 in a16[key]) {
  //     // key2 === "name" ? (out += `${a16[key]["name"]} `) : "";
  //     if (key2 === "name") {
  //       out += `${a16[key]["name"]} `;
  //     }
  //   }
  // }
  // div.innerHTML = out;
  var out = "";

  for (var key in a16) {
    out += a16[key]["name"] + " ";
  }

  document.querySelector(".out-16").innerHTML = out;
}

document.querySelector(".b-16").onclick = f16; // Task 17
// При нажатии b-17 выполняете функцию f17. Функция должна в out-17 выводить элементы name вложенных массивов в a17 для который age > 30. Вывод через пробел.

var a17 = {
  iis8sj: {
    name: "Ivan",
    age: 27
  },
  iiss7j: {
    name: "Petr",
    age: 26
  },
  s3s8sj: {
    name: "Serg",
    age: 47
  }
};

function f17() {
  var out = "";

  for (var key in a17) {
    if (a17[key]["age"] > 30) out += a17[key]["name"] + " ";
  }

  var div = document.querySelector(".out-17"); // for (let key in a17) {
  //   for (key2 in a17[key]) {
  //     if (key2 === "age" && a17[key]["age"] > 30) {
  //       out += `${a17[key]["name"]} `;
  //     }
  //   }
  // }

  div.innerHTML = out;
}

document.querySelector(".b-17").onclick = f17; // Task 18
// При нажатии b-18 выполняете функцию f18. Функция должна в out-18 вывести станции метро из массива a18 той ветки, которую пользователь ввел в i-18. Вывод станций - через пробел. Если ветка не найдена выводите пустую строку.

var a18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"]
};

function f18() {
  // let div = document.querySelector(".out-18");
  // let inp  = document.querySelector(".i-18").value;
  // let out = "";
  // for (let key in a18) {
  //   if (a18[inp] !== undefined) {
  //     for (let i = 0; i < a18[inp].length; i++) {
  //       out += `${a18[inp][i]} `;
  //     }
  //   } else {
  //     out += " ";
  //   }
  // }
  // div.innerHTML = out;
  // let bran = document.querySelector(".i-18").value;
  var div = document.querySelector(".out-18"); // let out = "";
  // for (let key in a18) {
  //   if (key === bran) {
  //     for (let i = 0; i < a18[key].length; i++) {
  //       out += `${a18[key][i]} `;
  //     }
  //   } else {
  //     out += "";
  //   }
  // }

  var input = document.querySelector(".i-18").value;
  var out = "";

  for (var key in a18) {
    if (input === key) {
      for (i = 0; i < a18[key].length; i++) {
        out += a18[key][i] + " ";
      }
    } else {
      out += "";
    }
  }

  div.innerHTML = out;
}

document.querySelector(".b-18").onclick = f18; // Task 19
// При нажатии b-19 выполняете функцию f19. Функция должна в out-19 вывести цвет ветки станции которую пользователь ввел в i-19. Пользователь может вводить текст как с большой, так и с маленькой буквы. Если ветка не найдена - выводите пустую строку.
// Пользователь ввел Lisova - вывод red, ввел Obolon - вывод blue.

var a19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"]
};

function f19() {
  var station = document.querySelector(".i-19").value;
  var div = document.querySelector(".out-19");
  var out = "";

  for (var key in a19) {
    for (var _i2 = 0; _i2 < a19[key].length; _i2++) {
      if (a19[key][_i2].toLowerCase() === station.toLowerCase()) {
        out = [key];
      }
    }
  }

  div.innerHTML = out;
}

document.querySelector(".b-19").onclick = f19; // Task 20
// При нажатии b-20 выполняете функцию f20. Функция должна в out-20 вывести название станции которые содержат переход на другую ветку. Такие станции маркируются 2. Вывод через пробел

var a20 = {
  red: [["Akademmistechko", 1], ["Nyvky", 0], ["Universytet", 3], ["Lisova", 1]],
  blue: [["Minska", 1], ["Obolon", 0], ["Pochaina", 2], ["Holosiivska", 0]],
  green: [["Syrets", 1], ["Zoloti Vorota", 2], ["Klovska", 0], ["Vidubichi", 1]]
};

function f20() {
  var div = document.querySelector(".out-20");
  var out = "";

  for (var key in a20) {
    for (var _i3 = 0; _i3 < a20[key].length; _i3++) {
      // a20[key][i][1] === 2 ? (out += `${a20[key][i][0]} `) : (out += "");
      if (a20[key][_i3][1] === 2) {
        out += "".concat(a20[key][_i3][0], " ");
      } else {
        out += "";
      }
    }
  }

  div.innerHTML = out;
}

document.querySelector(".b-20").onclick = f20;