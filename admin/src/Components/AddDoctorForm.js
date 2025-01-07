import React, { useState, useRef } from 'react';
import { Plus, Upload, X } from 'lucide-react';

const AddDoctorForm = () => {
  const [educationFields, setEducationFields] = useState([{ id: 1, value: '' }]);
  const [experienceFields, setExperienceFields] = useState([{ id: 1, experience: '', duration: '' }]);
  const [selectedSpecialization, setSelectedSpecialization] = useState('General Dentist');
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const specializations = [
    'General Dentist',
    'Orthodontist',
    'Periodontist',
    'Endodontist'
  ];

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const addEducationField = () => {
    const newField = {
      id: educationFields.length + 1,
      value: ''
    };
    setEducationFields([...educationFields, newField]);
  };

  const addExperienceField = () => {
    const newField = {
      id: experienceFields.length + 1,
      experience: '',
      duration: ''
    };
    setExperienceFields([...experienceFields, newField]);
  };

  const handleEducationChange = (id, value) => {
    const updatedFields = educationFields.map(field => 
      field.id === id ? { ...field, value } : field
    );
    setEducationFields(updatedFields);
  };

  const handleExperienceChange = (id, field, value) => {
    const updatedFields = experienceFields.map(expField => 
      expField.id === id ? { ...expField, [field]: value } : expField
    );
    setExperienceFields(updatedFields);
  };

  const styles = {
    container: {
      padding: '24px',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#F0F7FF'
    },
    header: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#1E293B',
      marginBottom: '32px'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '32px'
    },
    inputGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      color: '#64748B',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #E2E8F0',
      borderRadius: '6px',
      fontSize: '14px'
    },
    specializationGroup: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
      marginBottom: '24px'
    },
    radioLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      borderRadius: '20px',
      border: '1px solid #E2E8F0',
      backgroundColor: 'white',
      cursor: 'pointer',
      fontSize: '14px'
    },
    radioInput: {
      margin: 0,
      width: '16px',
      height: '16px',
      cursor: 'pointer'
    },
    selectedLabel: {
      backgroundColor: '#0EA5E9',
      color: 'white',
      border: 'none'
    },
    addButton: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px',
      borderRadius: '50%',
      backgroundColor: '#0EA5E9',
      border: 'none',
      cursor: 'pointer',
      color: 'white',
      minWidth: '32px',
      height: '32px',
      justifyContent: 'center'
    },
    experienceRow: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      marginBottom: '12px'
    },
    experienceInput: {
      width: '200px',
      padding: '10px',
      border: '1px solid #E2E8F0',
      borderRadius: '6px',
      fontSize: '14px'
    },
    experienceDurationInput: {
      width: '100px',
      padding: '10px',
      border: '1px solid #E2E8F0',
      borderRadius: '6px',
      fontSize: '14px'
    },
    educationRow: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      marginBottom: '12px'
    },
    educationInput: {
      flex: 1,
      padding: '10px',
      border: '1px solid #E2E8F0',
      borderRadius: '6px',
      fontSize: '14px'
    },
    feesContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    feesInput: {
      width: '80px',
      padding: '10px',
      border: '1px solid #E2E8F0',
      borderRadius: '6px'
    },
    timeGrid: {
      display: 'grid',
      gap: '12px'
    },
    timeRow: {
      display: 'grid',
      gridTemplateColumns: '120px 140px 140px',
      gap: '24px',
      alignItems: 'center'
    },
    checkbox: {
      marginRight: '8px'
    },
    submitButton: {
      backgroundColor: '#0EA5E9',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '24px'
    },
    imageUploadContainer: {
      marginTop: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    imagePreviewContainer: {
      position: 'relative',
      width: '200px',
      height: '200px',
      border: '1px solid #E2E8F0',
      borderRadius: '8px',
      overflow: 'hidden'
    },
    imagePreview: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    removeImageButton: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: 'none',
      borderRadius: '50%',
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    uploadButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 20px',
      border: '1px dashed #0EA5E9',
      borderRadius: '6px',
      backgroundColor: 'white',
      color: '#0EA5E9',
      cursor: 'pointer',
      fontSize: '14px'
    },
    hiddenInput: {
      display: 'none'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Add Doctor</h1>
      
      <div style={styles.formGrid}>
        <div>
          {/* Left Column */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input style={styles.input} type="text" placeholder="Dr." />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input style={styles.input} type="email" />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone Number</label>
            <input style={styles.input} type="tel" />
          </div>

       

          <div style={styles.inputGroup}>
            <label style={styles.label}>Fees</label>
            <div style={styles.feesContainer}>
              <input style={styles.feesInput} type="number" placeholder="2" />
              <span>$</span>
            </div>
          </div>
        </div>

        <div>
          {/* Right Column */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Add Specializations</label>
            <div style={styles.specializationGroup}>
              {specializations.map((specialization) => (
                <label
                  key={specialization}
                  style={{
                    ...styles.radioLabel,
                    ...(selectedSpecialization === specialization ? styles.selectedLabel : {})
                  }}
                >
                  <input
                    type="radio"
                    name="specialization"
                    value={specialization}
                    checked={selectedSpecialization === specialization}
                    onChange={(e) => setSelectedSpecialization(e.target.value)}
                    style={styles.radioInput}
                  />
                  {specialization}
                </label>
              ))}
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Add Experience</label>
            <div>
              {experienceFields.map((field) => (
                <div key={field.id} style={styles.experienceRow}>
                  <input
                    style={styles.experienceInput}
                    type="text"
                    value={field.experience}
                    onChange={(e) => handleExperienceChange(field.id, 'experience', e.target.value)}
                    placeholder="Experience"
                  />
                  <input
                    style={styles.experienceDurationInput}
                    type="text"
                    value={field.duration}
                    onChange={(e) => handleExperienceChange(field.id, 'duration', e.target.value)}
                    placeholder="3yr"
                  />
                  {field.id === experienceFields.length && (
                    <button style={styles.addButton} onClick={addExperienceField}>
                      <Plus size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Education</label>
            <div>
              {educationFields.map((field) => (
                <div key={field.id} style={styles.educationRow}>
                  <input
                    style={styles.educationInput}
                    type="text"
                    value={field.value}
                    onChange={(e) => handleEducationChange(field.id, e.target.value)}
                    placeholder="Enter education"
                  />
                  {field.id === educationFields.length && (
                    <button style={styles.addButton} onClick={addEducationField}>
                      <Plus size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>About Doctor</label>
            <textarea style={{...styles.input, height: '100px'}} />
          </div>

          {/* <div style={styles.inputGroup}>
            <label style={styles.label}>Add profile image</label>
            <div style={styles.imageUploadContainer}>
              {previewUrl ? (
                <div style={styles.imagePreviewContainer}>
                  <img 
                    src={previewUrl} 
                    alt="Profile preview" 
                    style={styles.imagePreview}
                  />
                  <button 
                    onClick={handleRemoveImage}
                    style={styles.removeImageButton}
                    aria-label="Remove image"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={handleImageClick} 
                  style={styles.uploadButton}
                >
                  <Upload size={16} />
                  Import Image
                </button>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={styles.hiddenInput}
              />
            </div>
          </div> */}
        </div>
      </div>

      {/* Available Dates and Times */}
      <div style={{marginTop: '32px'}}>
        <label style={styles.label}>Available Dates and times</label>
        <div style={styles.timeGrid}>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
            <div key={day} style={styles.timeRow}>
              <div>
                <input type="checkbox" style={styles.checkbox} />
                {day}
              </div>
              <input style={styles.input} type="time" placeholder="Start time" />
              <input style={styles.input} type="time" placeholder="End time" />
            </div>
          ))}
        </div>
      </div>

      <button style={styles.submitButton}>Add Doctor</button>
    </div>
  );
};

export default AddDoctorForm;