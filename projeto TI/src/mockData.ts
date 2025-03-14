import { Device } from './types';

export const mockDevices: Device[] = [
  {
    id: '1',
    name: 'Main Server',
    ipAddress: '192.168.1.100',
    macAddress: '00:1A:2B:3C:4D:5E',
    status: 'online',
    lastSeen: new Date().toISOString(),
    ports: [
      { number: 80, service: 'HTTP', status: 'open' },
      { number: 443, service: 'HTTPS', status: 'open' },
      { number: 22, service: 'SSH', status: 'filtered' }
    ],
    alerts: [
      {
        id: 'a1',
        timestamp: new Date().toISOString(),
        severity: 'low',
        message: 'Unusual port scan detected'
      }
    ]
  },
  {
    id: '2',
    name: 'Workstation',
    ipAddress: '192.168.1.101',
    macAddress: '00:1A:2B:3C:4D:5F',
    status: 'warning',
    lastSeen: new Date().toISOString(),
    ports: [
      { number: 3389, service: 'RDP', status: 'open' }
    ],
    alerts: [
      {
        id: 'a2',
        timestamp: new Date().toISOString(),
        severity: 'medium',
        message: 'Multiple failed login attempts'
      }
    ]
  },
  {
    id: '3',
    name: 'Network Printer',
    ipAddress: '192.168.1.102',
    macAddress: '00:1A:2B:3C:4D:60',
    status: 'offline',
    lastSeen: new Date(Date.now() - 3600000).toISOString(),
    ports: [
      { number: 631, service: 'IPP', status: 'closed' }
    ],
    alerts: [
      {
        id: 'a3',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        severity: 'high',
        message: 'Device unreachable'
      }
    ]
  }
];