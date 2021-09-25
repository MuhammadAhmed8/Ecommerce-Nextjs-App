  
import React from "react";
import Head from 'next/head'

import PlacesAutocomplete from "react-places-autocomplete";

const GOOGLE_MAP_API = 'AIzaSyCUNOAdDU8VfNRjKaqnsTZNMVWtyglOUAo'

export default function AddressAutocomplete() {
  const [address, setAddress] = React.useState("");

  const handleSelect = async value => {
    setAddress(value);
  };

  return (
    <div>
      <Head>
        {/* <script src={"https://maps.googleapis.com/maps/api/js?key="+{GOOGLE_MAP_API}+"&libraries=places"}></script> */}
      </Head>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>

            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion,index)=> {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div key={index} { ...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}