import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Inventory Management Server is Running');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
