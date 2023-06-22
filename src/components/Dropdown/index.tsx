import React from 'react'
import "./style.css";

function Dropdown(props: any) {
	return (
		<select onChange={props.onChange} name={props.name} value={props.value} className={props.className + " dropdown"} style={props.width && {width: props.width}} id={props.id} onBlur={props.onBlur}>
			{props.data.map((item: any, key: any) => (
				<option key={key} value={item} className="dropdown-item" onTouchMove={e => e.preventDefault()}>{item?.toString()}</option>
			))}
		</select>
	)
}

export default Dropdown;
