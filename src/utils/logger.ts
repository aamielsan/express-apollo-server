import winston from 'winston';

const { format, transports } = winston;

const logger = winston.createLogger({
  level: 'info',
  format: format.simple(),
  transports: [
    new transports.File({
      format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.json(),
      ),
      filename: 'logs/error.log', level: 'error'
    }),
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
        format.timestamp(),
        format.errors({ stack: false }),
        format.prettyPrint()
      ),
    }),
  )
}

export default logger;
