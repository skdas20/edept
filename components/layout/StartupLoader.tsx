"use client";

import React from "react";
import LoadingScreen from "./LoadingScreen";

interface StartupLoaderProps {
  minDuration?: number;
}

export default function StartupLoader({ minDuration = 2500 }: StartupLoaderProps) {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const storageKey = "ece_startup_loader_seen";
    const hasPlayed = window.sessionStorage.getItem(storageKey) === "1";

    if (hasPlayed) {
      setVisible(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(false);
      window.sessionStorage.setItem(storageKey, "1");
    }, minDuration);

    return () => window.clearTimeout(timer);
  }, [minDuration]);

  if (!visible) {
    return null;
  }

  return <LoadingScreen />;
}
