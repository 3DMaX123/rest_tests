"use client";

import React, {useEffect, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import InputField from "@ui/InputField";
import {menu} from "@c/menu";
import {randomNumber} from "@ut/generateRandom";
import styles from "@s/components/bestiary/bestiary-search.module.css";

const SEARCH_PARAM_KEY = "search" as const;

const BestiarySearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const valueFromParams = searchParams?.get(SEARCH_PARAM_KEY) || "";

  const [value, setValue] = useState<string>(valueFromParams);
  const [placeholder, setPlaceholder] = useState("");

  const setSearchParams = () => {
    const params = new URLSearchParams(searchParams);
    if (value === "") {
      router.push(pathname);
    } else {
      params.set(SEARCH_PARAM_KEY, value);
      router.push(`${pathname}?${params}`);
    }
  };

  const handleSearch = (newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    const generatePlaceholder = () => {
      let name = "";
      for (let i = 0; i < 3; i++) {
        name += menu[randomNumber(0, menu.length - 1)].name + ",";
      }
      return name.slice(0, -1).toLowerCase();
    };

    setPlaceholder(generatePlaceholder());
  }, []);

  return (
    <div className={styles.inputField}>
      <InputField
        setValue={(e) => handleSearch(e.target.value)}
        value={value}
        className={styles.input}
        placeHolder={`Наприклад: ${placeholder}`}
        triggerInput={setSearchParams}
      />
      <button className={styles.button} onClick={setSearchParams}>
        <img src="/arrow.svg" className={styles.arrow} />
      </button>
    </div>
  );
};

BestiarySearch.displayName = "BestiarySearch";

export default BestiarySearch;
