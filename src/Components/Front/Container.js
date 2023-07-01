import './Container.css';

const Container = (props) => {
  return (
      
      <ul id="concepts">
        <li className="concept">
          <img src={props.concepts.image} alt={props.concepts.title} />
          <h2>{props.concepts.title}</h2>
          <p>{props.concepts.description}</p>
        </li>
      </ul>
  );
};

export default Container;
