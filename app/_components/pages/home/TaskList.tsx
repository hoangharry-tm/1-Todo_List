"use client";

import Card from "@/components/commons/Card";
import React from "react";
import styles from "./TaskList.module.scss";
import { useDataContext } from "@/app/_contexts/Tasks";

const TaskCard: React.FC = () => {
  const { data, setData } = useDataContext();
  return (
    <div>
      {data.map((task, index) => {
        return <Card key={index} title={task.name} desc={task.desc} />;
      })}
    </div>
  );
};

export const TaskList: React.FC = () => {
  return (
    <div className={styles.container}>
      <TaskCard />
    </div>
  );
};
