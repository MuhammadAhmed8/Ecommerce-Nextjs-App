import CezerinClient from 'cezerin-client';

const apiClient = (token="<token>") => {
    return new CezerinClient({
        apiBaseUrl: 'http://165.22.68.190/api/v1',
        ajaxBaseUrl: 'http://165.22.68.190/ajax',
        apiToken: token
    });
}

export default apiClient;