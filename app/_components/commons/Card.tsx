import React, { PropsWithChildren } from "react";
import styles from "./Card.module.scss";

interface Props extends PropsWithChildren {
  title: string;
  desc?: string;
}

export default function Card({ title, desc, children }: Props) {
  return (
    <div className={styles.card}>
      <h2 className={styles.content}>{title}</h2>
      <div className={styles.content}>{desc}</div>
      {children}
    </div>
  );
}
