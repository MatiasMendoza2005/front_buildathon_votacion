import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-6">Panel de Administración</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h2 className="text-lg font-semibold mb-2">Comunidades</h2>
              <p className="text-3xl font-bold">24</p>
              <p className="text-sm text-gray-600 mt-2">Activas</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h2 className="text-lg font-semibold mb-2">Usuarios</h2>
              <p className="text-3xl font-bold">1,542</p>
              <p className="text-sm text-gray-600 mt-2">Registrados</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <h2 className="text-lg font-semibold mb-2">Propuestas</h2>
              <p className="text-3xl font-bold">18</p>
              <p className="text-sm text-gray-600 mt-2">Activas</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Actividad Reciente</h2>
            <ul className="space-y-4">
              <li className="flex items-center border-b pb-3">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                <div>
                  <p className="font-medium">Juan Pérez creó una nueva propuesta</p>
                  <p className="text-sm text-gray-600">Hace 2 horas</p>
                </div>
              </li>
              <li className="flex items-center border-b pb-3">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                <div>
                  <p className="font-medium">María Gómez aprobó una comunidad</p>
                  <p className="text-sm text-gray-600">Hace 5 horas</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                <div>
                  <p className="font-medium">Carlos Ruiz registró 12 nuevos usuarios</p>
                  <p className="text-sm text-gray-600">Ayer</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;