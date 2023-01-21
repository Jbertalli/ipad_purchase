import { Divider, Container, Icon } from 'semantic-ui-react';
import Image from 'next/image';

export default function History({ user, arr1, arr2, id }) {

    console.log(user)
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <div
                    style={{
                        width: '816px',
                        height: '620px',
                        border: '0.5px solid black',
                        position: 'absolute',
                        borderRadius: '20px'
                    }}
                />    
            </div>
            <div 
                style={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    marginTop: '20px'
                }}
            >
                <Image 
                    src="/images/ipad 2.png" 
                    alt="ipad" 
                    width={700} 
                    height={460} 
                />
            </div>
            <Container
                style={{
                    position: 'relative',
                    width: '816px',
                    marginBottom: '1000px',
                    borderRadius: '0px 0px 20px 20px',
                    fontFamily: 'SF Pro',
                    fontSize: '40px',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    background: '#F5F5F7'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '20px',
                        paddingBottom: '20px'
                    }}
                >
                    {user}'s Order History
                </div>
                <center
                    style={{
                        width: '90%',
                        transform: 'translate(5%)'
                    }}
                >
                    <Divider />    
                </center>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <div
                        style={{
                            fontSize: '20px'
                        }}
                    >
                        {arr1.map(function(element, index) {
                            return (
                                <ul key={id}>
                                    {index + 1}.&nbsp;&nbsp;&nbsp;&nbsp;${element}
                                    <Divider />
                                </ul>
                            )
                        })}
                    </div>
                    <div
                        style={{
                            fontSize: '20px'
                        }}
                    >
                        {arr2.map(function(element) {
                            return (
                                <ul key={id}>
                                    {element}
                                    <Divider />
                                </ul>
                            )
                        })}
                    </div>
                </div>  
            </Container>
        </>
    );
}
