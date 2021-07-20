import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectValue, selectTest } from "./app/taskReducerSlice";

export default function Out() {
  const value = useSelector(selectValue); // получаем данные из store
  const text = useSelector(selectTest); // получаем данные из store

  const dispatch = useDispatch();

  return (
    <div>
      <p>{value}</p>
      <hr/>
      <p>{text}</p>
    </div>
  );
}
