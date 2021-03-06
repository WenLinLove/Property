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
          <PageHeader title="绿化养护" subTitle="" />
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
            <PageHeader title="人员工资" subTitle="" />
            <div className={styles.greenpd}>
              <span>面积匹配：</span>
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

            <div className={styles.greenpd}>
              <Input placeholder="Basic usage" />
              <span>人</span>
            </div>
            <div>
              <Input placeholder="Basic usage" />
              <span>工资小计</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="绿化水费" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>吨</span>
            </div>
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="绿化水费" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>吨</span>
            </div>
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="绿化垃圾清运" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="施肥" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="除草松土" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="修剪" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>
          <div className={styles.greenpd}>
            <PageHeader title="除虫" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="防风防冻" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="租摆绿植" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="景观维护" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div>
            <PageHeader title="特殊情况调整" subTitle="" />
            <div className={styles.greenpd}>
              <span>特殊情况调整：</span>
              <Select defaultValue="jack" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">草坪面积大</Option>
                <Option value="lucy">珍贵苗木</Option>
                <Option value="Yiminghe">病虫害严重</Option>
                <Option value="Yiminghe">死苗严重</Option>
              </Select>

              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div>
            <PageHeader title="喷灌系统" subTitle="" />
            <div className={styles.greenpd}>
              <span>喷灌系统：</span>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
            <div className={styles.greenpd}>
              <span>电费：</span>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
            <div className={styles.greenpd}>
              <span>维护费：</span>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div>
            <PageHeader title="水系" subTitle="" />
            <div className={styles.greenpd}>
              <span>水费：</span>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
            <div className={styles.greenpd}>
              <span>电费：</span>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
            <div className={styles.greenpd}>
              <span>养护：</span>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
            <div className={styles.greenpd}>
              <span>消杀：</span>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
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
