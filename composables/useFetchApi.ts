export default async <T>(apiUrl: string, opts?: {
  method: "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "get" | "head" | "patch" | "post" | "put" | "delete" | "connect" | "options" | "trace" , 
  params?: URLSearchParams | undefined, 
  body?: BodyInit | Record<string, any> | null | undefined
}) => {
  const config = useRuntimeConfig();
  return useFetch(apiUrl, {
    baseURL: config.public.BASE_URL,
    method: opts?.method,
    params: opts?.params,
    body: opts?.body,
    //  initialCache: false,
    onRequest({ request, options }) {
      options.headers = options.headers || {};
      console.log(`[onRequest] : API 요청`);
      console.log(`[onRequest] : ${request}`);
    },
    onRequestError({ request, options, error }) {
      console.log(`[onRequestError] : req 오류 발생`);
      console.log(error);
    },
    onResponse({ request, response, options }) {
      console.log(`[onResponse] : res 완료`);
      console.log(`[onResponse] : ${response._data}`);
    },
    onResponseError({ request, response, options }) {
      console.log(`[onResponseError] : res 오류 발생`);
      console.log(`[onResponseError] : ${response.status}`);
    },
  }); 
}