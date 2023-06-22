import React from 'react'
import "./style.css";
import modals from './modals';
import { closeModal } from '../../store/services/modelService';
import { connect } from 'react-redux';
import { FaExclamationCircle, FaTimes } from 'react-icons/fa';

function Modal(props: any) {
    const CurrentModal = modals.find(modal => modal.name === props.name)?.element as React.ElementType
    const close = () => props.closeModal();
    return (
    <div className='modal-container'>
        <div className='modal'>
            <div className='modal-title'>
                <span style={{display: "flex", alignItems: "center"}}>
                  {props.modal.title === "Uyarı" && <FaExclamationCircle style={{color: "red", marginRight: 5}}/>}{props.modal.title}
                </span>
                <button onClick={close} className="close"><FaTimes/></button>
            </div>
            <CurrentModal close={close} data={props.data}/>
        </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
    return {
      modal: state.modal
    }
  }

  const mapDispatchToProps = {
    closeModal
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Modal)
