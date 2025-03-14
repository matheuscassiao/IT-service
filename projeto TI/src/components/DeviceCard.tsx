import React from 'react';
import { Device } from '../types';
import { Shield, ShieldAlert, ShieldOff, Clock, Activity } from 'lucide-react';

interface DeviceCardProps {
  device: Device;
}

export function DeviceCard({ device }: DeviceCardProps) {
  const statusColor = {
    online: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    offline: 'bg-red-100 text-red-800'
  }[device.status];

  const StatusIcon = {
    online: Shield,
    warning: ShieldAlert,
    offline: ShieldOff
  }[device.status];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{device.name}</h3>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
          <StatusIcon className="w-4 h-4 mr-1" />
          {device.status.charAt(0).toUpperCase() + device.status.slice(1)}
        </span>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600">
        <p className="flex items-center">
          <span className="font-medium mr-2">IP:</span>
          {device.ipAddress}
        </p>
        <p className="flex items-center">
          <span className="font-medium mr-2">MAC:</span>
          {device.macAddress}
        </p>
        <p className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span className="font-medium mr-2">Last seen:</span>
          {new Date(device.lastSeen).toLocaleTimeString()}
        </p>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Open Ports</h4>
        <div className="flex flex-wrap gap-2">
          {device.ports.map(port => (
            <span
              key={port.number}
              className={`px-2 py-1 rounded text-xs font-medium
                ${port.status === 'open' ? 'bg-blue-100 text-blue-800' :
                  port.status === 'filtered' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'}`}
            >
              {port.service} ({port.number})
            </span>
          ))}
        </div>
      </div>

      {device.alerts.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Recent Alerts</h4>
          {device.alerts.map(alert => (
            <div
              key={alert.id}
              className={`mt-2 p-2 rounded text-sm
                ${alert.severity === 'high' ? 'bg-red-100 text-red-800' :
                  alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'}`}
            >
              <div className="flex items-center">
                <Activity className="w-4 h-4 mr-1" />
                {alert.message}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}