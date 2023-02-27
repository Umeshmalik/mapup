import { Card } from "antd";
import { useSelector } from "react-redux";

const Info = () => {
    const country = useSelector(state => state.country);
    const info = useSelector(state => state.info);
    return info ? <Card title={country.toUpperCase()}>
        <div> Currency: {info.currency} </div>
        <div> Symbol: {info.currencySymbol} </div>
        <div> Unit of Speed: {info.unitOfSpeed} </div>
        <div> Distance: {info.distance} </div>
        <div> Volume: {info.volume} </div>
        <div> Time Zones: {info.timezones.join(", ")} </div>
    </Card> : null
}

export default Info;