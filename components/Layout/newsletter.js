import React from "react";

import MailchimpSubscribe from "react-mailchimp-subscribe";


// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <br />
      <input
        style={{
                fontSize: "1rem", 
                padding: '8px', 
                width: '60%', 
                border: '1px solid #333',
                margin: '2px 5px'
             }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <button 
            style={{ 
                    fontSize: "1rem", 
                    padding: '8px 20px', 
                    backgroundColor: '#fff',
                    border: '1px solid #ccc' 
                }} 
            
            onClick={submit}>
        Subscribe
      </button>
    </div>
  );
};

export default function Newsletter(){
    const MAILCHIMP_URL = 'https://gmail.us5.list-manage.com/subscribe/post?u=542cbd7b05e62340b6bd1d1d1&amp;id=0c4f7c65eb'

    return (
        <div>
        <MailchimpSubscribe
          url={MAILCHIMP_URL}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    )
}