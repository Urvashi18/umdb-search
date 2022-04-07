import React from "react";
import style from '../App/App.scss'

export interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <header className={style.AppHeader}>
      <h2>{props.title}</h2>
    </header>
  );
};