"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4d968a6b-b4bd-43f7-a82a-c6e365a9ac45");
  }, []);

  return null;
};
