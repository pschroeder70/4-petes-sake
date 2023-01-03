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
          <span>Weight :</span>
          <span>{props.weight}</span>
        </li>
        <li>
          <span>Height :</span>
          <span>{props.height}</span>
        </li>
        <li>
          <span>Est BMI :</span>
          <span>{props.bmi}</span>
        </li>
      </ul>
    </aside>
  );
};

export default Stats;
