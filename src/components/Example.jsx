
import { NotificationContainer, NotificationManager } from 'react-notifications';

const Example = () => {
  const createNotification = (type) => {
    switch (type) {
      case 'info':
        NotificationManager.info('Info message');
        break;
      case 'success':
        NotificationManager.success('Success message', 'Title here');
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('Callback executed!');
        });
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button
        className="btn btn-info"
        style={buttonStyles}
        onClick={() => createNotification('info')}
      >
        Info
      </button>
      <hr />
      <button
        className="btn btn-success"
        style={buttonStyles}
        onClick={() => createNotification('success')}
      >
        Success
      </button>
      <hr />
      <button
        className="btn btn-warning"
        style={buttonStyles}
        onClick={() => createNotification('warning')}
      >
        Warning
      </button>
      <hr />
      <button
        className="btn btn-danger"
        style={buttonStyles}
        onClick={() => createNotification('error')}
      >
        Error
      </button>

      <NotificationContainer />
    </div>
  );
};

// Optional inline styles for the buttons
const buttonStyles = {
  padding: '10px 20px',
  margin: '10px 0',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default Example;
