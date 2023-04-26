export default async <T>(apiUrl: string, opts?: {
  method: "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "get" | "head" | "patch" | "post" | "put" | "delete" | "connect" | "options" | "trace" ,
  params?: URLSearchParams | undefined,
  body?: BodyInit | Record<string, any> | null | undefined
}) => {
  const config = useRuntimeConfig();
  return useFetch<T>(apiUrl, {
    baseURL: config.public.baseUrl,
    method: opts?.method,
    params: opts?.params,
    body: opts?.body,
    //  initialCache: false,
    onRequest({ request, options }) {
      options.headers = options.headers || {};
      console.log(`[useApiReq] : API 요청`);
      console.log(`[useApiReq] : ${request}`);
    },
    onRequestError({ request, options, error }) {
      console.log(`[useApiReq] : req 오류 발생`);
      console.log(error);
    },
    onResponse({ request, response, options }) {
      console.log(`[useApiReq] : res 완료`);
      console.log(`[useApiReq] : ${response.status}`);
    },
    onResponseError({ request, response, options }) {
      console.log(`[useApiReq] : res 오류 발생`);
      console.log(`[useApiReq] : ${response.status}`);
    },
  });
}
