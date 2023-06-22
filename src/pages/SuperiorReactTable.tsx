import React, { useState } from 'react'
import { connect, useSelector, useDispatch } from "react-redux";
import Table from '../components/Table';
import Dropdown from '../components/Dropdown';
import { openModal } from '../store/services/modelService';
import { toast } from 'react-hot-toast';

function SuperiorReactTable(props: any){
  const [editSelectedId,setEditSelectedId] = useState("");
  const [theme,setTheme] = useState("dark");
  const [language,setLanguage] = useState("en");
  const [addable,setAddable] = useState(true);
  const [editable,setEditable] = useState("inline");
  const [removeAll,setRemoveAll] = useState(true);
  const [dataPerPage,setDataPerPage] = useState(10);
  const [searchable,setSearchable] = useState(true);

  const [customers, setCustomers] = useState<ICustomer[]>(
    [
      {
        "id": "1",
        "last_name": "Doe",
        "first_name": "John",
        "email_address": "john@john.mail",
        "job_title": "Purchasing Manager",
        "is_active": false,
        "mobile_phone": "(123)555-0103",
        "profession_code": 345,
        "birthday": "1981-06-11",
        "city": "New Jersey",
        "gross_salary": "6000$-"
      },
      {
        "id": "2",
        "last_name": "Gratacos Solsona",
        "first_name": "Antonio",
        "email_address": "antonio@antonio.mail",
        "job_title": "Owner",
        "is_active": true,
        "mobile_phone": "(123)555-0101",
        "profession_code": 555,
        "birthday": "1989-09-29",
        "city": "Boston",
        "gross_salary": "-2000$"
      },
      {
        "id": "3",
        "last_name": "Axen",
        "first_name": "Thomas",
        "email_address": "thomas@thomas.mail",
        "job_title": "Purchasing Representative",
        "is_active": false,
        "mobile_phone": "(123)555-0101",
        "birthday": "1976-06-25",
        "city": "Los Angelas",
        "gross_salary": "4000-6000$"
      },
      {
        "id": "4",
        "last_name": "Lee",
        "first_name": "Christina",
        "email_address": "christina@christina.mail",
        "job_title": "Purchasing Manager",
        "is_active": true,
        "mobile_phone": "(123)555-0101",
        "profession_code": 101,
        "birthday": "1993-01-15",
        "city": "New York",
        "gross_salary": "4000-6000$"
      },
      {
        "id": "5",
        "last_name": "O’Donnell",
        "first_name": "Martin",
        "email_address": "martin@marting.mail",
        "job_title": "Owner",
        "is_active": true,
        "mobile_phone": "(123)555-0101",
        "profession_code": 222,
        "birthday": "1999-11-11",
        "city": "Minneapolis",
        "gross_salary": "2000-4000$"
      },
      {
        "id": "6",
        "last_name": "Pérez-Olaeta",
        "first_name": "Francisco",
        "email_address": "francisco@francisco.mail",
        "job_title": "Purchasing Manager",
        "is_active": false,
        "mobile_phone": "(123)555-0100",
        "profession_code": 333,
        "birthday": "1992-11-01",
        "city": "Milwaukee",
        "gross_salary": "4000-6000$"
      },
      {
        "id": "7",
        "last_name": "Xie",
        "first_name": "Ming-Yang",
        "email_address": "ming@ming.mail",
        "job_title": "Owner",
        "is_active": true,
        "mobile_phone": "(123)555-0100",
        "birthday": "1997-12-10",
        "city": "Boise",
        "gross_salary": "4000-6000$"
      },
      {
        "id": "8",
        "last_name": "Andersen",
        "first_name": "Elizabeth",
        "email_address": "elizabeth@elizabeth.mail",
        "job_title": "Purchasing Representative",
        "is_active": true,
        "mobile_phone": "(123)555-0100",
        "profession_code": 444,
        "birthday": "2001-12-30",
        "city": "Portland",
        "gross_salary": "4000-6000$"
      },
      {
        "id": "9",
        "last_name": "Mortensen",
        "first_name": "Sven",
        "email_address": "sven@sven.mail",
        "job_title": "Purchasing Manager",
        "is_active": false,
        "mobile_phone": "(123)555-0101",
        "profession_code": 555,
        "birthday": "1989-05-02",
        "city": "Salt Lake City",
        "gross_salary": "2000-4000$"
      },
      {
        "id": "10",
        "last_name": "Wacker",
        "first_name": "Roland",
        "email_address": "roland@roland.mail",
        "job_title": "Purchasing Manager",
        "is_active": false,
        "mobile_phone": "(123)555-0101",
        "profession_code": 123,
        "birthday": "1990-04-20",
        "city": "Chicago",
        "gross_salary": "-2000$"
      },
      {
        "id": "11",
        "last_name": "Krschne",
        "first_name": "Peter",
        "email_address": "peter@peter.mail",
        "job_title": "Purchasing Manager",
        "is_active": true,
        "mobile_phone": "(123)555-0101",
        "profession_code": 444,
        "birthday": "1996-04-09",
        "city": "Miami",
        "gross_salary": "6000$-"
      },
      {
        "id": "12",
        "last_name": "Edwards",
        "first_name": "John",
        "email_address": "john@john.mail",
        "job_title": "Purchasing Manager",
        "is_active": false,
        "mobile_phone": "(123)555-0101",
        "profession_code": 123,
        "birthday": "1995-03-19",
        "city": "Las Vegas",
        "gross_salary": "6000$-"
      }
    ]
  );

  interface ICustomer {
    id?: any,
    last_name?: string,
    first_name?: string,
    email_address?: string,
    job_title?: string,
    is_active?: boolean,
    mobile_phone?: string,
    profession_code?: number,
    birthday?: string,
    city?: string,
    gross_salary?: string
  }

  const [editRowData, setEditRowData] = useState<ICustomer>({
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
  });

  const handleEditRowChange = (event: any) => {
    var fieldName = event.target.getAttribute("name");
    var fieldValue = event.target.classList[0] !== "h-checkbox" ? event.target.value : event.target.checked;
    var newRowData: ICustomer = {...editRowData}
    newRowData[fieldName as keyof ICustomer] = fieldValue;
    setEditRowData(newRowData);
  };

  const handleEdit = (event: any, data: any) => {
    event.preventDefault();
    setEditSelectedId(data[0]);
    Object.keys(editRowData).map((item: any, key: any) => {
      editRowData[item as keyof ICustomer] = data[key+1]
    })
  };

  const handleEditRowSubmit = (event: React.SyntheticEvent, isNew: boolean) => {
    event.preventDefault();
    const editedData: ICustomer = {};
    Object.keys(editRowData).map((item: any, key: any) => {
      if(key === 0){
        editedData.id = editSelectedId;
      }
      editedData[item as keyof ICustomer] = editRowData[item as keyof ICustomer]
    })
    if(isNew) {
      customers.shift();
      editedData.id = customers.length ? ((customers[customers.length-1].id)++).toString() : "1";
      setCustomers([editedData, ...customers]);
			toast.success("Add process successful");
    }else{
      let index = customers.findIndex(item => item.id === editSelectedId);
      customers[index] = editedData;
			toast.success("Update process successful");
    }
    setEditSelectedId("");
  };

  const handleRemove = (id: string) => {
    setCustomers(customers.filter(item => item.id !== id))
		toast.success("Delete process successful");
  }

  const handleRemoveAll = () => {
    setCustomers([]);
		toast.success("Delete process successful");
  }

  const handleAddNew = () => {
    Object.keys(editRowData).map((item: any) => {
      editRowData[item as keyof ICustomer] = "";
    })
    setEditSelectedId("none");
    if(!customers.length) {
      setCustomers([{id:"none",...editRowData}, ...customers]);
    }else{
      if(customers[0].id !== "none") setCustomers([{id:"none",...editRowData}, ...customers]);
    }
  }

  const handleClose = (isNew: boolean) => {
    setEditSelectedId("");
    if(isNew) {
      customers.shift();
    }
  }

  const handleOpenModal = (customer: ICustomer) =>{
    props.openModal("edit-customer-modal", "Edit Customer Informations", customer);
  }

	const handleChangeTheme = (e: any) =>{
		setTheme(e.target.value)
	}
	const handleChangeLanguage = (e: any) =>{
		setLanguage(e.target.value)
	}
	const handleChangeAddable = (e: any) =>{
		setAddable(e.target.value)
	}
	const handleChangeEditable = (e: any) =>{
		setEditable(e.target.value)
	}
	const handleChangeRemoveAll = (e: any) =>{
		setRemoveAll(e.target.value)
	}
	const handleChangeSearchable = (e: any) =>{
		setSearchable(e.target.value)
	}
	const handleChangeDataPerPage = (e: any) =>{
    console.log(e)
		setDataPerPage(e.target.value)
	}

  const tableProps = {
    theme,
    language,
    addable,
    editable,
    removeAll,
    searchable,
    dataPerPage,
    editRowData,
    editSelectedId,
    handleAddNew,
    handleEdit,
    handleEditRowChange,
    handleEditRowSubmit,
    handleRemove,
    handleRemoveAll,
    handleOpenModal,
    handleClose,
    columns:[
      {field: "last_name", title: "Last Name", sortable: true, align:"right"},
      {field: "first_name", title:"First Name", sortable: true},
      {field: "email_address", title:"Email Adress", sortable: true, width: 100},
      {field: "job_title", title:"Job Title", sortable: true, visibility: false},
      {field: "is_active", title:"Is Active", type: "checkbox", width: 70, align:"center"},
      {field: "mobile_phone", title:"Mobile Phone", sortable: true, width: 100, visibility: false},
      {field: "profession_code", title:"Profession Code", type: "number", sortable: true, nullable: true},
      {field: "birthday", title:"Birthday", type: "date", sortable: true, width: 100, visibility: false},
      {field: "city", title:"City", sortable: true, width: 100},
      {field: "gross_salary", title:"Gross Salary", sortable: true, type: "select", data:["-2000$","2000-4000$","4000-6000$","6000$-"], width: 120},
      {title: "", width:75} //command cell
    ],
    fields:customers.map((item: ICustomer) => ([
      item.id,
      item.last_name,
      item.first_name,
      item.email_address,
      item.job_title,
      item.is_active,
      item.mobile_phone,
      item.profession_code,
      item.birthday,
      item.city,
      item.gross_salary
    ]))
  }

  return (
    <div className='superior'>
      <h2 className='page-title'>Superior React Table</h2>
      <p style={{color: "white", textAlign: "left"}}>A multilanguage, editable, addable, removable, sortable, detailed searchable, responsive table component for react.</p>
      <h3 style={{color: "white"}}>Modifications</h3>
			<div className='modifications'>
				<div>
					<label className='ddlabel'>Theme</label>
					<Dropdown data={["classic","dark","gray","blue","red","purple"]} value={theme} onChange={(e:any) => handleChangeTheme(e)} width="80px"/>
				</div>
				<div>
          <label className='ddlabel'>Language</label>
					<Dropdown data={['en','tr','ru','de','cn','hi','es','fr','it','ar']} value={language} onChange={(e:any) => handleChangeLanguage(e)} width="80px"/>
				</div>
				<div>
          <label className='ddlabel'>Addable</label>
					<Dropdown data={[true, false]} value={addable} onChange={(e:any) => handleChangeAddable(e)} width="80px"/>
				</div>
				<div>
          <label className='ddlabel'>Editable</label>
					<Dropdown data={["inline", "popup"]} value={editable} onChange={(e:any) => handleChangeEditable(e)} width="80px"/>
				</div>
				<div>
          <label className='ddlabel'>Remove All</label>
					<Dropdown data={[true, false]} value={removeAll} onChange={(e:any) => handleChangeRemoveAll(e)} width="80px"/>
				</div>
				<div>
          <label className='ddlabel'>Searchable</label>
					<Dropdown data={[true, false]} value={searchable} onChange={(e:any) => handleChangeSearchable(e)} width="80px"/>
				</div>
				<div>
          <label className='ddlabel'>Data Per Page</label>
					<Dropdown data={[5, 10, 20, 50,100]} value={dataPerPage} onChange={(e:any) => handleChangeDataPerPage(e)} width="80px"/>
				</div>
			</div>
      <hr style={{marginBottom: 20}}/>
      <Table {...tableProps}/>
      <hr style={{marginBottom: 20}}/>
      <h3 style={{color: "white"}}>Npm</h3>
      <a href='https://www.npmjs.com/package/superior-react-table' style={{color: "white"}}>superior-react-table</a>
      <hr style={{marginBottom: 20}}/>
      <h3 style={{color: "white"}}>Source Code</h3>
      <a href='https://github.com/halidunal/superior-react-table' style={{color: "white"}}>superior-react-table</a>
      <hr style={{marginBottom: 20}}/>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    employees: state.employees
  }
}

const mapDispatchToProps = {
  openModal
}

export default connect(mapStateToProps, mapDispatchToProps)(SuperiorReactTable)
