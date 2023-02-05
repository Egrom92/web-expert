import { useState, useEffect } from "react";

export default function useBodyScrollLock(isLocked) {
  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;

    if (isLocked) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]);
}