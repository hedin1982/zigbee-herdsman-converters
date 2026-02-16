{
  "availability": [
    {
      "topic": "zigbee2mqtt/bridge/state",
      "value_template": "{{ value_json.state }}"
    }
  ],
  "default_entity_id": "sensor.0xa4c138f3747cfefe_linkquality",
  "device": {
    "hw_version": 0,
    "identifiers": [
      "zigbee2mqtt_0xa4c138f3747cfefe"
    ],
    "manufacturer": "Zbeacon",
    "model": "Automatically generated definition",
    "model_id": "TS0721",
    "name": "0xa4c138f3747cfefe",
    "sw_version": "0122052017",
    "via_device": "zigbee2mqtt_bridge_0x94b216fffea0c123"
  },
  "enabled_by_default": false,
  "entity_category": "diagnostic",
  "icon": "mdi:signal",
  "name": "Linkquality",
  "object_id": "0xa4c138f3747cfefe_linkquality",
  "origin": {
    "name": "Zigbee2MQTT",
    "sw": "2.8.0",
    "url": "https://www.zigbee2mqtt.io"
  },
  "state_class": "measurement",
  "state_topic": "zigbee2mqtt/0xa4c138f3747cfefe",
  "unique_id": "0xa4c138f3747cfefe_linkquality_zigbee2mqtt",
  "unit_of_measurement": "lqi",
  "value_template": "{{ value_json.linkquality }}"
}
