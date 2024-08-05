import React from "react";
import styles from "./Card.module.scss";

type Props = {
  title: string;
  desc?: string;
};

export default function Card(props: Props) {
  return (
    <div
      className={styles.card} /*style={{ height: props.desc ? "100px" : "" }}*/
    >
      <h2 className={styles.content}>{props.title}</h2>
      <div className={styles.content}>{props.desc}</div>
    </div>
  );
}
