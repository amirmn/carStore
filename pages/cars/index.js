import carsData from "@/data/carsData";
import CarsPage from "@/components/templates/CarsPage";

function Details() {
  return (
    <>
      <CarsPage data={carsData} />
    </>
  );
}

export default Details;
