import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd'
import UserForm from './user.form';
import { fetchAllUserAPI } from '../../services/api.service';


const UserTable = () => {
     const [dataUser,setDataUser]=useState([
        {title:"jaksd",userID:1},
        {title:"ja33ksd",userID:2}
    ])

    const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'userID',
        dataIndex: 'userID',
    },
    ];
    
    useEffect(()=>{
         loadUser();
    },[]);
   

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        console.log("ress",res)
        setDataUser(res.data.data)
    }
   
     console.log(">>>run render 000")
    return(
        <div style={{padding:"20px"}}>
            <UserForm/>
            <Table columns={columns} dataSource={dataUser} />
        </div>
      
    )
}

export default  UserTable;