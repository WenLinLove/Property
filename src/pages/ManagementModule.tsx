import * as React from 'react';
import styles from './Styles.less';
import { Input, PageHeader, Button, Select, Table } from 'antd';
import { ConnectState } from '@/models/connect';
import { connect } from 'dva';
import { queryNotices } from '@/services/listData';

const { Option } = Select;

interface IProps {}
interface IState {
  optionList: any;
  optionType: boolean;
  inpValu: any;
  inpValu1: any;
  inpValu2: any;
  inpValu3: any;
  inpValu4: any;
  inpValu5: any;
  inpValu6: any;
  inpValu7: any;
  inpValu8: any;
  inpValu9: any;
  inpValu10: any;
  inpValu11: any;
  tableArr: any;
  xiaojizonge: any;
  cxiaoji: any;
  mjze: any;
  zmj: any;
}

const columns = [
  {
    title: '总面积',
    dataIndex: 'inpValu',
    key: 'inpValu',
  },
  {
    title: '职位',
    dataIndex: 'inpValu1',
    key: 'inpValu1',
  },
  {
    title: '人数',
    dataIndex: 'inpValu2',
    key: 'inpValu2',
  },
  {
    title: '薪资标准',
    key: 'inpValu3',
    dataIndex: 'inpValu3',
  },
  {
    title: '餐费补助',
    key: 'inpValu4',
    dataIndex: 'inpValu4',
  },
  {
    title: '高温补贴',
    key: 'inpValu5',
    dataIndex: 'inpValu5',
  },
  {
    title: '加班费',
    key: 'inpValu6',
    dataIndex: 'inpValu6',
  },
  {
    title: '劳保费用',
    key: 'inpValu7',
    dataIndex: 'inpValu7',
  },
  {
    title: '其他福利',
    key: 'inpValu8',
    dataIndex: 'inpValu8',
  },
  {
    title: '服装费',
    key: 'inpValu9',
    dataIndex: 'inpValu9',
  },
  {
    title: '社保费用',
    key: 'inpValu10',
    dataIndex: 'inpValu10',
  },
  {
    title: '支出小计',
    key: 'inpValu11',
    dataIndex: 'inpValu11',
  },
];

// @connect(({ login, loading }: ConnectState) => ({
//   userLogin: login,
//   submitting: loading.effects['login/login'],
// }))

