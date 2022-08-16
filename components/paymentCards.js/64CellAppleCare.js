import { checkout } from '../../checkout';
import { Card, Icon, Button } from 'semantic-ui-react';
import Image from 'next/image';

export default function SixCellAppleCare() {
    return (
        <>
            <Card style={{ padding: '15px', borderRadius: '10px', fontFamily: 'SF Pro' }}>
                <Image src="/images/ipad 2.png" alt="ipad" width={300} height={195} />
                <b style={{ margin: '10px 0px 10px 0px' }}>iPad 64GB + Cellular + AppleCare+</b>
                <p style={{ lineHeight: '15px' }}>
                    The new iPad Air has an all-screen design, 10.9″ display, M1 chip, Center Stage, works with Apple Pencil and Magic Keyboard, and comes in five colors.
                </p>
                <b>
                    $903.41
                </b>
                <b style={{ fontWeight: '500', marginBottom: '10px' }}>
                    <Icon name="check" /> In stock
                </b>
                <Button
                    onClick={(() => {
                        checkout({
                            lineItems: [
                                {
                                    price: "price_1LXANZAd33GNgngt1Ni0igfE",
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
                        fontSize: '17px',
                        padding: '10px',
                    }}
                >
                    <span>
                        Buy with <Icon name="apple" />Pay
                    </span>
                </Button>
            </Card>
        </>
    );
}
