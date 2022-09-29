import * as React from 'react';
import styles from './container.module.scss';

type propsType = {
    children: string | React.ReactNode
}

const Container = (props: propsType) => (
        <div className={styles.container}>
            {props.children}
        </div>
);

export default Container;
