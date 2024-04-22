const axios = require('axios');

const api = axios.create({
  baseURL: `${process.env.VUE_APP_TELEGRAM_API}${process.env.VUE_APP_TELEGRAM_BOT}:${process.env.VUE_APP_TELEGRAM_TOKEN}`
});

export default api;