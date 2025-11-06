import fs from 'fs';
import path from 'path';

export default async function globalTeardown() {
  const filePath = path.resolve('./src/__mocks__/response/e2e.json');
  fs.writeFileSync(filePath, JSON.stringify({ events: [] }, null, 2));
}
