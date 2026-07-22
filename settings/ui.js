FullScreenMario.FullScreenMario.settings.ui = {
    "globalName": "FSM",
    "styleReset": true,
    "sizeFull": true,
    "schemas": [
        {
            "name": "Options",
            "generator": "OptionsTable",
            "options": [
                {
                    "title": "Mute",
                    "type": "Boolean",
                    "storeLocally": true,
                    "source": function () {
                        return FSM.AudioPlayer.getMuted();
                    },
                    "enable": function () {
                        FSM.AudioPlayer.setMuted(false);
                    },
                    "disable": function () {
                        FSM.AudioPlayer.setMuted(true);
                    }
                },
                {
                    "title": "Sound Volume",
                    "type": "Number",
                    "storeLocally": true,
                    "minimum": 0,
                    "maximum": 1,
                    "step": 0.05,
                    "source": function () {
                        return FSM.AudioPlayer.getVolume();
                    },
                    "update": function (value) {
                        FSM.AudioPlayer.setVolume(value);
                    }
                }
            ]
        },
        {
            "name": "Controls",
            "generator": "KeysTable",
            "table": [
                ["Left", "A or Left Arrow"],
                ["Right", "D or Right Arrow"],
                ["Sprint", "Shift or Control"],
                ["Jump", "W or Up Arrow or Space"],
                ["Crouch", "S or Down Arrow"],
                ["Pause", "P or Escape"]
            ]
        }
    ]
};
