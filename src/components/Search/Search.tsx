import React, { useState } from "react";
import style from '../App/App.scss'

export interface SearchProps {
  searchAction: (searchQuery: string) => void;
}

export const Search = (props: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const callSearchFunction = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.searchAction(searchValue);
  }

  return (
      <form className={style.search}>
        <input
          className="searchbox"
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Search UMDB"
        />
        <input onClick={callSearchFunction} className='submit' type="submit" value="SEARCH" />
      </form>
    );
}