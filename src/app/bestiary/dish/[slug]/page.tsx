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

export const metadata: Metadata = {
  title: "Дізнайся більше про страви | Restaurant tests",
};

export async function generateStaticParams() {
  const posts = menu;

  return posts.map((post) => ({
    slug: post.url,
  }));
}

interface IParams {
  params: Promise<{slug: string}>
}

const page = async ({params}: IParams) => {
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
