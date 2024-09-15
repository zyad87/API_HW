const resCodes = {
    100: 'Continue',
    101: 'Switching Protocols',
    102: 'Processing',
    103: 'Early Hints',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    206: 'Partial Content',
    207: 'Multi-Status',
    208: 'Already Reported',
    214: 'Transformation Applied',
    226: 'IM Used',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    418: "I'm a teapot",
    420: 'Enhance Your Calm',
    421: 'Misdirected Request',
    422: 'Unprocessable Entity',
    423: 'Locked',
    424: 'Failed Dependency',
    425: 'Too Early',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    444: 'Connection Closed Without Response',
    450: 'Blocked by Windows Parental Controls',
    451: 'Unavailable For Legal Reasons',
    497: 'HTTP Request Sent to HTTPS Port',
    498: 'Token Expired/Invalid',
    499: 'Client Closed Request',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage',
    508: 'Loop Detected',
    509: 'Bandwidth Limit Exceeded',
    510: 'Not Extended',
    511: 'Network Authentication Required',
    521: 'Web Server Is Down',
    522: 'Connection Timed Out',
    523: 'Origin Is Unreachable',
    525: 'SSL Handshake Failed',
    530: 'Site is Frozen',
    599: 'Network Connect Timeout Error',
  };
  let url = 'https://http.cat/';
  
  let flexContainer = document.getElementById('flex-container');
  async function fetchCats() {
    for (element in resCodes) {
  
      let linkMover = document.createElement('a');
      linkMover.href = url + 'status/' + element;
      linkMover.target = '_blank';
      let card = document.createElement('div');
      card.classList.add('card');
      let imgStatus = document.createElement('img');
      imgStatus.classList.add('imgStatus');
      let content = document.createElement('div');
  
      content.classList.add('content');
      let codeStatus = document.createElement('h1');
      codeStatus.classList.add('codeStatus');
      let typeStatus = document.createElement('p');
      typeStatus.classList.add('typeStatus');
      imgStatus.src = url + element;
      codeStatus.innerText = element;
      typeStatus.innerText = resCodes[element];
      content.appendChild(codeStatus);
      content.appendChild(typeStatus);
      card.appendChild(imgStatus);
      card.appendChild(content);
      linkMover.appendChild(card);
      flexContainer.appendChild(linkMover);
    }
  }
  fetchCats();