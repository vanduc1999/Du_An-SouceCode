
import { Input, Modal } from "antd";

const ModalFormStudent = (props) => {

    const onCancel = () => {
        props.setOpen(false)
    }

  return (
        <Modal open={props.open} onOk={props.onSubmit} onCancel={onCancel}>
            <Input name='name' value={props.formData.name} onChange={props.onChange} />
            <Input name='studentId' value={props.formData.studentId} onChange={props.onChange} />
            <Input name='score' value={props.formData.score} onChange={props.onChange} />
            <Input name='className' value={props.formData.className} onChange={props.onChange} />
        </Modal>
  )
};

export default ModalFormStudent;