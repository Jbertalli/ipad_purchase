import { checkout } from '../../checkout';
import { Icon, Button, Divider } from 'semantic-ui-react';
import Image from 'next/image';

export default function OneCellAppleCare() {
    return (
        <>
            <div style={{ padding: '15px', borderRadius: '10px', fontFamily: 'SF Pro' }}>
                <div style={{ transform: 'translate(45px)' }}>
                    <Image src="/images/ipad 2.png" alt="ipad" width={700} height={460} />
                </div>
                <div style={{ transform: 'translateY(70px)', position: 'relative', zIndex: '10' }}>
                    <div style={{ fontSize: '40px', fontWeight: '500', paddingLeft: '56px' }}>iPad Air Cellular 128<span style={{ fontSize: '25px' }}>GB</span> with AppleCare+</div>
                    <Divider />
                    <p style={{ fontSize: '17px', padding: '0px 55px 20px 55px' }}>
                        The new iPad Air has an all-screen design, 10.9″ display, M1 chip, Center Stage, works with Apple Pencil and Magic Keyboard, and comes in five colors.
                    </p>
                    <div>
                        <b style={{ fontSize: '24px', padding: '0px 55px 58px 55px' }}>
                            $1,066.35
                        </b>
                    </div>
                    <div style={{ padding: '5px 55px 20px 51px' }}>
                        <b style={{ fontSize: '17px', fontWeight: '500' }}>
                            <Icon name="check" size="large" /> In stock
                        </b>
                    </div>
                    <center>
                        <Button
                            onClick={(() => {
                                checkout({
                                    lineItems: [
                                        {
                                            price: "price_1LXAVsAd33GNgngtpdIbvYtF",
                                            quantity: 1
                                        }
                                    ]
                                })
                            })}
                            style={{ 
                                borderRadius: '50px 50px 50px 50px',
                                background: 'black', 
                                color: 'white', 
                                fontWeight: '100', 
                                fontSize: '24px',
                                padding: '15px 100px 15px 100px'
                            }}
                        >
                            <span>
                                Buy with <Icon name="apple" />Pay
                            </span>
                        </Button>
                    </center>
                </div>
            </div>
            <div style={{ background: '#F5F5F7', width: '816px', height: '340px', transform: 'translate(0px, 524px)', borderRadius: '0px 0px 19.5px 19.5px', position: 'absolute' }} />
        </>
    );
}
