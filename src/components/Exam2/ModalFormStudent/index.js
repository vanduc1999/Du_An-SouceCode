import { useEffect } from "react";
import { Form, Input, InputNumber, Modal } from "antd";
import { getValue } from "@testing-library/user-event/dist/utils";


const ModalFormStudent = (props) => {

    const [form] = Form.useForm()

    useEffect(() => {
        if (!props.open) {
            form.resetFields()
        }
    }, [props.open])

    useEffect(() => {
        if (props.open && props.formData.id) {
            form.setFieldsValue(props.formData)
        }
    }, [props.open, props.formData])

    const onSubmit = async () => {
        const values = await form.validateFields()
        props.onSubmit(props.formData.id, values)
    }

    const onCancel = () => {
        props.setOpen(false)
    }

    return (
        <Modal open={props.open} onOk={onSubmit} onCancel={onCancel}>
            <Form form={form} layout="vertical">

                <Form.Item
                    name='name'
                    label='Ten Ho'
                    rules={[
                        { required: true, message: 'Ho ten la bat buoc' }
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    name='studentId'
                    label='Ma Hoc Sinh'
                    rules={[
                        { required: true, message: 'Email la bat buoc' },
                        { type: 'email', message: 'Email nhap khong dung' },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    name='score'
                    label='Diem so'
                    rules={[
                        { required: true, message: 'nhap Diem so' },
                    ]}>
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    name='className'
                    label='Lop'>
                    <Input />
                </Form.Item>

            </Form>

        </Modal>
    )
};

export default ModalFormStudent;