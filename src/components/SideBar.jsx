function SideBar(props) {
  return (
    <aside className='sidebar'>
      <h3 className='sidebar__title'>{props.title}</h3>
      <p>Not sure what stuff, but something has to go over here.</p>
    </aside>
  );
}

export default SideBar;
