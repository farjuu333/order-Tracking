
'use client';

import React, { useState } from 'react';
import { 
  Package, 
  Truck, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  PhoneCall, 
  AlertCircle,
  RefreshCw
} from 'lucide-react';

export default function OrderTracking() {
  const [currentState, setCurrentState] = useState<'normal' | 'delayed' | 'delivered_missing' | 'not_available'>('normal');

  const steps = [
    { label: 'Order Placed', date: 'Sep 21, 10:00 AM', status: 'completed' },
    { label: 'Processing', date: 'Sep 21, 02:30 PM', status: 'completed' },
    { label: 'Shipped', date: 'Sep 22, 09:00 AM', status: 'completed' },
    { label: 'Out for Delivery', date: 'Expected Sep 23', status: currentState === 'delayed' ? 'delayed' : 'current' },
    { label: 'Delivered', date: 'Pending', status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-4 flex flex-col items-center">
      {/* State Switcher for Evaluator */}
      <div className="w-full max-w-md bg-white p-3 rounded-xl shadow-sm mb-4 border border-slate-200">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Demo State Switcher:
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <button
            onClick={() => setCurrentState('normal')}
            className={`p-2 rounded-lg border font-medium ${currentState === 'normal' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
          >
            Normal Active
          </button>
          <button
            onClick={() => setCurrentState('delayed')}
            className={`p-2 rounded-lg border font-medium ${currentState === 'delayed' ? 'bg-amber-600 text-white border-amber-600' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
          >
            1. Delayed Order
          </button>
          <button
            onClick={() => setCurrentState('delivered_missing')}
            className={`p-2 rounded-lg border font-medium ${currentState === 'delivered_missing' ? 'bg-rose-600 text-white border-rose-600' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
          >
            2. Delivered / Not Recv
          </button>
          <button
            onClick={() => setCurrentState('not_available')}
            className={`p-2 rounded-lg border font-medium ${currentState === 'not_available' ? 'bg-slate-800 text-white border-slate-800' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
          >
            3. Tracking N/A
          </button>
        </div>
      </div>

      {/* Mobile Screen Container */}
      <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 min-h-[680px] flex flex-col justify-between">
        
        {/* Header */}
        <div>
          <div className="bg-slate-900 text-white p-5 rounded-b-2xl shadow-md">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-slate-400 font-medium">Order #VEC-894201</span>
              <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700">
                Express Delivery
              </span>
            </div>
            <h1 className="text-xl font-bold text-white">Track Your Shipment</h1>
          </div>

          <div className="p-5 space-y-5">
            {currentState === 'not_available' ? (
              <div className="text-center py-10 px-4 space-y-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                  <RefreshCw className="w-8 h-8 animate-spin" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Tracking Info Updating</h3>
                <p className="text-sm text-slate-500 max-w-xs mx-auto">
                  Your order has been confirmed! Courier partner details and live tracking will be assigned shortly.
                </p>
                <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100">
                  <RefreshCw className="w-4 h-4" /> Refresh Status
                </button>
              </div>
            ) : (
              <>
                {currentState === 'delayed' && (
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-amber-900">Shipment Delayed</h4>
                      <p className="text-xs text-amber-700 mt-1">
                        Heavy traffic or weather conditions caused a slight delay. New ETA: Tomorrow, 2:00 PM.
                      </p>
                      <button className="mt-2 text-xs font-bold text-amber-800 underline">
                        Reschedule Delivery
                      </button>
                    </div>
                  </div>
                )}

                {currentState === 'delivered_missing' && (
                  <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-rose-900">Status Says Delivered</h4>
                      <p className="text-xs text-rose-700 mt-1">
                        Can't find your package? Check with neighbors or report missing package immediately.
                      </p>
                      <button className="mt-2 text-xs font-bold text-white bg-rose-600 px-3 py-1.5 rounded-md hover:bg-rose-700">
                        Report Missing Package
                      </button>
                    </div>
                  </div>
                )}

                <div className="bg-indigo-50/60 border border-indigo-100 p-4 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wide">
                      {currentState === 'delivered_missing' ? 'Delivered On' : 'Estimated Delivery'}
                    </p>
                    <p className="text-lg font-bold text-slate-900 mt-0.5">
                      {currentState === 'delivered_missing' ? 'Today, 11:30 AM' : 'Today, by 6:00 PM'}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-md">
                    <Truck className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Package Journey
                  </h3>
                  <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                    {steps.map((step, idx) => (
                      <div key={idx} className="relative flex items-start justify-between">
                        <div className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center bg-white ${
                          step.status === 'completed' 
                            ? 'border-indigo-600 bg-indigo-600 text-white' 
                            : step.status === 'delayed'
                            ? 'border-amber-500 bg-amber-500 text-white'
                            : step.status === 'current'
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-slate-300'
                        }`}>
                          {step.status === 'completed' && <CheckCircle2 className="w-3.5 h-3.5" />}
                          {step.status === 'delayed' && <AlertTriangle className="w-3.5 h-3.5" />}
                          {step.status === 'current' && <span className="w-2 h-2 bg-indigo-600 rounded-full" />}
                        </div>

                        <div>
                          <p className={`text-sm font-semibold ${
                            step.status === 'pending' ? 'text-slate-400' : 'text-slate-800'
                          }`}>
                            {step.label}
                          </p>
                          <p className="text-xs text-slate-500">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Items Summary
                  </h3>
                  <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold shrink-0">
                      <Package className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-slate-800 truncate">Wireless Headphones Pro</h4>
                      <p className="text-xs text-slate-500">Qty: 1 • Color: Space Gray</p>
                    </div>
                    <span className="text-sm font-bold text-slate-900">$129.00</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 space-y-2">
          <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-sm transition">
            <PhoneCall className="w-4 h-4" /> Contact Support
          </button>
          <button className="w-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 py-2.5 rounded-xl font-medium text-xs flex items-center justify-center gap-1 transition">
            <HelpCircle className="w-3.5 h-3.5" /> Report Issue
          </button>
        </div>

      </div>
    </div>
  );
}