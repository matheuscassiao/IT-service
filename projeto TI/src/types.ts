export interface Device {
  id: string;
  name: string;
  ipAddress: string;
  macAddress: string;
  status: 'online' | 'offline' | 'warning';
  lastSeen: string;
  ports: Port[];
  alerts: Alert[];
}

export interface Port {
  number: number;
  service: string;
  status: 'open' | 'closed' | 'filtered';
}

export interface Alert {
  id: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
  message: string;
}