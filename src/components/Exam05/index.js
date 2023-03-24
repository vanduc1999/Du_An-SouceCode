import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Modal } from "antd";
import TableBooks from "./TableBooks";
import ModalFormBook from "./ModalFormBook";
import { SearchContainer, SearchBox, ButtonCreate } from "./styles";

const DEFAULT_BOOK = {
  title: "",
  author: "",
  description: "",
  type: "",
  page: 0,
};

const Exam05 = () => {
  const [keyword, setKeyword] = useState("");
  const [formData, setFormData] = useState(DEFAULT_BOOK);
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);

  const [tableLoading, setTableLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [itemLoading, setItemLoading] = useState(false);



  useEffect(() => {
    fetchData()
  }, []);

  const searchedDataSource = useMemo(() => {
    if (keyword) {
      return dataSource.filter((item) => {
        return item.title.includes(keyword) || item.author.includes(keyword);
      });
    }

    return dataSource;
  }, [keyword, dataSource]);

  const fetchData = () => {
    setTableLoading(true)

    axios
      .get("https://6401ddbdab6b7399d0ae70f1.mockapi.io/b1/project")
      .then((res) => {
        setDataSource(res.data);
        setTableLoading(false);
      });
  }

  const onSearch = (e) => {
    setKeyword(e.target.value);
  };

  const onCreate = () => {
    setFormData(DEFAULT_BOOK);
    setOpen(true);
  };

  const onEdit = (id) => {
    setItemLoading(true)
    axios
      .get(`https://6401ddbdab6b7399d0ae70f1.mockapi.io/b1/project/${id}`)
      .then((res) => {
        setItemLoading(false)
        setFormData(res.data);
        setOpen(true);
      });
  };

  const onDelete = (id) => {
    Modal.confirm({
      title: "Xóa dữ liệu này?",
      content: "Dữ liệu sẽ bị mất vĩnh viễn.",
      onOk() {
        setItemLoading(true)
        axios.delete(`https://6401ddbdab6b7399d0ae70f1.mockapi.io/b1/project/${id}`).then((res) => {
          setItemLoading(false);
          fetchData()
        })
      },
    });
  };

  const onSubmit = (id, data) => {
    setSubmitLoading(true)

    if (id) {
      axios.put(`https://6401ddbdab6b7399d0ae70f1.mockapi.io/b1/project/${id}`, data).then((res) => {
        setSubmitLoading(false);
        setFormData(DEFAULT_BOOK);
        setOpen(false);
        fetchData()
      })
    } else {
      axios.post('https://6401ddbdab6b7399d0ae70f1.mockapi.io/b1/project', data).then((res) => {
        setSubmitLoading(false);
        setFormData(DEFAULT_BOOK);
        setOpen(false);
        fetchData()
      })
    }
  };

  return (
    <div>
      <ModalFormBook
        open={open}
        submitLoading={submitLoading}
        setOpen={setOpen}
        onSubmit={onSubmit}
        formData={formData}
      />

      <SearchContainer>
        <SearchBox onChange={onSearch} />
        <ButtonCreate onClick={onCreate}>New Book</ButtonCreate>
      </SearchContainer>

      <TableBooks
        itemLoading={itemLoading}
        loading={tableLoading}
        dataSource={searchedDataSource}
        onEdit={onEdit}
        onDelete={onDelete}
        setTableLoading={setTableLoading}

      />
    </div>
  );
};

export default Exam05;
