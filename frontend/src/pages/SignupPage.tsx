import { useState, useEffect } from "react";
import SignupForm from "../components/SignupForm";
import axios from "axios";
import { Quote } from "../interfaces/BlogInterface";

function SignupPage() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    axios
      .get("https://api.api-ninjas.com/v1/quotes?category=happiness", {
        headers: { "X-Api-Key": "bk1Ml5VFLxoY1k+F5AzfWw==91SH049yKWwiqzNb" },
      })
      .then((response) => {
        setQuote(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
      });
  }, []);

  return (
    <div className="w-full h-screen grid grid-cols-2">
      <div>
        <SignupForm />
      </div>
      <div className="bg-gray-200 flex flex-col justify-center px-24 ">
        {quote ? (
          <>
            <h1 className="font-bold text-3xl">"{quote.quote}"</h1>
            <h2 className="font-semibold py-4">-{quote.author}</h2>
          </>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default SignupPage;
