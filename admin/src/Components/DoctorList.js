
import React from 'react';

const DoctorList = () => {
  const styles = {
    layout: {
      minHeight: '100vh',
      backgroundColor: '#F0F7FF',
      padding: '24px'
    },
    doctorGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '24px'
    },
    doctorCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    doctorImage: {
      width: '100%',
      height: '240px',
      objectFit: 'cover'
    },
    doctorInfo: {
      padding: '16px'
    },
    availabilityTag: {
      color: '#059669',
      fontSize: '14px',
      marginBottom: '8px'
    },
    doctorName: {
      fontSize: '18px',
      fontWeight: '500',
      color: '#1E293B',
      marginBottom: '4px'
    },
    doctorSpecialty: {
      fontSize: '14px',
      color: '#64748B'
    }
  };

  return (
    <div style={styles.layout}>
      <div style={styles.doctorGrid}>
        {/* Doctor Card 1 */}
        <div style={styles.doctorCard}>
          <img 
            src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg" 
            alt="Dr. Chathuri De Silva"
            style={styles.doctorImage}
          />
          <div style={styles.doctorInfo}>
            <div style={styles.availabilityTag}>Available</div>
            <h3 style={styles.doctorName}>Dr. Chathuri De Silva</h3>
            <p style={styles.doctorSpecialty}>General Dentist</p>
          </div>
        </div>

        {/* Doctor Card 2 */}
        <div style={styles.doctorCard}>
          <img 
            src="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg" 
            alt="Dr. Dasun Shanaka"
            style={styles.doctorImage}
          />
          <div style={styles.doctorInfo}>
            <div style={styles.availabilityTag}>Available</div>
            <h3 style={styles.doctorName}>Dr. Dasun Shanaka</h3>
            <p style={styles.doctorSpecialty}>General Dentist</p>
          </div>
        </div>

        {/* Doctor Card 3 */}
        <div style={styles.doctorCard}>
          <img 
            src="https://img.freepik.com/free-photo/portrait-smiling-male-doctor-wearing-medical-coat-stethoscope-standing-with-arms-crossed-white-wall_171337-145.jpg" 
            alt="Dr. Dasun Shanaka"
            style={styles.doctorImage}
          />
          <div style={styles.doctorInfo}>
            <div style={styles.availabilityTag}>Available</div>
            <h3 style={styles.doctorName}>Dr. Dasun Shanaka</h3>
            <p style={styles.doctorSpecialty}>General Dentist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;