import styles from "./CarDetails.module.css";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";
import Calender from "../icons/Calender";


function CarDetails(props) {
    const {
        id , name , model , year , distance , location , image , price , description
    } = props;
  return (
    <div className={styles.container}>
        <img src={image} className={styles.image} />
        <h3 className={styles.header}>{name} {model}</h3>
        <div className={styles.details}>
            <div>
                <Company />
                <p>company</p>
                <span>{name}</span>
            </div>
            <div>
                <Model />
                <p>Model</p>
                <span>{model}</span>
            </div>
            <div>
                <Calender />
                <p>first registreation</p>
                <span>{year}</span>
            </div>
            <div>
                <Road />
                <p>kms driven</p>
                <span>{distance}</span>
            </div>
        </div>
        <div className={styles.details}>
            <div>
                <Location />
                <p>Location</p>
                <span>{location}</span>
            </div>
        </div>
        <div className={styles.details}>
            <p className={styles.descriptionTitle}>Extra Information</p>
            <p className={styles.descriptionText}>{description}</p>
        </div>
        <div className={styles.details}>
            <div className={styles.price}>
                <Money />
                <p>price :</p>
                <span >{price}</span>
            </div>

        </div>
        <button className={styles.button}>Buy</button>
        
    </div>

)
}

export default CarDetails