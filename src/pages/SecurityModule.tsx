import * as React from 'react';
import styles from './Styles.less';
import { Input, PageHeader, Button, Select } from 'antd';
import { ConnectState } from '@/models/connect';
import { connect } from 'dva';

const { Option } = Select;
function handleChange(value: any) {
  console.log(`selected ${value}`);
}

interface IProps { }
interface IState { }


@connect(({ login, loading }: ConnectState) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))

class SecurityModule extends React.Component<IProps, IState> {
  render() {
    return (
      <div className={styles.admin_tab}>

        <PageHeader title="安全信息采集" subTitle="" />

        <div className={styles.anb_list}>
          <div className={styles.listcenter}>
            <h3>秩序维护安全防控信息采集</h3>
            <div className={styles.greenpd}>
              <div>
                <span>安保类型</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>出入口数量：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>值守类型：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>巡视岗设置：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>值守类型：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>消防中控：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>值守类型：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>


            <div className={styles.greenpd}>

              <div>
                <span>门禁：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>重点防火区域数量：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

          </div>






          <div className={styles.listcenter}>
            <h3>消防设备信息</h3>
            <div className={styles.greenpd}>
              <div>
                <span>名称：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>数量：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>单机功率：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>设备完好率：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>目标完好率：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>单位维护价格：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>设备总值：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
          </div>



          <div className={styles.listcenter}>
            <h3>安全管理设备信息</h3>
            <div className={styles.greenpd}>
              <div>
                <span>名称：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>类型：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>数量：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>完好率：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>目标完好率：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>单位维护价格：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>设备总值：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>单位功率：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

          </div>





          <div className={styles.listcenter}>
            <h3>消防设备信息</h3>
            <div className={styles.greenpd}>
              <div>
                <span>名称：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>数量：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>单机功率：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>设备完好率：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>目标完好率：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>单位维护价格：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>设备总值：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
          </div>










          <div className={styles.listcenter}>
            <h3>安全管理设备信息</h3>
            <div className={styles.greenpd}>
              <div>
                <span>名称：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>类型：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>数量：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>完好率：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>目标完好率：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>单位维护价格：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>设备总值：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>单位功率：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

          </div>






          <div className={styles.listcenter}>
            <h3>人员信息采集</h3>
            <div className={styles.greenpd}>
              <div>
                <span>职位名称：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>数量：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>薪资标准：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>餐费补助：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>高温补贴：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>加班费：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>劳保费用：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>

            <div className={styles.greenpd}>

              <div>
                <span>其他福利：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>服装费：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>


            <div className={styles.greenpd}>

              <div>
                <span>社保费用：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className={styles.greenpd}>

              <div>
                <span>支出小计：</span>
                <Input placeholder="Basic usage" />
              </div>
            </div>
          </div>

            <div style={{ textAlign: 'center',width: '100%',margin: '10px 0 20px' }}>
              <Button type="primary">下一步</Button>
            </div>

        </div>
      </div>
    );
  }
}
export default SecurityModule;
