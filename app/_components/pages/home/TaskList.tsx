"use client";

import Card from "@/components/commons/Card";
import React from "react";
import styles from "./TaskList.module.scss";
import { useDataContext } from "@/app/_contexts/DataContext";

import "bootstrap-icons/font/bootstrap-icons.css";

type ITaskCard = {
  idx: number;
  title: string;
  desc?: string;
};

const TaskCard: React.FC<ITaskCard> = ({ idx, title, desc }: ITaskCard) => {
  const { data, setData } = useDataContext();
  const [editing, setEditing] = React.useState<boolean>(false);

  const handleRequestEdit = (e: React.MouseEvent) => {
    setEditing(true);
  };
  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(titleEdit, descEdit);
    if (!titleEdit) return;
    if (titleEdit === title && descEdit === desc) return;
    setData(
      data.map((task, i) =>
        i === idx ? { name: titleEdit, desc: descEdit } : task
      )
    );
    setEditing(false);
  };
  const handleDelete = (e: React.MouseEvent) => {
    setData(data.filter((_, i) => i !== idx));
  };
  const [titleEdit, setTitleEdit] = React.useState<string>(title);
  const [descEdit, setDescEdit] = React.useState<string | undefined>(desc);

  return (
    <>
      {editing ? (
        <form className={styles.formEditTask} onSubmit={handleEdit}>
          <label className={styles.labelForEditForm}>
            Title:{" "}
            <input
              type="text"
              defaultValue={title}
              onChange={(e) => setTitleEdit(e.target.value)}
              className={styles.input}
            />
          </label>
          <label className={styles.labelForEditForm}>
            Description:{" "}
            <input
              type="text"
              defaultValue={desc}
              onChange={(e) => setDescEdit(e.target.value)}
              className={styles.input}
            />
          </label>
          <button className={styles.btn}>Save</button>
        </form>
      ) : (
        <Card title={title} desc={desc}>
          <div className={styles.btns}>
            {/* Edit button */}
            <button className={styles.btn} onClick={handleRequestEdit}>
              <i className="bi bi-pencil-square"></i>
            </button>

            {/* Delete button */}
            <button className={styles.btn} onClick={handleDelete}>
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </Card>
      )}
    </>
  );
};

const Task: React.FC = () => {
  const { data, setData } = useDataContext();

  return (
    <div>
      {data.map((task, index) => {
        return (
          <TaskCard
            key={index}
            idx={index}
            title={task.name}
            desc={task.desc}
          />
        );
      })}
    </div>
  );
};

export const TaskList: React.FC = () => {
  return (
    <div className={styles.container}>
      <Task />
    </div>
  );
};