class SecurityModule extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      optionList: [],
      optionType: false,
      inpValu1: '',
      inpValu2: '',
      inpValu3: '',
      inpValu4: '',
      inpValu5: '',
      inpValu6: '',
      inpValu7: '',
      inpValu8: '',
      inpValu9: '',
      inpValu10: '',
      tableArr: [],
      xiaojizonge: 0,
      zmj: 0,
      mjze: 0,
      cxiaoji: 0,
    };
  }

  componentDidMount() {
    queryNotices().then(res => {
      console.log(res);
      this.setState({
        optionList: res,
      });
    });
  }

  handleChange(value: any) {
    console.log(`selected ${value}`);
    this.setState({
      inpValu1: value,
    });
  }

  optionList() {
    let xiaoji =
      (Number(this.state.inpValu3) +
        Number(this.state.inpValu4) +
        Number(this.state.inpValu5) +
        Number(this.state.inpValu6) +
        Number(this.state.inpValu7) +
        Number(this.state.inpValu8) +
        Number(this.state.inpValu9) +
        Number(this.state.inpValu10)) *
      Number(this.state.inpValu2);

    let xjze = this.state.xiaojizonge + xiaoji;
    let zmj = Number(this.state.zmj) + Number(this.state.inpValu);

    let data = {
      inpValu: this.state.inpValu,
      inpValu1: this.state.inpValu1,
      inpValu2: this.state.inpValu2,
      inpValu3: this.state.inpValu3,
      inpValu4: this.state.inpValu4,
      inpValu5: this.state.inpValu5,
      inpValu6: this.state.inpValu6,
      inpValu7: this.state.inpValu7,
      inpValu8: this.state.inpValu8,
      inpValu9: this.state.inpValu9,
      inpValu10: this.state.inpValu10,
      inpValu11: xiaoji,
      xjze,
    };

    let dataarr = this.state.tableArr;
    dataarr.push(data);

    let mjze = Number(xjze) / Number(zmj);

    this.setState({
      tableArr: dataarr,
      xiaojizonge: xjze,
      zmj: zmj,
      mjze: mjze,
      cxiaoji: xiaoji,
    });
  }

  handelChange(e: any) {
    this.setState({
      inpValu: e.target.value,
    });
  }

  handelChange1(e: any) {
    this.setState({
      inpValu1: e.target.value,
    });
  }

  handelChange2(e: any) {
    this.setState({
      inpValu2: e.target.value,
    });
  }
  handelChange3(e: any) {
    let data = e.target.value * 0.14;
    this.setState({
      inpValu3: e.target.value,
      inpValu10: data,
    });
    console.log(data);
  }
  handelChange4(e: any) {
    this.setState({
      inpValu4: e.target.value,
    });
  }

  handelChange5(e: any) {
    this.setState({
      inpValu5: e.target.value,
    });
  }
  handelChange6(e: any) {
    this.setState({
      inpValu6: e.target.value,
    });
  }
  handelChange7(e: any) {
    this.setState({
      inpValu7: e.target.value,
    });
  }
  handelChange8(e: any) {
    this.setState({
      inpValu8: e.target.value,
    });
  }

  handelChange9(e: any) {
    this.setState({
      inpValu9: e.target.value,
    });
  }

  handelChange10(e: any) {
    return false;
  }

  render() {
    return (
      <div className={styles.admin_tab}>
        <PageHeader title="管理人员信息采集测算" subTitle="" />

        <div className={styles.anb_list}>
          <div className={styles.listcenter}>
            <h3>管理人员信息采集测算</h3>
            <div className={styles.greenpd}>
              <div>
                <span>录入面积：</span>
                <Input
                  placeholder="Basic usage"
                  onChange={e => this.handelChange(e)}
                  defaultValue={this.state.inpValu}
                />
                <span>平米</span>
              </div>
            </div>

            <div className={styles.greenpd}>
              <div>
                <span>职位名称：</span>
                <Select
                  defaultValue=""
                  style={{ width: 300 }}
                  onChange={(val: any) => this.handleChange(val)}
                >
                  <Option value="项目经理">项目经理</Option>
                  <Option value="项目副经理">项目副经理</Option>
                  <Option value="客服经理">客服经理</Option>
                  <Option value="管理员">管理员</Option>
                  <Option value="档案管理">档案管理</Option>
                  <Option value="办公室主任">办公室主任</Option>
                  <Option value="办公室文员">办公室文员</Option>
                  <Option value="财务经理">财务经理</Option>
                  <Option value="财务人员">财务人员</Option>
                  <Option value="财务主管">财务主管</Option>
                </Select>
              </div>
            </div>
            <div className={styles.greenpd}>
              <div>
                <span>数量：</span>
                <Input
                  placeholder="Basic usage"
                  onChange={e => this.handelChange2(e)}
                  defaultValue={this.state.inpValu2}
                />
              </div>
            </div>
            <div className={styles.greenpd}>
              <div>
                <span>薪资标准：</span>
                <Input
                  placeholder="Basic usage"
                  onChange={e => this.handelChange3(e)}
                  defaultValue={this.state.inpValu3}
                />
              </div>
            </div>

            <div className={styles.greenpd}>
              <div>
                <span>餐费补助：</span>
                <Input
                  placeholder="Basic usage"
                  onChange={e => this.handelChange4(e)}
                  defaultValue={this.state.inpValu4}
                />
              </div>
            </div>
            <div className={styles.greenpd}>
              <div>
                <span>高温补贴：</span>
                <Input
                  placeholder="Basic usage"
                  onChange={e => this.handelChange5(e)}
                  defaultValue={this.state.inpValu5}
                />
              </div>
            </div>
            <div className={styles.greenpd}>
              <div>
                <span>加班费：</span>
                <Input
                  placeholder="Basic usage"
                  onChange={e => this.handelChange6(e)}
                  defaultValue={this.state.inpValu6}
                />
              </div>
            </div>

            <div className={styles.greenpd}>
              <div>
                <span>劳保费用：</span>
                <Input
                  placeholder="Basic usage"
                  onChange={e => this.handelChange7(e)}
                  defaultValue={this.state.inpValu7}
                />
              </div>
            </div>

            <div className={styles.greenpd}>
              <div>
                <span>其他福利：</span>
                <Input
                  placeholder="Basic usage"
                  onChange={e => this.handelChange8(e)}
                  defaultValue={this.state.inpValu8}
                />
              </div>
            </div>
            <div className={styles.greenpd}>
              <div>
                <span>服装费：</span>
                <Input
                  placeholder="Basic usage"
                  onChange={e => this.handelChange9(e)}
                  defaultValue={this.state.inpValu9}
                />
              </div>
            </div>
            <div className={styles.greenpd}>
              <div>
                <span>社保费用：(自动计算出来！！！！！)</span>
                <Input placeholder="Basic usage" value={this.state.inpValu10} disabled />
              </div>
            </div>
            <div className={styles.greenpd}>
              <div>
                <span>支出小计：(支出小计 根据计算公式 会在表格展示 不提供输入)</span>
                <Input placeholder="Basic usage" value={this.state.cxiaoji} disabled />
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', width: '100%', margin: '10px 0 20px' }}>
            <Button type="primary" onClick={() => this.optionList()}>
              估算
            </Button>
          </div>

          <div style={{ width: '100%' }}>
            <span>支出总计：{this.state.xiaojizonge} </span>
            <span>单位面积价格：{this.state.mjze} </span>
          </div>
          <Table columns={columns} dataSource={this.state.tableArr} />
        </div>
      </div>
    );
  }
}
export default SecurityModule;
