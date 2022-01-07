import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <>
      <Whatsapp />
    </>
  );
}

function Whatsapp() {
  const [sender, setSender] = useState("");
  
  const [reciver, setReciver] = useState("");
  const [list, setList] = useState([]);

  const handleUsernameChange = (e) => {
    setSender(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setReciver(e.target.value);
  };

  const addUser = async () => {
    if (sender == "" || reciver == "" ) {
      alert("Validation fails");
      return;
    }

    const url = "http://localhost:4000/us";
    const data = {
      hi :  sender,
      hello: reciver,
    };

    
    await axios.post(url, data);

    const newList = [data, ...list];
    setList(newList);

    setSender("");
    setReciver("");
  };

  const getUser1 = async () => {
    const url = "http://localhost:4000/users";
    const result = await axios.get(url);

    const list = result.data;
    const newList = [...list];
    setList(newList);
  };

  const getUser = async () => {
    const url = "http://localhost:4000/users";
    const result = await fetch(url);
    const list = await result.json();

    const newList = [...list];
    setList(newList);
  };

 
  useEffect(() => getUser(), []);

  return (
    
    <div>
      <h2 className="bg-dark text-light p-3  ">MyChatApp <h6> by (073_Rahul Roy_jh)</h6></h2>
      <div className="row-6 ">
      <div>
        <input
          className="  form-control form-control-lg mb-1 p-4 "
          type="text"
          name=""
          id=""
          value={sender}
          onChange={handleUsernameChange}
          placeholder="Lets Chat here..."
        />
      </div>
      {}
      <div>
        <input
          className="btn btn-secondary w-100"
          type="button"
          name=""
          value="Send"
          onClick={addUser}
        />
      </div>

      </div>

      {list.map((item, index) => (
        <div key={index} className="alert alert-secondary fs-4">
          {item.sender} {item.reciver}
        </div>
      ))}
    </div>
  );
}