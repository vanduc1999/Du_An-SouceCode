
import { Button, Form, Input } from "antd";

//tao mot form login voi email va password
// co validate day du
const Exam03 = () => {
    const [form] = Form.useForm();

    const onSubmit = async () => {
        const values = await form.validateFields();
        console.log(values)
        //Do Somethings
    }

    return (
        <div>
            <Form form={form} layout="vertical">
                <Form.Item name='email' label='Email' rules={[{ required: true }, { type: 'email' }]}>
                    <Input />
                </Form.Item>

                <Form.Item name='password' label='Password' rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

               <Button type="primary" onClick={onSubmit}>
                    Login
               </Button>
            </Form>

        </div>
    )
}
export default Exam03;