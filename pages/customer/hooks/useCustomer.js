import { useState } from "react";
import config from "../../../utils/config";

export default function useCustomer(props){
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        async function fetchCustomer(){
            axios.defaults.withCredentials = true;
            const {data} = await axios.get(config.ajaxBase + "customer-account");
            setCustomer(data.customer);
        }

        fetchCustomer();

    }, [])


}