import html from './website.html';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(html, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
        status: 200
      });
    }
    
    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      status: 200
    });
  }
};
