import express from 'express';
import { PayoutGraphEngine } from '../core/pge/engine';

const router = express.Router();

router.post('/distribute', async (req, res) => {
  const { graph, origin, amount } = req.body;

  try {
    const engine = new PayoutGraphEngine(graph);
    const result = engine.distribute(origin, amount);

    res.json(result);
  } catch (err) {
    res.status(400).json({ error: String(err) });
  }
});

export default router;