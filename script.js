function showBrowserInfo() {
  const data = `
    <h3>Navigator</h3>
    appName: ${navigator.appName}<br />
    product: ${navigator.product}<br />
    appVersion: ${navigator.appVersion}<br />
    userAgent: ${navigator.userAgent}<br />
    platform: ${navigator.platform}<br />
    language: ${navigator.language}<br />
    <h3>Window</h3>
    innerWidth: ${window.innerWidth}<br />
    innerHeight: ${window.innerHeight}<br />
    <h3>Screen</h3>
    width: ${screen.width}<br />
    height: ${screen.height}<br />
    availWidth: ${screen.availWidth}<br />
    availHeight: ${screen.availHeight}<br />
    colorDepth: ${screen.colorDepth}<br />
    pixelDepth: ${screen.pixelDepth}<br />
    <h3>Location</h3>
    href: ${location.href}<br />
    hostname: ${location.hostname}<br />
    pathname: ${location.pathname}<br />
    protocol: ${location.protocol}<br />
  `;
  document.getElementById('browserData').innerHTML = data;
}

function validatePassword() {
  const pwd = document.getElementById('password').value;
  const msg = document.getElementById('password-msg');
  const isValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{10,}$/.test(pwd);

  if (isValid) {
    msg.textContent = "Password is valid.";
    msg.style.color = "green";
    document.getElementById('password').style.borderColor = "green";
  } else {
    msg.textContent = "Must be 10+ chars with letter, digit, symbol.";
    msg.style.color = "red";
    document.getElementById('password').style.borderColor = "red";
  }
}
