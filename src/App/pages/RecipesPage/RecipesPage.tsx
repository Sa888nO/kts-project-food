import Card from "@components/Card";
import { Input } from "@components/Input/Input";
import { MultiDropdown } from "@components/MultiDropdown/MultiDropdown";

import "./RecipesPage.scss";

const RecipesPage = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <img src="./BACKGROUND2.png" alt="" className="img" />
        <div className="search-block">
          <Input
            onChange={(e) => {
              console.log(e);
            }}
            value={"Search"}
          />
          <MultiDropdown />
        </div>

        <div className="recipes">
          <Card
            likesCount={1}
            image="./pngfind1.png"
            title="Burger1"
            ingredients="1 2 3"
            countKcal={200}
            onClickForButton={(id) => {
              console.log(id);
            }}
            id={1}
            onClick={(title) => {
              console.log("click " + title);
            }}
          />
          <Card
            likesCount={2}
            image="./pngfind1.png"
            title="Burger2"
            ingredients="1 2 3"
            countKcal={200}
            onClickForButton={(id) => {
              console.log(id);
            }}
            id={2}
            onClick={(title) => {
              console.log("click " + title);
            }}
          />
          <Card
            likesCount={3}
            image="./pngfind1.png"
            title="Burger3"
            ingredients="1 2 3"
            countKcal={200}
            onClickForButton={(id) => {
              console.log(id);
            }}
            id={3}
            onClick={(title) => {
              console.log("click " + title);
            }}
          />
          <Card
            likesCount={4}
            image="./pngfind1.png"
            title="Burger4"
            ingredients="1 2 3"
            countKcal={200}
            onClickForButton={(id) => {
              console.log(id);
            }}
            id={4}
            onClick={(title) => {
              console.log("click " + title);
            }}
          />
          <Card
            likesCount={5}
            image="./pngfind1.png"
            title="Burger5"
            ingredients="1 2 3"
            countKcal={200}
            onClickForButton={(id) => {
              console.log(id);
            }}
            id={5}
            onClick={(title) => {
              console.log("click " + title);
            }}
          />
          <Card
            likesCount={6}
            image="./pngfind1.png"
            title="Burger6"
            ingredients="1 2 3"
            countKcal={200}
            onClickForButton={(id) => {
              console.log(id);
            }}
            id={6}
            onClick={(title) => {
              console.log("click " + title);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
