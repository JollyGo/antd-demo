import { Table ,Button, Modal, Form, Input, Select} from 'antd';
import { connect } from 'dva';
import React from 'react';
import SampleChart from '../../components/sampleChart'

function mapStateToProps(state) {
    return {
      cardsList: state.cards.cardsList,
      cardsLoading: state.loading.effects['cards/queryList'],
      statistic:state.cards.statistic
    };
  }

  

const FormItem = Form.Item;

@connect(mapStateToProps)
@Form.create()
class List extends React.Component {
  constructor(){
    super(...arguments),
    this.state={
      visible:false,
      statisticVisible:false,
      id: null
    }
  }

  showModal=()=>{
    this.setState({
      visible:true
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  handleOk = () => {
    const { dispatch, form: { validateFields } } = this.props;
    validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'cards/addOne',
          payload: values,
        });
        // 重置 `visible` 属性为 false 以关闭对话框
        this.setState({ visible: false });
      }
    });
  }

  showStatistic = (id) => {
    console.log("cards/getStatistic")
    this.props.dispatch({
      type: 'cards/getStatistic',
      payload: id,
    });
    // 更新 state，弹出包含图表的对话框
    this.setState({ id, statisticVisible: true });
  };

  handleStatisticCancel = () => {
    this.setState({
      statisticVisible: false,
  });
  }

    columns = [
        {
          title: '名称',
          dataIndex: 'name',
        },
        {
          title: '描述',
          dataIndex: 'desc',
        },
        {
          title: '链接',
          dataIndex: 'url',
          render: value => <a href={value}>{value}</a>,
        },
        {
          title:'',
          dataIndex:'_',
          render:(_, { id }) => {
            return (
              <Button onClick={() => { this.showStatistic(id); }}>图表</Button>
              )
            }
        }

      ]

    componentDidMount(){
        this.props.dispatch({
          type: 'cards/queryList',
        });
      }

    render() {
      const { form: { getFieldDecorator } ,statistic} = this.props;
      const {statisticVisible,id}=this.state
        return (
        <div>
            <Table columns={this.columns} dataSource={this.props.cardsList} loading={this.props.cardsLoading} rowKey="id" />
            <Button onClick={this.showModal}>新建</Button>
            <Modal title='新增记录' visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              >
              <Form>
                <FormItem label="名称">
                  {getFieldDecorator('name', {
                    rules: [{ required: true }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem label="描述">
                  {getFieldDecorator('desc')(
                    <Input />
                  )}
                </FormItem>
                <FormItem label="链接">
                  {getFieldDecorator('url', {
                    rules: [{ type: 'url' }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem label="链接">
                  {getFieldDecorator('url', {
                    rules: [{ type: 'url' }],
                  })(
                    <Select />
                  )}
                </FormItem>
              </Form>
            </Modal>

            <Modal visible={statisticVisible} footer={null} onCancel={this.handleStatisticCancel}>
              {console.log(statistic[id])}
              <SampleChart data={statistic[id]} />
            </Modal>
        </div>
        );
    
    }
}


  
export default List;