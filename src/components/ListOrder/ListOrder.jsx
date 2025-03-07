import React from "react";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoBasket } from "react-icons/io5";

import "./ListOrder.css";
import { formatDate } from "../../../utils/formatDate";

const ListOrder = ({ orders }) => {
  return (
    <>
      {orders?.map((order) => (
        <div key={order.id} className="order__container">
          <h1 className="order__id">#{order.id}</h1>
          <div className="order__separetor" />
          <div className="order__info">
            <div className="order_info__time">
              <MdOutlineAccessTime size={24} />
              <p>{formatDate(order.date)}</p>
            </div>
            <div className="order_info__location">
              <IoBasket size={24} />
              <p>{order.zone.name}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListOrder;
