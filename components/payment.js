import SixWifi from '../components/paymentCards.js/64Wifi';
import SixWifiAppleCare from '../components/paymentCards.js/64WifiAppleCare';
import OneWifi from '../components/paymentCards.js/128Wifi';
import OneWifiAppleCare from '../components/paymentCards.js/128WifiAppleCare';
import SixCell from '../components/paymentCards.js/64Cell';
import SixCellAppleCare from '../components/paymentCards.js/64CellAppleCare';
import OneCell from '../components/paymentCards.js/128Cell';
import OneCellAppleCare from '../components/paymentCards.js/128CellAppleCare';

export default function Payment({ quantity, total, gbName }) {

  let totaled;

  if (total == 654.66) {
    totaled = <SixWifi quantity={quantity} />;
    console.log('iPad 64GB + WiFi');
  } else if (total == 740.47) {
    totaled = <SixWifiAppleCare quantity={quantity} />;
    console.log('iPad 64GB + WiFi + AppleCare+');
  } else if (total == 817.6 && gbName == '128GB') {
    totaled = <OneWifi quantity={quantity} />;
    console.log('iPad 128GB + WiFi');
  } else if (total == 903.41 && gbName == '128GB') {
    totaled = <OneWifiAppleCare quantity={quantity} />;
    console.log('iPad 128GB + WiFi + AppleCare+');
  } else if (total == 817.6 && gbName == '64GB') {
    totaled = <SixCell quantity={quantity} />;
    console.log('iPad 64GB + Cellular');
  } else if (total == 903.41 && gbName == '64GB') {
    totaled = <SixCellAppleCare quantity={quantity} />;
    console.log('iPad 64GB + Cellular + AppleCare+');
  } else if (total == 980.53) {
    totaled = <OneCell quantity={quantity} />;
    console.log('iPad 128GB + Cellular');
  } else if (total == 1066.35) {
    totaled = <OneCellAppleCare quantity={quantity} />;
    console.log('iPad 128GB + Cellular + AppleCare+');
  } else {
    console.log('no iPad selected');
  }

  return (
    <>
      {totaled}
    </>
  );
}
