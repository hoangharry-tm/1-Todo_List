import React from "react";
import Card from "@/components/commons/Card";
import styles from "./TaskList.module.scss";
import { dummyData } from "./dummyData";

const TaskCard: React.FC = () => {
  return (
    <div>
      {dummyData.map((task, index) => {
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
