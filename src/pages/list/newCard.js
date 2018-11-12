import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Modal,Input} from 'antd'


class newList extends Component{
    render(){
        const {Form,FormItem}=this.props
        return(
            <Modal title='新增记录' visible={this.props.visible}
              onOk={this.props.handleOk}
              onCancel={this.props.handleCancel}
              >
              <Form>
                <FormItem label="名称">
                  {this.props.getItem('name', {
                    rules: [{ required: true }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem label="描述">
                  {this.props.getItem('desc')(
                    <Input />
                  )}
                </FormItem>
                <FormItem label="链接">
                  {this.props.getItem('url', {
                    rules: [{ type: 'url' }],
                  })(
                    <Input />
                  )}
                </FormItem>
              </Form>
            </Modal>
        )
    }
}

newList.propTypes={
    getItem:PropTypes.func.isRequired,
    handleOk:PropTypes.func.isRequired,
    handleCancel:PropTypes.func.isRequired,
    visible:PropTypes.bool.isRequired,
    Form:PropTypes.object.isRequired,
    FormItem:PropTypes.object.isRequired
}

export default newList
