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
          <Card />
          <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
