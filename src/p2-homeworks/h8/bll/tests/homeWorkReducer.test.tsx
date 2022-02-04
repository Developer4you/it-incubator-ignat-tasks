import React from "react";
import { userType } from "../../HW8";
import { homeWorkReducer } from "../homeWorkReducer";

let initialState: Array<userType>;

beforeEach(() => {
  initialState = [
    { _id: 0, name: "Кот", age: 3 },
    { _id: 1, name: "Александр", age: 66 },
    { _id: 2, name: "Коля", age: 16 },
    { _id: 3, name: "Виктор", age: 44 },
    { _id: 4, name: "Дмитрий", age: 40 },
    { _id: 5, name: "Ирина", age: 55 },
  ];
});

test("sort name up", () => {
  const newState = homeWorkReducer(initialState, {
    type: "sort",
    payload: "up",
  });

  expect(newState[0]._id).toBe(1);
});
test("sort name down", () => {
  const newState: Array<userType> = homeWorkReducer(initialState, {
    type: "sort",
    payload: "down",
  });

  expect(newState[5]._id).toBe(1);
});
test("check age 18", () => {
  const newState: Array<userType> = homeWorkReducer(initialState, {
    type: "check",
    payload: 18,
  });
  let result = newState.filter((e) => e.age > 17);
  expect(result.length).toBe(newState.length);
});
