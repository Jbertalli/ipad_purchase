import { checkout } from '../../checkout';
import { Icon, Button, Divider } from 'semantic-ui-react';
import Image from 'next/image';
import Check from '../check';

export default function SixCellAppleCare() {
    return (
        <>
            <div style={{ padding: '15px', borderRadius: '10px', fontFamily: 'SF Pro' }}>
                <div style={{ transform: 'translate(45px)' }}>
                    <Image src="/images/ipad 2.png" alt="ipad" width={700} height={460} />
                </div>
                <div style={{ transform: 'translateY(70px)', position: 'relative', zIndex: '10', margin: '0px 90px 0px 90px' }}>
                    <div style={{ fontSize: '40px', paddingLeft: '56px' }}>iPad Air Cellular 64<span style={{ fontSize: '25px' }}>GB</span> with AppleCare+</div>
                    <Divider />
                    <p style={{ fontSize: '17px', padding: '0px 55px 0px 55px' }}>
                        The new iPad Air has an all-screen design, 10.9″ display, M1 chip, Center Stage, works with Apple Pencil and Magic Keyboard, and comes in five colors.
                    </p>
                    <div style={{ padding: '5px 55px 20px 51px', transform: 'translateY(-10px)' }}>
                        <div style={{ fontSize: '17px', fontWeight: '500' }}>
                            <div style={{ transform: 'translate(17.5px, 1px)' }}>
                                <Check />
                            </div>
                            <div style={{ color: '#0070c9', transform: 'translate(34px, -27.8px)' }}>
                                In stock
                            </div>
                            <div style={{ position: 'absolute', transform: 'translate(356px, -45.8px)', color: '#0070c9' }}>
                                <Icon name="lock" />
                                Secure Checkout
                            </div>
                        </div>
                    </div>
                    <div style={{ transform: 'translateY(-50px)' }}>
                        <Divider />
                    </div>
                    <div style={{ transform: 'translateY(-42px)' }}>
                        <span style={{ fontSize: '24px', fontWeight: '600', padding: '0px 55px 58px 55px' }}>
                            Total
                        </span>
                        <div style={{ fontSize: '24px', fontWeight: '600', padding: '0px 55px 58px 55px', transform: 'translate(413.5px, -24.5px)' }}>
                            $903.41
                        </div>
                    </div>
                    <div style={{ transform: 'translateY(-115px)' }}>
                        <Divider />
                    </div>
                    <center>
                        <Button
                            onClick={(() => {
                                checkout({
                                    lineItems: [
                                        {
                                            price: "price_1LXAUOAd33GNgngtnPPdI2UZ",
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
                                padding: '15px 100px 15px 100px',
                                transform: 'translateY(-100px)'
                            }}
                        >
                            <span>
                                Buy with <Icon name="apple" style={{ transform: 'scale(0.85) translateX(-6px)' }} /><div style={{ position: 'absolute', transform: 'translate(116px, -24.1px)' }}>Pay</div>
                            </span>
                        </Button>
                    </center>
                </div>
            </div>
            <div style={{ background: '#F5F5F7', width: '816px', height: '440px', transform: 'translate(0px, 524px)', borderRadius: '0px 0px 19.5px 19.5px', position: 'absolute' }} />
        </>
    );
}
