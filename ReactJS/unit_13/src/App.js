import './App.css';
import GoodsList from './containers/GoodsList';
import CartList from './containers/CartList';


function App() {
  return (
    <>
      <div>
        {/* {Вывод даных и зхранилища} */}
        <GoodsList />
        <CartList />
      </div>
    </>
  );
}

export default App;
