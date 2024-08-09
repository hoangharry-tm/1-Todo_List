"use client";

import React, { useContext, useState } from "react";
import styles from "./TaskManager.module.scss";
import { useDataContext } from "@/app/_contexts/Tasks";

export default function TaskManager() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const { data, setData } = useDataContext();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData([...data, { name, desc }]);
    setName("");
    setDesc("");
  };

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
      <button type="submit" onClick={handleSubmit}>
        Create
      </button>
    </form>
  );
}
