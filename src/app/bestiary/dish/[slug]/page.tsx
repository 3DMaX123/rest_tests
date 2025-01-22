import React from "react";
import AnimOpc from "@r/src/animations/AnimOpc";
import MainWindow from "@r/src/components/MainWindow";
import {HEADERS} from "@r/src/constants/constants";
import styles from "@s/pages/bestiary-slug.module.css";
import DishDetailsWindow from "@r/src/components/DishDetailsWindow";
import {menu} from "@r/src/constants/menu";
import {notFound} from "next/navigation";
import {Metadata} from "next";
import Button from "@r/src/ui/Button";

export const metadata: Metadata = {
  title: "Дізнайся більше про страви | Restaurant tests",
};

const page = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const slug: string = (await params).slug;

  const getDish = () => {
    const dish = menu.find((item) => item.url === slug);

    if (!dish) {
      notFound();
    }

    return dish;
  };
  return (
    <AnimOpc className={styles.mainWindow}>
      <MainWindow
        header={HEADERS.bestiary.slug.header}
        subHeader={HEADERS.bestiary.slug.subHeader}
      >
        <div className={styles.dishRestriction}>
          <DishDetailsWindow
            dish={getDish()}
            variant="bestiary"
          />
        </div>
        <Button is="link" to="/bestiary" text="Повернутись назад" />
      </MainWindow>
    </AnimOpc>
  );
};

export default page;
