import React from "react";
import { connect, useDispatch } from "react-redux";
import { addNewUser } from "../actions";

const AddUser = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.dir(e.target.elements.passport.value);
          console.dir(e.target.elements.name.value);
          console.dir(e.target.elements.age.value);

          dispatch(
            addNewUser(
              e.target.elements.passport.value,
              e.target.elements.name.value,
              e.target.elements.age.value
            )
          );
        }}
      >
        <input name="passport" defaultValue="Введите данные паспорта" />
        <input name="name" defaultValue="Ваше имя" />
        <input name="age" defaultValue="Ваш возраст" />
        <button type="submit">ЗАПУШИТЬ</button>
      </form>
    </div>
  );
};

export default connect()(AddUser);
