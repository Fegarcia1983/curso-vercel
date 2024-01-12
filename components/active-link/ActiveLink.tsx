"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import style from "./ActiveLink.module.css";

interface Props {
  text: string;
  path: string;
}

export const ActiveLink = ({ text, path }: Props) => {
  const pathName = usePathname();
  return (
    <Link
      className={`${style.link} ${
        pathName === path ? style["active-link"] : null
      }`}
      href={path}
    >
      {text}
    </Link>
  );
};
