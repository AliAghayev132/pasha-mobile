import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setTokens, clearTokens } from '../auth/authSlice';
import { API_URL, BASE_URL } from "../../../constants/Api";

// Function to refresh the access token
export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await fetchBaseQuery({
    baseUrl: `${API_URL}`, // API URL'inizi .env dosyasından alıyoruz
    prepareHeaders: (headers, { getState }) => {
      const { accessToken } = getState().auth;
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken} type=access`);
      }
      return headers;
    },
  })(args, api, extraOptions);

  // Eğer 401 hatası alırsak, token'ı yenilemeye çalışıyoruz
  if (result?.error?.status === 401) {
    const refreshToken = api.getState().auth.refreshToken;
    if (refreshToken) {
      // Token'ı yenilemek için istek gönderiyoruz
      const refreshResponse = await fetch(`${API_URL}/auth/refresh-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${refreshToken} type=refreshToken`
        },
      });

      if (refreshResponse.ok) {
        const { accessToken: newAccessToken } = await refreshResponse.json();
        // Yeni accessToken'ı store'a dispatch ediyoruz
        api.dispatch(setTokens({ accessToken: newAccessToken, refreshToken }));

        // Orijinal isteği yeni token ile yeniden deniyoruz
        result = await fetchBaseQuery({
          baseUrl: `${BASE_URL}`, // API URL'inizi .env dosyasından alıyoruz
          prepareHeaders: headers => {
            headers.set('Authorization', `Bearer ${newAccessToken} type=access`);
            return headers;
          },
        })(args, api, extraOptions);
      } else {
        // Token yenileme başarısızsa, token'ları ve kullanıcıyı temizliyoruz
        // api.dispatch(clearTokens());
        // api.dispatch(clearUser());
        // İsteğe bağlı olarak kullanıcıyı giriş sayfasına yönlendirebilirsiniz
      }
    } else {
      // Refresh token mevcut değilse, token'ları temizliyoruz
      api.dispatch(clearTokens());
    }
  }

  return result;
};

export default baseQueryWithReauth;
