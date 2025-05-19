window.__eppoConfig = {
    "flags": {
        "php-lohp-variations": {
            "enabled": true,
            "allocations": {
                "allocation-27980": {
                    "percentExposure": 1,
                    "exposures": [{
                        "percentExposure": 1,
                        "startsAt": "2025-05-01T21:28:51.909Z",
                        "endsAt": "9999-12-31T00:00:00.000Z"
                    }],
                    "variations": [{
                        "name": "control",
                        "variationKey": "variation-327635",
                        "value": "control",
                        "typedValue": "control",
                        "algorithmType": "CONSTANT",
                        "shardRange": {
                            "start": 0,
                            "end": 10000
                        }
                    }],
                    "statusQuoVariationKey": "variation-327635",
                    "shippedVariationKey": null,
                    "holdouts": []
                },
                "allocation-29458": {
                    "percentExposure": 1,
                    "exposures": [{
                        "percentExposure": 1,
                        "startsAt": "2025-05-09T15:21:25.786Z",
                        "endsAt": "9999-12-31T00:00:00.000Z"
                    }],
                    "variations": [{
                        "name": "control",
                        "variationKey": "variation-327635",
                        "value": "control",
                        "typedValue": "control",
                        "algorithmType": "CONSTANT",
                        "shardRange": {
                            "start": 0,
                            "end": 1666
                        }
                    }, {
                        "name": "control-2",
                        "variationKey": "variation-329513",
                        "value": "control-2",
                        "typedValue": "control-2",
                        "algorithmType": "CONSTANT",
                        "shardRange": {
                            "start": 1666,
                            "end": 3333
                        }
                    }, {
                        "name": "variation-1",
                        "variationKey": "variation-327636",
                        "value": "variation-1",
                        "typedValue": "variation-1",
                        "algorithmType": "CONSTANT",
                        "shardRange": {
                            "start": 3333,
                            "end": 6666
                        }
                    }, {
                        "name": "variation-2",
                        "variationKey": "variation-327637",
                        "value": "variation-2",
                        "typedValue": "variation-2",
                        "algorithmType": "CONSTANT",
                        "shardRange": {
                            "start": 6666,
                            "end": 10000
                        }
                    }],
                    "statusQuoVariationKey": "variation-327635",
                    "shippedVariationKey": null,
                    "holdouts": []
                }
            },
            "rules": [{
                "allocationKey": "allocation-29458",
                "conditions": [{
                    "value": ["en"],
                    "attribute": "language",
                    "operator": "ONE_OF"
                }]
            }, {
                "allocationKey": "allocation-27980",
                "conditions": []
            }],
            "subjectShards": 10000,
            "overrides": {},
            "typedOverrides": {},
            "teamId": 1052,
            "entityId": 261
        }
    }
};