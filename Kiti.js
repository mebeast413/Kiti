export default {
  async fetch(request) {
    const url = new URL(request.url);
    const targetUrl = 'https://generativelanguage.googleapis.com' + url.pathname + url.search;

    const modifiedRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });

    const response = await fetch(modifiedRequest);
    const modifiedResponse = new Response(response.body, response);
    
    
    modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');
    return modifiedResponse;
  }
}
