import React from 'react';
import ReactDOM from 'react-dom';

const SearchResultDisplayModal = ({ filteredData, onClose }) => {
    console.log(filteredData);
    return ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={onClose} className="modal-close-button">
              &times;
            </button>
            <div className="modal-content">
                {
                    filteredData?.map((teacher, idx) => 
                    <div key={idx}>
                        <p>{teacher?.name}</p>
                        <p>{teacher?.location}</p>
                    </div>
                    )
                }
            </div>
          </div>
        </div>,
        document.body
)};

export default SearchResultDisplayModal;