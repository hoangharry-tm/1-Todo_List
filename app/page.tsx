import Image from "next/image";
import React from "react";
import Pomodoro from "@/public/pomodoroImg.svg";
import SignIn from "@/components/pages/entry/SignIn";
import styles from "./page.module.scss";

export default function Entry() {
  return (
    <div className={styles.outer}>
      <div className={styles.imgWrapper}>
        <Image
          src={Pomodoro.src}
          className={styles.pomodoroImg}
          alt="pomodoro image"
          priority
          fill
        />
      </div>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Welcome to the Todo List App!</h1>
        <h2 className={styles.subtitle}>👇🏻 Please Sign In! 🥺</h2>
        <SignIn />
      </div>
    </div>
  );
}
