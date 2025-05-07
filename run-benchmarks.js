const { spawn, execSync } = require('child_process');
const path = require('path');

console.log('⚡ Starting Bun server...');
const bunServer = spawn('bun', ['run', path.resolve(__dirname, './bun-server/index.ts')], {
    stdio: 'inherit',
  });

console.log('⚡ Starting Express server...');
const expressServer = spawn('node', [path.resolve(__dirname, './express-server/index.js')], {
  stdio: 'inherit',
});

setTimeout(() => {
  console.log('\n🔁 Running benchmarks...\n');

  try {
    execSync('autocannon -d 10 -c 100 http://localhost:3000', { stdio: 'inherit' });
    execSync('autocannon -d 10 -c 100 http://localhost:3001', { stdio: 'inherit' });
  } catch (err) {
    console.error('Error running benchmarks:', err);
  }

  console.log('\n🛑 Stopping servers...\n');
  bunServer.kill();
  expressServer.kill();
}, 2000);
