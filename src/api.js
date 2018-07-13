import XMLHttpRequest from 'xhr2';
import config from './config/config';

const api = {
  addStudent: function (input) {
    input.url = config.url + '/';
    input.method = 'POST';

    return request(input);
  },
  getAllStudents: function () {
    const input = { url: config.url + '/students', method: 'GET' };

    return request(input);
  },
  deleteStudent: function (id) {
    const input = {
      url: config.url + '/' + id,
      method: 'DELETE'
    };

    return request(input);
  }
};

function request(input) {
  return new Promise((resolve, reject) => {
    let json = {};
    const keys = Object.keys(input);
    keys.forEach(key => {
      if (key !== 'url' || key !== 'method') {
        json[key] = input[key];
      }
    });
    json = Object.keys(json).length === 0 ? null : JSON.stringify(json);
    const XHR = XMLHttpRequest;
    const xhr = new XHR();
    xhr.open(input.method, input.url, true);
    if (json !== null) {
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    }

    xhr.onload = function () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status !== 200 && this.status !== 201) {
        reject('api -> HTTP: ' + this.status);

        return;
      }
      if (input.method === 'DELETE') {
        resolve(this.responseText);
      } else {
        resolve(JSON.parse(this.responseText));
      }
    };
    xhr.send(json);
  });
}

export default api;
