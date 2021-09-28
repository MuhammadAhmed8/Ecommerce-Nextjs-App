import CezerinClient from 'cezerin-client';

const apiClient = (token="<token>") => {
    return new CezerinClient({
        apiBaseUrl: 'http://localhost:3001/api/v1',
        ajaxBaseUrl: 'http://localhost:3001/ajax',
        apiToken: token
    });
}

export default apiClient;