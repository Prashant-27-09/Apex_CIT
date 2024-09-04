
import React from 'react';
import AdminCard from './AdminCard';
import NoticeImg from '../assets/Admin Menu/notice-board.jpg'
import FacultyImg from '../assets/Admin Menu/faculty.png'
import EventImg from '../assets/Admin Menu/event-gallary.png'

const AdminPage = () => {
  return (
    <div className="flex justify-around mt-8">
      <AdminCard
        title="Notices and Lab Manuals"
        image={NoticeImg}
        path="/Admin/notices-lab-manuals"
      />
      <AdminCard
        title="Faculty Details"
        image={FacultyImg}
        path="/Admin/faculty-details"
      />
      <AdminCard
        title="Event Gallery"
        image={EventImg}
        path="/Admin/event-gallery"
      />
            {/* <FacultyManagement/> */}

    </div>
  );
};

export default AdminPage;

