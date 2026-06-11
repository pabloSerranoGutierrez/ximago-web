const QRCode = require('qrcode');

QRCode.toFile('qr-ximago.png', 'https://ximago.web.app', {
  width: 600,
  margin: 2,
  color: {
    dark: '#FF6B00',
    light: '#0d0d0d'
  }
}, (err) => {
  if (err) console.error(err);
  else console.log('QR generado: qr-ximago.png');
});
