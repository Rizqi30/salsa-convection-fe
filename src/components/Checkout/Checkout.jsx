import axios from "axios";
import React, { useEffect } from "react";

const MidtransPayment = () => {
  const handlePayment = async () => {
    const res = await axios.post("http://127.0.0.1:8000/api/order/", {
      user_id: 1,
      quantity: 1,
      total: 20000,
      status: "Unpaid",
    });
    console.log(res.data.data);

    const snapToken = res.data.data; // Isi dengan snap token yang didapatkan dari server Anda

    window.snap.pay(snapToken);
  };

  return (
    <div>
      <button id="pay-button" onClick={handlePayment}>
        Pay!
      </button>
      <div id="snap-container"></div>
    </div>
  );
};

export default MidtransPayment;
