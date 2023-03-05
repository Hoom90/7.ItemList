import { Fragment } from "react";
import Card from "../card/Card"
import './style.css'

const CardList = (props) => {  
    // اول از همه اینجا یک پرامتر میگیره 
    const {items} = props;
    return (
      <div className="card-list">
        {items.map(item => (
          <Fragment key={item.id}>
              <Card img={item.image} title={item.title} addCounterHandle={props.doIt}/>
          </Fragment>
        ))}
      </div>
    );
}
export default CardList;