import React from 'react';
import styles from './Styles.less';
import { Tabs, Select, Table } from 'antd';

const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}

const { Option } = Select;

function handleChange(value: any) {
  console.log(`selected ${value}`);
}

const columns = [
  {
    title: '岗位',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '人数',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '月薪基准',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '保险',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: '福利',
    key: 'action',
    dataIndex: 'action',
  },
  {
    title: '月工资',
    key: 'action_day',
    dataIndex: 'action_day',
  },
  {
    title: '年工资总额',
    key: 'action_year',
    dataIndex: 'action_year',
  },
];

const data = [
  {
    key: '1',
    name: '项目经理',
    age: 10,
    address: 3000,
    tags: '无',
    action: '无',
    action_day: '3000',
    action_year: '10000',
  },
  {
    key: '2',
    name: '项目经理',
    age: 10,
    address: 3000,
    tags: '无',
    action: '无',
    action_day: '3000',
    action_year: '10000',
  },
  {
    key: '3',
    name: '项目经理',
    age: 10,
    address: 3000,
    tags: '无',
    action: '无',
    action_day: '3000',
    action_year: '10000',
  },
  {
    key: '4',
    name: '项目经理',
    age: 10,
    address: 3000,
    tags: '无',
    action: '无',
    action_day: '3000',
    action_year: '10000',
  },
  {
    key: '5',
    name: '项目经理',
    age: 10,
    address: 3000,
    tags: '无',
    action: '无',
    action_day: '3000',
    action_year: '10000',
  },
];

export default (): React.ReactNode => (
  <div className={styles.admin_tab}>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="月薪精算" key="1">
        <div className={styles.selectlist}>
          <span>月薪精算：</span>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className={styles.selectlist}>
          <span>工资总额：</span>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className={styles.selectlist}>
          <span>自定义：</span>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className={styles.selectlist}>
          <span>平米限岗：</span>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>

        <div className={styles.selectlist}>
          <span>在保：</span>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>

        <div className={styles.selectlist}>
          <span>住房公积金：</span>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className={styles.selectlist}>
          <span>福利：</span>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className={styles.selectlist}>
          <span>公会经费：</span>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className={styles.selectlist}>
          <span>高温补助：</span>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className={styles.selectlist}>
          <span>劳动保护：</span>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className={styles.selectlist}>
          <span>培训费：</span>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className={styles.selectlist}>
          <span>加班费：</span>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className={styles.selectlist}>
          <span>服装费：</span>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className={styles.selectlist}>
          <span>餐费：</span>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>

        <Table columns={columns} dataSource={data} />
      </TabPane>
      <TabPane tab="工资总额" key="2">
        3
      </TabPane>
      <TabPane tab="自定义" key="3">
        2
      </TabPane>
      <TabPane tab="平米限岗" key="4">
        4
      </TabPane>
    </Tabs>
  </div>
);
