import React, { useEffect } from 'react';

const SmallModal = ({ isModalOpen, closeModal, description, button1, button2, button3, title, handleButtonClick1, handleButtonClick2, handleButtonClick3, showSingleButton, mode }) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isModalOpen && !e.target.closest('.modal-container')) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen, closeModal]);

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay absolute inset-0 backdrop-blur"></div>
          <div className="modal-container bg-#0588D1 w-96 mx-auto rounded shadow-lg z-50">
            <div className="modal-content p-4">
              <h2 className="text-5xl font-bold mb-4 text-white text-center">{title}</h2>
              <p className="text-white">{description}</p>
            </div>
            <div className="modal-footer p-4 flex justify-center">
              {mode === 1 && !showSingleButton && (
                <>
                  <button
                    className="bg-white w-full hover:bg-pink-200 text-#0588D1 font-bold py-2 px-4 rounded"
                    onClick={() => {
                      handleButtonClick1();
                      closeModal();
                    }}
                  >
                    {button1}
                  </button>
                </>
              )}
              {mode === 2 && !showSingleButton && (
                <>
                  <button
                    className="bg-white w-full hover:bg-pink-200 text-#0588D1 font-bold py-2 px-4 rounded"
                    onClick={() => {
                      handleButtonClick1();
                      closeModal();
                    }}
                  >
                    {button1}
                  </button>
                  <button
                    className="bg-white w-full hover:bg-pink-200 text-#0588D1 font-bold py-2 px-4 rounded ml-4"
                    onClick={handleButtonClick2}
                  >
                    {button2}
                  </button>
                </>
              )}
              {mode === 3 && !showSingleButton && (
                <>
                  <button
                    className="bg-white w-full hover:bg-pink-200 text-#0588D1 font-bold py-2 px-4 rounded"
                    onClick={() => {
                      handleButtonClick1();
                      closeModal();
                    }}
                  >
                    {button1}
                  </button>
                  <button
                    className="bg-white w-full hover:bg-pink-200 text-#0588D1 font-bold py-2 px-4 rounded ml-4"
                    onClick={handleButtonClick2}
                  >
                    {button2}
                  </button>
                  <button
                    className="bg-white w-full hover:bg-pink-200 text-#0588D1 font-bold py-2 px-4 rounded ml-4"
                    onClick={handleButtonClick3}
                  >
                    {button3}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallModal;
