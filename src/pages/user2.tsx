import React from "react";
import styles from './index.less';

const User = (props:any) => {

    console.log(props);


    return (
        <div>
            <h3 className={styles.body}> 这是User2页面 </h3>
        </div>
    )
}

export default User;