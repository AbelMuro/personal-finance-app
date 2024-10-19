import React from 'react';
import * as styles from './styles.module.css';
import icons from './icons';

function TotalBills() {
    return(
        <div className={styles.bills}>
            <img className={styles.bills_icon} src={icons['bill']}/>
            <div className={styles.bills_desc}>
                <h2 className={styles.bills_title}>
                    Total Bills
                </h2>
                <strong className={styles.bills_total}>
                    $384.98
                </strong>                
            </div>

        </div>
    )
}

export default TotalBills;