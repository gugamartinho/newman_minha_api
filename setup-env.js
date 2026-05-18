const fs = require('fs');
const path = require('path');
require('dotenv').config();

const envFile = path.join(__dirname, 'environments/production_env.json');
const env = JSON.parse(fs.readFileSync(envFile, 'utf-8'));

// Replace placeholder values with environment variables
env.values = env.values.map(variable => {
  if (variable.value && variable.value.startsWith('{{') && variable.value.endsWith('}}')) {
    const envKey = variable.value.slice(2, -2);
    const envValue = process.env[envKey] || process.env[envKey.toLowerCase()] || process.env[envKey.toUpperCase()];
    if (envValue) {
      variable.value = envValue;
    }
  }
  return variable;
});

fs.writeFileSync(envFile, JSON.stringify(env, null, 2));
console.log('Environment variables loaded successfully');
