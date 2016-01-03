import requests
import config


class ATTDigitalLife:
    base_url = 'https://systest.digitallife.att.com:443/penguin/api'
    devices = {}

    def __init__(self, user_id, password, app_key):
        self.user_id = user_id
        self.password = password
        self.app_key = app_key
        self.auth_token = None
        self.request_token = None
        self.gateway_guid = None


    def authenticate(self):
        data = {'userId': self.user_id,
                'password': self.password,
                'domain': 'DL',
                'appKey': self.app_key,
                'rememberMe': 'flase'}

        auth = self._post_request('/authtokens', data, authenticated=False)

        self.auth_token = auth['content']['authToken']
        self.request_token = auth['content']['requestToken']
        self.gateway_guid = auth['content']['gateways'][0]['id']
        
        self.get_devices()


    def get_devices(self):
        json = self._get_request('/devices')
        
        self.devices = {}
        for d in json['content']:
            self.devices[str(d['deviceType'])] = str(d['deviceGuid'])
        
        return self.devices

    
    def do_something(self, device_type, attribute, value):
        deviceGuid = self.devices[device_type]
        url = '/devices/{}/{}/{}'.format(deviceGuid, attribute, value)
        return self._post_request(url, {})

    
    def read_something(self, device_type, attribute=None):
        deviceGuid = self.devices[device_type]

        if attribute is not None:
            url = '/devices/{}/{}'.format(deviceGuid, attribute)
        else:
            url = '/devices/{}'.format(deviceGuid)

        return self._get_request(url)


    def _get_request(self, endpoint, authenticated=True):
        if not authenticated:
            return requests.get(self.base_url + endpoint).json()
        
        base_url = self.base_url + '/' + self.gateway_guid
        headers = {'Appkey': self.app_key,
                   'Authtoken': self.auth_token,
                   'Requesttoken': self.request_token}

        return requests.get(base_url + endpoint, headers=headers).json()


    def _post_request(self, endpoint, data, authenticated=True):
        if not authenticated:
            return requests.post(self.base_url + endpoint, data=data).json()

        base_url = self.base_url + '/' + self.gateway_guid
        headers = {'Appkey': self.app_key,
                   'Authtoken': self.auth_token,
                   'Requesttoken': self.request_token}

        return requests.post(base_url + endpoint, data=data, headers=headers).json()

if __name__ == '__main__':
    life = ATTDigitalLife(config.user_id, config.password, config.app_key)
    life.authenticate()
    print life.do_something('door-lock', 'lock', 'unlock')