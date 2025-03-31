import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarDetails from "@/components/templates/CarDetails"; // چک کنید که فایل درست ایمپورت شده باشد

const Cardetail = () => {
    const router = useRouter();
    const { carId } = router.query;

    if (!carId || !carsData[carId - 1]) {
        return <p>Loading...</p>; // می‌توان یک صفحه 404 جایگزین کرد
    }

    const carDetailData = carsData[carId - 1];

    return <CarDetails {...carDetailData} />;
};

export default Cardetail;
