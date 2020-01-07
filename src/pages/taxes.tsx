import * as React from 'react';
import styles from './Styles.less';
import { Input, PageHeader, Button } from 'antd';

interface IProps {}
interface IState {}

export default class Welcome extends React.Component<IProps, IState> {
  render() {
    return (
      <div className={styles.homecenter}>
        <PageHeader title="税金录入：" subTitle="" />
        <div>
          <Input placeholder="Basic usage" className={styles.inp} />
          <span>元</span>
        </div>
      </div>
    );
  }
}
