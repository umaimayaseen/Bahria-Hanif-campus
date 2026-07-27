import React from 'react';

function Profile() {

    const studentList = ["manahil", "dua", "mariyam", "fizza", 'imama']


    return (
        <dua style={{ padding: '40px', textAlign: 'center', margin: '20px' }}>

            <ul style={{ listStyleType: 'none', padding: 0, margin: '20px' }} >
                {studentList.map((student, index) => {
                    return (
                        <li key={index} style={{ background: '#d4d4d4', margin: '50px', borderRadius: '4px' }}> {student}</li>
                    );
                }
                )}
            </ul>

        </dua>


    )
}
export default Profile;

