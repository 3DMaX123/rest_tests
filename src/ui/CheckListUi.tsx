"use client";

import {ChangeEvent, memo, useCallback, useState} from "react";
import styles from "@s/ui/check-list.module.css";
import {ICheckListUiProps} from "@t/ui/check-list-ui";
import Button from "@ui/Button";

const CheckListUi = memo(({list, cookieItems, onUpdate}: ICheckListUiProps) => {
  const [localSelected, setLocalSelected] = useState(new Set(cookieItems));

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {id, checked} = e.target;
    setLocalSelected((prev) => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  }, []);

  const handleSave = useCallback(async () => {
    onUpdate(Array.from(localSelected));
  }, [localSelected, cookieItems]);

  return (
    <div className={styles.checkList}>
      <ul className={styles.list}>
        {list.map(([id, label]) => (
          <li key={id}>
            <input
              type="checkbox"
              id={id}
              checked={localSelected.has(id)}
              onChange={handleChange}
            />
            <label htmlFor={id}>{label}</label>
          </li>
        ))}
      </ul>

      <Button
        text="Зберегти"
        is="button"
        action={handleSave}
        className={styles.button}
      />
    </div>
  );
});

CheckListUi.displayName = "CheckListUi";

export default CheckListUi;
