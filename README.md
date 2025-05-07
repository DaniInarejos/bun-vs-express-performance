# 🚀 bun-vs-express-performance

A simple benchmark comparing the performance of [Bun](https://bun.sh) and [Express (Node.js)](https://expressjs.com) in a basic HTTP server scenario.

The goal is to test real-world performance using tools like `autocannon`, measuring key metrics such as:
- Requests per second (RPS)
- Average latency
- CPU and memory usage

## 📁 Project Structure
```bash
bun-vs-express-performance/
├── bun-server/
│ └── index.ts # HTTP server using Bun's native API
├── express-server/
│ └── index.js # HTTP server using Express and Node.js
├── benchmarks/
│ └── results.md # Raw results and analysis
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/DaniInarejos/bun-vs-express-performance.git
cd bun-vs-express-performance
```
### 2. Run the Bun server
Make sure you have Bun installed.
```bash
cd bun-server
bun run index.ts
```
This starts the Bun server at http://localhost:3000.


### 3. Run the Express server
Make sure you have Node.js and npm installed.

```bash
cd express-server
npm install
node index.js
```
This starts the Express server at http://localhost:3001.

### 4. Benchmark with autocannon
Install autocannon:

```bash
Copiar
npm install -g autocannon
```
Run benchmarks:

```bash
# Bun
autocannon -d 10 -c 100 http://localhost:3000

# Express
autocannon -d 10 -c 100 http://localhost:3001
```
📊 Results
See benchmarks/results.md for detailed stats.

🧠 Conclusion
Bun shows promising performance gains for basic HTTP servers, especially in throughput and latency.
This benchmark offers a simple yet informative comparison to help developers evaluate switching to Bun.



