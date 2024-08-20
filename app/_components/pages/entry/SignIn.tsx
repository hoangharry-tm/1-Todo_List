"use client";
import React, { useEffect } from "react";
import styles from "./SignIn.module.scss";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [success, setSuccess] = React.useState<boolean>(false);
  const [checking, setChecking] = React.useState<boolean>(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    setChecking(true);

    try {
      // TODO: Authentication logics here!!!
      setEmail("");
      setPassword("");

      setSuccess(true);
    } catch (error) {
      setChecking(false);
    }
  };

  useEffect(() => {
    if (success) {
      redirect("/home");
    }
  }, [success]);

  return (
    <div className={styles.container}>
      {checking ? (
        <p>We are signing you in. Please wait... 😊</p>
      ) : (
        <form className={styles.signInForm} onSubmit={handleSignIn}>
          <input
            type="email"
            required
            placeholder="Email"
            className={styles.signInInput}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            required
            placeholder="Password"
            className={styles.signInInput}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.signInBtn}>
            Sign In
          </button>
        </form>
      )}

      <p>
        You haven&rsquo;t had an account yet?{" "}
        <Link href="/signup">Sign Up</Link>
      </p>

      <span>⎯ Or ⎯</span>
      {/* TODO: implement Github signin */}
      <p>Sign in with GitHub</p>
      {/* TODO: implement Google signin */}
      <p>Sign in with Google</p>
    </div>
  );
}
