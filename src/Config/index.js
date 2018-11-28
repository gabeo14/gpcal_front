const development = {
  API_URL: 'https://localhost:5001/api',
  CALLBACK_URL: 'http://localhost:3000'
}

const production = {
  API_URL: 'https://gp-cal.herokuapp.com/api',
  CALLBACK_URL: 'https://www.gpcal.pro'
}

const _env = {
  development,
  production
}

export default _env[process.env.NODE_ENV || 'development']
