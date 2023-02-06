export default class HttpClient {
    defaultParams = {
      protocol: "http",
      port: "80",
      host: "",
      query: {}
    };
  
    constructor(defaultParams = {}) {
      Object.assign(this.defaultParams, defaultParams);
  
      if (!this.defaultParams.host) {
        throw Error('The param "host" is not defined.');
      }
    }
  
    getAddress(url = "/", query = {}) {
      query = Object.assign({}, this.defaultParams.query, query);
  
      const { protocol, host, port } = this.defaultParams;
      let address = `${protocol}://${host}:${port}${url}`;
  
      let i = 0;
      for (const [key, value] of Object.entries(query)) {
        if (i === 0) {
          address += `?`;
        } else {
          address += `&`;
        }
        address += `${key}=${value}`;
        i++;
      }
  
      return address;
    }
  
    async get(url, query = {}) {
      const address = this.getAddress(url, query);
      const response = await fetch(address, { method: "GET" });
      return await response.json();
    }

    async patch(url, data = {}) {
      const address = this.getAddress(url);
  
      const response = await fetch(address, {
        method: "PATCH",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      console.log('response', response);
      return await response.json();
    }
  }
  