import React, { useState } from 'react'
import { connect } from 'react-redux';
import "./style.css";
// import { updateEmployee } from '../../store/services/employeesService';
import Dropdown from '../Dropdown';
import {FaExclamationCircle} from 'react-icons/fa';
import { ICustomer } from '../../Models/CustemerModal';
import handleEditRowSubmit from "../../pages/SuperiorReactTable"

function EditCustomerModal(props: any) {
  const nullData : ICustomer = {
		id: "",
    last_name: "",
    first_name: "",
    email_address: "",
    job_title: "",
    is_active: true,
    mobile_phone: "",
    profession_code: 0,
    birthday: "",
    city: "",
    gross_salary: ""
  }

  Object.keys(nullData).map((item: any, key: any) => {
    nullData[item as keyof ICustomer] = props.data.data[key]
  })

  const [editFormData, setEditFormData] = useState<ICustomer>(nullData)

  const handleSubmit = () => {
    var emptyList: boolean[] = [];
    var recordable = true;
    var inputs = document.querySelectorAll("#validate-input");
    for(let i = 0; i < props.data.columns.length-1; i++){
      let elem = i;
      if(inputs[i]?.classList[0] !== "nullable"){
        document.getElementById("warning" + elem)?.setAttribute("style", "display: inline")
        inputs[i]?.getAttribute("value") === "" ? emptyList[i] = false : emptyList[i] = true;
      }
    }
    emptyList.map((item: boolean) => {
      if(item === false) return recordable = false;
    })
    if(recordable) props.updateEmployee(editFormData)
  }

  return (
    <>
      <form style={{display: "flex"}}>
        <div className='form-sub-container mr4' style={{alignItems: "end"}}>
          {props.data.columns.map((column: any, key: any) => {
            if(column.title.length !== 0)
            return(<label key={key} className='mb4'>{column?.title}</label>)
          })}
        </div>
        <div className='form-sub-container'>
          {props.data.data.map((item: any, key: any) => {
            var fieldName = props.data.columns[key]["field"]
            if(fieldName !== undefined && key < props.data.data.length)
            return(
            <div key={key}>
              {props.data.columns[key]["type"] === "select" ?
              <Dropdown name={fieldName}
                data={["",...props.data.columns[key].data]}
                value={editFormData[fieldName as keyof ICustomer]}
                className={props.data.columns[key]["nullable"] ? "nullable mb4" : "mb4"}
                id="validate-input"
                onChange={(e:any) => {
                  e.target.setAttribute('value', e.target.value);
                  setEditFormData({...editFormData, [fieldName as keyof ICustomer]: e.target.value})
                }}
              >
              </Dropdown>
              :
              <input name={fieldName}
                value={editFormData[fieldName as keyof ICustomer]}
                className={props.data.columns[key]["nullable"] ? "nullable mb4 h-input" : "mb4 h-input"}
                id="validate-input"
                type={key > 0 && props.data.columns[key]["type"]}
                checked={editFormData[fieldName as keyof ICustomer]}
                onChange={(e:any) => {
                  e.target.setAttribute('value', e.target.value);
                  setEditFormData({...editFormData, [fieldName as keyof ICustomer]: e.target.value})
                }}
              >
              </input>}
              {editFormData[fieldName as keyof ICustomer] === "" && !props.data.columns[key]["nullable"] &&
                <span id={"warning"+key} className="cell-warning" style={{display: "none"}}>
                  <FaExclamationCircle title='Bu alan zorunludur!'/>
                </span>
              }
            </div>)
          })}
        </div>
      </form>
      <div className='modal-footer'>
        <button className='h-button h-purple-primary' onClick={handleSubmit} style={{marginRight: 5}}>Kaydet</button>
        <button className='h-button h-purple-secondary' onClick={props.close}>İptal</button>
      </div>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    modal: state.modal,
  }
}

const mapDispatchToProps = {
  // updateEmployee,
}

export default connect(mapStateToProps,mapDispatchToProps)(EditCustomerModal)
