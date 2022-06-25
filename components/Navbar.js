import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Container, Icon, Sticky } from 'semantic-ui-react';
import Logo from '../components/apple_logo2';

const Navbar = () => {

    const router = useRouter();

    function isActive(route) {
        return route === router.pathname;
    }

    return (
        <>
            <Sticky>
                <Menu
                    // fixed="top" 
                    fluid
                    // stackable
                    style={{
                        // position: 'fixed',
                        height: '44px', 
                        position: 'relative', 
                        zIndex: '9999', 
                        fontSize: '12px', 
                        fontWeight: '400', 
                        background: '#000000',
                        opacity: '0.8',
                        fontFamily: 'SF Pro Text'
                }}>
                    <Container style={{ transform: 'translateX(40px)', opacity: '0.8' }}>
                        <Link href="/">
                            <Menu.Item>
                                <div style={{ cursor: 'pointer' }}>
                                    <Logo />
                                </div>
                            </Menu.Item>
                        </Link>
                        <Link href="/">
                            <Menu.Item style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }} active={isActive("/")}>
                                Store
                            </Menu.Item>
                        </Link>
                        <Link href="/">
                            <Menu.Item style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }} active={isActive("/")}>
                                Mac
                            </Menu.Item>
                        </Link>
                        <Link href="/">
                            <Menu.Item style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }} active={isActive("/")}>
                                iPad
                            </Menu.Item>
                        </Link>
                        <Link href="/">
                            <Menu.Item style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }} active={isActive("/")}>
                                iPhone
                            </Menu.Item>
                        </Link>
                        <Link href="/">
                            <Menu.Item style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }} active={isActive("/")}>
                                Watch
                            </Menu.Item>
                        </Link>
                        <Link href="/">
                            <Menu.Item style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }} active={isActive("/")}>
                                AirPods
                            </Menu.Item>
                        </Link>
                        <Link href="/">
                            <Menu.Item style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }} active={isActive("/")}>
                                TV & Home
                            </Menu.Item>
                        </Link>
                        <Link href="/">
                            <Menu.Item style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }} active={isActive("/")}>
                                Only on Apple
                            </Menu.Item>
                        </Link>
                        <Link href="/">
                            <Menu.Item style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }} active={isActive("/")}>
                                Accessories
                            </Menu.Item>
                        </Link>
                        <Link href="/">
                            <Menu.Item style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em' }} active={isActive("/")}>
                                Support
                            </Menu.Item>
                        </Link>
                        <Link href="/">
                            <Menu.Item style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em', transform: 'scale(1.2)' }} active={isActive("/")}>
                                <Icon
                                    name="search"
                                />
                            </Menu.Item>
                        </Link>
                        <Link href="/">
                            <Menu.Item style={{ color: '#F5F5F7', margin: '0em .65em 0em .65em', transform: 'scale(1.3)' }}>
                                <Icon
                                    name="suitcase"
                                />
                            </Menu.Item>
                        </Link>
                    </Container>
                </Menu>
            </Sticky>
        </>
    );
}

export default Navbar;
