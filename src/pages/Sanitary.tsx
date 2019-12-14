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
          <PageHeader title="清洁卫生" subTitle="" />
          <div style={{ float: 'right' }}>
            <span>清洁卫生小计</span>
            <Input placeholder="Basic usage" />
          </div>
          <div>
            <PageHeader title="测算方法" subTitle="" />
            <div className={styles.greenpd}>
              <span>人工物料精算：</span>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className={styles.greenpd}>
              <span>估算：</span>
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
            <PageHeader title="服务标准选择" subTitle="" />
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
              <Input placeholder="Basic usage(元/年)" /> <span>外包价格</span>
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
            <PageHeader title="清洁用水" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>吨/月</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="工具" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="低值易耗" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="消毒杀虫" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="垃圾清运" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>元/月</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="化粪池清淘" subTitle="" />
            <div>
              <Input placeholder="Basic usage" />
              <span>号井</span>
            </div>
            <div>
              <Input placeholder="Basic usage" />
              <span>个</span>
            </div>
          </div>

          <div className={styles.greenpd}>
            <PageHeader title="特殊部位清洁" subTitle="" />
            <div>
              <div className={styles.greenpd}>
                <span>公共卫生间：</span>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>个</span>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>费用</span>
              </div>
            </div>

            <div>
              <div className={styles.greenpd}>
                <span>大堂：</span>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>个</span>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>费用</span>
              </div>
            </div>

            <div>
              <div className={styles.greenpd}>
                <span>会议室：</span>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>个</span>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>费用</span>
              </div>
            </div>

            <div>
              <div className={styles.greenpd}>
                <span>幕墙：</span>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>个</span>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>费用</span>
              </div>
            </div>

            <div>
              <div className={styles.greenpd}>
                <span>不锈钢材质养护：</span>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>面积</span>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>费用</span>
              </div>
            </div>

            <div>
              <div className={styles.greenpd}>
                <span>大理石材质养护：</span>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>面积</span>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>费用</span>
              </div>
            </div>

            <div>
              <div className={styles.greenpd}>
                <span>其他特殊材质养护：</span>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>面积</span>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>费用</span>
              </div>
            </div>

            <div>
              <div className={styles.greenpd}>
                <span>自定义清洁项目：</span>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>名称</span>
              </div>
              <div>
                <Input placeholder="Basic usage" />
                <span>费用</span>
              </div>
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
