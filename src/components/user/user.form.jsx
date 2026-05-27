import Input from "antd/es/input/Input";
import { Button, notification } from 'antd'
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";
import Modal from "antd/es/modal/Modal";

const UserForm = () => {
    const [fullName, setFullName] = useState("ngodangkien");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone]= useState("");
    const [isModalOpen, setIsModalOpen] = useState();
    const handleClickBtn = async () => {
        setIsModalOpen(true)
        // const res = await createUserAPI(fullName,email,password,phone)
        //     if(res.data){
        //         notification.success({      
        //             message:"Create user",
        //             description:"Create user success"
        //     })
        // }
        // console.log("res", res)


    }
    const handleOk = () => {
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }
    return(
        <div className="user-form" style={{margin:"20px 0"}}>
            
            <div>
                    <Button type="primary"
                        onClick={handleClickBtn}
                    >
                        Create User</Button>
                </div>
             <Modal
            title="Create User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            maskClosable = {false}
            okText={"Create"}
            >
               <div style={{display:"flex",gap:"15px",flexDirection:"column"}}>
                <div>
                    <span>FullName</span>
                    <Input value={fullName}
                        onChange={(event)=>{setFullName(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input value={email}
                         onChange={(event)=>{setEmail(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password value={password}
                        onChange={(event)=>{setPassword(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input value={phone}
                        onChange={(event)=>{setPhone(event.target.value)}}
                    />
                </div>
                
            </div>
            </Modal>
            
        </div>
    )
}

export default UserForm;