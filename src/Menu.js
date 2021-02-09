const Menu = ({ data }) => {
  console.log("dodo", data);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={item.id} className="item">
            <h4>{item.title}</h4>
            <h5>{item.description.slice(0, 50)}... </h5>
            <h6>{item.price}</h6>
            {item.picture && (
              <img
                src={item.picture}
                style={{ height: 150, width: "auto" }}
                alt={item.title}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
