import React, {FC} from "react";
import styles from "@s/ui/check-list.module.css";
import {ICheckListAdaptationProps} from "@t/ui/check-list-adaptation";
import Button from "@ui/Button";
import AnimOpc from "@anim/AnimOpc";

const CheckListAdaptation: FC<ICheckListAdaptationProps> = ({
  list,
  localSelected,
  handleChange,
  handleSave,
}) => {
  return (
    <AnimOpc>
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
    </AnimOpc>
  );
};

CheckListAdaptation.displayName = "CheckListAdaptation";

export default CheckListAdaptation;
