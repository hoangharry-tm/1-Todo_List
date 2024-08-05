"use client";

import React, { useEffect, useState } from "react";
import setData, { dummyData } from "./dummyData";
import styles from "./TaskManager.module.scss";

export default function TaskManager() {
  const [tasks, setTasks] = useState(dummyData);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };
  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log({ name, desc });
    setTasks([...tasks, { name, desc }]);
    // console.log(tasks);
    setName("");
    setDesc("");
  };
  useEffect(() => {
    console.log("Here is the Effect Hook: \n");
    console.log(tasks);

    setData(tasks[tasks.length - 1]);
    console.log(dummyData);
  }, [tasks]);

  return (
    <form className={styles.form}>
      <label>
        Please provide the task&apos; name:{" "}
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <label>
        Any description?{" "}
        <input type="text" value={desc} onChange={handleChangeDesc} />
      </label>
      <button type="submit" onClick={handleFormSubmit}>
        Create
      </button>
    </form>
  );
}
