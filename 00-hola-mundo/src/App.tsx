import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="Mauricio" initialIsFollowing={false}>
        Mauricio Gualteros
      </TwitterFollowCard>

      <TwitterFollowCard userName="Midudev"> Miguel angel</TwitterFollowCard>
    </section>
  );
}
