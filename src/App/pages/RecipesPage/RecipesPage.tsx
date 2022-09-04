import { useEffect, useState } from "react";

import background from "@assets/images/BACKGROUND2.png";
import Card from "@components/Card";
import Input from "@components/Input";
import Loader from "@components/Loader";
import MultiDropdown from "@components/MultiDropdown";
import { observer } from "mobx-react-lite";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

import RecipesStore from "./../../../store/RecipesStore/RecipesStore";
import styles from "./RecipesPage.module.scss";

const RecipesPage = () => {
  useEffect(() => {
    RecipesStore.getRecipes();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src={background} alt="" className={styles.img} />
        <div className={styles["search-block"]}>
          <Input onChange={() => {}} />
          <MultiDropdown />
        </div>

        {!false ? (
          // <InfiniteScroll
          //   dataLength={Recipes.length}
          //   next={() => {
          //     setNum(num + 10);
          //   }}
          //   hasMore={hasMore}
          //   className={styles.scroll}
          //   loader={<Loader className={styles.center} />}
          //   endMessage={
          //     <p style={{ textAlign: "center" }}>
          //       <b>Yay! You have seen it all</b>
          //     </p>
          //   }
          // >
          <div className={styles.recipes}>
            {RecipesStore.recipesList.map((recipe) => (
              <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                <Card
                  likesCount={recipe.likesCount}
                  image={recipe.image}
                  title={recipe.title}
                  ingredients={recipe.ingredients}
                  countKcal={recipe.countKcal}
                  onClickForButton={() => {}}
                  id={recipe.id}
                />
              </Link>
            ))}
          </div>
        ) : (
          // </InfiniteScroll>
          <Loader className={styles.center} />
        )}
      </div>
    </div>
  );
};

export default observer(RecipesPage);
