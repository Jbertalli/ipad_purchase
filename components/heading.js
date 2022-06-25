import { Divider, Sticky } from 'semantic-ui-react';

export default function Heading () {
    
    return (
        <>
            <Sticky>
                <div style={{ position: 'relative', top: '0px', zIndex: '5' }}>
                    <div style={{ height: '50px', background: 'linear-gradient(to bottom, #e8faff, white)', paddingTop: '3px' }}>
                        <span style={{ fontSize: '20px', fontWeight: '500', display: 'flex', justifyContent: 'flex-start', transform: 'translate(18px, 12px)', paddingLeft: '17.3em' }}>
                            iPad Air
                        </span>
                        <span style={{ fontSize: '15px', display: 'flex', justifyContent: 'flex-end', transform: 'translate(-20px, -9px)', paddingRight: '23em' }}>
                            From $599 or $49.91/mo. for 12 mo.*
                        </span>
                        <Divider style={{ transform: 'translateY(-6.5px)' }} />
                    </div> 
                </div>
            </Sticky>
        </>
    );
}
