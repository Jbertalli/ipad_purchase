import SixWifi from '../components/paymentCards.js/64Wifi';
import SixWifiAppleCare from '../components/paymentCards.js/64WifiAppleCare';
import OneWifi from '../components/paymentCards.js/128Wifi';
import OneWifiAppleCare from '../components/paymentCards.js/128WifiAppleCare';
import SixCell from '../components/paymentCards.js/64Cell';
import SixCellAppleCare from '../components/paymentCards.js/64CellAppleCare';
import OneCell from '../components/paymentCards.js/128Cell';
import OneCellAppleCare from '../components/paymentCards.js/128CellAppleCare';

export default function Payment ({ total, gbName }) {

    console.log(total);
    // console.log(gbName);

    let totaled;

    if (total == 654.66) {
        totaled = <SixWifi />;
        console.log('iPad 64GB + WiFi');
    } else if (total == 740.47) {
        totaled = <SixWifiAppleCare />;
        console.log('iPad 64GB + WiFi + AppleCare+');
    } else if (total == 817.60 && gbName == '128GB') {
        totaled = <OneWifi />;
        console.log('iPad 128GB + WiFi');
    } else if (total == 903.41 && gbName == '128GB') {
        totaled = <OneWifiAppleCare />;
        console.log('iPad 128GB + WiFi + AppleCare+');
    } else if (total == 817.60 && gbName == '64GB') {
        totaled = <SixCell />;
        console.log('iPad 64GB + Cellular');
    } else if (total == 903.41 && gbName == '64GB') {
        totaled = <SixCellAppleCare />;
        console.log('iPad 64GB + Cellular + AppleCare+');
    } else if (total == 980.53) {
        totaled = <OneCell />;
        console.log('iPad 128GB + Cellular');
    } else if (total == 1066.35) {
        totaled = <OneCellAppleCare />;
        console.log('iPad 128GB + Cellular + AppleCare+');
    } else {
        console.log('no iPad selected');
    }

    return (
        <>
            {/* <div>
                { total }
            </div> */}
            {totaled}
        </>
    );
}
