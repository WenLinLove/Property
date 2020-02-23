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
          <PageHeader title="秩序维护及消防服务" subTitle="" />
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
            <PageHeader title="管理类型" subTitle="" />
            <div className={styles.greenpd}>
              <span>自管：</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className={styles.greenpd}>
              <span>人工外包：</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              <Input placeholder="Basic usage(元/年)" />
            </div>
            <div className={styles.greenpd}>
              <span>整体外包：</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              <Input placeholder="Basic usage(元/年)" />
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="人员" subTitle="" />

            <div className={styles.greenpd}>
              <span>定岗</span>
              <Input placeholder="Basic usage" />
              <span>人 （单人 双人 多人）</span>
              <Input placeholder="Basic usage" />
              <span>小时</span>
            </div>
            <div>
              <span>监控</span>
              <Input placeholder="Basic usage" />
              <span>人 （单人24小时 双人24小时）</span>
              <Input placeholder="Basic usage" />
              <span>小时</span>
            </div>

            <div>
              <span>其他</span>
              <Input placeholder="Basic usage" />
              <span>人 </span>
            </div>

            <div>
              <span>巡逻岗</span>
              <Input placeholder="Basic usage" />
              <span>人 （单人单向 双人双向 换班巡逻 多人不定向）</span>
            </div>

            <div>
              <span>工具器材</span>
              <Input placeholder="Basic usage" />
              <span>元/人</span>
            </div>
            <div>
              <span>低值易耗品</span>
              <Input placeholder="Basic usage" />
              <span>元/人</span>
            </div>
            <div>
              <span>宿舍及用品</span>
              <Input placeholder="Basic usage" />
              <span>元/人</span>
            </div>
            <div>
              <span>餐费</span>
              <Input placeholder="Basic usage" />
              <span>元/人</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="消防人员" subTitle="" />
            <div className={styles.greenpd}>
              <span>秩序维护人员兼职：</span>
              <Select defaultValue="jack" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">草坪面积大</Option>
                <Option value="lucy">珍贵苗木</Option>
                <Option value="Yiminghe">病虫害严重</Option>
                <Option value="Yiminghe">死苗严重</Option>
              </Select>
            </div>
            <div className={styles.greenpd}>
              <span>独立消防人员：</span>
              <Select defaultValue="jack" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">草坪面积大</Option>
                <Option value="lucy">珍贵苗木</Option>
                <Option value="Yiminghe">病虫害严重</Option>
                <Option value="Yiminghe">死苗严重</Option>
              </Select>

              <Input placeholder="Basic usage" />
              <span>人</span>
            </div>

            <div className={styles.greenpd}>
              <span>定岗</span>
              <Input placeholder="Basic usage" />
              <span>人 （单人24小时4人 双人24小时8人）</span>
              <Input placeholder="Basic usage" />
              <span>小时</span>
            </div>

            <div>
              <span>巡逻岗</span>
              <Input placeholder="Basic usage" />
              <span>人 （单人24小时4人 双人24小时8人）</span>
            </div>

            <div>
              <span>消防工具</span>
              <Input placeholder="Basic usage" />
              <span>元/年</span>
            </div>
            <div>
              <span>低值易耗品</span>
              <Input placeholder="Basic usage" />
              <span>元/年</span>
            </div>
            <div>
              <span>维修养护</span>
              <Input placeholder="Basic usage" />
              <span>元/年</span>
            </div>
            <div>
              <span>宿舍及用品</span>
              <Input placeholder="Basic usage" />
              <span>元/年</span>
            </div>
            <div>
              <span>餐费</span>
              <Input placeholder="Basic usage" />
              <span>元/年</span>
            </div>
            <div>
              <span>消防演习</span>
              <Input placeholder="Basic usage" />
              <span>元/年</span>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Button type="primary">下一步</Button>
          </div>
        </div>
      </div>
    );
  }
}
