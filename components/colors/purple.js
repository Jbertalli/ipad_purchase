import Back from '../../components/ipadBack2';
import Front from '../ipadFront';
import styles from '../../styles/ipad.module.css';
import Sidebar from '../sidebar';
import Heading from '../heading';
import Footing from '../footing';
import { Grid } from 'semantic-ui-react';

export default function Purple () {
    
    return (
        <>
            <div>
                <Heading />
                <Grid>
                    <Grid.Column>
                        &nbsp;
                    </Grid.Column>
                    <Grid.Column style={{ width: '450px', transform: 'translateX(241px)' }}>
                        <div style={{ transform: 'translate(9em, 68px)', position: 'fixed' }}>
                            <div style={{ position: 'relative', zIndex: '1', transform: 'scaleX(0.98)' }}>
                                <Front />
                            </div>
                            <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #B8AFE6, #7867C7)', position: 'relative', zIndex: '0', transform: 'translate(-90px, -520px)' }}>
                                <div style={{ transform: 'translate(-301px, 419.7px)' }}>
                                    <Back />
                                </div>
                            </div>
                        </div>
                        <Footing />
                    </Grid.Column>
                    <Grid.Column style={{ transform: 'translate(-24px)' }}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column>
                        &nbsp;
                    </Grid.Column>
                </Grid>
            </div>
        </>
    );
}
