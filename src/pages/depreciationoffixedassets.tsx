import * as React from 'react';
import styles from './Styles.less';
import { Input, PageHeader, Button, Select } from 'antd';

const { Option } = Select;
function handleChange(value: any) {
  console.log(`selected ${value}`);
}

interface IProps {}
interface IState {}

export default class Welcome extends React.Component<IProps, IState> {
  render() {
    return (
      <div className={styles.admin_tab}>
        <div>
          <PageHeader title="固定资产折旧" subTitle="" />
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
            <div className={styles.greenpd}>
              <span>固定资产：</span>
              <Input placeholder="Basic usage(元/年)" />
            </div>
            <div className={styles.greenpd}>
              <span>折旧期：</span>
              <Input placeholder="Basic usage(元/年)" />
            </div>
            <div className={styles.greenpd}>
              <span>小计：</span>
              <Input placeholder="Basic usage(元/年)" />
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="共用部位设备设施公共责任保险费用" subTitle="" />
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
              <div className={styles.greenpd}>
                <span>设备设施财产险：</span>
                <Input placeholder="Basic usage(元/年)" />
              </div>
              <div className={styles.greenpd}>
                <span>公共责任险：</span>
                <Input placeholder="Basic usage(元/年)" />
              </div>
              <div className={styles.greenpd}>
                <span>物业管理责任险：</span>
                <Input placeholder="Basic usage(元/年)" />
              </div>
              <div className={styles.greenpd}>
                <span>自定义：</span>
                <Input placeholder="Basic usage(元/年)" />
              </div>
              <div className={styles.greenpd}>
                <span>小计：</span>
                <Input placeholder="Basic usage(元/年)" />
              </div>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="业主同意其它费用" subTitle="" />
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
              <div className={styles.greenpd}>
                <span>招投标费：</span>
                <Input placeholder="Basic usage(元/年)" />
              </div>
              <div className={styles.greenpd}>
                <span>评估费：</span>
                <Input placeholder="Basic usage(元/年)" />
              </div>

              <div className={styles.greenpd}>
                <span>自定义：</span>
                <Input placeholder="Basic usage(元/年)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
