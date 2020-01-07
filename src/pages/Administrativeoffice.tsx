import * as React from 'react';
import styles from './Styles.less';
import { Input, PageHeader, Table, Select } from 'antd';

const { Option } = Select;
function handleChange(value: any) {
  console.log(`selected ${value}`);
}

interface IProps {}
interface IState {}

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '月费用',
    dataIndex: 'age',
    key: 'age',
  },
];

const data = [
  {
    key: '1',
    name: '交通费',
    age: 1000,
  },
  {
    key: '2',
    name: '宿舍费',
    age: 1000,
  },
];

export default class Welcome extends React.Component<IProps, IState> {
  render() {
    return (
      <div className={styles.admin_tab}>
        <div>
          <PageHeader title="行政办公费" subTitle="" />
          <div>
            <PageHeader title="测算方法" subTitle="" />
            <div className={styles.greenpd}>
              <span>精算法：</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className={styles.greenpd}>
              <span>估算法：</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className={styles.greenpd}>
              <span>上年度实际发生调整法：</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </div>
          <div className={styles.greenpd}>
            <PageHeader title="服务标准" subTitle="" />
            <div className={styles.greenpd}>
              <span>一级：</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className={styles.greenpd}>
              <span>二级：</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className={styles.greenpd}>
              <span>三级：</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className={styles.greenpd}>
              <span>四级：</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className={styles.greenpd}>
              <span>五级：</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className={styles.greenpd}>
              <span>自定义：</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="管理方式" subTitle="" />
            <div className={styles.greenpd}>
              <span>自管：</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className={styles.greenpd}>
              <span>外包费用：</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              <Input placeholder="Basic usage(元/年)" />
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="办公用品" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="管理费计提" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="办公能耗" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="通讯费" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="交通费" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="节日布置" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>
          <div className={styles.greenpd}>
            <PageHeader title="宿舍费用" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    );
  }
}
