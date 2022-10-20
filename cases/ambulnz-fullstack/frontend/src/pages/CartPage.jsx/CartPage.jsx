import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import { CartCard, CartPageContainer } from "./styled";
import { Button, CircularProgress, IconButton } from "@mui/material";
import PizzaCard from "../../components/PizzaCard/PizzaCard";

import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Header from "../../components/Header/Header";

const CartPage = () => {
  const { cart, createOrder, addToCart, removeFromCart, setCart } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {}, []);

  let itemNumber = 0;
  let total = 0;

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <>
      <Header title={"Cart"}></Header>
      <CartPageContainer>
        <CartCard>
          <div>
            <h3>Order:</h3>
            <Button
              color="secondary"
              onClick={clearCart}
              sx={{ color: "red", textTransform: "none" }}
            >
              Limpar
            </Button>
          </div>

          {cart.length > 0 ? (
            cart.map((item) => {
              itemNumber = itemNumber + 1;
              total = total + item.price * item.quantity;
              return (
                <div key={item.name}>
                  <p>
                    {itemNumber} - {item.name}
                  </p>
                  <div>
                    <p>
                      {item.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "USD",
                      })}{" "}
                    </p>
                    <div>
                      <IconButton
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      >
                        <RemoveRoundedIcon fontSize="small" />
                      </IconButton>
                      <p>{item.quantity}</p>
                      <IconButton
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        <AddRoundedIcon fontSize="small" />
                      </IconButton>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p> empty cart </p>
          )}
          <div>
            <h2>Total:</h2>
            <h2>
              {total.toLocaleString("pt-br", {
                style: "currency",
                currency: "USD",
              })}
            </h2>
          </div>
        </CartCard>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => createOrder(cart, navigate)}
          sx={{
            textTransform: "none",
          }}
        >
          Finalize Order
        </Button>
      </CartPageContainer>
    </>
  );
};

export default CartPage;
