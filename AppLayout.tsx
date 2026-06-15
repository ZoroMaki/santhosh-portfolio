import { Outlet } from 'react-router-dom';
import { ErrorProvider } from './ErrorContext';

export function AppLayout() {
  return (
    <ErrorProvider>
      <div className="ui-viewport">
        <div className="ui-viewport-body">
          <Outlet />
        </div>
        <div className="ui-viewport-footer" />
      </div>
    </ErrorProvider>
  );
}
