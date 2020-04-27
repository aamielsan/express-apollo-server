import path from 'path';

export default {
  port:  +(process.env.PORT || 8000),
  typeorm: {
    entities: [
      path.join(__dirname, '../models/**/*.{ts,js}'),
    ],
    subscribers: [
      path.join(__dirname, '../subscribers/**/*.{ts,js}'),
    ],
    migrations: [
      path.join('../subscribers/**/*.{ts,js}'),
    ],
  }
}
