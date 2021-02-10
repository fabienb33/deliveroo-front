import Menu from "./Menu";

const Content = ({ data }) => {
  return (
    <div>
      {data.map((category, index) => {
        return (
          category.meals.length > 0 && (
            <div key={index}>
              <div className="spacer">
                <h3>{category.name}</h3>
              </div>
              <Menu data={category.meals} />
            </div>
          )
        );
      })}
    </div>
  );
};

export default Content;
