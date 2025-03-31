import styles from "./Card.module.css";
import Location from "../icons/Location";
import Link from "next/link";

function card(props) {
    const {
        id , name , model , year , distance , location , image , price
    } = props;
    console.log(props)
  return (
    <Link href={`cars/${id}`}>
        <div className={styles.container}>
            <img src={image} className={styles.image} />   
            <h4 className={styles.title}>{`${name} ${model}`}</h4>
            <p className={styles.detail} >{`${year} . ${distance}km`}</p>
            <div className={styles.footer}>
                <p>${price}</p>
                <div className={styles.location}>
                    <p>{Location}</p>
                    <Location />
                </div>
            </div>
        </div>
    </Link>
  )
}

export default card