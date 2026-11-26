const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const cloudServices = [
  {
    serviceId: 'CS-101',
    serviceName: 'Amazon EC2',
    category: 'IaaS',
    pricingModel: 'Pay-as-you-go (Per Second/Hour)'
  },
  {
    serviceId: 'CS-102',
    serviceName: 'AWS Lambda',
    category: 'PaaS',
    pricingModel: 'Pay-per-request & Compute Duration'
  },
  {
    serviceId: 'CS-103',
    serviceName: 'Amazon S3',
    category: 'IaaS',
    pricingModel: 'Tiered Storage (Per GB/Month)'
  },
  {
    serviceId: 'CS-104',
    serviceName: 'Google Cloud Run',
    category: 'PaaS',
    pricingModel: 'Pay-per-use (CPU & Memory Allocated)'
  },
  {
    serviceId: 'CS-105',
    serviceName: 'Google Workspace',
    category: 'SaaS',
    pricingModel: 'Subscription (Per User/Month)'
  }
];

app.get('/api/services', (req, res) => {
  res.json(cloudServices);
});

app.get('/api/status', (req, res) => {
  res.json({
    status: 'Operational',
    developer: 'Joshua Kumar J',
    environment: 'Cloud PaaS'
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;