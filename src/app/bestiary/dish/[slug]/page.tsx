import React from "react";
import AnimOpc from "@anim/AnimOpc";
import MainWindow from "@comp/MainWindow";
import {HEADERS} from "@c/constants";
import styles from "@s/pages/bestiary-slug.module.css";
import DishDetailsWindow from "@comp/DishDetailsWindow";
import {menu} from "@c/menu";
import {notFound} from "next/navigation";
import {Metadata} from "next";
import Button from "@ui/Button";
import {encodeUrl} from "@ut/encodeUrl";
interface IParams {
  params: Promise<{slug: string}>
}

export function generateMetadata({params}: IParams): Metadata {
  const dish = menu.find(async (item) => item.url === (await params).slug);
  return {
    title: dish ? `${dish.name} | Restaurant tests` : "Страву не знайдено",
  };
}

export function generateStaticParams() {
  return menu.map((dish) => ({
    slug: encodeUrl(dish.url),
  }));
}

const page = async ({params}: IParams) => {
  const slug: string = (await params).slug;
  const dish = menu.find((item) => encodeUrl(item.url) === slug);

  if (!dish) {
    notFound();
  }

  return (
    <AnimOpc className={styles.mainWindow}>
      <MainWindow
        header={HEADERS.bestiary.slug.header}
        subHeader={HEADERS.bestiary.slug.subHeader}
      >
        <div className={styles.dishRestriction}>
          <DishDetailsWindow
            dish={dish}
            variant="bestiary"
          />
        </div>
        <Button is="link" to="/bestiary" text="Повернутись назад" />
      </MainWindow>
    </AnimOpc>
  );
};

export default page;
