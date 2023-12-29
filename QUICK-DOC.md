# Quick Start

## Development Mode

**With Docker:**

1.  Run  `docker compose -f docker-compose-dev.yml up`

**Without Docker:**

1.  Fill in  `.env`  files:
    -   server:  `PORT`,  `DB_URL`
    -   client:  `BACK_END`
2.  Start client:  `npm install && npm run dev`
3.  Start server:  `npm install && npm run dev`

## Production Mode

**With Docker:**

1.  Run  `docker compose -f docker-compose.yml up`

**Without Docker:**

1.  Fill in  `.env`  files:
    -   server:  `PORT`,  `DB_URL`
    -   client:  `BACK_END`
2.  Build client:  `npm install && npm run build`
3.  Start client:  `npm start`
4.  Build server:  `npm install && npm run build`
5.  Start server:  `npm start`
