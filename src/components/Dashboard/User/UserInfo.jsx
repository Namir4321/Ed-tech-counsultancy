import React from 'react'

const UserInfo = () => {
  return (
    <div className="px-12">
      <div className="">
        <h2 className="text-2xl">Call back username</h2>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2">
        <p className="">Phone No</p>
        <p className="">Email</p>
      </div>
      <div className="mt-6 ">
        <p className="">Message</p>
      </div>
    </div>
  );
}

export default UserInfo