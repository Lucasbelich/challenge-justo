import React, { useEffect } from "react";
import ListOrder from "../../components/ListOrder/ListOrder";

import "./Orders.css";
import { useGetOrderQuery } from "../../redux/api/apiQuery";

const OrdersPage = () => {
  const {
    data: orderData,
    isLoading: isLoadingOrder,
    isError: isErrorOrder,
    error: errorOrder,
    refetch: refetchOrder,
  } = useGetOrderQuery();

  useEffect(() => {
    if (errorOrder === 532) {
      refetchOrder();
    }
  }, [errorOrder]);
  
  return (
    <div className="orders__container">
      <h1 className="order__title">Ordenes pendientes</h1>
      {isLoadingOrder && <p>Cargando...</p>}
      {isErrorOrder && <p>Error al cargar las ordenes: {errorOrder}</p>}
      {!isErrorOrder && <ListOrder orders={orderData?.data} />}
    </div>
  );
};

export default OrdersPage;
