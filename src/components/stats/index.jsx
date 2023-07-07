const Stats = (props) => {
  return (
    <aside className="stats">
      <h3 className="stats__title">{props.title}</h3>
      <p><i>Coming Soon!</i></p>
      <ul className="stats__discription">
        <li>Garage Bar</li>
        <li>Movie Collection</li>
        <li>Home Theater Setup</li>
      </ul>
    </aside>
  );
};

export default Stats;
