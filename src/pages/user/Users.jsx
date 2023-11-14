import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Users() {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  console.log(user);
  return (
    <>
      <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
        <Link
          to={`/`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-[#C92127] border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link>
        {user && (
          <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-[#C92127] mt-16 border-black border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-3xl">
                Name :
              </h2>
              <h2 className="text-white font-bold text-3xl">
                Email :
              </h2>
              <h2 className="text-white font-bold text-3xl">
                SĐT :
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-white font-bold text-3xl">
                {user.name}
              </h2>
              <h2 className="text-white font-bold text-3xl">
                {user.email}
              </h2>
              <h2 className="text-white font-bold text-3xl">
                {user.phone}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Users;
