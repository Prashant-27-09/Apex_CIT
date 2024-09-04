import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoticeUpload from '../components/NoticeUpload';
import LabManualUpload from '../components/labManualUpload';

const AdminPage = ({ login }) => {
  const [notices, setNotices] = useState([]);
  const [labManuals, setLabManuals] = useState([]);



  const handleDownloadNotice = async (noticeId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/notices/notice/${noticeId}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'notice.pdf'); // Set the desired file name here
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading notice:', error);
    }
  };



  const fetchNotices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/notices/notice');
      setNotices(response.data.reverse());
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, [login]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 p-4 bg-slate-100 min-h-screen mt-40">
      <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
        <div className="sidebar-bottom">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-xl font-bold text-blue-900">Notices and Order</h5>
          </div>
          <div className="sidebar-bottom-list  overflow-y-scroll overflow-x-hidden ">
            {notices.length > 0 ? (
              <ul>
                {notices.map((notice, index) => (
                  <li
                    key={index}
                    onClick={() => handleDownloadNotice(notice._id)}
                    className="cursor-pointer hover:text-blue-500"
                  >
                    {notice['filename']}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No Notices Found</p>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminPage;
