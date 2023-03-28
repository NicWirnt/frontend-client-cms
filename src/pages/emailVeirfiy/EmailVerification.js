import React, { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { postEmailVerificaiton } from "../../helper/axios";

export const EmailVerification = () => {
  const [queryParams] = useSearchParams();
  const [isPending, setIsPending] = useState();
  const [response, setResponse] = useState({});

  useEffect(() => {
    const obj = {
      emailValidationCode: queryParams.get("c"),
      email: queryParams.get("e"),
    };
    console.log(obj);
    (async () => {
      const response = await postEmailVerificaiton(obj);
      setResponse(response);
      setIsPending(false);
      console.log(response);
    })();
  }, []);

  return (
    <div className="container d-flex justify-content-center">
      <div className="p-5 m-5 bg-secondary rounded">
        <h2>Email Verification Page</h2>
        <hr />
        {isPending && (
          <>
            <Spinner variant="primary" animation="border" />
          </>
        )}

        {response.message && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}
        {response.status === "success" ? (
          <Link to="/login">Login Now</Link>
        ) : (
          <Link to="/">Back to homepage</Link>
        )}
      </div>
    </div>
  );
};
