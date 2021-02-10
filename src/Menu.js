const Menu = ({ data }) => {
  console.log("dodo", data);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={item.id} className="item">
            <div className="titleItem">
              <h4>{item.title}</h4>
              <h5>{item.description.slice(0, 75)}... </h5>
              <h6>{item.price}€</h6>
            </div>
            {item.picture && (
              <img src={item.picture} alt={item.title} className="imageItem" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
