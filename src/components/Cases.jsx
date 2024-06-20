import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const OpenCases = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [issues, setIssues] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '' });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIssues([...issues, formData]);
    setFormData({ title: '', description: '' });
    closeModal();
  };

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #ccc', margin: "20px" }}>
        <div style={{ fontSize: '18px' }}>
          Total Cases: {issues.length}
        </div>
        <button
          style={{ padding: '10px 20px', fontSize: '14px', color: 'white', backgroundColor: '#4285f4', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          onClick={openModal}
        >
          SUBMIT A NEW CASE
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Submit a New Case"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h2>Submit a New Case</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Title:
              <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Description:
              <textarea name="description" value={formData.description} onChange={handleChange} required />
            </label>
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
      <div style={{ margin: '20px' }}>
        <h2>Open Cases</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Title</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{issue.title}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{issue.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default OpenCases;
