import config
import json

from attdigitallife import ATTDigitalLife


def data_handler(raw_data):
    request = raw_data['request']

    if request['type'] == 'IntentRequest':
        response = {'version': 1.0,
                    'response': intent_handler(request)}

        return json.dumps(response, indent=2, sort_keys=True)

    else:
        print "WARN: Unhandled request type is {}".format(request['type'])


def intent_handler(request):
    request_name = request['intent']['name']

    if request_name == 'LockDoorIntent':
        return lock_door_intent(request)
    elif request_name == 'UnlockDoorIntent':
        return unlock_door_intent(request)
    elif request_name == 'BedTimeIntent':
        return bed_time_intent(request)
    elif request_name == 'CoolDownIntent':
        return cool_down_intent(request)
    elif request_name == 'WarmUpIntent':
        return warm_up_intent(request)
    elif request_name == 'SetTemperatureIntent':
        pass


def _get_life_object():
    life = ATTDigitalLife(config.user_id, config.password, config.app_key)
    life.authenticate()

    return life


def lock_door_intent(request):
    output_speech = 'Locking the door'
    output_type = 'PlainText'

    response = {'outputSpeech': {'type': output_type, 'text': output_speech}, 'shouldEndSession': True}

    # Do the things
    life = _get_life_object()
    life.do_something('door-lock', 'lock', 'lock')

    return response


def unlock_door_intent(request):
    output_speech = 'Unlocking the door'
    output_type = 'PlainText'

    response = {'outputSpeech': {'type': output_type, 'text': output_speech}, 'shouldEndSession': True}

    # Do the things
    life = _get_life_object()
    life.do_something('contact-sensor', 'arm-state', 'disarmed')
    life.do_something('door-lock', 'lock', 'unlock')

    return response


def bed_time_intent(request):
    output_speech = 'I am locking the door, and setting the temperature to 65 degrees. Have a good night!'
    output_type = 'PlainText'

    response = {'outputSpeech': {'type': output_type, 'text': output_speech}, 'shouldEndSession': True}

    # Do the things
    life = _get_life_object()
    life.do_something('door-lock', 'lock', 'lock')
    life.do_something('contact-sensor', 'arm-state', 'armed')
    life.do_something('thermostat', 'cool-setpoint', str(ATTDigitalLife.f_to_weird_units(65)))
    life.do_something('thermostat', 'fan-mode', 'on')

    return response


def cool_down_intent(request):
    output_speech = 'Setting the thermostat to cool, although it will never be as cool as you.'
    output_type = 'PlainText'

    response = {'outputSpeech': {'type': output_type, 'text': output_speech}, 'shouldEndSession': True}

    # Do the things
    life = _get_life_object()
    life.do_something('thermostat', 'thermostat-mode', 'cool')
    life.do_something('thermostat', 'fan-mode', 'on-high')

    return response


def warm_up_intent(request):
    output_speech = 'Setting the thermostat to heat.'
    output_type = 'PlainText'

    response = {'outputSpeech': {'type': output_type, 'text': output_speech}, 'shouldEndSession': True}

    # Do the things
    life = _get_life_object()
    life.do_something('thermostat', 'thermostat-mode', 'heat')
    life.do_something('thermostat', 'fan-mode', 'on-high')

    return response


def set_temperature_intent(request):
    temperature = request['intent']['slots']['temperature']['value']

    output_speech = 'Setting the thermostat to {} degrees'.format(temperature)
    output_type = 'PlainText'

    response = {'outputSpeech': {'type': output_type, 'text': output_speech}, 'shouldEndSession': True}

    # Do the things
    life = _get_life_object()
    life.do_something('thermostat', 'cool-setpoint', str(ATTDigitalLife.f_to_weird_units(int(temperature))))
    life.do_something('thermostat', 'heat-setpoint', str(ATTDigitalLife.f_to_weird_units(int(temperature))))
    life.do_something('thermostat', 'fan-mode', 'on-high')

    return response