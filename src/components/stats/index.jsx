const Stats = (props) => {
  return (
    <aside className="stats">
      <h3 className="stats__title">{props.title}</h3>
      <ul className="stats__discription">
        <li>
          <span>Age :</span>
          <span>{props.age}</span>
        </li>
        <li>
          <span>Height :</span>
          <span>{props.height}</span>
        </li>
      </ul>
      <a href="https://www.patreon.com/4PetesSake" target="_new">$ Patreon $</a>
    </aside>
  );
};

export default Stats;
