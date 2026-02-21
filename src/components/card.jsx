import "./card.css";

export const Cards = ({ title }) => {
  console.log(title);

  return (
    <div className="dvCard">
      <div className="dvCardTitle">
        <h3>{title}</h3>
      </div>
      <div className="dvCardContent">
        <input type="text" placeholder="Github" />
        <button>Enviar</button>
      </div>
    </div>
  );
};
