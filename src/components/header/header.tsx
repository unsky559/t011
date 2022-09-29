import * as React from 'react';
import Logo from '../logo/logo';
import styles from './header.module.scss';
import Container from '../container/container';
import ActualCurse from '../actual-curse/actual-curse';

const Header = () => (
    <header className={styles.header}>
        <Container>
            <div className={styles.headerSpacing}>
                <Logo/>
                <ActualCurse/>
            </div>
        </Container>
    </header>
);

export default Header;
