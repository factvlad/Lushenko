// импортируем массив из goods.json
const goods = [
    {
      "articul": "284s",
      "title": "Apple",
      "cost": 70,
      "image": "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-64.png"
    },
    {
      "articul": "2s8d",
      "title": "Lemon",
      "cost": 40,
      "image": "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Lemon-64.png"
    },
    {
      "articul": "2f4j",
      "title": "Orange",
      "cost": 55,
      "image": "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Orange-64.png"
    },
    {
      "articul": "3d7v",
      "title": "Mango for Marina",
      "cost": 3,
      "image": "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Mango-64.png"
    }
  ];
  
  // корзина
  
  const data = {'284s': 1, '2f4j': 1, '2s8d': 1, '3d7v': 3};
  // задача - перебрать корзину и вывести на страницу товар - описание цена
  // проблема в том, что это удобно делать методами массивов. А data  это объект. Итак что нужно
  // перебирать data и получить ключи (артикулы) 
  // зная артикул - я могу вытащить описание из goods
  // поехали крутить
  // Object.keys(data) // получаю массив ключей из data. А раз массив могу их применять
  // Object.keys(data).map(item => console.log(item));
  // итак, item - у нас артикул товара
  // но есть одно но... У нас не удобный goods
  let goods2 = {};
  for (let i =0; i < goods.length; i++) goods2[goods[i]['articul']] = goods[i];
  // console.log(goods2); // супер теперь мы его можем использовать
   Object.keys(data).map(item => {
     console.log(goods2[item]['title']);
     console.log(goods2[item]['cost'] * data[item]);
   });//
  