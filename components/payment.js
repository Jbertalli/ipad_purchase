import SixWifi from '../components/paymentCards.js/64Wifi';
import SixWifiAppleCare from '../components/paymentCards.js/64WifiAppleCare';
import OneWifi from '../components/paymentCards.js/128Wifi';
import OneWifiAppleCare from '../components/paymentCards.js/128WifiAppleCare';
import SixCell from '../components/paymentCards.js/64Cell';
import SixCellAppleCare from '../components/paymentCards.js/64CellAppleCare';
import OneCell from '../components/paymentCards.js/128Cell';
import OneCellAppleCare from '../components/paymentCards.js/128CellAppleCare';

export default function Payment () {
    return (
        <>
            <SixWifi />
            <SixWifiAppleCare />
            <OneWifi />
            <OneWifiAppleCare />
            <SixCell />
            <SixCellAppleCare />
            <OneCell />
            <OneCellAppleCare />
        </>
    );
}
