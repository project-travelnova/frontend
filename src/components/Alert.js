import React from 'react';
import './Alert.css'; // Add your styles here

const Alert = ({ message, type, onClose, onConfirm, onCancel }) => {
    return (
        <div className={`alert ${type}`}>
            <p>{message}</p>
            {type === 'confirm' ? (
                <div className="alert-buttons">
                    <button onClick={onConfirm}>Yes</button>
                    <button onClick={onCancel}>No</button>
                </div>
            ) : (
                <button onClick={onClose}>Close</button>
            )}
        </div>
    );
};

export default Alert;
