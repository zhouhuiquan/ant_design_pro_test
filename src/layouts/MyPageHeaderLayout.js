import React from 'react';
import { Link } from 'dva/router';
import PageHeader from '../components/MyPageHeader';
import styles from './MyPageHeaderLayout.less';

export default ({ children, wrapperClassName, top, ...restProps }) => (
  <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
    {top}
    <PageHeader key="pageheader" {...restProps} linkElement={Link} />
    {children ? <div className={styles.content}>{children}</div> : null}
  </div>
);
