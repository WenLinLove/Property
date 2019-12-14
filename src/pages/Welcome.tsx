import * as React from 'react';
import styles from './Styles.less';
import { Input, PageHeader, Button } from 'antd';

interface IProps {}
interface IState {}

export default class Welcome extends React.Component<IProps, IState> {
  render() {
    return (
      <div className={styles.homecenter}>
        <div>
          <PageHeader title="项目规划基础数据录入：" subTitle="" />

          <div>
            <span>名称：</span>
            <Input placeholder="Basic usage" />
          </div>

          <div>
            <span>指标：</span>
            <Input placeholder="Basic usage" />
          </div>
          <div>
            <span>建筑用地：</span>
            <Input placeholder="Basic usage" />
          </div>
          <div>
            <span>其中公建用地：</span>
            <Input placeholder="Basic usage" />
          </div>
          <div>
            <span>绿化用地：</span>
            <Input placeholder="Basic usage" />
          </div>
          <div>
            <span>总建筑面积：</span>
            <Input placeholder="Basic usage" />
          </div>
          <div>
            <span>地上总建筑面积：</span>
            <Input placeholder="Basic usage" />
          </div>

          <div>
            <span>地下总建筑面积：</span>
            <Input placeholder="Basic usage" />
          </div>

          <div>
            <span>其中人防面积：</span>
            <Input placeholder="Basic usage" />
          </div>

          <div>
            <span>建筑密度：</span>
            <Input placeholder="Basic usage" />
          </div>

          <div>
            <span>综合容积率：</span>
            <Input placeholder="Basic usage" />
          </div>

          <div>
            <span>建筑物：(幢)</span>
            <Input placeholder="Basic usage" />
          </div>

          <div>
            <PageHeader title="建筑层数" subTitle="This is a subtitle" />
            <div>
              <span>地上： </span>
              <Input placeholder="Basic usage" />
            </div>
            <div>
              <span>地下： </span>
              <Input placeholder="Basic usage" />
            </div>
          </div>

          <div>
            <span>建筑高度：</span>
            <Input placeholder="Basic usage" />
          </div>

          <div>
            <PageHeader title="机动车停车位：" subTitle="This is a subtitle" />
            <div>
              <span>机动车停车位：</span>
              <Input placeholder="Basic usage" />
            </div>

            <div>
              <span>地上： </span>
              <Input placeholder="Basic usage" />
            </div>
            <div>
              <span>地下： </span>
              <Input placeholder="Basic usage" />
            </div>
          </div>

          <div>
            <PageHeader title="非机动车停车位" subTitle="This is a subtitle" />
            <div>
              <span>非机动车停车位：</span>
              <Input placeholder="Basic usage" />
            </div>

            <div>
              <span>地上： </span>
              <Input placeholder="Basic usage" />
            </div>
            <div>
              <span>地下： </span>
              <Input placeholder="Basic usage" />
            </div>
          </div>

          <div>
            <span>地下车库出入口：</span>
            <Input placeholder="Basic usage" />
          </div>

          <div>
            <span>项目出入口：</span>
            <Input placeholder="Basic usage" />
          </div>

          <div style={{ textAlign: 'center' }}>
            <Button type="primary">下一步</Button>
          </div>
        </div>
      </div>
    );
  }
}
