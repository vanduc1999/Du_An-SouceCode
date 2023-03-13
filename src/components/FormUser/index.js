
const FormUser = () => {
    
    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const keyword = e.target.value;
        setFormData({
            ...formData,
            [name]: value,
        });
        
        setSearchUsers({
            ...searchUsers,
            [keyword]: value,
        });
    };



    return (
        <div>
            <input name='Id' value={formData.id} onChange={onChange} placeholder='nhap ID ' ></input>
            <input name='name' value={formData.name} onChange={onChange} placeholder='nhap ten '></input>
            <input name='email' value={formData.email} onChange={onChange} placeholder='nhap email '></input>
            <input name='search' value={keyword} onChange={onChange}  placeholder='Search'/>
            <button onClick={onClick}>{formData.id ? 'Edit' : 'Create'}</button>
        </div>
    );

};
export default FormUser;