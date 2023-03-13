import { useState } from "react";
import {  Button } from "antd";
import TableStudents from "./TableStudents";
import ModalFormStudent from "./ModalFormStudent";
const DEFAULT_STUDENT = { name: "", studentId: "", score: "", className: "" }

const Exam2 = () => {
  
    const [formData, setFormData] = useState(DEFAULT_STUDENT)
    const [dataSource, setDataSource] = useState([])
    const [open, setOpen] = useState(false)

    const onCreate = () => {
        setOpen(true)
    }

    const onEdit = (student) => {
        setFormData(student)
        setOpen(true)
    }

    const onDelete = (item) => {
      const newStudents = dataSource.filter((student)=>{
        return student.id !== item.id
      })
      setDataSource(newStudents)
    }

    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const onSubmit = () => {
        if(formData.id) {
            const newDataSource = dataSource.map((item) => {
                return item.id === formData.id ? formData : item
            })

            setDataSource(newDataSource)
        }
        else {
            setDataSource([
                ...dataSource,
                {
                    id: Math.random(),
                    ...formData
                }
            ])
        }

        setFormData(DEFAULT_STUDENT)
        setOpen(false)
    }

    

  return (
    <div>
        <ModalFormStudent 
            open={open}
            setOpen={setOpen}
            onSubmit={onSubmit}
            formData={formData}
            onChange={onChange}
            />
        

        <Button onClick={onCreate}>New Student</Button>

        <TableStudents dataSource={dataSource} onEdit={onEdit} onDelete={onDelete} />
    </div>
  )
};

export default Exam2;