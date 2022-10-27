import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Payment from "../Pages/Shared/Others/Payment/Payment";

const PUBLIC_KEY =
  "pk_test_51LxTnqIl1BLL3CgoG8Rg6fNQbwQtp2PGFDALOpfup2Eq4lq5KRDorZipjWns9rnsLDXFm5aXn60xwsJfdAtdL7iS00iJzezjYv";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <Payment />
    </Elements>
  );
};

export default StripeContainer;
