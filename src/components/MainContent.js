function MainContent(props) {
  return (
    <main className="main">
      <img src={props.item.img} alt="theme" className="main--theme"></img>
      <section className="main--section--text">
        <div className="main--location--text">
          <img
            src="../images/point.png"
            alt="point"
            className="main--point"
          ></img>
          <p className="main--location">
            {props.item.location}
            <a className="main--url" href={props.item.href}>View on Google Maps</a>
          </p>
        </div>
        <div>
          <h2 className="main--h2">{props.item.name}</h2>
          <p className="main--date">
            <span>{props.item.date}</span>
          </p>
          <p className="main--paragraph">{props.item.info}</p>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
