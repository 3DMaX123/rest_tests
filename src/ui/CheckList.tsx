"use client";

import {ChangeEvent, memo, useCallback, useMemo} from "react";
import styles from "@s/ui/check-list.module.css";
import {ICheckListProps} from "@t/ui/check-list";

const CheckList = memo(({list, selectedItems, onUpdate}: ICheckListProps) => {
  // Convert array to Set for O(1) lookup
  const freezedSelectedItems = useMemo(() => new Set(selectedItems), [selectedItems]);

  const handleChange = useCallback((
      e: ChangeEvent<HTMLInputElement>,
  ) => {
    onUpdate(e.target.id, e.target.checked ? "save" : "delete");
  }, [onUpdate]);

  return (
    <ul className={styles.checkList}>
      {list.map(([id, label]) => (
        <li key={id}>
          <input
            type="checkbox"
            id={id}
            checked={freezedSelectedItems.has(id)}
            onChange={handleChange}
          />
          <label htmlFor={id}>{label}</label>
        </li>
      ))}
    </ul>
  );
});

CheckList.displayName = "CheckList";

export default CheckList;
