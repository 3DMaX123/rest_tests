"use client";

import {ChangeEvent, memo, useCallback, useState} from "react";
import styles from "@s/ui/check-list.module.css";
import {ICheckListUiProps} from "@t/ui/check-list-ui";
import CheckListAdaptation from "@ui/CheckListAdaptation";
import AnimOnExit from "@anim/AnimOnExit";
import AnimOpc from "@anim/AnimOpc";

const CheckListUi = memo(({list, cookieItems, onUpdate}: ICheckListUiProps) => {
  const [localSelected, setLocalSelected] = useState<Set<string>>(new Set(cookieItems));
  const [openAdaptation, setOpenAdaptation] = useState<boolean>(false);

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
    setOpenAdaptation(false);
  }, [localSelected, cookieItems]);

  return (
    <div>
      <div className={styles.checkListAdaptation}>
        <AnimOnExit>
          {openAdaptation &&
          <CheckListAdaptation
            localSelected={localSelected}
            handleChange={handleChange}
            handleSave={handleSave}
            list={list}
          />
          }
        </AnimOnExit>
        <AnimOnExit>
          <AnimOpc>
            {!openAdaptation &&
            <img
              className={styles.menuTablet}
              onClick={
                () =>
                  setOpenAdaptation(true)
              }
              src="/menu.svg"
              alt="Menu"
            />
            }
          </AnimOpc>
        </AnimOnExit>
      </div>
      <div className={styles.checkListRegular}>
        <CheckListAdaptation
          localSelected={localSelected}
          handleChange={handleChange}
          handleSave={handleSave}
          list={list}
        />
      </div>
    </div>
  );
});

CheckListUi.displayName = "CheckListUi";

export default CheckListUi;
